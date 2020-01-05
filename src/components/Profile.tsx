import React, { useState } from "react";
import Store from "../Store/Store";
import { useForm } from "react-hook-form";
import { Firebase, firestore } from "../utils/firebase";

type FormData = {
  name: any;
  bio: any;
  image: any;
};
const Profile: React.FC = () => {
  const { state, dispatch } = React.useContext(Store);
  const [view, setView] = useState<string | any>("profile");
  const [msg, setMsg] = useState<string | any>(null);
  const [previewImage, setimage] = useState<string | any>();
  const { handleSubmit, register } = useForm<FormData>({
    defaultValues: {
      name: state.user.name,
      bio: state.user.bio
    }
  });
  const handleImageChange = (e: any) => {
    setimage(URL.createObjectURL(e.target.files[0]));
  };

  const onSubmit = async (data: any) => {
    console.log(data.name, data.image, data.bio);
    try {
      console.log(data.image.length === 0);
      if (data.image.length === 0) {
        firestore
          .collection("users")
          .doc(state.uid)
          .update({
            name: data.name,
            image: state.user.image,
            bio: data.bio
          });
        dispatch({
          type: "EDIT_PROFILE",
          payload: {
            image: state.user.image,
            name: data.name,
            bio: data.bio
          }
        });
        setMsg("Updated");
      } else {
        Firebase.storage()
          .ref()
          .child(`profileImg/${state.uid + new Date()}`)
          .put(data.image[0])
          .then(snapshot => {
            snapshot.ref.getDownloadURL().then(yurl => {
              firestore
                .collection("users")
                .doc(state.uid)
                .update({
                  name: data.name,
                  image: yurl,
                  bio: data.bio
                });

              dispatch({
                type: "EDIT_PROFILE",
                payload: {
                  image: yurl,
                  name: data.name,
                  bio: data.bio
                }
              });
              setMsg("Updated");
            });
          });
      }
    } catch (error) {
      setMsg("unable to update");
      console.log(error);
    }
  };

  console.log(state);
  return (
    <div>
      <div className="container">
        <div className="login">
          {view === "profile" ? (
            <>
              {" "}
              <div className="center">
                <img
                  className="profile-image"
                  src={state.user && state.user.image}
                  alt={state.user.name}
                />
                <h2>{state.user && state.user.name}</h2>
                <p>{state.user && state.user.bio}</p>
                <div>
                  <button
                    onClick={() => {
                      setView("editProfile");
                    }}
                    className="btn btn-primary btn-sm rounded color"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </>
          ) : null}
          {view === "editProfile" ? (
            <>
              <p
                onClick={() => {
                  setView("profile");
                  setMsg(null);
                }}
                className="mb-1 center"
              >
                <u>Back</u>
              </p>
              <div className="center">
                <img
                  className="profile-image"
                  src={
                    previewImage ? previewImage : state.user && state.user.image
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
                      // minLength={200}
                      name="bio"
                      placeholder="I like reading books and binge watching tv series."
                      ref={register}
                      required
                    />
                  </div>
                  <div>
                    <button className="btn btn-primary btn-sm rounded color mt-3">
                      Save
                    </button>
                    <p>{msg}</p>
                  </div>
                </form>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Profile;
