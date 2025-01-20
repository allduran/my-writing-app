import PropTypes from "prop-types";
import "../styles/Editor.css";

const Editor = ({ activeWriting, onUpdateWriting }) => {
  const handleChange = (field, value) => {
    onUpdateWriting(activeWriting.id, {
      ...activeWriting,
      [field]: value,
    });
  };

  if (!activeWriting) {
    return <div className="editor">Select or create a new writing.</div>;
  }

  return (
    <div className="editor">
      <input
        className="title-input"
        type="text"
        value={activeWriting.title}
        onChange={(e) => handleChange("title", e.target.value)}
        placeholder="Title"
      />
      <textarea
        className="content-input"
        value={activeWriting.content}
        onChange={(e) => handleChange("content", e.target.value)}
        placeholder="Start writing here..."
      />
    </div>
  );
};

export default Editor;

Editor.propTypes = {
  activeWriting: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onUpdateWriting: PropTypes.func.isRequired,
};
