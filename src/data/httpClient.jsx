
const API = "https://api.themoviedb.org/3";
const AUTH_TOKEN = " eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmM2ZTViMTUxZWUyYjMwZGMzMmE4Y2IwYjEzMWEyNCIsIm5iZiI6MTczNzMxMzMyNi42ODYsInN1YiI6IjY3OGQ0YzJlODgwZjZiZDM4NDZlMDQ0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5mMABa2sWhaKc3kNmcyIcHT9V192yYpnUVjdT6Zbwg";

export function get(path) {
    return fetch(`${API}${path}`, {
        headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`,
        },
    }).then((result) => result.json());
}