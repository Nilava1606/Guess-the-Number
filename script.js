let random=(parseInt((Math.random() *100)+1))
const userInput=document.querySelector('#userinput')
const submitInput=document.querySelector('#Submit')
const previousguess=document.querySelector('#prevguess')
const remaining=document.querySelector('#remaining')
const loworhigh=document.querySelector('.loworhigh')
const startOver=document.querySelector('.backend')

const p=document.createElement('p')
let prevguess=[]
let numOfGuess=1
let playgame=true

if(playgame){
    submitInput.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        validate(guess)
        
    })
}

function validate(guess){
if(isNaN(guess))
    alert('Please Enter a Valid Number Between 1 to 100')
else if(guess<1)
    alert('Please Enter a Number more than 1')
else if(guess>100)
    alert('Please Enter a Number less than 101')
else{
    prevguess.push(guess)
    if(numOfGuess>10){
        cleanAndAdd(guess)
        message(`Game Over! Random Number was ${random}`)
        endGame()
    }
    else{
        cleanAndAdd(guess)
        check(guess)
    }
}
}
function check(guess){
    if(guess===random){
    message(`You Guessed it Right`)
    endGame()
    }
    else if(guess<random)
    message(`Number is too Low`)
    else if(guess>random)
    message(`Number is too High`)
}
function cleanAndAdd(guess){
    userInput.value=''
    previousguess.innerHTML+=`${guess},`
    numOfGuess++
    remaining.innerHTML=`${(11-numOfGuess)}`
    

}
function message(message){
    loworhigh.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame" class="cursor-pointer text-white flex justify-center font-serif text-lg xl:mx-[30px] w-full xl:w-auto xl:pl-5 bg-gray-500 border-2 mt-20 xl:mt-12 border-black rounded-lg"> Start New Game </h2>`
    startOver.appendChild(p)
    playgame=false
    newGame()
}
function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        let random=(parseInt((Math.random() *100)+1))
        prevguess=[]
        numOfGuess=1
        previousguess.innerHTML=''
        remaining.innerHTML=`${(11-numOfGuess)}`
        loworhigh.innerHTML=''
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame=true
    })
}