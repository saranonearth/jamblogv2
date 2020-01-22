import * as React from "react";
import CSS from "csstype";
// import BannerImg from "../images/img_1.jpg";
const Banner: React.FC = () => {
  const imageNg: CSS.Properties = {
    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/jamblog19.appspot.com/o/58ef8ba2905c8570965535.png?alt=media&token=f5be89ce-0fa4-4733-a05f-72ffe3f7c40a)`
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
                    <h3>We need to escape from out thoughts.</h3>
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
