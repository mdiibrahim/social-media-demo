import dayjs from "dayjs";
import "./Post.css";
import PropTypes from "prop-types";

const Post = ({ post, onImageClick }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img
          src={post.sender.avatar}
          alt={post.sender.name}
          className="avatar"
        />
        <div>
          <h4>{post.sender.name}</h4>
          <p className="timestamp">
            {dayjs(post.timestamp).format("MMMM D, YYYY h:mm A")}
          </p>
        </div>
      </div>
      <p className="post-text">{post.content.text}</p>
      <div className="post-media">
        {post.content.media.map((media, index) => (
          <img
            key={index}
            src={media.src}
            alt={`Media ${index + 1}`}
            className="media-image"
            onClick={() => onImageClick(post.content.media, index)}
          />
        ))}
      </div>
      <div className="post-footer">
        <p>{post.likes} Likes</p>
        <p>{post.comments} Comments</p>
      </div>
    </div>
  );
};
Post.propTypes = {
  post: PropTypes.shape({
    sender: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    timestamp: PropTypes.string.isRequired,
    content: PropTypes.shape({
      text: PropTypes.string.isRequired,
      media: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
        })
      ).isRequired,
    }).isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default Post;
