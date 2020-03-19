import Request from "./request";

export const unsplash = {
  getMainPagePhotos: page => {
    const request = new Request();
    return request.get(`https://api.unsplash.com/photos?page=${page}`, {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    });
  },
  getPhotosByQuery: (qString, page) => {
    const request = new Request();

    return request.get(
      `https://api.unsplash.com/search/photos?page=${page}&query=${qString.toLowerCase()}`,
      {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
      }
    );
  },
  getPhotoById: photoId => {
    const request = new Request();
    return request.get(`https://api.unsplash.com/photos/${photoId}`, {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_API_KEY}`
    });
  }
};
