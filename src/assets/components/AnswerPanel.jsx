import React from 'react';

const AnswerPanel = ({ data }) => {
  return (
    <div className="answer-panel">
      <h2 className="answer-title">Answer:</h2>
      <p className="answer-text">{data.answer}</p>

      {data.citations.map((citation, index) => (
        <div key={index}>
          <h3 className="citation-title">Citation:</h3>
          <a
            href={citation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="citation-link"
          >
            {citation.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default AnswerPanel;
