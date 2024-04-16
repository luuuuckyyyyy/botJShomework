// ==UserScript==
// @name         My first script
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Makarov Maxim
// @match        https://ya.ru/*
// @grant        none
// ==/UserScript==



let button = document.querySelectorAll("button[class$='button']")[0];
let input = document.getElementsByClassName("search3__input mini-suggest__input")[0];
let inputed = document.getElementsByClassName("HeaderDesktopForm-Input mini-suggest__input")[0];


let links = document.links;


let keywords = ["10 самых популярных шрифтов от Google"]
let keyword = keywords[getRandom(0, keywords.length)];


if (input !== undefined){
    input.value = keyword;
    button.click();
} else {
    for (let i = 0; i < links.length; i++){
        if (links[i].href.indexOf("uguide.ru") != -1){
            let link = links[i];
            console.log("нашёл!" + link)
            

            link.click();
            break;
            
        }
    }
}






function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
