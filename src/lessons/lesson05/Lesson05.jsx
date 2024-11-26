/* uuid - библиотека для работы с уникальными индентификаторами */
import { v4 } from 'uuid';
import { forceUsers } from './data';
import './styles.css';

function Lesson05() {
  return (
    <div className={'lesson-container'}>
      <h2>Lesson 5: map() components</h2>
      {/* Используйте необязательный параметр index для передачи при итерации с key props */}
      {forceUsers.map((hero, index) => (
        // либо воспользуйтесь сторонней библиотекой
        <div key={v4()}>
          <h4>{hero.name}</h4>
          <p>Age: {hero.age}</p>
          <img className='image' src={hero.image} alt='img' />
          <p>
            Lightsaber Colors:{' '}
            {hero.lightsaberColors.map((color) => (
              <span style={{ color: color }} key={v4()}>
                {color}{' '}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Lesson05;
