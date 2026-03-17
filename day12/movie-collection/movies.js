// =========================
// 영화 컬렉션 관리 프로그램
// =========================

const defaultDirector = "Unknown";
const defaultGenre = "Unknown";

let movies = [];

// 영화 데이터 추가
movies.push({ title: "The Matrix", director: "Wachowskis", year: 1999, genre: "Sci-Fi" });
movies.push({ title: "Inception", director: "Nolan", year: 2010, genre: "Sci-Fi" });
movies.push({ title: "Parasite", director: "Bong Joon-ho", year: 2019, genre: "Drama" });

// 영화 목록 출력 함수
function printMovies(movieList = []) {
    console.log("Movie Collection:");
    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i];

        if (!movie.title) movie.title = "Unknown";
        if (!movie.director) movie.director = defaultDirector;
        if (!movie.genre) movie.genre = defaultGenre;

        console.log(
            `${i + 1}. Title: ${movie.title}, Director: ${movie.director}, Year: ${movie.year}, Genre: ${movie.genre}`
        );
    }
    console.log(`Total Movies: ${movieList.length}\n`);
}

// 기본 영화 목록 출력
printMovies(movies);

// 장르 검색 기능
function searchByGenre(movieList, genre = "") {
    let found = [];
    for (let i = 0; i < movieList.length; i++) {
        if (movieList[i].genre.toLowerCase() === genre.toLowerCase()) {
            found.push(movieList[i]);
        }
    }

    console.log(`Genre Search: ${genre}`);
    if (found.length > 0) {
        printMovies(found);
    } else {
        console.log(`No movies found for genre: ${genre}\n`);
    }
}

// 예시 실행
searchByGenre(movies, "Sci-Fi");

// 통계 기능
const calculateAverageYear = function(movieList = []) {
    if (movieList.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < movieList.length; i++) {
        sum += movieList[i].year;
    }
    return (sum / movieList.length).toFixed(2);
};

const findNewestMovie = (movieList = []) => {
    if (movieList.length === 0) return null;
    let newest = movieList[0];
    for (let i = 1; i < movieList.length; i++) {
        if (movieList[i].year > newest.year) {
            newest = movieList[i];
        }
    }
    return newest;
};

function addMovies(...newMovies) {
    movies.push(...newMovies);
}

// 새로운 영화 추가
addMovies(
    { title: "Interstellar", director: "Nolan", year: 2014, genre: "Sci-Fi" },
    { title: "Oldboy", director: "Park Chan-wook", year: 2003, genre: "Thriller" }
);

// 통계 출력
console.log("Statistics:");
console.log("Average Year:", calculateAverageYear(movies));
let newest = findNewestMovie(movies);
console.log(`Newest Movie: ${newest.title} (${newest.year})\n`);