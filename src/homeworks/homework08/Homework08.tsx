import { useEffect, useState } from 'react';
// импорт css модулей происходит в переменной
import styles from './homework08.module.css';
import Loader from '../../components/loader/Loader';



export default function Homework08() {
  //1. типизация для объекта из API
  interface IFox {
    image: string;
    link: string;
  }
  //2. state хранилище и функция его изменения для объекта

  const [fox, setFox] = useState<IFox>({
    image: '',
    link: '',
  });

  //* state для хранения переменной перелючателя от которой будет зависить показ loader
  const [loader, setLoader] = useState<boolean>(true);

  const getFox = () => {
    fetch('https://randomfox.ca/floof/')
      .then((res) => res.json())
      // этим действием мы данные из data записываем в переменную состояния fox
      .then((data) => {
        //* меняем состояние loader на false после получения данных
        setLoader(false);
        setFox(data);
      });
  };

  // 3. делаем fetch запрос к API и кладем данные в state
  useEffect(() => {
    setTimeout(() => {
      getFox();
    }, 1000);
  }, []);
  console.log(styles);



  return (
    <div className='lesson-container'>
      {/* тернарный оператор зависящий от значения в loading */}
      {loader ? ( <Loader />) : (
        // применение css классов из css модулей идет по обращению к переменной через точку
        <div className={styles.foxWrapper}>
          <img src={fox.image} alt='fox' />
        </div>
      )}

      {/*  {loader && <Loader />}
      {!loader && (
        <div className='fox-wrapper'>
          <img src={fox.image} alt='fox' />
        </div>
      )} */}
    </div>
  );
}
