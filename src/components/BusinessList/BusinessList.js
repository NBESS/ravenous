import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {
    render() {
        return (
            <div className="BusinessList">
                Yelp.search()
                {this.props.businesses.map((business) => {
                    return <Business key={business.id} business={business} />
                })
                }
            </div>
        )
    }
}

export default BusinessList;