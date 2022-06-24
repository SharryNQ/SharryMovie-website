let kids = document.querySelector(".kids")
console.log(kids)
let boys = document.querySelector(".boys")
let shows = document.querySelector(".shows")
let bests = document.querySelector(".bests")
let movies = document.querySelector(".movies")
let movie = document.querySelector(".movie")
movies.classList.add("d-none")


function loadMovie(input, inputType) {
    fetch(`https://api.tvmaze.com/search/shows?q=${inputType}`)
        .then(res => res.json())
        .then(data => {
            displayMovie(data, input)
            console.log(data, input)
        })
}

function displayMovie(data, input) {
    if(data.length == 0){
       movie.innerHTML =  "Your search item is not available"
       movie.style.color = "red"
       movie.style.fontSize= "2rem"
    }else{
        data.forEach(movie => {
            input.innerHTML += `
            <div class="card m-3" style="width: 18rem;">
            <img src="${movie.show.image? movie.show.image.medium : "This movie picture is not available"}" class="card-img-top" alt="...">
                <div class="card-body d-flex flex-column justify-content-center">
                    <h5 class="card-title">${movie.show.name}</h5>
                    <p class="card-text">${movie?.show?.summary?.slice(0,80)}</p>
                    <a href="${movie.show.url}" class=" my-btn btn">See and Download</a>
                </div>
            </div>`
    
        });
    }

}
loadMovie(kids, "kids")
loadMovie(boys, "comedy")
loadMovie(shows, "shows")
loadMovie(bests, "best")


// handle searh btn 

let modal = document.querySelector(".modal-search")

let searchText = document.querySelector("#search-text")
let searchBtn = document.querySelector("#button-search")
searchBtn.addEventListener("click", function () {
    movies.classList.remove("d-none");
    movies.classList.add("d-block");
    movie.innerHTML = '';

    loadMovie(movie, `${searchText.value}`)
    searchText.value = ""
    
})