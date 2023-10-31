import React, { Component } from 'react'
import plusSolid from '../plusSolid.svg'

export class NewsItem extends Component {
 constructor(){
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

      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} style={{ width: '286px', height: '178px' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{
            zIndex: '1',
            left: '90%',
            fontSize: 'small'
          }}>
            {sourceName}
            <span className="visually-hidden">unread messages</span>
          </span>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small>By {author ? author : 'Unknown'} on {new Date(date).toGMTString()} </small></p>
          <div className="container d-flex justify-content-between">
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <img src={plusSolid} style={{ height: '30px', width: '50px' }} className={`btn btn-light ${newsUrl}`} onClick={() => {this.saveNews(title, description, imageUrl, newsUrl, date, author, sourceName)}}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
