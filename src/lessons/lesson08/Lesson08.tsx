import { useState, useEffect } from "react";
import MyButton from "components/myButton/MyButton";

function Lesson08() {
  const [count,setCount] = useState<number>(0)
  const [countBig,setCountBig] = useState<number>(0)

  const handleIncrease = ():void=>{
    setCount(prev=>prev+1);
  }

  const handleIncrease2 = ():void=>{
    setCount(prev=>prev+1);
  }

  //изменение состояния state вызывает rerender компонентов, а он в свою очередь заново запускает комманды в теле функции компонента
  //setCount(prev => prev+1);

  //=>Внутри тела компонента мы выполняем какие либо действия, которые мы бы не хотели чтобы они выполнялись при rerender

  //хотелось бы указать что какие то действия должны выполняться только при mounting(при первой визуализации компонента)

  //useEffect это хук который позволяет нам изолировать действие от многократного повторения.
  //задавать условия при который у нас будет действие внутри тела компонента совершаться

  // хук принимает в себя 2 параметра - стрелочная функция с заданным действием, массив зависимостей - в нем можно указать при изменении каких переменных будет происходить данное действие
  useEffect(()=>{
    //этот вывод в конcоль будет происходит только в самом начале жизненного компонента - mounting
    console.log('render из useEffect!')
  }, [])
  // ! если массив пустой - действие произойдет только один раз

  //этот вывод в консоль будет происходить каждый раз при обновлении компонента
  console.log('render!');

  return (
  
      <div className='lesson-container'>
        <h2>Lesson 8. useEffect() hook</h2>
        <p>Обновление состояния в react компоненте включает rerender компонента (update). В результате действия в теле фунции сработают еще раз (смотрите консоль): </p>
        <div>{count}</div>
        <MyButton text = 'increase' onClick={handleIncrease}/>
        <p>Когда мы хотим задать для действия внутри react компонента особые условия для выполнения мы используем хук useEffect()</p>
        <p>С помощью него мы можем изолировать действия от многократного повторения - на пример вызвать их только в самом начале жизненного цикла компонента - mounting</p>
      </div>
  
  )
}

export default Lesson08;