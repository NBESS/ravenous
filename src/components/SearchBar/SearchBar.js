import React, { Component } from 'react';
import './SearchBar.css';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            location: '',
            sort_by: 'best_match',
        };

        this.sortByOptions = {
            'BestMatch': 'best_match',
            'HighestRated': 'rating',
            'MostReviewed': 'review_count',
        }

        this.handleTermChange =
            this.handleTermChange.bind(this);

        this.handleLocationChange =
            this.handleLocationChange.bind(this);

        this.handleSearch =
            this.handleSearch.bind(this);
    }

    getSortByClass(sortByOption) {
        if (this.state.sort_by === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({ sort_by: sortByOption })
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value })
    }

    handleLocationChange(e) {
        this.setState({ location: e.target.value })
    }

    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sort_by)
        e.preventDefault();

    }

    renderSortByOptions() {

        return Object.keys(this.sortByOptions).map(option => {
            let sortByOptionValue = this.sortByOptions[option]
            return (
                <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{option}
                </li>
            )
        }
        )
    }


    render() {

        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;