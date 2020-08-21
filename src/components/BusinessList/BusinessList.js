import React, { Component } from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {
    render() {
        const { businesses } = this.props;
        return (
            <div className="BusinessList">
                {businesses.map((business) => {
                    return <Business key={business.id} business={business} src={business.imageSrc} />
                })
                }
            </div>
        )
    }
}

export default BusinessList;