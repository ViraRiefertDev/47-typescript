import ReactDOM from 'react-dom/client';
import './index.css';
import Lesson09 from './lessons/lesson09/Lesson09';
import Homework08 from './homeworks/homework08/Homework08';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <Lesson09 />
  </>
);
