import React from "react";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";

const LoadingSpinner = () => {

  return (
    <>
      <Dimmer active inverted>
        <Loader inverted content="Loading" />
      </Dimmer>
      <Image src="/images/wireframe/short-paragraph.png" />
    </>
  );
};

export default LoadingSpinner;
