import MyButton from "../../components/myButton/MyButton";

function Lesson03() {

  const handleClick = ()=>{
    console.log('click');
  }

  const handleSubmit = ()=>{
    console.log('submit!!');
  }

  const handleReset = ()=>{
    console.log('reset...');
  }

  return (
    <div className="lesson-container">
      <h2>Lesson 3: React props</h2>
      <span>Способ передачи данных из компонента от родителя к ребенку</span>
      <p>Мы хотим использовать наш компонент кнопку с разными данными</p>
      <MyButton text={'нажать'} onClick={handleClick}/>
      <MyButton text={'подтвердить'} onClick={handleSubmit}/>
      <MyButton text={'обновить'} onClick={handleReset}/>
      <p>Мы пишем логику работы со входящими данными в дочернем компоненте, вытащив их через деструктуризацию из объекта props в круглых скобка перед телом функции</p>
      <p>Мы можем передавать любые типы данных в том числе функции. Важно помнить что имя ключа мы задаем в момент вызова компонента - он должен совпадать с ключом, который мы встречаем внутри компонента</p>
    </div>
  );
}

export default Lesson03;
