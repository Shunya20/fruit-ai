import React, { useState } from 'react';

const initialFAQs = [
  { id: 1, question: 'What is Fruit.ai?', answer: 'Fruit.ai is a health management tool.' },
  { id: 2, question: 'How do I use Fruit.ai?', answer: 'You can use it to manage your fruit intake and more.' },
];

function FAQ() {
  const [faqs, setFAQs] = useState(initialFAQs);

  const handleDelete = (id) => {
    setFAQs(faqs.filter(faq => faq.id !== id));
  };

  return (
    <div className="faq-list">
      <h2>FAQ</h2>
      <ul>
        {faqs.map(faq => (
          <li key={faq.id}>
            <strong>{faq.question}</strong>
            <p>{faq.answer}</p>
            <button onClick={() => handleDelete(faq.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
