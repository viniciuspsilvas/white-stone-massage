import React, { useState } from 'react';

import { useForm } from 'react-hook-form'

const Login = () => {

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} />
      <select name="gender" ref={register}>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <input type="submit" />
    </form>
  );
}

export default Login;