const apiKEY = '0b284e589d747768a9d9d72a1dd2b38c';

const endpoints = {
	baseURL: `https://api.themoviedb.org/3/`,
	Multi_first_half: `search/multi?api_key=${apiKEY}&language=en-US`,
	getSimilar: `similar?api_key=${apiKEY}`,
};

export default endpoints;
