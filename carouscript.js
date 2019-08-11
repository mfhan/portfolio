
let myNewsUrl = 'https://docs.google.com/spreadsheets/d/1rcUA2TUK1GoSgkCdEzHSnsoO0X8cHwLoARB35rjlQgs/edit#gid=0'

// ID COMES FROM THE URL THAT IS IN THE ADDRESS BAR ONCE THE SHEET HAS BEEN CREATED/SHARED
let newsId = '1rcUA2TUK1GoSgkCdEzHSnsoO0X8cHwLoARB35rjlQgs'


// BELOW URL IS HOW GOOGLE ALLOWS US TO ACCESS THE SHARED FILE AS JSON
let newsSource = `https://spreadsheets.google.com/feeds/list/${newsId}/od6/public/values?alt=json`


fetch(newsSource)
  .then( res => res.json())
  .then( data => {
     // console.log('this id data.feed.entry', data.feed.entry)
     let clips = data.feed.entry.map( d => {
       return {
          title: d.gsx$title.$t,
          image: d.gsx$image.$t,
          description: d.gsx$description.$t,
          link: d.gsx$link.$t
       }
     })
     createNewsCards(clips)
})



class Card {
  constructor(obj) {
    this.title = obj.title
    this.image = obj.image
    this.description = obj.description
  }


  render() {
    //let inner = document.querySelector(".carousel-inner")
    // const col = document.createElement('div')
    // col.classList.add('col', 'col-sm-12','col-md-6', 'col-lg-4' );
    // // col.classList.add('col','s12','m4', 'lg3');

    const col = document.createElement('div')

    //const element = document.createElement('carousel-item')

    const card = document.createElement('div')
    //card.classList.add('card');
    card.classList.add('carousel-item')

    const cardImage = document.createElement('div')
    cardImage.classList.add('card-image');
    // cardImage.classList.add("center");

    const image  = document.createElement('img')
    image.setAttribute('src', this.image)

    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title');
    cardTitle.innerText = this.title

    const cardContent = new CardContent(this.description)
    console.log('this is cardContent', cardContent)
    cardImage.appendChild(image)
    card.appendChild(cardTitle)
    card.appendChild(cardImage)

    card.appendChild(cardContent.render())
    col.appendChild(card)

    return col
  }
}


class CardContent {
  constructor(desc) {
    this.desc = desc
  }
  render () {
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content');
    cardContent.classList.add('center');

    const paragraph = document.createElement('p')
    paragraph.innerText = this.desc

    cardContent.appendChild(paragraph)
    return cardContent
  }
}

 // <div class="carousel-inner">

function createNewsCards(clips){
  const carDiv = document.querySelector('.carousel-inner')
  clips.forEach( obj => {
    let card = new Card(obj)
    console.log('this is a news card', card)
    carDiv.appendChild(card.render())
  })
}
