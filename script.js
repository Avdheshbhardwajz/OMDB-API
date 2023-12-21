let movieBox = document.querySelector(".movies");
// let searchBtn = document.querySelector(".search");
let searchBtn = document.querySelector(".search");
let namee = document.getElementById("movieName");
// let key = "6498f74";
searchBtn.addEventListener("click", fetchData);
function fetchData() {
  fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=6498f74&s=${namee.value}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      displayData(data.Search);
    })
    .catch((err) => {
      console.log("there is an problem in fetching ", err);
    });
}
function displayData(movies) {
  movieBox.innerHTML = "";
  if (!movies || movies.length === 0) {
    let movieContainer = document.createElement("div");
    movieContainer.className = "picture";
    movieContainer.innerHTML = "<h3>Nothing Found</h3>";

    movieBox.appendChild(movieContainer);
  } else {
    movies.forEach((movie) => {
      let movieContainer = document.createElement("div");
      movieContainer.className = "picture";
      movieContainer.innerHTML = `
       <img src="${movie.Poster}" alt="${movie.Title}">
       <h3><span>Title</span>${movie.Title}</h3>
       <p><span>Type</span>${movie.Type}</p>
       <p><span>Year</span>${movie.Year}</p>
       <p><span>imdbID</span>${movie.imdbID}</p>
       `;
      movieBox.appendChild(movieContainer);
    });
  }
}
