import MyButton from '../../components/myButton/MyButton';
import './lesson02.css';

function Lesson02() {
  // создаем преременную со значением в теле функции до return
  const heading = 'Lesson 2. JSX';
  const classContainer = 'lesson-container';

  const john = {
    name: 'John',
    lastName: 'Snow',
    symbol: 'wolf',
  };

  const rob = {
    name: 'Rob',
    lastName: 'Stark',
    symbol: 'wolf',
  };
  //Результат вызова этой функции с разными данными можно будет увидеть напрямую в верстке при ее вызове в фигурных скобках
  function formatName(user) {
    return `Сообщение из функции: 'Я, ${user.name} ${user.lastName}', ${user.symbol}`;
  }
  //от этого значения будет зависить увидем ли мы материал урока
  const isLogin = true;
  //от этого значения зависит сможем ли мы водить машину
  const hasLiscense = false;

  // здесь мы проверяем true или false в переменной isLogin по условию
  if (!isLogin) {
    return (
      <div className={classContainer}>
        <h4 style={{ color: 'red' }}>
          You are not authorize to see our lesson
        </h4>
      </div>
    );
  }

  return (
    // здесь мы использовали данные из переменной для отображения имени класса
    <div className={classContainer}>
      {/* Чтобы использовать динамические данные из js внутри верстки мы используем фигурные скобки */}
      <h2>{heading}</h2>
      <h4 className='lesson2-list-heading'>Lesson 2:Особенности React компонентов</h4>
      <ul>
        <li>Имеет расширение JSX</li>
        <li>Называется с большой буквы</li>
        <li>Компонент это функция</li>
        <li>Возвращает верстку</li>
        <li>Используется импорт и экспорт</li>
        <li>Не отобразится на странице, если не экспортирован</li>
      </ul>
      <h4>Примеры использования динамических данных JSX с объектом</h4>
      <p>
        Меня зовут {john.name}, а моя фамилия - {john.lastName} - {john.symbol}
      </p>
      <p>В JSX можно проводить математические операции {22 + 78}!</p>
      <p>{formatName(rob)}</p>
      <p>{formatName(john)}</p>
      {hasLiscense ? (
        <p>You can drive a car!</p>
      ) : (
        <p>Don't use a car without license</p>
      )}
      <p>Пользователь {isLogin ? 'успешно' : 'не'} авторизирован.</p>
      {/* сам объект распечатать в фигурных скобках напряму не получится */}
      {/* <p>{john}</p> */}
      <h4>Переиспользование компонента на примере кнопки</h4>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default Lesson02;
