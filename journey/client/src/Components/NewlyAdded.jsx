import React, { useState } from "react";

const NewlyAdded = () => {
  const [knowMore, setKnowMore] = useState(false);
  return (
    <>
      <div className="newlyAdded-wrapper">
        <div id="h2-wrapper">
          <h2 id="newlyAdded-heading">Newly Added</h2>
        </div>
        <div className="newlyadded-wrapper">
          <div className="sec-image-newly-added-wrapper">
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/traveler-get-customer-support-in-forest-or-camping-via-smartphone-2112237-1779237.png"
              alt="Alternate travel Logo"
            />
          </div>
          <div id="card-wrapper">
            <div
              className="card"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <div className="card-top">
                <span id="card-image">
                  <img
                    src="https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
                    alt="User"
                    id="user"
                  />
                </span>
                <span id="user-name-wrapper">
                  <h6 id="user-name">Sahil Katoch</h6>
                  <p className="date">22-Aug-2022</p>
                  <p className="dest-name">Huwaei Baech</p>
                </span>
              </div>
              <div className="card-bottom-wrapper">
                <p className="user-comment">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using...
                </p>
              </div>
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Know More</span>
                </div>
              )}
            </div>
            <div
              className="card"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <div className="card-top">
                <span id="card-image">
                  <img
                    src="https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
                    alt="User"
                    id="user"
                  />
                </span>
                <span id="user-name-wrapper">
                  <h6 id="user-name">Sahil Katoch</h6>
                  <p className="date">22-Aug-2022</p>
                  <p className="dest-name">Huwaei Baech</p>
                </span>
              </div>
              <div className="card-bottom-wrapper">
                <p className="user-comment">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using...
                </p>
              </div>
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Know More</span>
                </div>
              )}
            </div>
            <div
              className="card"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <div className="card-top">
                <span id="card-image">
                  <img
                    src="https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
                    alt="User"
                    id="user"
                  />
                </span>
                <span id="user-name-wrapper">
                  <h6 id="user-name">Sahil Katoch</h6>
                  <p className="date">22-Aug-2022</p>
                  <p className="dest-name">Huwaei Baech</p>
                </span>
              </div>
              <div className="card-bottom-wrapper">
                <p className="user-comment">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using...
                </p>
              </div>
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Know More</span>
                </div>
              )}
            </div>
            <div
              className="card"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <div className="card-top">
                <span id="card-image">
                  <img
                    src="https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
                    alt="User"
                    id="user"
                  />
                </span>
                <span id="user-name-wrapper">
                  <h6 id="user-name">Sahil Katoch</h6>
                  <p className="date">22-Aug-2022</p>
                  <p className="dest-name">Huwaei Baech</p>
                </span>
              </div>
              <div className="card-bottom-wrapper">
                <p className="user-comment">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using...
                </p>
              </div>
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Know More</span>
                </div>
              )}
            </div>
            <div
              className="card"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <div className="card-top">
                <span id="card-image">
                  <img
                    src="https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
                    alt="User"
                    id="user"
                  />
                </span>
                <span id="user-name-wrapper">
                  <h6 id="user-name">Sahil Katoch</h6>
                  <p className="date">22-Aug-2022</p>
                  <p className="dest-name">Huwaei Baech</p>
                </span>
              </div>
              <div className="card-bottom-wrapper">
                <p className="user-comment">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using...
                </p>
              </div>
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Know More</span>
                </div>
              )}
            </div>
            <div
              className="card"
              onMouseEnter={() => setKnowMore(true)}
              onMouseLeave={() => setKnowMore(false)}
            >
              <div className="card-top">
                <span id="card-image">
                  <img
                    src="https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?w=2000"
                    alt="User"
                    id="user"
                  />
                </span>
                <span id="user-name-wrapper">
                  <h6 id="user-name">Sahil Katoch</h6>
                  <p className="date">22-Aug-2022</p>
                  <p className="dest-name">Huwaei Baech</p>
                </span>
              </div>
              <div className="card-bottom-wrapper">
                <p className="user-comment">
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout. The point of using Lorem Ipsum is
                  that it has a more-or-less normal distribution of letters, as opposed to using...
                </p>
              </div>
              {knowMore && (
                <div id="know-more-wrapper">
                  <span>Know More</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewlyAdded;
