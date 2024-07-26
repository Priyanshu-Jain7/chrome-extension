const getJokes= async()=>{
    try{
        
        const res= await fetch("https://api.chucknorris.io/jokes/random");
        const data = await res.json()
    }catch(error){}
};
window.addEventListener("load",() =>{
    getJokes();
})