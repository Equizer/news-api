import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'

export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    apiKey: '7a53337011074519b2a9b032b4ed21b9',
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    apiKey: PropTypes.string,
    category: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    }
    document.title = `${(this.props.category.slice(0, 1)).toUpperCase()}${this.props.category.slice(1)} - Newzilla`;
  }

  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    //following line will set the state of article to the article in the url we get from fetching which will be inside parsedData.article
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });

  }
  //link for best react lifecycle method for component diagram: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  }
  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      this.setState({ page: this.state.page + 1 });
      this.updateNews();
    }
  }
  render() {
    return (
      <>
        <div className="container my-4">
          <h1 className="text-center"> <strong>Newzilla</strong> - Today's Top {`${(this.props.category.slice(0, 1)).toUpperCase()}${this.props.category.slice(1)}`} Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (<div className="col-md-4 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ''} description={element.description ? element.description.slice(0, 88) : ''} imageUrl={element.urlToImage ? element.urlToImage : 'https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png'} newsUrl={element.url} date={element.publishedAt} author={element.author} sourceName={element.source.name ? element.source.name : ''} />
              </div>);
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button className="btn btn-md btn-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className="btn btn-md btn-dark" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </>
    )
  }
}

export default News
