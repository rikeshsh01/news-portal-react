import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    country:"us",
    pageSize: 9,
    category:"general"
  }
  
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string

  }

  constructor(){                                          //Typically, in React constructors are only used for two purposes: Initializing local state by assigning an object to this.state . Binding event handler methods to an instance.
    super();
    console.log(this)
    // console.log("this is news coponent")
    this.state = {                                        //this will be used to rendering of the page b asigning the initial value in 'this.state'
      articless:[],
      loadings:false,
      page:1,
    }
  }

  async componentDidMount(){
    // console.log(this.props.category);

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=28a845cfbad84ee09ba195f8bead59ee&category=${this.props.category}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loadings:true})
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(this.props.pageSize)
    this.setState(
      {
        articless:parseData.articles,
        totalResultss:parseData.totalResults,
        loadings:false
      })
  }

  
  // componentDidMount(){
  //   console.log("hello")
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res=>res.json())
  //     .then((data) => {
  //       console.log(data)
  //       this.setState(
  //         {
  //           articless:data,
  //           loadings:false
  //         })
  //     })
  //   }

  clickPrev = async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=28a845cfbad84ee09ba195f8bead59ee&category=${this.props.category}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loadings:true})
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState(
      {
        articless:parseData.articles,
        page:this.state.page -1,
        loadings:false
      })

  }
  clickNext = async ()=>{
    console.log(this.state.page +1)
    console.log(Math.ceil(this.state.totalResultss/this.props.pageSize))
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResultss/this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=28a845cfbad84ee09ba195f8bead59ee&category=${this.props.category}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loadings:true})
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState(
        {
          articless:parseData.articles,
          page:this.state.page+1,
          loadings:false
        })
    }
  }


  

  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Sports News - Top Headlines</h1>
        {this.state.loadings && <Spinner /> }
        <div className="row my-3">
          {!this.state.loadings && this.state.articless.map((element)=>{
            // console.log(element)
            return <div className="col-md-4 my-4 card-item d-flex align-items-inherit" key={element.title}>
            <NewsItem title = {element.title} description = {element.description} imageUrl = {element.urlToImage} newsUrl={element.url}/>
            {/* <NewsItem title = {element.title} description = {element.description} imageUrl = {element.image} newsUrl={element.url}/> */}
          </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" onClick={this.clickPrev} className="btn btn-dark">	&larr; Previous</button>
        <button disabled ={this.state.page + 1 > Math.ceil(this.state.totalResultss/this.props.pageSize)} type="button" onClick={this.clickNext} className="btn btn-dark">Next 	&rarr;</button>
        </div>
      </div>
    )
  }
}
