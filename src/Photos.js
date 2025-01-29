import React from "react";
import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4 images" key={index}>
                <figure className="hover-img">
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img className="img-fluid" src={photo.src.landscape} />
                    <figcaption>
                      <h5>view full image</h5>
                    </figcaption>
                  </a>
                </figure>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
