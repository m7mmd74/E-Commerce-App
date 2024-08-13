var cartItems = 0;
var sliderImg;
var i = 1;
var sliderInterval, cartIcon;
var result, Images, Names, Ratings, Prices;

//filters

function fetchPhones() {
    Images = document.getElementsByClassName("Product-Img");
    Names = document.getElementsByClassName("Product-Name");
    Ratings = document.getElementsByClassName("Product-Rating");
    Prices = document.getElementsByClassName("Product-Price");

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                for (var i = 0; i < result.length; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }

                }


            }
        }
    }
    xhr.open("GET", "../ProductsList/Phones.json");
    xhr.send();

}

function fetchLaptops() {
    Images = document.getElementsByClassName("Product-Img");
    Names = document.getElementsByClassName("Product-Name");
    Ratings = document.getElementsByClassName("Product-Rating");
    Prices = document.getElementsByClassName("Product-Price");

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                for (var i = 0; i < result.length; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }

                }


            }
        }
    }
    xhr.open("GET", "../ProductsList/Labtops.json");
    xhr.send();

}

function fetchCars() {
    Images = document.getElementsByClassName("Product-Img");
    Names = document.getElementsByClassName("Product-Name");
    Ratings = document.getElementsByClassName("Product-Rating");
    Prices = document.getElementsByClassName("Product-Price");

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                for (var i = 0; i < result.length; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }

                }


            }
        }
    }
    xhr.open("GET", "../ProductsList/Cars.json");
    xhr.send();

}

function fetchShoes() {
    Images = document.getElementsByClassName("Product-Img");
    Names = document.getElementsByClassName("Product-Name");
    Ratings = document.getElementsByClassName("Product-Rating");
    Prices = document.getElementsByClassName("Product-Price");

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.response);
                for (var i = 0; i < result.length; i++) {
                    Images[i].src = result[i].imgSrc;
                    Images[i].alt = result[i].imgAlt;
                    Names[i].innerHTML = result[i].name;
                    Prices[i].innerHTML = result[i].price;
                    //rating
                    if (result[i].rating == 1) { Ratings[i].innerHTML = " &#9733; &#9734; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 2) { Ratings[i].innerHTML = " &#9733; &#9733; &#9734; &#9734; &#9734; " }
                    else if (result[i].rating == 3) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9734; &#9734; " }
                    else if (result[i].rating == 4) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9734; " }
                    else if (result[i].rating == 5) { Ratings[i].innerHTML = " &#9733; &#9733; &#9733; &#9733; &#9733; " }

                }


            }
        }
    }
    xhr.open("GET", "../ProductsList/Shoes.json");
    xhr.send();

}
//End of Filters




// Sliders
function slideImg() {
    setTimeout(nextImg(), 1000);
}
sliderInterval = setInterval(slideImg, 3000);
function nextImg() {
    clearInterval(sliderInterval);
    sliderImg = document.getElementById("img-slider");
    if (i <= 0) {
        i = 10;
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".jpg";
    }
    else if (i >= 11) {
        i = 1;
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".jpg";
        i++;
    }
    else {
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".jpg";
        i++;
    }
    sliderInterval = setInterval(slideImg, 2000);
}

function prevImg() {
    clearInterval(sliderInterval);

    sliderImg = document.getElementById("img-slider");

    if (i <= 0) {
        i = 10;
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".jpg";
        i--;
    }
    else {
        sliderImg.src = "../Project-Images/slider-imgs/" + i + ".jpg";
        i--;
    }
    sliderInterval = setInterval(slideImg, 2000);
}
//End of Sliders

function addToCart(event) {
    cartIcon = document.getElementById("Cart-Counter");
    event.preventDefault();
    cartItems++;
    cartIcon.innerHTML = "" + cartItems + "";
}