import React, { useState } from 'react';
import InputPanel from './assets/components/InputPanel';
import './index.css';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (query) => {
    if (!query.trim()) return;
    setLoading(true);

    setTimeout(() => {
      const fakeResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text:
              "As the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
          }
        ]
      };

      setResponse(fakeResponse);
      setLoading(false);
      setShowModal(true); // Open modal
    }, 1000);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="heading">Lexi Legal Assistant</h1>
        <InputPanel onSubmit={handleSubmit} loading={loading} />
      </div>

      {/* Popup Modal */}
      {showModal && response && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="answer-title">Answer:</h2>
            <p className="answer-text">{response.answer}</p>

            {response.citations.map((citation, index) => (
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

            <button className="modal-close" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
