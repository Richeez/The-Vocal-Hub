/* eslint-disable react/prop-types */

const ImageBox = ({ src }) => {
  return (
    <div className="imageBox">
      {src ? <img src={src} loading="lazy" alt="acad segment" /> : null}
    </div>
  );
};

export default ImageBox;
