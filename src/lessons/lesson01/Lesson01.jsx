// импорт css из отдельного файла
import './lesson01.css';
import jsxImg from '../assets/jsx.jpg';
import MyButton from '../../components/myButton/MyButton';

// функция App является React компонентом
// в return такая функция возвращает шаблон верстки с данными
// React компоненты называются с большой буквы (функции)
function Lesson01() {
  function remember(){
    console.log('и не забудь сахар!')
  }
  return (
    //такой синтаксис: верстка с логикой JS называется JSX
    <div className='App'>
      <h1>Lesson 1:Hello, React!</h1>
      <img className='jsxImg' src={jsxImg} alt='' />
      <div>
        <MyButton text={'приходи ко мне на чай'} onClick = {remember}/>
      </div>
    </div>
  );
}

// чтобы использовать компонент в другом файле мы используем экспорт
export default Lesson01;
