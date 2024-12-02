export default function Lesson06() {
  // * typescript!

  // * 1.String
  let username: string = 'Bob';
  //!NO! username = 100
  username = '100';

  // * 2. number
  let number: number = 42;
  number = 4.33;
  number = NaN;
  number = Infinity;
  number = 2 + Number('2');
  console.log(number);

  // * 3. boolean
  let isAdmin: boolean = true;
  /* let isAdmin: true = true; */
  isAdmin = 2 > 3; //перезаписали true на false
  console.log(isAdmin);

 

// * 4. null and undefined
// сами по себе могут быть значениями для переменных и типами
let emptyValue: null = null;
// !NO! mptyValue = 0

let empty: undefined = undefined;

//--------typeof----------
let truth: true = true;
// !NO! truth = false;
console.log(typeof truth); //boolean typeof покажет корректный тип в JS, но не в TypeScript
//------------------------

// * 5. arrays
const colors: string[] = ['blue', 'red', 'cyan', 'margenta'];
//!NO! colors.push(0);
colors.push('yellow');
colors[1] = 'green';

// * 6. tupel (кортеж)
// Он позволяет определять массив фиксированной длины с элементами разных типов
const person: [string, number] = ['John', 25];

// *7. functions

//* void - если функция не созвращает ничего, тогда она возвращает void
//* не обязательно указывать тип возвращенного значения, но можно и указать
const showMessage = (message: string): void => {
  console.log(`message: ${message}!`);
};
showMessage('hello');

const sum = (a: number, b: number): number => {
  return a + b;
};
let result: number = sum(5, 6);
console.log(result);
console.log(sum(5, 6));

// * 8. Objects interface

interface IUser {
  name: string;
  //union type - позволяет объединять несколько типов на выбор через '|'
  age: number | string;
  //isAdmin типизирован как необязательный ключ через '?'
  isAdmin?: boolean;
}
//в интерфейс можно дописывать новые свойства просто описав его еще раз
interface IUser{
  city?:string
}

// наследование в interface через ключевое слово extends
interface IMagician extends IUser{
  magic():void;
}

const harry: IMagician = {
  name: 'Harry',
  age: 23,
  isAdmin: true,
  magic(){
    console.log('lumos!');
  }
};



const ron: IUser = {
  name: 'Ron',
  age: '23',
};

const hermione: IUser = {
  name: 'Hermione',
  age: '12',
};

const users: IUser[] = [harry, ron, hermione];
console.log(users);

// * 9 union type
let button: 'submit' | 'button' | 'reset' = 'submit';

// *  10 type для типизации объектов

type Animal = {
  name: string;
  sound(): void;
};

// Пример наследования через оператор & в type
type Dog = Animal & {
  breed: string
}

const dog: Dog = {
  name: 'Bars',
  sound() {
    console.log('woof!');
  },
  breed: 'Labrador'
};
console.log(dog.sound());

return (
  <div className="lesson-container">
    <h2>Lesson 06</h2>
    <p>Все самое интересное в этом уроке происходит в теле компонента Lesson06 и в комментариях к коду</p>
  </div>
);
}
