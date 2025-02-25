// Pelìculas en caso de que no funcione la base de datos
const tempData = [
  {
    title: "Guardians of the Galaxy Vol. 2",
    year: 2017,
    director: "James Gunn",
    duration: "2h 16min",
    genre: ["Action", "Adventure", "Comedy"],
    rate: 7.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
    director: "George Lucas",
    duration: "2h 1min",
    genre: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    rate: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
    director: "Peter Jackson",
    duration: "2h 58min",
    genre: ["Action", "Adventure", "Drama", "Fantasy"],
    rate: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
];
// funciòn para cargan las peliculas al html
function cargarpeliculas(elem){
  const div = document.createElement("div")  
  div.classList.add("peliculas")
  const imagen = document.createElement("img")
  imagen.src = elem.poster
  imagen.alt = elem.title
  const title = document.createElement("h3")
  title.textContent = elem.title
  const year = document.createElement("p")
  year.textContent = "Año: " + elem.year
  const director = document.createElement("p")
  director.textContent = "Director: " + elem.director 
  const duration = document.createElement("p")
  duration.textContent = "Duración: " + elem.duration
  const genre = document.createElement("p")
  genre.textContent = "Género: " + elem.genre
  const rateIcon = document.createElement("i");
  rateIcon.classList.add("far", "fa-star");
  const rate = document.createElement("p");
  rate.textContent = "Calificación: ";
  rate.appendChild(rateIcon);
  rate.appendChild(document.createTextNode(" " + elem.rate))
  div.appendChild(imagen)
  div.appendChild(title)
  div.appendChild(director)
  div.appendChild(duration)
  div.appendChild(genre)
  div.appendChild(rate)  
  return div
}

module.exports = {
  tempData,
  cargarpeliculas
}