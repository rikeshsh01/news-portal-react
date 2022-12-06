import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Masrur Jamaluddin, Heather Chen, Angus Watson",
    "title": "Indonesia bans sex outside marriage as parliament passes sweeping new criminal code - CNN",
    "description": "Indonesian lawmakers unanimously passed a sweeping new criminal code on Tuesday that criminalizes sex outside marriage, as part of a tranche of changes that critics say threaten human rights and freedoms in the Southeast Asian country.",
    "url": "https://www.cnn.com/2022/12/05/asia/indonesia-new-code-passed-sex-cohabitation-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221206081919-02-indonesia-protest-criminal-code.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-12-06T08:43:22Z",
    "content": "Indonesian lawmakersunanimously passed a sweeping new criminal code on Tuesday that criminalizes sex outside marriage, as part of a tranche of changes that critics say threaten human rights and freed… [+4928 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Oil prices climb after Russian crude sanctions kick in - Reuters.com",
    "description": "Oil rebounded on Tuesday after plunging by more than 3% in the previous session, as the implementation of sanctions on Russian seaborne crude oil eased concerns about oversupply while the relaxing of China's COVID curbs bolstered the demand outlook.",
    "url": "https://www.reuters.com/markets/commodities/oil-prices-rise-after-price-cap-russian-crude-opec-meeting-2022-12-06/",
    "urlToImage": "https://www.reuters.com/resizer/pxyGlGSt77HG460jWsBwFgaw5Zo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GYG2B236UBJKZBI7CZCSJE2OC4.jpg",
    "publishedAt": "2022-12-06T07:46:00Z",
    "content": "Dec 6 (Reuters) - Oil rebounded on Tuesday after plunging by more than 3% in the previous session, as the implementation of sanctions on Russian seaborne crude oil eased concerns about oversupply whi… [+2276 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CBS Sports"
    },
    "author": "",
    "title": "MLB rumors: Cubs pursuing several stars; Justin Verlander, Trea Turner start Winter Meetings with a bang - CBS Sports",
    "description": "Here's the latest from the MLB hot stove",
    "url": "https://www.cbssports.com/mlb/news/mlb-rumors-cubs-pursuing-several-stars-justin-verlander-trea-turner-start-winter-meetings-with-a-bang/",
    "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/12/06/70727823-4cfc-4ff1-9fb0-09bf317930f7/thumbnail/1200x675/2d7a15431cf79aff786d42a7fe4dfc74/sean-murphy-as-getty.jpg",
    "publishedAt": "2022-12-06T06:51:00Z",
    "content": "Major League Baseball's annual Winter Meetings kicked off Sunday with the news that Fred McGriff was inducted into the Hall of Fame via the Contemporary Era Committee. The hope is that was the beginn… [+8789 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Dan Heching, Amy Simonson, Taylor Romine",
    "title": "Kirstie Alley, 'Cheers' and 'Veronica's Closet' star, dead at 71 - CNN",
    "description": "Actress Kirstie Alley, star of the big and small screens known for her Emmy-winning role on \"Cheers\" and films like \"Look Who's Talking,\" has died after a brief battle with cancer, her children True and Lillie Parker announced on her social media.",
    "url": "https://www.cnn.com/2022/12/05/entertainment/kirstie-alley-obit/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221205172141-kirstie-alley-2005.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2022-12-06T06:42:00Z",
    "content": "Actress Kirstie Alley, star of the big and small screens known for her Emmy-winning role on Cheers and films like Look Whos Talking, has died after a brief battle with cancer, her children True and L… [+5660 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": null,
    "title": "Senate candidates make last pitch in Georgia midterm election runoff - Reuters.com",
    "description": "With Republican influence in the U.S. Senate on the line, two dozen party faithful gathered in an Atlanta suburb on Sunday for the final stretch of a get-out-the-vote effort aimed at electing former football star Herschel Walker.",
    "url": "https://www.reuters.com/world/us/senate-candidates-make-last-pitch-georgia-midterm-election-runoff-2022-12-05/",
    "urlToImage": "https://www.reuters.com/resizer/SbkVzcgFfcIXhpTL96k60Xkl0wk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SCVNK25ONJJ7HHQ4VUXCFC2HBQ.jpg",
    "publishedAt": "2022-12-06T06:27:00Z",
    "content": "CUMMING, Ga., Dec 5 (Reuters) - With Republican influence in the U.S. Senate on the line, two dozen party faithful gathered in an Atlanta suburb on Sunday for the final stretch of a get-out-the-vote … [+5092 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Tampa Bay Times"
    },
    "author": "Charlie Frago",
    "title": "Tampa council members react to police Chief Mary O'Connor's resignation - Tampa Bay Times",
    "description": "The mayor made a mistake, they said. And so did O’Connor.",
    "url": "https://www.tampabay.com/news/tampa/2022/12/05/mary-oconnor-tampa-police-chieftampa-police-chief-resignsjane-castor/",
    "urlToImage": "https://www.tampabay.com/resizer/OvoLRW3sW6SnG6IIE-bFctMGpZ4=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/tbt/ZCD5MFK5BRFKNL7QPK3MEQWYPE.JPG",
    "publishedAt": "2022-12-06T05:53:25Z",
    "content": "TAMPA Council member Charlie Miranda said he voted for Mary OConnor for police chief in April because there was no other choice. There was only one person standing in front of me when he took the vot… [+3378 chars]"
    }
  ]
  constructor(){                                          //Typically, in React constructors are only used for two purposes: Initializing local state by assigning an object to this.state . Binding event handler methods to an instance.
    super();
    // console.log(this.state)
    // console.log("this is news coponent")
    this.state = {                                        //this will be used to rendering of the page b asigning the initial value in 'this.state'
      articless:this.articles,
      loadings:false
    }
  }
  render() {
    return (
      <div className='container'>
        <h2>Ricky News Top Headlines</h2>
        <div className="row my-3">
          {this.state.articless.map((element,i)=>{
            // console.log(element)
            return <div className="col-md-4 my-4" key={element.title}>
            <NewsItem title = {element.title.slice(0,50)} description = {element.description.slice(0,57)} imageUrl = {element.urlToImage} newsUrl={element.url}/>
          </div>
          })}

        </div>
      </div>
    )
  }
}
