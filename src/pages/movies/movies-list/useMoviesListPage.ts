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

  return {
    useGetMovies,
    useDeleteMovie
  }
}

export default useMoviesListPage;

