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

const orders = []
renderkinds(menuArray)
document.addEventListener("click" , function(e){
    if(e.target.className === "add" || e.target.classList.contains("fa-solid")){
        orders.push([menuArray[Number(e.target.id)].name , menuArray[Number(e.target.id)].price] )
        add()
    }
    
})
    
function add(){
    const orderscon = document.getElementById("order")

    orderscon.innerHTML = `
    <div class="orderscon">
        <h2>Your order</h2>
        <div id="meals">
        </div>
        <div class="totalPrice">
        
        </div>
    </div> 
    `
    const meals = document.getElementById("meals")
    let orderId = Math.floor(Math.random() * 10 )
    orders.map(order => 
        meals.innerHTML += `
        <div class="order" id=${orderId}>
            <p>${order[0]}<p>
            <button id="remove" >remove</button>
            <p id="price">${order[1]}</p>
        </div>`
    )
}


