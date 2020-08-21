const apiKey = 'XWSwH86wbfbXeQw9O1EJfzVbM1NDeDRkYfik1ynv354sSmAICCzqYinPYg-APY7KXm47wwFCHzndVvULqZIp7j8Y6zqoR6JBqOS8yk0qzZIGFFY0clKa_0l_Azg9X3Yx';

export let Yelp = {};

Yelp.search = (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: { Authorization: `Bearer ${apiKey}` }
    })
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                })
            }
        })

}


