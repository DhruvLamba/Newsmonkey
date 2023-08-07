import React, { Component } from "react";

export default class Newsitem extends Component {
  render() {
    let { title, description, img, newsurl, source, date } = this.props;
    return (
      <div>
        <div className="card my-2 border-dark rounded-5 border-1 ">
          <img className="card-img-top" src={img} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text">
              <small class="text-body-secondary"></small>
              <b>
                ~{source}: {new Date(date).toGMTString()}
              </b>
            </p>
            <a href={newsurl} className="btn btn-dark">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
