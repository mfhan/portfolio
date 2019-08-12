const kantDos= [
  'Beat Martha Stewart at a turkey cook-Off',
  'Fix your washer-dryer (sorry!)',
  '"Run Right Into Hell And Back"',
  '"Catch A Grenade For You"',
  'Sing Cosette\'s part in Les Miserables',
  'Manage the New York Mets\' relief pitching staff',
  'Plan, cook and freeze a week\'s worth of meals every Sunday',
  'Pass up an opportunity to explain why "Its" and "It\'s" are NOT THE SAME, no they are not',
  'Become an Instagram influencer',
  'Fold a fitted sheet for the life of me',
  'Direct traffic around Times Square',
  'Explain baseball\'s infield fly rule',
  'Toss pizza dough in the air',
  'Live in a tiny house',
  'Collect all six Infinity Stones',
  'Beat a 6-year-old at chess',
  'Persuade your cat not to wake you up at 5 am',
  'Re-shoot the ending of Game of Thrones'
]

const canDos = [
  // 'Analyze and solve problems!',
  'Use React.js to build fun apps!',
  'Actively listen to product owners and UX designers!',
  'Communicate effectively with tech teams!',
  'Write clear and intuitive technical documentation!',
  'Clearly set technical expectations and deliverables!',
  'Write code that\'s clear, concise and scalable!',
  'Build and grow tech communities via Meetup and social media!',
  'Make use of my Scrum Master(TM) certification to optimize workflows!',
  'Help engineers outline, structure and deliver tech talks!',
  'Help non-coders understand what code does!',
  'Use an API to populate this portfolio site!',
]

const funCanDos = [
  'Make couscous in 30 minutes',
  'Make a playlist of JS Bach preludes to suit your mood',
  'Recite random monologues from French classics',
  'Win Trivia Night singlehandedly',
  'Tell you everyting about the Wars of the Roses',
  'Make a kicker Dark & Stormy'
]

function generateSkills(deck, times){
  let list = [];
  for (let i =0; i <=times; i++){
    let card = (deck.splice(Math.floor(Math.random() *deck.length), 1))[0]
    //console.log(card)
    console.log(deck.length)
    list.push(card);
  }
  //console.log(list)
  return list;
}

const canDoList = generateSkills(canDos, 4);
//console.log(canDoList)
const kantList = generateSkills(kantDos, 2);


const kantElements = kantList.map((element) => {
  // create element as an li
  //console.log(element)
  const li = document.createElement('li');
  li.classList.add('kantdo')
  // li.classList.add('kantscript')
  li.innerText = element
  // we need to style them
  return li;
})

kantElements.forEach((element) => document.querySelector('.kantdo').appendChild(element));


canDoList.forEach((element) => {
  // create element as an li
  const li = document.createElement('li');
  // we need to style them
  li.classList.add('cando')
  li.innerText = element
  document.querySelector('.cando').appendChild(li)
  // return element
})

let funSkill = ''
function createFunSkill(funCanDos) {
  funSkill = (funCanDos.splice(Math.floor(Math.random() *deck.length), 1))[0]
  return funSkill
}


window.onscroll = function() {mySticky()};
const navBar = document.querySelector('.topnav');
// Get the offset position of the navbar
const sticky = navBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function mySticky() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky")
  } else {
    navBar.classList.remove("sticky");
  }
}

