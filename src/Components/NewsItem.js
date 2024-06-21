import React, { useState, useEffect } from 'react'
import plusSolid from '../plusSolid.svg'
const NewsItem = (props) =>  {
  const [savedNews, setSavedNews] = useState([]);
  const saveNews = () => {
    console.log(props.description, props.sourceName, props.author, props.date, props.newsUrl, props.imageUrl);
    // props.articles
    let newArticle = {
      title: props.title,
      description: props.description,
      imageUrl: props.imageUrl,
      newsUrl: props.newsUrl,
      sourceName: props.sourceName,
      savedDate: Date()
    }
    setSavedNews(savedNews.concat(newArticle));
  }

    return (
      <div className="card">
        <img src={props.imageUrl} style={{height: '210px' }} className="card-img-top" alt="..." />
        <div className="card-body">
          <div  style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: 0,
              top: 0
            }}>
            <span className="badge bg-danger"> {props.sourceName} </span>
          </div>

          <p className="card-text">{props.description}...</p>
          <p className="card-text"><small>By {props.author ? props.author : 'Unknown'} on {new Date(props.date).toGMTString()} </small></p>
            <a href={props.newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            <button onClick={saveNews}>+</button>
        </div>
      </div>
    )
}

export default NewsItem
