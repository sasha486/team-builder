import React, { useState } from 'react';
import './App.css';
import Form from './Form';

const initialValues = {
  Name: '',
  Email: '',
  Role: '',
};

function App() {
  const [member, setMember] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue };
    setFormValues(updatedFormValues);
  };

  return (
    <>
      <div className='ui segment'>
        <h1> Add Member</h1>
      </div>
      <Form values={formValues} update={updateForm}  />
    </>
  );
}

export default App;
