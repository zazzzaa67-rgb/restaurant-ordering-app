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
        const itemId = Number(e.target.closest(".add").id)

        orders.push([menuArray[itemId].name , menuArray[itemId].price , menuArray[itemId].price]   )
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
        <div id="totalPrice">
        
        </div>
    </div> 
    `
    const meals = document.getElementById("meals")
    const totalPrice = document.getElementById("totalPrice")
    let orderId = Math.floor(Math.random() * 10 )
    let total = 0 

    orders.forEach(order  =>{
        meals.innerHTML += `
        <div class="order" id=${orderId}>
            <p>${order[0]}</p>
            <button class="remove" >remove</button>
            <p id="price">$${order[1]}</p>
        </div>`
        total += order[2]}
)
    totalPrice.innerHTML = `<div class="container">
    <h3>Total price :  </h3>
    <p>${total}</p></h3>
    </div>`
}


