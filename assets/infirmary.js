//
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


// const kantDoElements = kantList.map((element) => {
//   // create element as an li
//   const li = document.createElement('li');
//   // we need to style them
//   li.classList.add('kantdo')
//   return li;
//   // return element
// })

// kantDoElements.forEach((element) => document.querySelector('.kantdo').appendChild(element));

// console.log(canDoList)

// OPTION 2: FOR EACH ELEMENT
// canDoList.forEach((element) => {
//   // create element as an li
//   const li = document.createElement('li');
//   // we need to style them
//   li.classList.add('red');
//   document.querySelector('.cando').appendChild(li)
//   // return element
// })

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
