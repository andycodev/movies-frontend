import {useQuery, useMutation, useQueryClient, QueryClient} from '@tanstack/vue-query';
import {deleteMovieFn, getMoviesFn} from "@/services/movies/movies.service";
import {ref} from "vue";

const useMoviesAdminPage = () => {

  /* Variables */
  const queryClient: QueryClient = useQueryClient();
  const search = ref('');
  const headers: any = [
    {title: 'Código', key: 'movieId'},
    {title: 'Título', key: 'title'},
    {title: 'Descripción'},
    {title: 'Año', key: 'year'},
    {title: 'Imagen'},
    {title: 'Acciones', align: 'center'},
  ];

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

  const { mutate: deleteMovie } = useDeleteMovie();

  const onDelete = (movieId: number) => {
    if (confirm('¿Seguro de eliminar el película?')) {
      deleteMovie(movieId);
    }
  }

  return {
    search,
    headers,
    useGetMovies,
    onDelete
  }
}

export default useMoviesAdminPage;

