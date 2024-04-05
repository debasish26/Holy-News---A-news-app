import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

    constructor() {
        super()
        this.state = {
            articles: [],
            page: 1
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e968e6bb80b4b38b7043cfe342c9b9d&page=1"
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData)
        this.setState({ articles: parseData.articles })
    }

    handleNextClick = async ()=>{
        console.log("next")

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e968e6bb80b4b38b7043cfe342c9b9d&page=${this.state.page + 1}`
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData)

        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        })
    }

    handlePrevClick = async ()=>{
        console.log("next")

        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5e968e6bb80b4b38b7043cfe342c9b9d&page=${this.state.page - 1}`
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData)

        this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
        }) 
    }
    render() {
        return (
            <div className='container my-3'>
                <h2>Holy News - Top Headlines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        console.log(element)
                        return (
                            <>
                                <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/6/7/5/7/8/Fab12inc021_580_0-5cb95b5ef377549c.jpg"} newsUrl={element.url ? element.url : ""} />
                                </div>

                            </>
                        )
                    })}


                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page==1} className='btn btn-danger' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page>=3} className='btn btn-danger' onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

            </div>
        )
    }
}

export default News
