import { BASE_URL } from "../utils/constants";

const checkResponse = (response) => {
  if (response.ok) return response.json();
};

const successResponse = (response) => {
  if (response.success) return response.data;
};

export const request = (endpoint, options) =>
  fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(successResponse)