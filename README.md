# PORTFOLIO PROJECT

### This portfolio site aims to showcase a set of projects undertaken as part of General Assembly's **Software Engineering Immersive** program.


### Initial wireframe [here](https://lh3.googleusercontent.com/LBYm6RIwS6_VatbO9yWSTBSbD7jqfwvOWmnzL2b6U2JHUf3XEX-Uh5T2S6IVBwueYesCK6LrEO58_GQtZUUTD5uwxGjxyIj_hwJULfWq2n-IXQ1vWhLzaWNbaMw8Z_GjUjICjB-iXru1unMS_2LvNSagGobaXQfP36xXeInkqmVPtHd0YnVFcGE1TdAs0El6LiNh6Y9fcJ_5YqY5iilUYSy_hn6nywjOs2ywxRtExR5rFZwoF7DcEU6s276lwSCVbCgjIOE1b76NQ6II_1yabfiPR1FfAvu6y9BPGZMEsV8Ik_mBo_6AWOMIzS0s2lcb6ygoNa9G4Gxo4BgxsotGdyY1PW5TyJRuIFBsedI3zGgAr1LaDeGS00QngAYETzSnDGvjDD_aXR3vs6xeiui36l5hQT5-xod7RfWSRLBri4yCgdLYMBMvx4_ack6C8eBsdFzCy2CTNBI7gnW5DtSzOUo6aqv5NbTT02Xngt4wN8-an5pK-tfeOfkq7HCNBXc9i1JgEtXd8c3xsVGBG7nUF-Hx0zVvxs_w2zcnD5gTTF-85QxFpjyog4UEAs3us-Z9Q3JhX6Lz2eAJEYFjiTOwrcl_uYaB2UDe9nPaCUSMn35fGAdbItnzTpN_MAqzhgzV0_oCgGmGiKr6I22XvJBCTuUKWFqVx_5F=s250-k-rw-no)


### The project contains the following features:

-- It uses **semantic markup** for HTML and CSS, adhering to best practices.

-- It makes use of **Flexbox** to create a multi-column layout.

-- It's designed to be **responsive** to mobile, tablet and desktop

-- Includes separate HTML, CSS and JavaScript files.

-- Use JavaScript for **DOM** manipulation*.

-- Includes a list of student projects fed via **API call** from google sheet.

-- Provides a **Nav bar** functionality that allows the page to scroll smoothly to the corresponding section when a nav item is clicked.


## My Process:

I wanted to avoid creating a portfolio that was either too bland or too annoying. I aimed to build a site that would reflect a bit of my **playful**, curious yet professional personality.

I tried to methodically apply the lessons learned so far in three weeks at GA's immersive program. I experimented (**a LOT!**) with concepts that were brand new to me, such as Flexbox and  semantic HTML.

I also tried to make use of my prior experience as a **business and tech journalist** to make the content of my site, including my bio, as **approachable** and concise as possible.


## Remaining Unsolved Problems:
--  The **CAROUSEL** still doesn't extract the right element (=individual card)

--  Some aspects of my **Nav bar**'s behavior remains mysterious to me.


## Biggest Wins:

-- Successfully implementing the "CAN DO/CAN'T DO" section via JavaScript DOM manipulation.

```
canDoList.forEach((element) => {
  // create element as an li
  const li = document.createElement('li');
  // we need to style them
  li.classList.add('cando')
  li.innerText = element
  document.querySelector('.cando').appendChild(li)
  // return element
})
```

-- **Debugging issues** I created inadvertently by naming two things (a class and an id) with the same word! Obviously a no-no, but which I didn't figure out until late in the game.

-- Managing to extract the correct data from the **Google Sheets API! **

-- Solving SOME sizing issues for my pictures.


## Major Challenges:

-- My grasp of Bootstrap and Materialize remain very tenuous and only more practice will get me where I want to be.

-- I failed to create a carousel showing data extracted from my API.

-- I haven't found the correct way to write my nav bar so it returns to the correct position when returning to top/left.
