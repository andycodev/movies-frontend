import baseApi from '@/api/baseApi';
import type { IMovie, IMovieForm } from '@/interfaces/movies/movies.interface';

export const getMoviesFn = async (): Promise<IMovie[]> => {
    const { data } = await baseApi.get<IMovie[]>(`/movies`);
    return data;
}

export const getMovieByIdFn = async (movieId: number) => {
    const { data } = await baseApi.get<IMovie>(`/movies/${movieId}`);
    return data;
}

export const createMovieFn = async (data: IMovieForm) => {
    const { data: response } = await baseApi.post(`/movies`, data);
    return response;
}

export const updateMovieFn = async (data: IMovie) => {
    const { movieId, ...body } = data;
    const { data: response } = await baseApi.put(`/movies/${movieId}`, body);
    return response;
}

export const deleteMovieFn = async (id: number) => {
    const { data: response } = await baseApi.delete(`/movies/${id}`);
    return response;
}
