import type {
  LinksFunction,
  LoaderFunction,
  MetaFunction
} from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import type { Film } from "~/types/Film"

import { getFilms } from "~/api/films"

export const loader: LoaderFunction = async () => {
  return getFilms()
}

export const meta: MetaFunction = () => {
  return {
    title: 'Film | Studio Ghibli',
    description: 'List of Films'
  }
}

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: 'styles' }]
}

export default function Films() {
  const films = useLoaderData<Film[]>()

  return (
    <div className="flex flex-col p-16 font-mono text-neutral-800 bg-neutral-300">
      <h1 className="text-5xl font-black text-center">
        Studio Ghibli Films
      </h1>

      <form className="flex items-center w-full max-w-2xl mx-auto mt-10">
        <input
          placeholder="Type a title..."
          className="flex-1 px-3 py-2 border-2 rounded"
        />

        <button
          type="submit"
          className="px-5 py-2 mx-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          SEARCH
        </button>
      </form>

      <div className="grid grid-cols-4 gap-10 mt-20">
        {films.map((film) => (
          <div
            key={film.id}
            className="cursor-pointer hover:scale-105 hover:font-bold"
          >
            <h2>{film.title}</h2>

            <img
              src={film.image}
              alt={film.title}
              className="object-cover mt-2 hover:shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  )
}