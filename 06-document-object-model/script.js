// Dom

// document.getElementById()
//Single Element
// const title = document.getElementById("title");

// console.log("title");
// title.innerText ="Hellooooo";

// document.querySelector()
// const title = document.querySelector("#title");
// console.log("title");


//Multiple Element
// querySelectorAll()
// Returns a NodeList
// const title = document.querySelectorAll("h1");
// console.log("title");
// title[0].innerHTML = "Xin chao";

//Tao DOM Elm moi : createElement()
const div = document.createElement("div");
div.classList.add('class -name', 'cl2', 'cl3');
div.classList.remove("cl3");
div.innerHTML = 'Xin chao';
// Tim diem neo
const title = document.getElementById("title");
title.appendChild(div);
