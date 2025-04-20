import axios from 'axios';

export const API = async () => {

const options = {
  method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/latestnews',
  headers: {
    'X-RapidAPI-Key': 'cb5ec0d937mshd5990c2595c25fap103db2jsn373dd91ee4a4',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  },
};

try {
  const response = await axios.request(options);
    return response.data
} catch (error) {
  console.error(error);
}
}

export const APIGames = async () => {

const options = {
  method: 'GET',
  url: 'https://mmo-games.p.rapidapi.com/games',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com',
  },
};

try {
	const response = await axios.request(options);
	return response.data
} catch (error) {
	console.error(error);
}
}

