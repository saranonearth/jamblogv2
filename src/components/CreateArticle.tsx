import React, { useState, useEffect, useContext } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { firestore } from "../utils/firebase";
import Store from "../Store/Store";
interface Props {}

const CreateArticle: React.FC<Props> = () => {
  const { state, dispatch } = useContext(Store);
  const [data, setData] = useState<object | any>({});
  const [content, setContent] = useState<string | any>(null);
  const [message, setMessage] = useState<string | any>(null);
  const handleEditorChange = (e: any) => {
    setContent(e.target.getContent());
  };
  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const publish = async () => {
    firestore
      .collection("articles")
      .doc()
      .set({
        title: data.title,
        description: data.description,
        content: content,
        author: state.user,
        authorId: state.uid,
        date: new Date()
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  };
  useEffect(() => {
    const clearMessage = setTimeout(() => {
      setMessage(null);
    }, 3000);
    return () => {
      clearTimeout(clearMessage);
    };
  }, [message]);
  return (
    <div>
      <div>
        <label htmlFor="title">Title</label> <br />
        <input
          className="field"
          type="text"
          name="title"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="title">Description</label> <br />
        <input
          className="field"
          type="text"
          name="description"
          onChange={handleChange}
          maxLength={200}
        />
      </div>
      <br />
      <Editor
        initialValue="<blockquote>    “You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.

        That’s why I say one of the most valuable traits is persistence.”
    
        ― Octavia E. Butler</blockquote>"
        init={{
          height: 600,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount"
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline strikethrough emotions backcolor forecolor charmap link code blockquote | \
             alignleft aligncenter alignright alignjustify pagebreak | \
             bullist numlist outdent indent | removeformat | help"
        }}
        onChange={handleEditorChange}
      />
      <button
        onClick={publish}
        className="mt-2 btn btn-primary btn-sm rounded color"
      >
        Publish
      </button>
    </div>
  );
};

export default CreateArticle;
