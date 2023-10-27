import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'

export class News extends Component {
  static propTypes = {

  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url = {
      usTopHeadlines: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7a53337011074519b2a9b032b4ed21b9&pageSize=21',
      inTopHeadLines: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=7a53337011074519b2a9b032b4ed21b9&pageSize=21',
      cricket: 'https://newsapi.org/v2/everything?from=2023-10-25&to=2023-10-25&sortBy=popularity&apiKey=7a53337011074519b2a9b032b4ed21b9&q=cricket&pageSize=21'
    };
    let data = await fetch(url.usTopHeadlines);
    let parsedData = await data.json();

    //following line will set the state of article to the article in the url we get from fetching which will be inside parsedData.article
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    let url = {
      usTopHeadlines: `https://newsapi.org/v2/top-headlines?country=us&apiKey=7a53337011074519b2a9b032b4ed21b9&page=${this.state.page - 1}&pageSize=21`,
      inTopHeadLines: `https://newsapi.org/v2/top-headlines?country=in&apiKey=7a53337011074519b2a9b032b4ed21b9&page=${this.state.page - 1}&pageSize=21`,
      cricket: `https://newsapi.org/v2/everything?from=2023-10-25&to=2023-10-25&sortBy=popularity&apiKey=7a53337011074519b2a9b032b4ed21b9&q=cricket&page=${this.state.page - 1}&pageSize=21`
    };
    let data = await fetch(url.inTopHeadLines);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  }
  handleNextClick = async () => {
    let url = {
      usTopHeadlines: `https://newsapi.org/v2/top-headlines?country=us&apiKey=7a53337011074519b2a9b032b4ed21b9&page=${this.state.page + 1}&pageSize=21`,
      inTopHeadLines: `https://newsapi.org/v2/top-headlines?country=in&apiKey=7a53337011074519b2a9b032b4ed21b9&page=${this.state.page + 1}&pageSize=21`,
      cricket: `https://newsapi.org/v2/everything?from=2023-10-25&to=2023-10-25&sortBy=popularity&apiKey=7a53337011074519b2a9b032b4ed21b9&q=cricket&page=${this.state.page + 1}&pageSize=21`
    };
    let data = await fetch(url.inTopHeadLines);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
  }
  handleIndia = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=7a53337011074519b2a9b032b4ed21b9&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles
    });
  }
  handleUSA = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7a53337011074519b2a9b032b4ed21b9&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles
    });
  }
  handleCricket = async () => {
    let url = `https://newsapi.org/v2/top-headlines?q=cricket&apiKey=7a53337011074519b2a9b032b4ed21b9&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles
    });
  }
  handleFootball = async () => {
    let url = `https://newsapi.org/v2/top-headlines?q=football&apiKey=7a53337011074519b2a9b032b4ed21b9&pageSize=21`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles
    });
  }


  render() {
    return (
      <>
        <div className="container">
          <button className="btn btn-primary btn-md mx-2" onClick={this.handleIndia}>India</button>
          <button className="btn btn-primary btn-md mx-2" onClick={this.handleUSA}>USA</button>
          <button className="btn btn-primary btn-md mx-2" onClick={this.handleCricket}>Cricket</button>
          <button className="btn btn-primary btn-md mx-2" onClick={this.handleFootball}>Football</button>
        </div>

        <div className="container my-4">
          <h2> <strong>Newzilla</strong> - Today's Top Headlines </h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (<div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png'} newsUrl={element.url} publishedAt={element.publishedAt} />
              </div>);
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button className="btn btn-md btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className="btn btn-md btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </>
    )
  }
}

export default News
