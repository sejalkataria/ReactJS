import React from 'react'

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, source, date, author } = props
  return (
    <div className='my-3'>
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          position: 'absolute',
          right: '0'
        }}>
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>
        <img style={{ height: '160px' }} src={!imageUrl ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{description}</p>
          <p><small className="text-muted"> By {!author ? 'unknown' : author} {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem