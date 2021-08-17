import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Item One"}, 
                {title: "Item Two"},
                {title: "Item Three"}, 
                {title: "Item Four"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind;
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Another Title"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}


//Class component allow you to hook into more logic like hook and lifecycle hooks
//Functional components are "dumb" components