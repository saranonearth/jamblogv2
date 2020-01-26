import React, { useEffect } from "react";

interface Props {}

const About: React.FC<Props> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container">
        <img
          src="https://scontent.fdel29-1.fna.fbcdn.net/v/t1.0-9/56790817_822034391465277_8128112783184101376_o.jpg?_nc_cat=109&_nc_oc=AQl0fNvIG92ySGMH7cm_2_b55zMuiedGGy2KaRQrug3ay3WgAfG7A25ryPpJuWvxnqs&_nc_ht=scontent.fdel29-1.fna&oh=2d7af0ae28b0d41ff57be2fa3de7029e&oe=5EA19DCE"
          alt="Image"
          className="img-fluid mb-5"
        />
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          nihil molestias officiis magni nobis modi assumenda, error eligendi
          quos corrupti aut voluptatum harum. Facere tempora voluptatibus beatae
          eaque in. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat laboriosam neque ipsum inventore recusandae ab, et in quasi
          officiis qui voluptatem ut saepe nobis hic suscipit accusamus. Sit,
          vero optio.Nihil illo debitis, magnam, placeat excepturi error at
          autem in dolorem, adipisci harum aspernatur quis provident inventore
          cupiditate? Ipsa ut consectetur nobis, sapiente voluptatum ducimus
          laborum excepturi mollitia tempora <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          magni ea a ipsa dolor ipsam dolorem ad repudiandae id fuga unde eos at
          quasi, sit iusto iste aspernatur veritatis ab?{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
