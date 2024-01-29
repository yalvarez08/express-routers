// Run when the DOM is ready to load existing data from the server
function onReady() {
  console.log('JavaScript ready!');

  // Get existing data from server
  getBooks();
  getMovies();
}

onReady();

// Get existing books from server and render to DOM
function getBooks() {
  console.log('Getting books...');
  axios({
    method: 'GET',
    url: '/books'
  }).then(function (response) {
    renderBooks(response.data);
  }).catch(function (error) {
    console.log('Error getting books', error);
    alert('Sorry. Something bad happened. Try again later.');
  })
}

// Get existing movies from server and render to DOM
function getMovies() {
  console.log('Getting movies...');
  axios({
    method: 'GET',
    url: '/movies'
  }).then(function (response) {
    renderMovies(response.data);
  }).catch(function (error) {
    console.log('Error getting movies', error);
    alert('Sorry. Something bad happened. Try again later.');
  })
}

function renderBooks(books) {
  console.log('rendering books to the DOM', books);

  let outBooks = document.getElementById('out-books');

  // empty the output element
  outBooks.innerHTML = '';

  // loop through the books to display them
  for (let item of books) {
    // Append the book to the DOM in book output area
    outBooks.innerHTML += `
          <li>
            <em>${item.title}</em> by ${item.author}
          </li>`
  }
}

function renderMovies(movies) {
  console.log('rendering movies to the DOM', movies);

  let outMovies = document.getElementById('out-movies');

  // empty the output element
  outMovies.innerHTML = '';

  // loop through the movies to display them
  for (let item of movies) {
    // Append the movie to the DOM in movie output area
    outMovies.innerHTML += `
          <li>
            <em>${item.title}</em> by ${item.director}
          </li>`
  }
}

function addBook(event) {
  event.preventDefault();

  // Store the book inputs in variables
  let bookTitle = document.getElementById('book-title');
  let bookAuthor = document.getElementById('book-author');

  // Create a new object to send to the server
  let newBook = {
    title: bookTitle.value,
    author: bookAuthor.value
  }
  console.log('Sending book to server...', newBook);

  // Send the new book to the server
  axios({
    method: 'POST',
    url: '/books',
    data: newBook
  }).then(function (response) {
    console.log('Book added');

    // Clear the inputs
    bookTitle.value = '';
    bookAuthor.value = '';

    // Refresh the Books on DOM
    getBooks();
  })
}

function addMovie(event) {
  event.preventDefault();

  // Store the movie inputs in variables
  let movieTitle = document.getElementById('movie-title');
  let movieDirector = document.getElementById('movie-director');

  // Create a new object to send to the server
  let newMovie = {
    title: movieTitle.value,
    director: movieDirector.value
  }
  console.log('Sending movie to server...', newMovie);

  // Send the new movie to the server
  // example with callbacks the way we've been doing them
  //   axios({
  //     method: 'POST',
  //     url: '/movies',
  //     data: newMovie
  //   }).then(function(response) {
  //     console.log('Movie added');

  //     // Clear the inputs
  //     movieTitle.value = '';
  //     movieDirector.value = '';

  //     // Refresh the Movies on DOM
  //     getMovies();
  //   })
  // }

  // same code with 'arrow function' syntax for the callback
  axios({
    method: 'POST',
    url: '/movies',
    data: newMovie
  }).then(
    (response) => {
      console.log('Movie added');

      // Clear the inputs
      movieTitle.value = '';
      movieDirector.value = '';

      // Refresh the Movies on DOM
      getMovies();
    }
  )
}




// function takesTwo(param1, param2) {
//   //do stuff
// }

// function (param1, param2) {
//   //do stuff
// }

// (param1, param2) => {
//   //do stuff
// }




// function takesOne(param1) {
//   //do stuff
// }

// function (param1) {
//   //do stuff
// }

// param1 => {
//   //do stuff
// }
