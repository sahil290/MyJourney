import React, { useState } from "react";

const Comment = () => {
  const [knowMore, setKnowMore] = useState(false);

  return (
    <>
      <div id="comment-main-wrapper">
        <h2>Popular Destinations for you</h2>
        <div className="sec-comment-wrapper">
          <div className="comments-area">
            <div
              className="card card-new"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <img
                src="https://w0.peakpx.com/wallpaper/533/235/HD-wallpaper-adiyogi-shiv.jpg"
                alt="Country"
              />
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>India</span>
                </div>
              )}
            </div>
            <div
              className="card card-new"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <img
                src="https://honeymoonbackpackers.com/wp-content/uploads/2018/08/beach-bora-bora-clouds-753626.jpg"
                alt="Country"
              />
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Hawaii</span>
                </div>
              )}
            </div>
            <div
              className="card card-new"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <img
                src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/colourful-burano-royalty-free-image-996084626-1553013660.jpg?crop=0.671xw:1.00xh;0.166xw,0&resize=640:*"
                alt="Country"
              />
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Spain</span>
                </div>
              )}
            </div>
            <div
              className="card card-new"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <img
                src="http://services.travelsavers.com/AMGService.svc/REST/GetImage?ImageID=70486cc5-242a-e911-b4aa-782bcb66a2f2"
                alt="Country"
              />
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Italy</span>
                </div>
              )}
            </div>
            <div
              className="card card-new"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/61640e8c8e05d1a9f22194f1/0x0.jpg?format=jpg&width=1200"
                alt="Country"
              />
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>China</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
{
  /* <div className="add-comment-wrapper">
          <span>Any Suggstions?  Write Us here!</span>
            <textarea type="text" rows="5" cols="40" placeholder="Leave a comment" />
            <button>Add Comment</button>
          </div> */
}
