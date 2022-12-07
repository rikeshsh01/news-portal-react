import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, publishedate, author, source } = this.props;

    return (
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <span className="position-absolute top-0 badge rounded-pill bg-warning">
          {!source ? "Unknown" : source}
        </span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {publishedate}</small></p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}
