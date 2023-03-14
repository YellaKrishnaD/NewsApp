import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:8,
    category:'general'
  }
  static propTypes = {

    country:PropTypes.string,
    pageSize:PropTypes.number
  }
  constructor(){
    super();
    this.state = {
      articles: [],
      page:1
    }
  }
   capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=444edb54ed3a4eb693b1dd9b3b8aea26&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    document.title=`${this.capitalizeFirstLetter(this.props.category)}-News Monk`
  }

   handlePrevClick = async() => {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=444edb54ed3a4eb693b1dd9b3b8aea26&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    
    this.setState(
      {
        page: this.state.page-1,
        articles: parsedData.articles,
        loading: false
      })

  }
  handleNextClick =  async() => {
    
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
    {
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=444edb54ed3a4eb693b1dd9b3b8aea26&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    
    
    this.setState(
      {
        page: this.state.page+1,
        articles: parsedData.articles,
        loading: false
      })
    }
  }

  render() {
    
    return (
      <div className='conatiner '>
        <h1 className='text-center' style={{margin: '35px 0px'}}>NewsMonk-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
          {this.state.loading && <Spinner/>}

        <div className='row '>
        {!this.state.loading && this.state.articles.map(element=> {

          return <div className='col-md-4' key={element.url} >
           <Newsitem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,80):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />   
             </div>
        })}
         
         </div>


         <div className='conatiner d-flex justify-content-between'>
         <button disabled={this.state.page<=1} type="button" className="btn btn-secondary bg-dark mx-3" onClick={this.handlePrevClick}>&larr; Previous</button>
         <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className ="btn btn-secondary bg-dark mx-3" onClick={this.handleNextClick}>Next  &rarr;</button>
         </div>

        

      </div>
    )
  }
}

export default News