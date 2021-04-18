const jokeEl=document.getElementById('joke');
const jokeBtn=document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke)

 generateJoke()

 function generateJoke(){

const config= {
    headers:{
    Accept:'application/json',

},
}
    fetch('https://icanhazdadjoke.com',config)
        .then((res)=>res.json())
        .then((data)=>{
        jokeEl.innerHTML=data.joke
    })
    
}


//We can also use async and await methord for API.It looks much cleaner. In modern days people use that. However this fetch methord is totally fine

