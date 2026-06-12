async function getJoke(){
     const joke = await fetch("https://api.chucknorris.io/jokes/random")
   const data = await joke.json() 
    // console.log(data.value)
    document.getElementById("joke").innerHTML = data.value
}

document.getElementById("getJoke").addEventListener("click", getJoke);