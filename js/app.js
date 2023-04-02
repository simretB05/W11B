//created avariable that stores the value from a cookies
let selected_json = Cookies.get( `product_selected` );
// created an array that stores data about ice-creams 
let ketoIceCream_products = [
    {
        id:1,
        name: `mint ice cream`,
        price: 2,
        image_url: `/images/ice-cream1.jpg`,
        description:`Mint ice creamis frequently used to flavor ice cream, especially in North America, Asia, and Europe.`
   },
    {
        id:2,
        name: `vanilla ice cream`,
        price: 3,
        image_url:`/images/ice-cream2.jpg`,
        description:`Vanilla is frequently used to flavor ice cream, especially in North America, Asia, and Europe.`
    },
    {
        id:3,
        name: ` Chocolate Ice Cream`,
        price: 1,
        image_url: `/images/ice-cream3.jpg`,
        description:`Chocolate frequently used to flavor ice cream, especially in North America, Asia, and Europe.`
    },
]
 //selected the the section where the items are displyed with queryselector
let get_main = document.querySelector(`#main-section`)
 //looped through the our object arry and diplayed the products in the html
for ( let i = 0; i<ketoIceCream_products.length; i++ ){
    get_main.insertAdjacentHTML( `beforeend`, 
        `<div class="main_card">
                <div class="image_card">
                    <img src="${ ketoIceCream_products[i][`image_url`]}"
                    alt="image of ice cream"/>
                </div>
                <h2 class="title">${ketoIceCream_products[i][`name`]}</h2>
                <p class="text"> ${ketoIceCream_products[i][`description`]}</p>
                <p class="text"> ${ketoIceCream_products[i][`price`]} $CAD</p>
                
                <button class="btn"product_name="${ketoIceCream_products[i][`name`]}" 
                    product_price="${ketoIceCream_products[i][`price`]}" 
                    product_description="${ketoIceCream_products[i][`description`]}"
                    product_image_url="${ketoIceCream_products[i][`image_url`]}">
                    ADD To Cart
                </button>
            </div>`
    )
}

// created a new empty Array  this will be used to add
let newArry = []
 //created a function that takes details as an argument
function addToCart( details ){
// created an object and stored the values of all the data i get from a
//  button click with attributes in an object key value form
    let selected = {
        name: details[`target`].getAttribute(`product_name`),
        image_url: details[`target`].getAttribute(`product_image_url`),
        description: details[`target`].getAttribute(`product_description`),
        price: details[`target`].getAttribute(`product_price`),
    }
    
    if ( !( selected_json === undefined ) ){
  
    //cheking if the selected json value is stored in our cookies when we use the get method on top
    //if it is the newArry Arry is set to the value of 
    // the cookie we get from get method , but this time its parsed to change it from a string to an object.
    newArry = JSON.parse(selected_json);
        
    }
   // pusing the value of the  selected object to the newArry when whenver we click on the button
    newArry.push( selected )
    //reassign the value of the selected_json with the value of the newArry and store it as s string  using JSON
    selected_json = JSON.stringify( newArry );
    // /seting cookes with the value of the selected__json  this will always make sure the arry has value that will be displayed  even when the page is refreshed
    Cookies.set( `product_selected`, selected_json);
}

// added an event listener that will listen to a click from ever all targeted buttons  and gets javascript to call the addTocart function
let product_buttons = document.querySelectorAll(`.main_card`);
for(let i=0; i<product_buttons.length; i++) {
    product_buttons[i].addEventListener(`click`, addToCart);
}















