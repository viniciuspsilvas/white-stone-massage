import React, { useState } from 'react';

import { useForm } from 'react-hook-form'

import DoubleColumn from '@bit/smart-solution-4u.ss4u-components.layout.double-column';


const Login = () => {

  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => { console.log(data) }

  return (
    <DoubleColumn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="firstName" ref={register} />
        <select name="gender" ref={register}>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <input type="submit" />
      </form>
    </DoubleColumn>
  );
}

export default Login;