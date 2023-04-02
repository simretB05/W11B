let selected_json = Cookies.get( `product_selected` );
console.log(selected_json)
let ketoIceCream_products= [{
    name: `mint ice cream`,
    price: 2,
    image_url: `/images/ice-cream1.jpg`,
    description:`Mint ice creamis frequently used to flavor ice cream, especially in North America, Asia, and Europe.`
},
{
    name: `vanilla ice cream`,
    price: 3,
    image_url:`/images/ice-cream2.jpg`,
    description:`Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe.`
},
{
    name: ` Chocolate Ice Cream`,
    price: 1,
    image_url: `/images/ice-cream3.jpg`,
    description:`Chocolate frequently used to flavor ice cream, especially in North America, Asia, and Europe.`
 },
]
let get_main = document.querySelector(`#main-section`)

for ( let i = 0; i<ketoIceCream_products.length; i++ ){
    get_main.insertAdjacentHTML( `beforeend`, 
        `<div class="main_card">
                <div class="image_card">
                    <img src="${ ketoIceCream_products[i][`image_url`]}"
                    alt="image of ice cream"/>
                </div>
                <h2 class="title">${ketoIceCream_products[i][`name`]}</h2>
                <p class="text"> ${ketoIceCream_products[i][`description`]}</p>
                <p class="text"> price $CAD${ketoIceCream_products[i][`price`]}</p>
                
                <button class="btn" product_name="${ketoIceCream_products[i][`name`]}" 
                    product_price="${ketoIceCream_products[i][`price`]}" 
                    product_description="${ketoIceCream_products[i][`description`]}"
                    product_image_url="${ketoIceCream_products[i][`image_url`]}">
                    ADD To Cart
                </button>
            </div>`
    )
}


let newArry = []
 
function addToCart(details) {
    let selected = {
        name: details[`target`].getAttribute(`product_name`),
        image_url: details[`target`].getAttribute(`product_image_url`),
        description: details[`target`].getAttribute(`product_description`),
        price: details[`target`].getAttribute(`product_price`),
    }
    if ( !( selected_json === undefined ) ){
    
    newArry = JSON.parse(selected_json);
        
    }
   newArry.push(selected)
   selected_json = JSON.stringify(newArry);
    Cookies.set( `product_selected`, selected_json);
}

let product_buttons = document.querySelectorAll(`.main_card`);
for(let i=0; i<product_buttons.length; i++) {
    product_buttons[i].addEventListener(`click`, addToCart);
}















