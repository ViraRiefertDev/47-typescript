import { useState } from 'react';
import MyButton from '../myButton/MyButton';
import './feedback.css';

function Feedback() {
  const [like, setLike] = useState(5);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike((prev) => prev + 1);
  };

  const handleDislike = () => {
    setDislike((prev) => prev + 1);
  };

  const handleReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <div className='counter-container'>
        <span>{like}</span>
        <MyButton isPrimary={true} onClick={handleLike} text='like' />
        <MyButton onClick={handleDislike} text='dislike' />
        <span>{dislike}</span>
      </div>
      <div className='lesson-container'>
        <MyButton onClick={handleReset} text='reset results' />
      </div>
    </div>
  );
}

export default Feedback;
