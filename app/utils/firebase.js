import Firebase from 'firebase';

export function bookmark(userId, movie) {
  Firebase.database().ref(`users/${userId}/movies`).update({
    [movie.id]: movie
  });
}

export function removeBookmark(userId, movieId) {
  Firebase.database().ref(`users/${userId}/movies/${movieId}`).remove();
}


export function getBookmarkRequest(userId) {
  return new Promise(resolve => {
    let bookmarkMovies = [];
    Firebase.database().ref(`users/${userId}/movies`).on("value", function (snapshot) {
      const movies = snapshot.val();
      for (let key in movies) {
        bookmarkMovies.push(movies[key]);
      }
      resolve(bookmarkMovies);
    });
  }).then((bookmarkMovies) => {
    return bookmarkMovies;
  });
}
