import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, date, author } = this.props
    return (
      <div className='my-3'>
        <div className="card">
          <img style={{ height: '160px' }} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
              style={{ left: '90%', zIndex: '1' }}>
              {source}
              <span className="visually-hidden">unread messages</span>
            </span></h5>
            <p className="card-text">{description}</p>
            <p><small className="text-muted"> By {!author ? 'unknown' : author} {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
