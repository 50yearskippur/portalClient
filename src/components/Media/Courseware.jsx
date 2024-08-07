import "./Courseware.css";

const Courseware = ({ src }) => {
  return (
    <div className="courseware-container">
      <iframe
        className="courseware"
        title="לומדה"
        src={src}
        width="100%"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Courseware;
