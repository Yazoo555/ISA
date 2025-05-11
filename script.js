async function fetchMovie() {
  const movieName = document.getElementById("searchInput").value.trim();
  const movieResultContainer = document.getElementById("movieResult");
  const errorMessageContainer = document.getElementById("errorMessage");

  hideElements(movieResultContainer, errorMessageContainer);

  if (!movieName) {
    displayError("Please enter a movie title");
    return;
  }

  try {
    showLoading();

    const response = await fetch(
      `movie.php?movieName=${encodeURIComponent(movieName)}`
    );

    const data = await response.json();

    if (data.Response === "True") {
      displayMovieData(data);
      movieResultContainer.style.display = "block";
    } else {
      displayError("Movie not found.");
    }
  } catch (error) {
    displayError("Error fetching movie. Please try again later.");
  }
}

function hideElements(...elements) {
  elements.forEach((el) => (el.style.display = "none"));
}

function showLoading() {
  document.getElementById("movie").innerHTML = "Loading...";
}

function displayMovieData(data) {
  document.getElementById("movie").innerHTML = data.Title || "N/A";
  document.getElementById("year").innerHTML = data.Year || "N/A";
  document.getElementById("rating").innerHTML = data.imdbRating || "N/A";
  document.getElementById("poster").src = data.Poster || "";
  document.getElementById("plot").innerHTML = data.Plot || "N/A";
  document.getElementById("director").innerHTML = data.Director || "N/A";
  document.getElementById("writer").innerHTML = data.Writer || "N/A";
  document.getElementById("actors").innerHTML = data.Actors || "N/A";
  document.getElementById("language").innerHTML = data.Language || "N/A";
}

function displayError(message) {
  const errorMessageContainer = document.getElementById("errorMessage");
  errorMessageContainer.innerHTML = message;
  errorMessageContainer.style.display = "block";
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      fetchMovie();
    }
  });
