import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export default class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general",
    page:1
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string

  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {                                          //Typically, in React constructors are only used for two purposes: Initializing local state by assigning an object to this.state . Binding event handler methods to an instance.
    super(props);
    // console.log("this is news coponent")
    this.state = {                                        //this will be used to rendering of the page b asigning the initial value in 'this.state'
      articless: [],
      loadingss: true,
      page: 1,
      totalResultss:0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Portal`
  }

  async pageUpdates() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=28a845cfbad84ee09ba195f8bead59ee&category=${this.props.category}&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=e3b393294a4844de941bfac788dbb3df&category=${this.props.category}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ 
      loadingss: true
    })
    console.log(this.state.page)
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(this.props.pageSize)
    this.setState(
      {
        articless: parseData.articles,
        totalResultss: parseData.totalResults,
        loadingss: false
      })
  }


  async componentDidMount() {
    // console.log(this.props.category);
    this.pageUpdates();

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
  //           loadingss:false
  //         })
  //     })
  //   }

  clickPrev = async () => {
    console.log("Previous");
    this.setState({ page: this.state.page - 1 })
    this.pageUpdates()

  }
  clickNext = async () => {
    console.log(this.state.page + 1)
    this.setState({ page: this.state.page + 1 })
    this.pageUpdates()
  }

  fetchMoreData =async ()=>{

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=28a845cfbad84ee09ba195f8bead59ee&category=${this.props.category}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({page: this.state.page + 1});

    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData.articles)
    console.log(this.state.articless)
    this.setState(
      {
        articless: this.state.articless.concat(parseData.articles),
        totalResults: parseData.totalResults,
        loadingss: false
      })
  }
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">{this.capitalizeFirstLetter(this.props.category)} News - Top Headlines</h1>
        {this.state.loadingss && <Spinner />}
        <InfiniteScroll
            dataLength={this.state.articless.length}
            next={this.fetchMoreData}
            hasMore={this.state.articless.length !== this.state.totalResultss}
            loader={<Spinner/>}
          >
        <div className="row my-3">
          {/* {!this.state.loadingss && this.state.articless.map((element) => { */}
            {this.state.articless.map((element,i) => {
            // console.log(element)
            return <div className="col-md-4 my-4 card-item d-flex align-items-inherit" key={i}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedate={element.publishedAt} author={element.author} source={element.source.name} />
              {/* <NewsItem title = {element.title} description = {element.description} imageUrl = {element.image} newsUrl={element.url}/> */}
            </div>
          })}

        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.clickPrev} className="btn btn-dark">	&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResultss / this.props.pageSize)} type="button" onClick={this.clickNext} className="btn btn-dark">Next 	&rarr;</button>
        </div> */}
      </div>
    )
  }
}
