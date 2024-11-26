import { useState } from 'react';
import './styles.css';

function Lesson04() {
  /*  let count=0;

  const handlePlus = ()=>{
    count++;
    console.log(count);
  };
 */
  // передаем начальное состояние в хук useState
  // получаем в ответе массив из двух элементов - переменной состояния и функции для ее изменения
  const [count, setCount] = useState(0);
  console.log(count);

  const handlePlus = () => {
    setCount((prev) => prev + 1);
  };

  const handleMinus = ()=>{
    setCount((prev)=>prev-1);
  }

  return (
    <div className='lesson-container'>
      <h2>Lesson 4: React hook useState</h2>
      <p>
        Чтобы хранить и отображать на странице изменяющиеся в react данные мы
        используем состояние - это особая переменная,которая приходит в
        результате вызова хука useState. Если эта переменная изменится - это
        будет сигнал к обновлению страницы.
      </p>
      <p>Чтобы изменить значение состояния мы используем функцию, которая приходит вторым элементом в массиве из useState. Она перезаписывает состояние</p>
      <p>Изменение состояния вызывает ререндер компонента с новыми данными и как следствие код в теле функции компонента срабатывает заново</p>
      <div className='counter'>
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
    </div>
  );
}

export default Lesson04;
