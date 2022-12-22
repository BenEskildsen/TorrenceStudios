
import React, {useEffect, useState, useMemo} from 'react';
import ReactDOM from 'react-dom/client';
import {Button, TextField} from 'bens_ui_components';
import imageURLs from './imageURLs';


const Home = () => {

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: 'navajowhite',
          fontFamily: 'cursive',
        }}
      >
        <h1>Torrence Studios</h1>
        <h3>Crafted by Rick Eskildsen</h3>
      </div>
      <PhotoScroller
        imgSrcs={Object.values(imageURLs)}
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
