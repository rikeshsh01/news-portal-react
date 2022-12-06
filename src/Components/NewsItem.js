import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div>

        <div className="card" style={{width: '18rem'}}>
          <img src="https://cdn.24.co.za/files/Cms/General/d/7337/4871b711384842b1950e2b00fd7e76a9.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
