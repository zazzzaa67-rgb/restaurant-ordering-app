import  menuArray from './data.js'
const foodKinds = document.getElementById("foodKinds")
let html = []
function render(arr){
    arr.map(item =>{
        html.push(`
        <div class="item">
            <div class="emoji">${item.emoji}</div>
            <div>
                <h2>${item.name}</h2>
                <p>${item.ingredients}</p>
                <p class="price">$${item.price}</p>
            </div>
        </div>
        
        `)
        
    } )
    foodKinds.innerHTML = html.join(" ")
    

}
render(menuArray)