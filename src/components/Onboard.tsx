import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Firebase, firestore } from "../utils/firebase";
import Store from "../Store/Store";
import { Redirect, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps {}

type FormData = {
  name: any;
  bio: any;
  image: any;
};

const Onboard: React.FC<Props> = props => {
  const { state, dispatch } = useContext(Store);
  const [previewImage, setimage] = useState<string | any>();
  const { handleSubmit, register } = useForm<FormData>();
  const handleImageChange = (e: any) => {
    setimage(URL.createObjectURL(e.target.files[0]));
  };
  const onSubmit = async (data: any) => {
    try {
      await Firebase.storage()
        .ref()
        .child(`profileImg/${state.uid}`)
        .put(data.image[0]);

      const url = await Firebase.storage()
        .ref()
        .child(`profileImg/${state.uid}`)
        .getDownloadURL();

      await firestore
        .collection("users")
        .doc(state.uid)
        .set({
          name: data.name,
          image: url,
          bio: data.bio,
          firstTime: false,
          articleCount: 0
        });

      dispatch({
        type: "ONBOARD",
        payload: {
          name: data.name,
          image: data.image,
          bio: data.bio,
          firstTime: false,
          articleCount: 0
        }
      });
      props.history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  if (!state.firstTime) return <Redirect to="/dashboard" />;
  return (
    <div>
      <div className="container center login">
        <h1 className="mt-2 mb-4">Onboard</h1>
        <img
          className="onboard-img"
          src={
            previewImage
              ? previewImage
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Solid_grey.svg/1024px-Solid_grey.svg.png"
          }
          alt="img"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item center">
            <label htmlFor="image">Select a profile image</label>
            <br />
            <input
              onChange={handleImageChange}
              type="file"
              name="image"
              ref={register}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="password">Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              ref={register}
              required
            />
          </div>
          <div className="form-item">
            <label htmlFor="bio">About you</label>
            <br />
            <textarea
              name="bio"
              placeholder="I like reading books and binge watching tv series."
              ref={register}
              minLength={200}
              required
            />
          </div>
          <div>
            <button className="btn btn-primary btn-sm rounded color mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboard;
