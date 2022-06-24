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

