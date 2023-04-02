let selectedjson = Cookies.get( `product_selected` );
console.log(typeof(selectedjson))
let product_container = document.querySelector(`#main-section`);

if(selectedjson === undefined) {
    product_container.insertAdjacentHTML(`afterbegin`, `<h3 style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;">YOUR CART IS EMPITY</h3>`)
} else {
    let productsArray = JSON.parse( selectedjson );
    for ( let i = 0; i < productsArray.length; i++ )
    {
        product_container.insertAdjacentHTML( `beforeend`,
            `<section><div class="main_card" style="width:100%;">
            <h3>${ productsArray[i][`name`] }</h3>
            <img style="width:200px; height:200px;"src="${ productsArray[i][`image_url`] }" />
            <p style="width:60%;">${ productsArray[i][`description`] }</p>
            <h6>${ productsArray[i][`price`] }$</h6>
         <button>delete</button>

    </div>
    `
        );
    }
}


