import './myForm.css'
import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

function MyForm(){
  return(
    <form className='myForm' action="">
      <MyInput label='Login' placeholder='Enter your login' type='text' name='login'/>
      <MyInput label='Email' placeholder='Enter your email' name='email' type='email'/>
      <MyInput label='Password' placeholder='Enter your password' name='password' type='password'/>
      <MyButton text='Авторизация' onClick={()=>console.log('Login!!!')} type='submit'/>
    </form>
  )
}

export default MyForm;