// document.addEventListener('refreshKant', generateSkills(kantDos, 2))
// document.addEventListener('refreshCan', generateSkills(canDos, 4))

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myToggler() {
  const x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// functions fed by API and rendering into the projects and media sections:

let myProjectsUrl= 'https://docs.google.com/spreadsheets/d/1JzfzPc5KeR3h1kXCp99eI-UnpKKCUpxx1rDDnS3wFsE/edit#gid=0'

let myNewsUrl = 'https://docs.google.com/spreadsheets/d/1rcUA2TUK1GoSgkCdEzHSnsoO0X8cHwLoARB35rjlQgs/edit#gid=0'


// ID COMES FROM THE URL THAT IS IN THE ADDRESS BAR ONCE THE SHEET HAS BEEN CREATED/SHARED
let projectId = '1JzfzPc5KeR3h1kXCp99eI-UnpKKCUpxx1rDDnS3wFsE'

let newsId = '1rcUA2TUK1GoSgkCdEzHSnsoO0X8cHwLoARB35rjlQgs'


// BELOW URL IS HOW GOOGLE ALLOWS US TO ACCESS THE SHARED FILE AS JSON
let projectSource = `https://spreadsheets.google.com/feeds/list/${projectId}/od6/public/values?alt=json`

let newsSource = `https://spreadsheets.google.com/feeds/list/${newsId}/od6/public/values?alt=json`

// https://spreadsheets.google.com/feeds/list/15PmioBi2dQEkewpqI7MDkDpvcVF0Trw8vmarAQbwoHk/1/public/values?alt=json

fetch(projectSource)
  .then( res => res.json())
  .then( data => {
     // console.log('this id data.feed.entry', data.feed.entry)
     let projects = data.feed.entry.map( d => {
       return {
          title: d.gsx$title.$t,
          image: d.gsx$image.$t,
          description: d.gsx$description.$t,
          link: d.gsx$link.$t
       }
     })
     // console.log('these are my projects', projects)
     createCards(projects)
})


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
     // console.log('these are my news clips', clips)
     createNewsCards(clips)
})


class Card {
  constructor(obj) {
    this.title = obj.title
    this.image = obj.image
    this.description = obj.description
  }

// let rowId =  document.getElementById('row')

  render() {
    //const newRow = document.createElement('div')
    const col = document.createElement('div')
    // col.classList.add('col', 'col-sm-12','col-md-6', 'col-lg-4' );
    col.classList.add('col','s12','m4');

    const card = document.createElement('div')
    card.classList.add('card');

    const cardImage = document.createElement('div')
    cardImage.classList.add('card-image');
    // cardImage.classList.add("center");

    const image = document.createElement('img')
    image.setAttribute('src', this.image)

    const cardTitle = document.createElement('span')
    cardTitle.classList.add('card-title');
    cardTitle.innerText = this.title

    const cardContent = new CardContent(this.description)
    //console.log('this is cardContent', cardContent)
    cardImage.appendChild(image)
    card.appendChild(cardTitle)
    card.appendChild(cardImage)

    card.appendChild(cardContent.render())
    col.appendChild(card)

    //newRow.appendChild(col)

    //return newRow
    return col
  }
}

class CardContent {
  constructor(desc) {
    this.desc = desc
  }
  render () {
    //console.log('this is desc', this.desc)
    const cardContent = document.createElement('div')
    cardContent.classList.add('card-content');
    cardContent.classList.add('center');

    const paragraph = document.createElement('p')
    paragraph.innerText = this.desc

    cardContent.appendChild(paragraph)
    return cardContent
  }
}

function createCards(projects){
  const projectDiv = document.querySelector('#projects')
    projects.forEach( obj => {
      let card = new Card(obj)
      //console.log('this is a project card', card)
      projectDiv.appendChild(card.render())
    })
}


function createNewsCards(clips){
  const clipDiv = document.querySelector('#clips')
  clips.forEach( obj => {
    let card = new Card(obj)
    //console.log('this is a news card', card)
    clipDiv.appendChild(card.render())
    console.log('clips div',clipDiv)
  })
}


// Contact form scripts:

const form = document.querySelector('form');
const button = document.querySelector('button');
const firstNameInput = document.querySelector('#firstName');
const lastNameInput = document.querySelector('#lastName');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Set up empty object
const contact = {
  "contactList" : []
}
// Callback function
const addNewContact = (e) => {
  e.preventDefault()
  // Variables for the values entered in the form
  const newFirstName = firstNameInput.value;
  const newLastName = lastNameInput.value;
  const newEmail = emailInput.value;
  const newMessage = messageInput.value;

  // Store the values in a JSON object
  contactObject = {
    firstName: newFirstName,
    lastName:newLastName,
    email: newEmail,
    message: newMessage
  }
  // Add Object to array
  contact.contactList.push(contactObject)
  console.log(contact)
}
// Event Handler
form.addEventListener('submit', addNewContact)
// Or
// button.addEventListener('click', addNewContact)
