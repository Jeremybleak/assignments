let headerPhrase = document.getElementById("header")

headerPhrase.innerHTML = "<h1> JavaScript made this!!</h1>";
headerPhrase.innerHTML += "<h3><span class=name> Jeremy </span> Made this!<h3>"


let newTalk = document.getElementsByClassName("message left")[0]
let newTalk2 = document.getElementsByClassName("message right")[0]
let newTalk3 = document.getElementsByClassName("message left")[1]
let newTalk4 = document.getElementsByClassName("message right")[1]

newTalk.innerHTML = 'Wow'
newTalk2.innerHTML = 'I agree'
newTalk3.innerHTML = 'No you dont'
newTalk4.innerHTML = 'valid'

let clearButt = document.getElementById("clear-button")
let messages = document.getElementsByClassName("messages")[0]

