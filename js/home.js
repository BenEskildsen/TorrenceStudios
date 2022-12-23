
import React, {useEffect, useState, useMemo} from 'react';
import ReactDOM from 'react-dom/client';
import {Button, TextField} from 'bens_ui_components';
import PhotoScroller from './PhotoScroller.react';
import imageURLs from './imageURLs';


const Home = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const container = document.getElementById('photoscroller');
    const position = container.scrollTop;
    setScrollPosition(position);
  };
  useEffect(() => {
    const container = document.getElementById('photoscroller');
    container.addEventListener('scroll', handleScroll, false);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}
    >
      <TopBar scrollPosition={scrollPosition} />
      <PhotoScroller
        scrollPosition={scrollPosition}
        imgSrcs={Object.values(imageURLs)}
      />
    </div>
  );
};

const TopBar = (props) => {
  const {scrollPosition} = props;

  const smallTopBar = (
    <div
      style={{
        position: 'absolute',
        top: 0,
        textAlign: 'center',
        color: 'black',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 6,
        width: '100%',
      }}
    >
      <img
        height={40}
        src='saw.png'
      />
    </div>
  );

  if (scrollPosition > 240) {
    return smallTopBar;
  }

  return (
    <div
      style={{
        textAlign: 'center',
        color: 'black',
        fontFamily: 'cursive',
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
        pointerEvents: 'none',
      }}
    >
      <img
        height={200}
        src='croppedStudio.png'
      />
      <h3>Crafted by Rick Eskildsen</h3>
    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<Home />);
