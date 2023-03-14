import React, { Component } from 'react'

export class Newsitem extends Component {
 
  render() {
   let { title, description,imageUrl,newsUrl,author,date } = this.props;
    return (
      <div className='my-3 mx-5'>
          <div className="card">
   
          <img src={imageUrl?imageUrl:"https://ichef.bbci.co.uk/news/1024/branded_news/7101/production/_128692982_182fd35249351cc36b2ffcaff9e448e51a9f63790_238_5216_29361000x563.jpg"} alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{ description }...</p>
                
                <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
              </div>
          </div >
      </div>
    )
  }
}

export default Newsitem