class Movie {
  constructor(title, director, actors = []) {
    this.title = title;
    this.director = director;
    this.actors = actors;
  }

  addActor(name) {
    this.actors.push(name);
  }

  removeActor(name) {
    const index = this.actors.indexOf(name);
    if (index !== -1) {
      this.actors.splice(index, 1);
    }
  }

  get castSize() {
    return this.actors.length;
  }
}

function groupByDirector(movies) {
  const result = {};
  for (const movie of movies) {
    if (!result[movie.director]) {
      result[movie.director] = [];
    }
    result[movie.director].push(movie);
  }
  return result;
}

function getUniqueActors(movies) {
  const set = new Set();
  for (const movie of movies) {
    for (const actor of movie.actors) {
      set.add(actor);
    }
  }
  return [...set];
}

function groupByActorCount(movies) {
  const result = {};
  for (const movie of movies) {
    const count = movie.castSize;
    if (!result[count]) {
      result[count] = [];
    }
    result[count].push(movie);
  }
  return result;
}

function getMoviesByActor(movies, actorName) {
  return movies.filter((movie) => movie.actors.includes(actorName));
}

function getAllTitles(movies) {
  return movies.map((movie) => movie.title);
}

if (typeof module !== 'undefined') {
  module.exports = {
    Movie,
    groupByDirector,
    getUniqueActors,
    groupByActorCount,
    getMoviesByActor,
    getAllTitles,
  };
}