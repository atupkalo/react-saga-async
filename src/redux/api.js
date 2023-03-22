import axios from "axios";

const API_ENDPOINT =
  "https://api.thecatapi.com/v1/images/search?limit=12&has_breeds=1&api_key=live_rHspa8YdMKFF9ebBT20O6wPXIa6imAA1aoGKLm9Xm3XZ1NNO8rsaeH8epKnPLqSxc";

export const fetchMovies = async (movieName) => {
  return axios.get(`${API_ENDPOINT}&s*${movieName}`);
};

//live_rHspa8YdMKFF9ebBT20O6wPXIa6imAA1aoGKLm9Xm3XZ1NNO8rsaeH8epKnPLqSx
