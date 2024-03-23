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

let mainImg = $(".mainImg");
let next = $(".next")
// let previous = $(".previous")

const imageProducts = Array(imageProduct_1,imageProduct_2, imageProduct_3, imageProduct_4);

const imageThumbnails = Array(imageThumbnail_1,imageThumbnail_2, imageThumbnail_3, imageThumbnail_4);

console.log(imageProducts);
console.log(imageThumbnails);
console.log(mainImg.attr("src"));

let currentIndex = 0;

$(next).click(function (e) { 
    e.preventDefault();
    currentIndex = (currentIndex + 1) % imageProducts.length; // Increment index cyclically
    console.log(currentIndex);
    $(mainImg).attr("src", imageProducts[currentIndex]);
    console.log($(mainImg).attr("src"));
});

// i want to move to the next element of the imageProducts[] array as i click the next button