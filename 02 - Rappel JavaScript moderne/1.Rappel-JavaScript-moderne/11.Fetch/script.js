fetch("https://jsonplaceholder.typicode.com/user")
.then(response => {
    console.log(data)
    if(!data.ok) throw new Error(`Erreur ${response.status}`)
    return data.json()
})
.then(data => {
    console.log("SECOND THEN !!!",data)
})
.catch(e => {
    console.log(e)
})