let selectedjson = Cookies.get( `product_selected` );
console.log(typeof(selectedjson))
let product_container = document.querySelector(`#main-section`);

if(selectedjson === undefined) {
    product_container.insertAdjacentHTML(`afterend`, `<h3 style=" color: #e3333b;
    align-self: strat; font-size: 1.6rem;">YOUR CART IS EMPITY</h3>`)
} else {
    let product = JSON.parse(selectedjson);
    for ( let i = 0; i < product.length; i++ )
    {
        product_container.insertAdjacentHTML( `beforeend`,
            `<div class="main_card" style="width:100%;">
            <h3>${ product[i][`name`] }</h3>
            <img style="width:200px; height:200px;"src="${ product[i][`image_url`] }" />
            <p style="width:60%;">${ product[i][`description`] }</p>
            <h6>${ product[i][`price`] }$</h6>
        <button class="btn" products_name="${ product[`name`] }"
              
            products_price="${ product[`price`] }" 
            products_description="${ product[`description`] }"
            prodcust_img="${ product[`image_url`] }">
            Delete
        </button>
    </div>`
        );
    }
}


