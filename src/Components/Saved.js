import React from 'react'
import NewsItem from './NewsItem'

export default function Saved() {
  let articles = [
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Afghanistan claim historic win over Pakistan",
      "description": "Watch highlights as Afghanistan beat Pakistan for the first time in one day cricket with an eight-wicket victory in Chennai at the Cricket World Cup.",
      "url": "http://www.bbc.co.uk/sport/av/cricket/67198344",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/cpsprodpb/49A2/production/_131505881_p0gnb1c2.jpg",
      "publishedAt": "2023-10-23T17:22:20.6901342Z",
      "content": "Up Next. 'You have one chance, be ready' - Xavi's advice to Guiu before debut. Video, 00:00:57'You have one chance, be ready' - Xavi's advice to Guiu before debut"
    },
    {
      "source": {
        "id": "bbc-sport",
        "name": "BBC Sport"
      },
      "author": null,
      "title": "Afghanistan stun Pakistan in World Cup thriller",
      "description": "Afghanistan secure highest ever run chase in one-day international cricket with a stunning eight-wicket win over Pakistan in Chennai.",
      "url": "http://www.bbc.co.uk/sport/cricket/67193511",
      "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/179BD/production/_131510769_gettyimages-1752449820.jpg",
      "publishedAt": "2023-10-23T17:07:23.7998185Z",
      "content": "<table>\r\n<tr><td>ICC Men's Cricket World Cup, Chennai:</td></tr><tr><td>Pakistan 282-7 (50 overs): Babar 74 (92), Shafique 58 (75); Noor 3-39</td></tr><tr><td>Afghanistan 286-2 (49 overs): Zadran 87 … [+2316 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": {
        "id": "espn-cric-info",
        "name": "ESPN Cric Info"
      },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  return (
    <div className="container">
      <div className="row">
        {articles.map((element) => {
          return (<div className="col-md-4 my-3" key={element.url}>
            <NewsItem />
          </div>)
        })}
      </div>
    </div>
  )
}
