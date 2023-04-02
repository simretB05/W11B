// created a variable that will store  a string value from cookie using the get Method 
let selectedjson = Cookies.get( `product_selected` );
//selecting a tag from checkout html using querySelector
let product_container = document.querySelector( `#main-section` );

let get_main = document.querySelector( `#main` );

// checking  if the  selectedJson in  available in the  cookies jar
// if it is not and is undefind give an error message  
if(selectedjson === undefined) {
    
    product_container.insertAdjacentHTML(`afterbegin`, `<h3 style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;">YOUR CART IS EMPITY</h3>`)
    

} else
{
    // if we have a value in our selectedJson  we parse it using a Json and store it in a new variable 
    let productsArray = JSON.parse( selectedjson );
    // adding a button when we have a value  in our coockies jar that will clear the cookies when we want to clear our selction clicked 
    get_main.insertAdjacentHTML( `beforeend`,
        ` <button class="empty-btn">Clear All</button>` );
// looping through the productsArry object  and displaying the saved coockies items in the checkout html 
    for ( let i = 0; i < productsArray.length; i++ ) {
        product_container.insertAdjacentHTML( `beforeend`,
        `
            <div class="main_card" style="width:100%;">
                <h3>${ productsArray[i][`name`] }</h3>
                <img style="width:200px; height:200px;"src="${ productsArray[i][`image_url`] }" />
                <p style="width:60%;">${ productsArray[i][`description`] }</p>
                <h6>${ productsArray[i][`price`] }$</h6>
                <button class="delete" >delete</button>
           </div>
     
    `
        );
    }
}

function deleteItem( details ){
    Cookies.remove( `selection` );
    
  
    

}
// get the delete button tag using querySelectors
let delete_button = document.querySelector( `.delete` );
delete_button.addEventListener(`click`, deleteItem)


function emptyCart( details ){
    Cookies.remove( `product_selected` );
    product_container[`style`][`display`] = `none`
    empty_btn[`style`][`display`]=`none`
    
   get_main.insertAdjacentHTML(`afterbegin`, `<h3 style="color: #e3333b;
   align-self: strat; font-size: 1.6rem;">YOUR CART IS EMPITY</h3>`)
        
    
    
}

// get the delete button tag using querySelectors and
//  adding event lsitener and making js call the emptycart function to remove our selection and display our empty cart message

let empty_btn = document.querySelector( `.empty-btn` );
empty_btn.addEventListener(`click`, emptyCart)


