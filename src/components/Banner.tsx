import * as React from "react";
import CSS from "csstype";
// import BannerImg from "../images/img_1.jpg";
import useEffect from "react";
import { firestore } from "../utils/firebase";
import { Link } from "react-router-dom";

interface state {
  banner: object | any;
}

const Banner: React.FC = () => {
  const [state, setState] = React.useState<state>({
    banner: {}
  });
  React.useEffect(() => {
    firestore
      .collection("bannerArticle")
      .doc("vjmAtXIP9g6T5Xb4IO2d")
      .get()
      .then(res => {
        console.log("banner", res.data());
        setState({
          ...state,
          banner: res.data()
        });
      });
  }, []);

  const imageNg: CSS.Properties = {
    backgroundImage: `url(${state.banner && state.banner.image})`
  };
  return (
    <>
      <section className="site-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div>
                <Link
                  to={`/article/${state.banner.Id}`}
                  className="a-block d-flex align-items-center height-lg"
                  style={imageNg}
                >
                  <div className="text half-to-full">
                    <h3>{state.banner.title}</h3>
                    <p>{state.banner.description}</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
