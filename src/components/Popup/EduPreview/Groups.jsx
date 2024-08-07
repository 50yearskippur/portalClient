const Groups = ({ groups }) => {
  return (
    <div className="edu-grop-container">
      {groups.map((group, index) => (
        <div key={`group ${index}`} className="edu-group">
          {group}
        </div>
      ))}
    </div>
  );
};

export default Groups;
