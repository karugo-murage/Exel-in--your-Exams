const ai = document.querySelector('.ai')
ai.addEventListener('click', function(){
    let unitImage = document.querySelector('.exams')
    let mySrc = unitImage.getAttribute('src')
    if (mySrc !== "Assets/images/ai.jpg"){
        unitImage.setAttribute('src', "Assets/images/ai.jpg")
    }

})

const calculus = document.querySelector('.calculus')
calculus.addEventListener('click', function(){
    let unitImage = document.querySelector('.exams')
    let mySrc = unitImage.getAttribute('src')
    if (mySrc !== "Assets/images/calculus.jpg"){
        unitImage.setAttribute('src', "Assets/images/calculus.jpg")
    }

})

const electronics = document.querySelector('.electronics')
electronics.addEventListener('click', function(){
    let unitImage = document.querySelector('.exams')
    let mySrc = unitImage.getAttribute('src')
    if (mySrc !== "Assets/images/electronics.jpg"){
        unitImage.setAttribute('src', "Assets/images/digitalelec.jpg")
    }

})

const data = document.querySelector('.data')
data.addEventListener('click', function(){
    let unitImage = document.querySelector('.exams')
    let mySrc = unitImage.getAttribute('src')
    if (mySrc !== "Assets/images/datacom.jpg"){
        unitImage.setAttribute('src', "Assets/images/datacom.jpg")
    }

})

// let post =document.querySelector('.comment-form')
let post =document.getElementById('comment-form')
let input = document.getElementsByTagName("input")[0]
let comment =document.querySelector('#live-comments')
function newElement(e){
    e.preventDefault()
    let newElement = document.createElement("p")
    newElement.innerHTML = input.value ;
    comment.appendChild(newElement)
}
// function submitComment(event){
//     alert('Hello')
//     event.preventDefault()
// }
post.addEventListener('submit', newElement )
