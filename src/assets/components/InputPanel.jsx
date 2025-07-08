import React, { useState } from 'react';

const InputPanel = ({ onSubmit, loading }) => {
  const [query, setQuery] = useState('');

  const handleClick = () => {
    onSubmit(query);
  };

  return (
    <div>
      <label className="label">Enter your legal question</label>
      <textarea
        className="textarea"
        placeholder="e.g., Can a minor sign a contract?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className="button"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default InputPanel;
