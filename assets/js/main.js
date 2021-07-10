const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Searchbar
const searchbarItems = $$(".header__searchbar-item");
const searchbarItemActive = $(".header__searchbar-item.active");

let isInput = true;

$(".input").addEventListener("focusout", () => {
    isInput = false;
})

window.addEventListener("click", async function (event) {
    if (event.target.parentNode.classList[2] !== "active" && event.target.classList[2] !== "active" && event.target.classList[0] !== "input") {
        if ($(".header__searchbar-item.active")) {
            $(".header__searchbar-item.active").classList.remove("active");
        }
    }
});

searchbarItems.forEach((element) => {
    element.onclick = function () {
        this.children[1].onclick = function () {
            isInput = true;
        }
        if (this.classList[2] === 'active' && isInput === false) {
            this.classList.remove("active");
            isInput = true;
        }
        else {
            if ($(".header__searchbar-item.active")) {
                $(".header__searchbar-item.active").classList.remove("active");
            }
            this.classList.add("active");
        }
    }
})

const categoryItems = $$(".category_item")
const categoryItemContents = $$(".futuregetaway_content")

const categoryItemActive = $(".category_item.category_item--active")
const categoryLineUp = $(".category_line--up")

categoryLineUp.style.left = (categoryItemActive.offsetLeft - 152) + "px";
categoryLineUp.style.width = (categoryItemActive.offsetWidth - 17) + "px";

categoryItems.forEach((item, index) => {
    const content = categoryItemContents[index];
    item.onclick = function () {
        $(".category_item.category_item--active").classList.remove("category_item--active");
        $(".futuregetaway_content.futuregetaway_content--active").classList.remove("futuregetaway_content--active");

        categoryLineUp.style.left = (this.offsetLeft - 152) + "px";
        categoryLineUp.style.width = (this.offsetWidth - 17) + "px";

        this.classList.add("category_item--active");
        content.classList.add("futuregetaway_content--active");
    };
});

// Modal
// Get the modal
const modal = document.getElementById("modal__container");

const openModal = () => {
    modal.style.display = "block";
    $("body").style.overflow = "hidden";
}

const removeActive = () => {
    $(".header__category-item.header__category--active").classList.remove("header__category--active");
    $(".modal__body-item.modal__body--active").classList.remove("modal__body--active");
}

// When the user clicks the button, open the modal 
$(".btn__globe-modal").onclick = function () {
    openModal();
}

// When the user clicks on <span> (x), close the modal
$(".modal--close").onclick = function () {
    modal.style.display = "none";
    $("body").style.overflow = "auto";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        $("body").style.overflow = "auto";
    }

    if(event.target !== $(".header__navbar-item-profile")) {
        profile.style.display = "none";
    }
}

$$(".header__category-item").forEach((item, index) => {
    item.onclick = function () {
        removeActive();
        this.classList.add("header__category--active");
        $$(".modal__body-item")[index].classList.add("modal__body--active");
    }
})

$$(".footernav_link")[0].onclick = () => {
    openModal();
    removeActive();
    $$(".header__category-item")[0].classList.add("header__category--active");
    $$(".modal__body-item")[0].classList.add("modal__body--active");
}

$$(".footernav_link")[1].onclick = () => {
    openModal();
    removeActive();
    $$(".header__category-item")[1].classList.add("header__category--active");
    $$(".modal__body-item")[1].classList.add("modal__body--active");
}

// Profile
const profile = document.getElementById("header__navbar-control");

$(".header__navbar-item-profile").onclick = function() {
    let a = document.getElementById("header__navbar-control");
    if(a.style.display === "" || a.style.display === "none"){
        a.style.display = "block";
    }
    else
    {
        a.style.display = "none";
    }
}
