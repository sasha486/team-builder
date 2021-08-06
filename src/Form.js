import React from 'react';
import { useForm } from 'react-hook-form';

function Form({ values, update, submit}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (event) => {
    console.log(errors);
    event.preventDefault();
submit()
  };

  const onChange = (event) => {
      const{name, value} = event.target
      update(name, value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='ui form'>
      <div className='field'>
        <label>Name: </label>
        <input
          type='text'
          placeholder='name'
          {...register('name', { required: true })}
          value={values.name}
          onChange={onChange}
        />
      </div>
      <div className='field'>
        <label>Email: </label>
        <input
          type='email'
          placeholder='email'
          {...register('email', { required: true, pattern: /email@email/i })}
          value={values.email}
          onChange={onChange}
        />
      </div>
      <div className='field'>
        <select {...register('role', { required: true })}>
          <option value='select'> --select a role-- </option>
          <option value='Front-end Developer'>Front-end Developer</option>
          <option value=' Back-end Developer'> Back-end Developer</option>
          <option value=' Graphic Designer'> Graphic Designer</option>
          <option value=' Database Developer '> Database Developer </option>
        </select>
      </div>

      <input type='submit' className='ui inverted primary button' />
    </form>
  );
}

export default Form;
