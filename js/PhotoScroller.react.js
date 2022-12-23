import React from 'react';

const PhotoScroller = (props) => {
  const {imgSrcs, scrollPosition} = props;

  const imgs = [];
  for (const src of imgSrcs) {
    imgs.push(<img key={"img_" + src}
      src={src}
      style={{
        width: window.innerWidth < 600 ? '100%' : '50%',
      }}
    />);
  }

  return (
    <div
      id="photoscroller"
      style={{
        overflow: 'scroll',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        paddingTop: 240,
      }}
    >
      {imgs}
    </div>
  );
}

module.exports = PhotoScroller;
