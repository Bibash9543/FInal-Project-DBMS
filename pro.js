// Placeholder data for featured and trending movies
const featuredMovies = [
    { title: 'Movie 1', poster: 'movie1.jpg', rating: 8.5 },
    { title: 'Movie 2', poster: 'movie2.jpg', rating: 7.9 },
    // Add more movies here
  ];
  
  const trendingMovies = [
    { title: 'Movie 3', poster: 'movie3.jpg', rating: 7.8 },
    { title: 'Movie 4', poster: 'movie4.jpg', rating: 6.7 },
    // Add more movies here
  ];
  
  // Function to display movies in a section
  function displayMovies(movies, sectionClass) {
    const section = document.querySelector(`.${sectionClass}`);
  
    const movieHTML = movies.map(movie => `
      <div class="movie">
        <img src="${movie.poster}" alt="${movie.title}" />
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.rating}</p>
      </div>
    `).join('');
  
    section.innerHTML = movieHTML;
  }
  
  // Call the function to display featured and trending movies
  displayMovies(featuredMovies, 'featured');
  displayMovies(trendingMovies, 'trending');
  