import React, { useState } from 'react';

function Translator() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async (e) => {
    e.preventDefault();
    // Mock translation
    setTranslatedText(`Translated: ${text}`);
  };

  return (
    <div>
      <h2>Translator</h2>
      <form onSubmit={handleTranslate}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows="4"
          placeholder="Enter text to translate"
        />
        <button type="submit">Translate</button>
      </form>
      {translatedText && <p>{translatedText}</p>}
    </div>
  );
}

export default Translator;
