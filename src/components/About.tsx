import React, { useEffect } from "react";

interface Props {}

const About: React.FC<Props> = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="container">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          nihil molestias officiis magni nobis modi assumenda, error eligendi
          quos corrupti aut voluptatum harum. Facere tempora voluptatibus beatae
          eaque in odio.
        </p>
      </div>
    </div>
  );
};

export default About;
