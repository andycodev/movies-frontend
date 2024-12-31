import {useQuery, useMutation, useQueryClient, QueryClient} from '@tanstack/vue-query';
import {deleteMovieFn, getMoviesFn} from "@/services/movies/movies.service";

const useMoviesListPage = () => {

  /* Variables */
  const queryClient: QueryClient = useQueryClient();

  /* Methods */
  function useGetMovies() {
    const { data, isLoading, refetch, isRefetching } = useQuery({
      queryKey: ['movies'],
      queryFn: () => getMoviesFn(),
      refetchOnWindowFocus: false,
    });
    return { data, isLoading, refetch, isRefetching }
  }

  function useDeleteMovie() {
    const { mutate, isPending, isSuccess } = useMutation({
      mutationKey: ['delete-movie'],
      mutationFn: (movieId: number) => deleteMovieFn(movieId),
      onSuccess: () => queryClient.refetchQueries({ queryKey: ['movies'] })
    });
    return { mutate, isPending, isSuccess };
  }

  const moviesCarousel = [
    {
      "movieId": 1,
      "title": "Matrix",
      "description": "Un hacker descubre la verdadera naturaleza de su realidad...",
      "year": 1999,
      "imageUrl": "https://image.tmdb.org/t/p/w500/dVZdaXk4oPTv9rNh8WlR3dED5VJ.jpg"
    },
    {
      "movieId": 2,
      "title": "El Padrino",
      "description": "El patriarca de una dinastía criminal transfiere el control a su hijo reticente.",
      "year": 1972,
      "imageUrl": "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg"
    },
    {
      "movieId": 3,
      "title": "El Caballero Oscuro",
      "description": "El Joker desata el caos en Gotham mientras Batman lucha por salvar la ciudad.",
      "year": 2008,
      "imageUrl": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    }
  ]

  return {
    moviesCarousel,
    useGetMovies,
    useDeleteMovie
  }
}

export default useMoviesListPage;

