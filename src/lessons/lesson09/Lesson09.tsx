import MyButton from "../../components/myButton/MyButton";
import Homework08 from "../../homeworks/homework08/Homework08";
import styles from './lesson09.module.css'
import cn from "classnames";

function Lesson09(){
  return(
    <div className="lesson-container">
      <h2>Lesson 09. useEffect() practice + Css module</h2>
      <Homework08/>
      <p>Задача добавления нескольких классов в CSS модулях можно решить разными способами </p>
      {/* 1. Способ */}
      <p className={styles.desc + ' ' + styles.importantDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda quaerat natus, expedita hic iure dignissimos placeat dolorem provident, dicta consectetur illo et ab consequuntur obcaecati nostrum exercitationem ea unde alias!</p>

      <p className={`${styles.desc} ${styles.underlineDesc}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis doloribus doloremque placeat numquam sapiente ut eaque, nisi et ratione rem at, voluptates sint facilis sit deleniti necessitatibus modi reprehenderit iusto?</p>

      <ol>
        <li>Конкатенация</li>
        <li>шаблонной строкой</li>
        <li>Библиотека classnames</li>
      </ol>
      <p className={cn(styles.desc, styles.boldDesc)}>Библиотеку classNames мы устанавливаем через комманду 'npm i classnames' и импортируем нужный компонент Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore sapiente amet dicta! Aliquam ut iure molestias eligendi nostrum ex ipsa, esse modi perferendis animi sint nesciunt, cum iusto sapiente.</p>
      <p>С помощью classnames также удобно добавлять классы согласно какому-то условию: как на пример в нашей кнопке.компоненте:</p>
      <MyButton text="тестим в кнопке библиотеку classnames"/>
    </div>
  )
}

export default Lesson09;