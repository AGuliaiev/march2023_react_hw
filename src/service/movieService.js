import axios from "axios";

const apiKey = 'ddb43a60b8283b1dccd0de534703fffa';

const getAllMovies = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`);
        return response.data.results;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return null;
    }
};

export {
    getAllMovies
};
