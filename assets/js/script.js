console.log("hola")
async function api(){
    try{
        const response = await fetch('https://mindicador.cl/api/')
        const data = await response.json()
        console.log(data.uf.valor)
    } catch{
        alert("error")
    }
}
api()
console.log("chau") 