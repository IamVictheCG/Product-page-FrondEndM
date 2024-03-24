console.log($(".heading h3"));
console.log("hello");
let imageProduct_1 = "images/image-product-1.jpg"
let imageProduct_2 = "images/image-product-2.jpg"
let imageProduct_3 = "images/image-product-3.jpg"
let imageProduct_4 = "images/image-product-4.jpg"

let imageThumbnail_1 = "images/image-product-1-thumbnail.jpg"
let imageThumbnail_2 = "images/image-product-2-thumbnail.jpg"
let imageThumbnail_3 = "images/image-product-3-thumbnail.jpg"
let imageThumbnail_4 = "images/image-product-4-thumbnail.jpg"
let control_plus = $(".productCount > .increase");
let control_minus = $(".productCount > .decrease");

let mainImg = $(".mainImg");
let menu = $(".menu");
let closeMenu = $(".close");
let cart = $(".cart");
let cartIcon = $(".cart_img");
let addToCart = $("#addToCart");
let deleteCartItem;
let cartContent = $(".content");
let empty = $(".empty");
let price = $('.price p:nth-of-type(1)')
let checkout = $('#checkout')

let productCount = $(".productCount p")
let count = 0;
let cartCount = 0;
let currentIndex = 0;
let next = $(".next")
let previous = $(".previous")

const imageProducts = Array(imageProduct_1,imageProduct_2, imageProduct_3, imageProduct_4);

const imageThumbnails = Array(imageThumbnail_1,imageThumbnail_2, imageThumbnail_3, imageThumbnail_4);

console.log(imageProducts);
console.log(imageThumbnails);
console.log(mainImg.attr("src"));


$(next).click(function (e) { 
    e.preventDefault();
    currentIndex = (currentIndex + 1) % imageProducts.length; // Increment index cyclically
    console.log(currentIndex);
    $(mainImg).attr("src", imageProducts[currentIndex]);
    console.log($(mainImg).attr("src"));
});
$(previous).click(function (e) { 
    
    e.preventDefault();
    currentIndex = (currentIndex - 1 + imageProducts.length) % imageProducts.length; // Increment index cyclically
    console.log(currentIndex);
    $(mainImg).attr("src", imageProducts[currentIndex]);
    console.log($(mainImg).attr("src"));
});

function countControl() {
    $(control_plus).click(function () {
        count++;
        console.log(count);
        $(productCount).text(count)
    });

    $(control_minus).click(function () {
        if(count === 0) {
            return
        } else {
            count--;
            console.log(count);
            $(productCount).text(count)
        }
    });
}

function controlNavbar() {
    $(menu).click(function() {
        $(".navbar-nav").addClass('showNavbar');
        $(".navbar-nav").removeClass('hideNavbar');
        $(".black_cover").css('display', 'block');
    })
    
    $(closeMenu).click(function() {
        $(".navbar-nav").addClass('hideNavbar');
        $(".navbar-nav").removeClass('showNavbar');
        $(".black_cover").css('display', 'none');
    })
}

function cartHandler() {
    $(cartIcon).click(function() {
        if ($(cart).css('display') == 'block') {
            $(cart).css('display', 'none');
            console.log($(cart).css('display'));
        } else {
            $(cart).css('display', 'block');
            console.log($(cart).css('display'));
            if(cartCount < 1) {
                $(cartContent).css('display', 'none');
                $(empty).css('display', 'flex');
            }
        }
    })
}

function addToCartHandler() {
        $(addToCart).click(function () {
            $(cartContent).css('display', 'flex');

            cartCount++;
            console.log(cartCount);
            let totalPrice = $(price).text().slice(1) * count;
            console.log(totalPrice);

            // Create HTML for the new cart product
            let newCartProduct = `
            <div class="cartProduct">
                <img src="${imageProducts[currentIndex]}" alt="product" />
                <p>Fall Limited Edition Sneakers <br> $125.00 x <span class="itemQty">${count}</span>  <span class="totalPrice">$${totalPrice}</span></p>
                <img class="delete" src="images/icon-delete.svg" alt="delete">
            </div>`;

            // Find the last product in the cart
            let lastProduct = $(cartContent).find(checkout);
            console.log(lastProduct);

            // Insert the new cart product before the last product
            $(newCartProduct).insertBefore(lastProduct);

            if(cartCount > 0) {
                // $(cartContent).css('display', 'none');
                $(empty).css('display', 'none');
            }


        })

        // $(deleteCartItem).click(function () {

        // })

        // Event delegation to handle delete button clicks
    $(document).on('click', '.delete', function() {
        cartCount--;
        // Find the parent element of the delete button (which is the container for the product)
        let product = $(this).closest('.cartProduct');

        // Perform actions to delete the item or hide the container
        product.remove(); // Removes the entire container from the DOM

        if(cartCount < 1) {
            $(cartContent).css('display', 'none');
            $(empty).css('display', 'flex');
        }
    });
}

$(checkout).click(function() {
    $(cartContent).css('display', 'none');    
})

controlNavbar();
countControl();
cartHandler();
addToCartHandler();