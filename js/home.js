
// const React = require('react');
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button, TextField} from 'bens_ui_components';
const {useEffect, useState, useMemo} = React;


const Home = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: '#6ce989',
      }}
    >
      <PhotoScroller
        imgSrcs={[
          "img/Torrence1.png",
          "img/Torrence2.png",
          "img/Torrence3.png",
          "img/Torrence4.png",
        ]}
      />
    </div>
  );
};

const PhotoScroller = (props) => {
  const {imgSrcs} = props;

  const imgs = [];
  for (const src of imgSrcs) {
    imgs.push(<img key={"img_" + src}
      src={src}
      style={{
        width: '50%',
      }}
    />);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
      }}
    >
      {imgs}
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Home />);
