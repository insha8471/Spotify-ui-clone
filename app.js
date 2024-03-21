// //search

const search_btn = document.querySelector(".search-btn");
const search_bar = document.querySelector(".search");

search_btn.addEventListener("click", () => {
    search_bar.style.visibility = "visible";
})

search_bar.addEventListener("click", () => {
    search_bar.style.border = "1px solid #fff";
})