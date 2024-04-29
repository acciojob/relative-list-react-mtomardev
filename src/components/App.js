import React from 'react';

const App = () => {
  const relatives = ['relative1', 'relative2']; // List of relatives

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <h1>Hello</h1>
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
