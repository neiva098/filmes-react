import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/r-api'
})

export const loadMovies = async () => {
    const response = await api.get((`/?api=filmes`))

    return response.data
}