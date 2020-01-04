import * as React from "react";
import CSS from "csstype";
// import BannerImg from "../images/img_1.jpg";
const Banner: React.FC = () => {
  const imageNg: CSS.Properties = {
    backgroundImage: `url(https://via.placeholder.com/1920x1080)`
  };
  return (
    <>
      <section className="site-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <a
                  href="blog-single.html"
                  className="a-block d-flex align-items-center height-lg"
                  style={imageNg}
                >
                  <div className="text half-to-full">
                    <h3>Special Article of the week</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quidem nobis, ut dicta eaque ipsa laudantium!
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
