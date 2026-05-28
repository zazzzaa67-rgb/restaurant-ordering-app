import  menuArray from './data.js'
const foodKinds = document.getElementById("foodKinds")
const card = document.getElementById("details")
const complete =document.getElementById("complete")

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

const  orders = []
renderkinds(menuArray)
document.addEventListener("click" , function(e){
    if(e.target.className === "add" || e.target.classList.contains("fa-solid")){
        const itemId = Number(e.target.closest(".add").id)
        orders.push([menuArray[itemId].name , menuArray[itemId].price , menuArray[itemId].price]   )
        add()
    }else if(e.target.id == "complete"){
        card.style.display = "flex"
        card.innerHTML = `
        <form id="card">
            <h3>Enter your details</h3>
            <input id="name" class="detail" name="name" placeholder="Enter your name " required>
            
            <input id="cardNumber" class="detail" placeholder="Enter your card number" required>
            <input id="cvv" class="detail" placeholder="Enter CVV" required >
            <button id="pay">Pay</button>
        </form>
        `
    }else if (e.target.id == "pay"){
        e.preventDefault()
        let  info = document.getElementsByClassName("detail")
        let allfilled = true
        for(let input of info ){
            if (input.value.trim() == ''){
                allfilled = false
                break
            }
        }
        if(allfilled){

            let form = new FormData(document.getElementById("card"))
            card.style.display = 'none'
            complete.style.display = "none"
            orderscon.innerHTML = `
            <div class="done">
                <p>Thanks, ${form.get('name')} . your Order is on its way</p>
            </div>`
        }else(
            alert("Enter your details")
        )
        
    }
})
    
const orderscon = document.getElementById("order")
function add(){

    orderscon.innerHTML = `
    <h2>Your order</h2>
    <div class="orderscon">
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
            <p id="order">${order[0]}</p>
            <button class="remove" >remove</button>
            <p id="price">$${order[1]}</p>
        </div>`
        total += order[2]}
)
    totalPrice.innerHTML = 
    `<div class="container">
        <h3>Total price :  </h3>
        <p class="total">$${total}</p>
    </div>`
    complete.style.display = "block"
    complete.style.textAlign = "center"  
}
// some modify
// set complete to percent 

