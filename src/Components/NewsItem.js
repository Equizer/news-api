import React, { Component } from 'react'
import plusSolid from '../plusSolid.svg'

export class NewsItem extends Component {
  constructor() {
    super();
    this.state = {
      savedNewsArr: [],
    }
  }
  saveNews = (title, description, imageUrl, newsUrl, date, author, sourceName) => {
    let savedNews = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      newsUrl: newsUrl,
      date: date,
      author: author,
      sourceName: sourceName
    }
    //  this.setState({savedNewsArr: this.state.savedNewsArr.push(savedNews)});
    console.log(this.state.savedNewsArr);
  }
  render() {
    let { title, description, imageUrl, newsUrl, date, author, sourceName } = this.props;



    return (

      <div className="card">
        <img src={imageUrl} style={{height: '210px' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <div  style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: 0,
              top: 0
            }}>
            <span className="badge bg-danger"> {sourceName} </span>
          </div>

          <p className="card-text">{description}...</p>
          <p className="card-text"><small>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()} </small></p>
          <div className="container d-flex justify-content-between">
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <img src={plusSolid} style={{ height: '30px', width: '50px' }} className={`btn btn-light ${newsUrl}`} onClick={() => { this.saveNews(title, description, imageUrl, newsUrl, date, author, sourceName) }}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
