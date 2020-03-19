import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { unsplash } from "../../utils/unsplash";
import { toast } from "react-toastify";

import "./PhotoPage.scss";

const PhotoPage = ({ location, history, match }) => {
  const [photoData, setPhotoData] = useState({
    photo: null,
    isFetching: false
  });
  const { state = {} } = location;
  const { background } = state;

  const fetchData = async () => {
    try {
      setPhotoData({ photo: null, isFetching: true });

      const photo = await unsplash.getPhotoById(match.params.id);
      setPhotoData({ photo: photo, isFetching: false });
    } catch (error) {
      toast.error("Something went wrong" + `${error.id}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!background) return;
    const body = document.getElementsByTagName("body");
    body[0].classList.add("modal-opened");

    return () => body[0].classList.remove("modal-opened");
  });

  return (
    <div
      className={background ? "photo-page modal" : "photo-page"}
      onClick={() => history.goBack()}
    >
      <div className="photo-page__main">
        {background && <button onClick={() => history.goBack()}>Close</button>}
        {photoData.photo && (
          <div className="photo-page__main-image">
            <img src={`${photoData.photo.data.urls.regular}`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(PhotoPage);
