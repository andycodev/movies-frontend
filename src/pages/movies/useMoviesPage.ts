import {ref} from "vue";

const useMoviesPage = () => {

    const title = ref<string>('Peliculas')

    return {
        title
    }
}
export default useMoviesPage;