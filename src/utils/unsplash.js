import Request from "./request";

export const unsplash = {
  getMainPagePhotos: page => {
    const request = new Request();
    return request.get(`https://api.unsplash.com/photos?page=${page}`, {
      Authorization:
        "Client-ID 1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8"
    });
  },
  getPhotosByQuery: (qString, page) => {
    const request = new Request();

    console.log(qString);

    return request.get(
      `https://api.unsplash.com/search/photos?page=1&query=${qString}&page=${page}`,
      {
        Authorization:
          "Client-ID 1daed900b99463debb658164eea9672dc7f95f9939b97a745a479ddbe5592be8"
      }
    );
  }
};
