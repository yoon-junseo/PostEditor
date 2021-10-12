import React from 'react';

function Result({ value }) {
  return <div dangerouslySetInnerHTML={{ __html: value }}></div>;
}

export default Result;
