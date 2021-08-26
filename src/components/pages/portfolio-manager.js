import React, { Component } from 'react';
import axios from 'axios';

import PortfolioSidebarList from '../Portfolio/portfolio-sidebar-list';
import PortfolioForm from '../Portfolio/portfolio-form';

export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this)
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        this.setState({
          portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        });
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSubmissionError error", error)
    }

    getPortfolioItems() {
        axios.get("https://courtneymorris.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", {
            withCredentials: true
        }).then(response => {
            this.setState({
                portfolioItems: [...response.data.portfolio_items]
            });
        }).catch(error => {
            console.log("Error in getPortfolioItems: ", error)
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm
                        handleSuccessfulFormSubmission={this.handleFormSubmissionError}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                    />
                </div>

                <div className="right-column">
                    <PortfolioSidebarList
                    data={this.state.portfolioItems}
                    />
                </div>
            </div>
        )
    }
}