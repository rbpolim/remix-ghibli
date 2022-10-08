import type { Film } from "~/types/Film";

export async function getFilms() {
  const response = await fetch("https://ghibliapi.herokuapp.com/films");

  const films: Film[] = await response.json();

  return films;
}
