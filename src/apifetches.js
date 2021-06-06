const apiKEY = process.env.REACT_APP_API_KEY;

const endpoints = {
	baseURL: `https://api.themoviedb.org/3/`,
	Multi_first_half: `search/multi?api_key=${apiKEY}&language=en-US`,
	getSimilar: `similar?api_key=${apiKEY}`,
};

export default endpoints;
