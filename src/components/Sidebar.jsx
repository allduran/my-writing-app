import "../styles/Sidebar.css";
import PropTypes from "prop-types";

const Sidebar = ({
  writings,
  activeWriting,
  onAddWriting,
  onDeleteWriting,
  onSetActiveWriting,
}) => {
  return (
    <div className="sidebar">
      <button className="add-btn" onClick={onAddWriting}>
        + New Writing
      </button>
      <ul className="writings-list">
        {writings.map((writing) => (
          <li
            key={writing.id}
            className={`writing-item ${
              writing.id === activeWriting ? "active" : ""
            }`}
            onClick={() => onSetActiveWriting(writing.id)}
          >
            {writing.title || "Untitled"}
            <button
              className="delete-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteWriting(writing.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  writings: PropTypes.array.isRequired,
  activeWriting: PropTypes.string,
  onAddWriting: PropTypes.func.isRequired,
  onDeleteWriting: PropTypes.func.isRequired,
  onSetActiveWriting: PropTypes.func.isRequired,
};
