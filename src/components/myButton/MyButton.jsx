import './myButton.css';

// Мы забираем переданные данные в круглых скобках
// Обычно мы используем деструктуризацию для того, чтобы достать значения пропсов по ключам и положить их в соответстующие переменные
function MyButton({text='click me!', onClick,type, isPrimary}) {
  return <button type={type} onClick={onClick} className={`myButton ${isPrimary ? 'primary':''}`}>{text}</button>;
}

export default MyButton;
