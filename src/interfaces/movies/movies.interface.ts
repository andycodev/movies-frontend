export interface IMovie {
    movieId: number,
    title: string,
    description: string,
    year: number,
    imageUrl: string
}

export type IMovieForm = Omit<IMovie, 'movieId'>; //Alternativa
/* export interface IMovieForm {
    title: string,
    description: string,
    year: number,
    imageUrl: string
} */