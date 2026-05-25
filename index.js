import  menuArray from './data.js'
const foodKinds = document.getElementById("foodKinds")
let html = []
function renderkinds(arr){
    arr.map(item =>{
        html.push(`
        <div class="item">
            <div class="food">
                <div class="emoji">${item.emoji}</div>
                <div>
                    <h2>${item.name}</h2>
                    <p>${item.ingredients}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            <button class="add" id="${item.id}"><i class="fa-solid fa-plus"></i></button>
        </div>
        
        `)
        
    } )
    foodKinds.innerHTML = html.join(" ")
    
}

function addOrder(add){
    const orders = []
    if (Number(add) === 0){
        orders.push(
            `
                <p id="order"></p>
            `
        )
    }
}
    



renderkinds(menuArray)
document.addEventListener("click" , function(e){

})