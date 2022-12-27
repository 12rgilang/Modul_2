import React from 'react';
import { RingLoader } from 'react-spinners';
import { useEffect, useState } from 'react';

const Loader = (props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Perform some asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading && <RingLoader />}
      {/* Other content goes here */}
    </div>
  );
};

export default Loader;
