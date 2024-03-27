console.log($(".heading h3"));
console.log("hello");
let imageProduct_1_url = "images/image-product-1.jpg"
let imageProduct_2_url = "images/image-product-2.jpg"
let imageProduct_3_url = "images/image-product-3.jpg"
let imageProduct_4_url = "images/image-product-4.jpg"

let imageThumbnail_1_url = "images/image-product-1-thumbnail.jpg";
let imageThumbnail_2_url = "images/image-product-2-thumbnail.jpg";
let imageThumbnail_3_url = "images/image-product-3-thumbnail.jpg";
let imageThumbnail_4_url = "images/image-product-4-thumbnail.jpg";
let control_plus = $(".productCount > .increase");
let control_minus = $(".productCount > .decrease");
// let imageThumbnails = $('.thumbnail');
let imageThumbnails = Array(...$('.thumbnail'));
// console.log(imageThumbnails[2]);

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
let innerWidth = $(window).innerWidth();
console.log(innerWidth);
let desktop;


const imageProducts = Array(imageProduct_1_url,imageProduct_2_url, imageProduct_3_url, imageProduct_4_url);

const imageThumbnail_url = Array(imageThumbnail_1_url,imageThumbnail_2_url, imageThumbnail_3_url, imageThumbnail_4_url);

//=========================preview========================================
let preview = $(".preview");
let preview_mainImg = $(".preview_mainImg");
let preview_menu = $(".preview_menu");
let preview_closeMenu = $(".preview_close");
let preview_next = $(".preview_next")
let preview_previous = $(".preview_previous")
let preview_imageThumbnails = Array(...$('.preview_thumbnail'));
//=========================================================================


console.log(imageProducts);
console.log(imageThumbnail_url);
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
    $(cart).css('display', 'none');    
})

//=============================================================
//Desktop View

function desktopView() {
    $.each(imageThumbnails, function(index, element) {
        $(element).click(function() {
            if ($(this)) {
                $(this).find('.blur').css('opacity', '0.7');
                $(imageThumbnails).not($(this)).find('.blur').css('opacity', '0');
                // console.log($(this).attr('id'));
                $(mainImg).attr('src', imageProducts[index])
                // console.log(index);
            } 
            // else {
            // }
        })
        // $(element).find('img').css('border-color', '#e27500');
    })

    //========preview==========

    $.each(preview_imageThumbnails, function(index, element) {
        $(element).click(function() {
            if ($(this)) {
                $(this).find('.preview_blur').css('opacity', '0.7');
                $(preview_imageThumbnails).not($(this)).find('.blur').css('opacity', '0');
                // console.log($(this).attr('id'));
                $(preview_mainImg).attr('src', imageProducts[index])
                // console.log(index);
            } 
        })
    })

}


//=========================preview========================================
// let preview_mainImg = $(".preview_mainImg");
// let preview_menu = $(".preview_menu");
// let preview_closeMenu = $(".preview_close");
// let preview_next = $(".preview_next")
// let preview_previous = $(".preview_previous")

$(mainImg).click(function (e) { 
    e.preventDefault();
    $(".black_cover").css('display', 'block');
    $(".preview").css('display', 'flex');
});

$(preview_closeMenu).click(function (e) { 
    e.preventDefault();
    $(".black_cover").css('display', 'none');
    $(".preview").css('display', 'none');
});

$(preview_next).click(function (e) { 
    e.preventDefault();
    currentIndex = (currentIndex + 1) % imageProducts.length; // Increment index cyclically
    console.log(currentIndex);
    $(preview_mainImg).attr("src", imageProducts[currentIndex]);
    console.log($(preview_mainImg).attr("src"));
});
$(preview_previous).click(function (e) { 
    
    e.preventDefault();
    currentIndex = (currentIndex - 1 + imageProducts.length) % imageProducts.length; // Increment index cyclically
    console.log(currentIndex);
    $(preview_mainImg).attr("src", imageProducts[currentIndex]);
    console.log($(preview_mainImg).attr("src"));
});


controlNavbar();
countControl();
cartHandler();
addToCartHandler();
if (innerWidth > 800) {
    desktopView();
}