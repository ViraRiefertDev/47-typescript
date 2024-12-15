import styles from './myButton.module.css';
import cn from 'classnames';

//типизация для объекта props
interface IButtonProps {
  text: string;
  isPrimary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function MyButton({
  text,
  onClick = () => console.log('click'),
  type = 'button',
  isPrimary = true,
}: IButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      /* className={`myButton ${isPrimary ? 'primary' : ''}`} */
      //если значение isPrimary true имя ключа (primary) добавится в качестве строчного значения для класса
      //если значение приходит из объекта styles через обращение по ключу - мы используем квадратные скобки
      className={cn(styles.myButton, {[styles.primary]: isPrimary })}
    >
      {text}
    </button>
  );
}

export default MyButton;
