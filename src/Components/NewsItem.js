import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageUrl, newsUrl, publishedAt} = this.props;
    return (
      
      <div className="card" title={`Date: ${publishedAt}`} style={{width: "18rem"}}>
        <img src={imageUrl} style={{width: '286px',height: '178px'}}className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
