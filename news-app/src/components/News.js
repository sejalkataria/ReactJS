import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }
  constructor() {
    super()
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    }
  }
  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    this.props.setProgress(30)
    let parsedData = await data.json()
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1
    })
    console.log('fetchedMoreDate', this.state.page)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    })
  }
  render() {
    return (
      <div>
        <h1 className='text-center'>News - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return <div className="col-md-4" key={index} >
                  <NewsItem title={element.title ? element.title.slice(0, 42) : ''}
                    description={element.description ? element.description.slice(0, 72) : ''}
                    imageUrl={element.urlToImage} newsUrl={element.url}
                    source={element.source.name} date={element.publishedAt} author={element.author} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News
