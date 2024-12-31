import {useQuery, useMutation, useQueryClient, QueryClient} from '@tanstack/vue-query';
import {deleteMovieFn, getMoviesFn} from "@/services/movies/movies.service";

const useMoviesListPage = () => {

  /* Variables */
  const queryClient: QueryClient = useQueryClient();

  /* Methods */
  function useGetMovies() {
    const {data, isLoading, refetch, isRefetching} = useQuery({
      queryKey: ['movies'],
      queryFn: () => getMoviesFn(),
      refetchOnWindowFocus: false,
    });
    return {data, isLoading, refetch, isRefetching}
  }

  function useDeleteMovie() {
    const {mutate, isPending, isSuccess} = useMutation({
      mutationKey: ['delete-movie'],
      mutationFn: (movieId: number) => deleteMovieFn(movieId),
      onSuccess: () => queryClient.refetchQueries({queryKey: ['movies']})
    });
    return {mutate, isPending, isSuccess};
  }

  const moviesCarousel = [
    {
      movieId: 1,
      title: "Inception",
      description: "Un ladrón que roba secretos a través de sueños debe cumplir una misión imposible.",
      year: 2010,
      imageUrl: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
    },
    {
      movieId: 2,
      title: "Gladiator",
      description: "Un general romano traicionado busca vengar la muerte de su familia y su emperador.",
      year: 2000,
      imageUrl: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
    },
    {
      movieId: 3,
      title: "Parasite",
      description: "Una familia se infiltra en el hogar de una familia rica con consecuencias inesperadas.",
      year: 2019,
      imageUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
    }
  ];


  return {
    moviesCarousel,
    useGetMovies,
    useDeleteMovie
  }
}

export default useMoviesListPage;

