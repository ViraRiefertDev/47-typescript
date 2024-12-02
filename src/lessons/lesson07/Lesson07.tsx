import MyButton from "../../components/myButton/MyButton";

export default function Lesson07() {
  let hero: string = 'spider-man';
  console.log(hero);

  //типизация объекта

  interface ISuperHero {
    id: number;
    name: string;
    nickname: string;
    age?: number;
    abilities?: string[];
  }

  //наследование интерфейса и добавление нового поля
  interface ISpaceHero extends ISuperHero {
    homeplanet: 'Moon' | 'Saturn' | 'Crypton';
  }

  let hero1: ISpaceHero = {
    id: 1,
    name: 'Clark Kent',
    nickname: 'Superman',
    abilities: ['super fly', 'super vision'],
    homeplanet: 'Crypton',
  };

  let hero2: ISuperHero = {
    id: 2,
    name: 'Bruce Wane',
    nickname: 'Batman',
  };

  console.log(hero1, hero2);

  const heroes: ISuperHero[] = [hero1, hero2];
  console.log(heroes);

  //generics или дженерики
  //способ ограничения данных на вход в функцию
  function makeArray<T>(first: T, second: T): T[] {
    return [first, second];
  }

  // в момент вызова функции вы передаете generic тип в угловых скобках
  // таким образом вы уточняете данные на вход
  console.log(makeArray<number>(12, 44));
  console.log(makeArray<ISuperHero>(hero1, hero2));

  return (
    <div className='lesson-container'>
      <h2>Lesson 07. TypeScript part 2</h2>
      <p>
        Все самое интересное в этом уроке происходит в теле компонента Lesson06
        и в комментариях к коду
      </p>
      <MyButton text="come tomorrow!"/>
      <MyButton text='come yesterday!'/>
    </div>
  );
}
