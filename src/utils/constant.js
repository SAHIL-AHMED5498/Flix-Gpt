


export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_TOKEN,
  },
};

export const image_cdn_url = process.env.REACT_APP_IMAGE_CDN;

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const GOOGLE_API_KEY=process.env.REACT_APP_GOOGLE_API_KEY
