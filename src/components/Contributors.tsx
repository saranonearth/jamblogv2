import React, { useEffect, useState } from "react";
import { firestore } from "../utils/firebase";

interface Props {}
interface state {
  loading: boolean;
  contributors: Array<object | any>;
}

const Contributors: React.FC<Props> = () => {
  const [state, setState] = useState<state>({
    loading: true,
    contributors: []
  });
  useEffect(() => {
    firestore
      .collection("users")
      .where("articleCount", ">=", 2)
      .get()
      .then(res => {
        let contributors: Array<object> = [];

        res.forEach(d => {
          contributors.push(d.data());
        });
        console.log(contributors);
        setState({
          ...state,
          loading: false,
          contributors
        });
      });
  }, []);

  return (
    <div>
      <div className="container cc">
        <h2 className="mt-4 mb-4">Contributors</h2>
        <div className="row blog-entries mt-3">
          <div className="col-md-12 col-lg-12 main-content">
            <div className="row cc">
              {state.loading ? (
                <div className="cc">
                  <p className="cc">Loading...</p>
                </div>
              ) : state.contributors.length > 0 ? (
                state.contributors.map(c => (
                  <div key={c.Id} className="col-md-2 cc">
                    <img
                      src={c.image}
                      className="contributor-img"
                      alt={c.name}
                    />
                    <p className="tc">{c.name}</p>
                  </div>
                ))
              ) : (
                <p>No contributors</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contributors;
