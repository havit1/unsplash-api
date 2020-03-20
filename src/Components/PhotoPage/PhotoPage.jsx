import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { unsplash } from "../../utils/unsplash";
import { toast } from "react-toastify";
import "./PhotoPage.scss";

const PhotoPage = ({ location, history, match }) => {
  const [photoData, setPhotoData] = useState({
    photo: null,
    isFetching: true
  });
  const { state = {} } = location;
  const { background } = state;
  const { photo } = photoData;
  document.title = photo ? `${photo.data.alt_description}` : "Photo"

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
    !photoData.isFetching ?
      <div
        className={background ? "photo-page modal" : "photo-page"}
      // onClick={() => history.goBack()}
      >
        <div className="photo-page__main">
          <div className="photo-page__header">
            <div className="photo-page__header-credentials">
              <p className="photo-page__header-name">{photo.data.user.name}</p>
              {photo.data.user.instagram_username && <p className="photo-page__header-instagram">@{photo.data.user.instagram_username}</p>}
            </div>
            {background && <i className="fas fa-times photo-page__header-back-button" onClick={() => history.goBack()}></i>}
          </div>
          <div className="photo-page__main-image">
            <img src={`${photoData.photo.data.urls.regular}`} />
          </div>
          <div className="photo-page__main-other">
            <p className="photo-page__main-other-description">{photoData.photo.data.description}</p>

            {photo.data.related_collections.results.length > 0 && <div className="photo-page__main-other-collections">
              <p>Featured in: </p>
              <ul className="photo-page__main-other-collections-list">
                {photo.data.related_collections.results.map(collection =>
                  <li key={collection.id} className="photo-page__main-other-collections-list-element">
                    <Link to="">
                      <div className="photo-page__main-other-collections-list-element-images">
                        {collection.preview_photos.slice(1).map(photo => <img key={photo.id} src={`${photo.urls.small}`}></img>)}
                      </div>
                    </Link>
                  </li>)}
              </ul>
            </div>}
          </div>
        </div>
      </div> : <div className={background ? "photo-page modal" : "photo-page"}></div>
  );
};

export default withRouter(PhotoPage);
