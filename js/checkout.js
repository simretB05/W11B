let selectedjson = Cookies.get( `product_selected` );
console.log(typeof(selectedjson))
let product_container = document.querySelector(`#main-section`);
let get_main= document.querySelector(`#main`)
if(selectedjson === undefined) {
    product_container.insertAdjacentHTML(`afterbegin`, `<h3 style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;">YOUR CART IS EMPITY</h3>`)
    

} else {
    let productsArray = JSON.parse( selectedjson );
    get_main.insertAdjacentHTML( `beforeend`,
    ` <button class="empty-btn">Clear All</button>`)

    for ( let i = 0; i < productsArray.length; i++ )
    {
        product_container.insertAdjacentHTML( `beforeend`,
        `<section>
            <div class="main_card" style="width:100%;">
                <h3>${ productsArray[i][`name`] }</h3>
                <img style="width:200px; height:200px;"src="${ productsArray[i][`image_url`] }" />
                <p style="width:60%;">${ productsArray[i][`description`] }</p>
                <h6>${ productsArray[i][`price`] }$</h6>
                <button >delete</button>
        
           </div>
     
    `
        );
    }
}

function deleteItem( details ){
Cookies.remove(`selection`);
}
let delete_button = document.querySelector( `.delete` );
delete_button.addEventListener(`click`, deletePokemon)


function emptyCart( details ){
Cookies.remove(`product_selected`);
}
let empty_btn = document.querySelector( `.empty-btn` );
empty_btn.addEventListener(`click`, emptyCart)


