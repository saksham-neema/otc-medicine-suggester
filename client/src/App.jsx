import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import './App.css';

function App() {
  const [symptoms, setSymptoms] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuggestion('');

    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/suggest-medicine`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms }),
      });


      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong on the server.');
      }

      const data = await response.json();
      setSuggestion(data.suggestion);

    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message || 'Failed to get suggestions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>OTC Medicine Suggester</h1>

      <form onSubmit={handleSubmit} className="symptom-form">
        <label htmlFor="symptoms-input">
          Enter your symptoms (e.g., cough, cold, headache):
        </label>
        <textarea
          id="symptoms-input"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          placeholder="e.g., headache, sore throat, mild fever"
          rows="4"
          cols="50"
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Suggesting...' : 'Get Suggestions'}
        </button>
      </form>

      {error && <p className="error-message">Error: {error}</p>}

      {suggestion && (
        <div className="suggestion-box">
          <h2>Suggested OTC Medicines:</h2>
          {/* Use ReactMarkdown to render the suggestion */}
          <ReactMarkdown>{suggestion}</ReactMarkdown>
          <p className="disclaimer">
            Disclaimer: These are general suggestions. Always consult a healthcare professional for diagnosis and treatment, especially for severe or persistent symptoms.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;