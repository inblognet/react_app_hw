import React from 'react';
import './HelloWorld.css';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <img src={`${process.env.PUBLIC_URL}/Image.png`} alt="" className="image" />
    </div>
  );
}

export default HelloWorld;
