async function fetchMovie() {
  var movieName = document.getElementById("searchInput").value.trim();
  var movieResultContainer = document.getElementById("movieResult");
  var errorMessageContainer = document.getElementById("errorMessage");

  hideElements(movieResultContainer, errorMessageContainer);

  if (!movieName) {
    displayError("Please enter a movie title");
    return;
  }

  try {
    showLoading();
    var data = await getMovieData(movieName);

    if (data.Response == "True") {
      displayMovieData(data);
      movieResultContainer.style.display = "block";
    } else {
      displayError("Movie not found. ");
    }
  } catch (error) {
    displayError(" Please try again later.");
  }
}

function hideElements() {
  for (var i = 0; i < arguments.length; i++) {
    arguments[i].style.display = "none";
  }
}

function showLoading() {
  document.getElementById("movie").innerHTML = "Loading...";
}

async function getMovieData(movieName) {
  var response = await fetch(
    `https://www.omdbapi.com/?t=${movieName}&apikey=84a38e48`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  return await response.json();
}

function displayMovieData(data) {
  document.getElementById("movie").innerHTML = data.Title;
  document.getElementById("year").innerHTML = data.Year;
  document.getElementById("rating").innerHTML = data.imdbRating;
  document.getElementById("poster").src = data.Poster;
  document.getElementById("plot").innerHTML = data.Plot;
  document.getElementById("director").innerHTML = data.Director;
  document.getElementById("writer").innerHTML = data.Writer;
  document.getElementById("actors").innerHTML = data.Actors;
  document.getElementById("language").innerHTML = data.Language;
}

function displayError(message) {
  var errorMessageContainer = document.getElementById("errorMessage");
  errorMessageContainer.innerHTML = message;
  errorMessageContainer.style.display = "block";
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
      fetchMovie();
    }
  });
