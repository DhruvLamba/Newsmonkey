import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, img, newsurl } = this.props;
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={img} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsurl} className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
