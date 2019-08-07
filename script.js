const kantDos= [
  'Beat Martha Stewart at a Turkey Cook-Off',
  'Fix your washer-dryer (I don\'t own one!)',
  'Run right into hell and back',
  'Catch a grenade for you',
  'Sing Cosette\'s part in Les Miserables',
  'Manage the New York Mets\' relief pitching staff',
  'Make macarons',
  'Pass up an opportunity to explain why "Its" and "It\'s" are NOT THE SAME',
  'Become an Instagram influencer',
  'Fold a fitted sheet',
  'Direct traffic around Times Square',
  'Explain the infield fly rule',
  'Toss pizza dough in the air'
]

const canDos = [
  'Analyze and solve problems',
  'Use React.js to build fun apps',
  'Listen to product owners and UX designers',
  'Communicate with tech teams',
  'Write amazing technical documentation',
  'Name variables in a memorable way',
  'Explain my code in and engaging way',
  'Build tech communities',
  'Help engineers explain their code',
  'Help non-coders understand what code does',
  'Use an API to populate this portfolio site',
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
  li.innerText = element
  // we need to style them
  return li;
})

kantElements.forEach((element) => document.querySelector('.kantdo').appendChild(element));

// const canDoElements = canDoList.map((element) => {
//   // create element as an li
//   //console.log(element)
//   const li = document.createElement('li');
//   li.classList.add('cando')
//   li.innerText = element
//   // we need to style them
//   return li;
// })
//
// canDoElements.forEach((element) => document.querySelector('.cando').appendChild(element));

//console.log(canDoList)


//OPTION 2: FOR EACH ELEMENT
canDoList.forEach((element) => {
  // create element as an li
  const li = document.createElement('li');
  // we need to style them
  li.classList.add('cando')
  li.innerText = element
  document.querySelector('.cando').appendChild(li)
  // return element
})

//console.log(canDoList)



// let newSkill = document.createElement("li")
//document.querySelector('.kantdo').appendChild(newSkill)


//
// function createNewBlogPost() {
//     //create a new `<div>` with class of `.blog-post`,
//     let newDiv = document.createElement('div');
//     //console.log(newDiv)
//     newDiv.classList.add("blog-post")
//     newDiv.classList.add('purple')
//     //a new `<h2>` with text, ===ACTUALLY AN H1
//     let newHeader = document.createElement('h1');
//     newHeader.innerText='Paris'
//     //and a new `<p>` with some text.
//     let newPara = document.createElement('p')
//     newPara.innerText = 'I FLEW OVER THE CHAMPS ELYSEES!'
//     newDiv.appendChild(newHeader)
//     newDiv.appendChild(newPara)
//     let newMain = document.querySelector('.main').appendChild(newDiv)
//     console.log(newMain)
// }
// createNewBlogPost()
//
