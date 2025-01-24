import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import PropTypes from "prop-types";

const ImageLightbox = ({ images, open, onClose, startIndex }) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={images.map((img) => ({ src: img.src }))}
      index={startIndex}
    />
  );
};
ImageLightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  startIndex: PropTypes.number,
};

export default ImageLightbox;
