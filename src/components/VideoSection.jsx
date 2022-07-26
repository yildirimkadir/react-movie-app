import React from "react";

const VideoSection = ({ video }) => {
  return (
    <div className="card w-75 m-auto my-3">
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${video}?autoplay=1&mute=1`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
