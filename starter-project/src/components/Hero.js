import React from 'react';

function Hero() {
  
  const heroURL = "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/81b63702-a53f-4dc2-9bd4-31ea64536391/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201010T195740Z&X-Amz-Expires=86400&X-Amz-Signature=ac8b0beda7438185252bf37fe8bbef19bb538c3f5cd906b77fc01bf1b7ad919c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22";

  return (
    <div>
      <img className="heroImage" src={heroURL} />
    </div>
  );
}

export default Hero;
