import React, { useState } from 'react';
import Question from './Question';

function App() {
  const [questions] = useState([
    {
      id: 1,
      prompt: 'What is your favorite color?',
      answers: ['Red', 'Blue', 'Green', 'Yellow'],
      correctIndex: 0,
    },
    {
      id: 2,
      prompt: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctIndex: 0,
    },
    // Add more questions as needed
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Handle when the user answers (or time runs out)
  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log('Incorrect or time ran out!');
    }

    // Move to the next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Reset to the first question if we've gone through all questions
  if (currentQuestionIndex >= questions.length) {
    return <div>No more questions!</div>;
  }

  // Render the current question
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <div>
      <Question
        question={currentQuestion}
        onAnswered={handleAnswer}
      />
    </div>
  );
}

export default App;