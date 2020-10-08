const apiKey = '0b284e589d747768a9d9d72a1dd2b38c';

const endpoints = {
	baseURL: `https://api.themoviedb.org/3/`,
	Multi_first_half: `search/multi?api_key=${apiKey}&language=en-US`,
	getSimilar: `similar?api_key=${apiKey}`,
};

export default endpoints;
