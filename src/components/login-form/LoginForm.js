import React from 'react'
import { useForm } from 'react-hook-form'
import { btn } from './LoginForm.module.scss';

export default function LoginForm() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data =>  console.log(data)
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" className={btn} />


      <button  className={btn} > 
      Teste
      </button>
    </form>
  );
}