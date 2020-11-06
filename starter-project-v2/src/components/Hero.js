import useInterval from '@use-it/interval';
import React, { useState } from 'react';

const allHeroURL = [
  "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1604584741084-6bdd6792213d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1849&q=80",
  "https://images.unsplash.com/photo-1565967511849-76a60a516170?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
  "https://images.unsplash.com/photo-1505662695181-d4b60363d2a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1815&q=80"
]

function Hero() {
  const [getHeroURLIndex, setHeroURLIndex] = useState(0);

  useInterval(() => {
    if (getHeroURLIndex < allHeroURL.length) {
      setHeroURLIndex(getHeroURLIndex + 1);
    } else {
      // Reset to 0 once we've run through the list
      setHeroURLIndex(0);
    }
  }, 2000);
  
  return (
    <div className="heroImageContainer">
      <img className="heroImage" src={allHeroURL[getHeroURLIndex]} />
    </div>
  );
}

export default Hero;
