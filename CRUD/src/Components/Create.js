import React, { useState } from 'react';
import './Create.css'
import { useDispatch } from 'react-redux';
import { userCreate } from '../Redux/CrudSlice';
import {useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const getData = (e) => {  
    setData({ ...data, [e.target.name]: e.target.value});
    console.log('Data',data);
    };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data",data);
    dispatch(userCreate(data))
    navigate('/read')
    };

  return (
    <div className='Main-div'>
      <div  className='sub-div'>
      <form  onSubmit={handleSubmit}>
          <h1 className='head'>
              Fill the Data
          </h1>
      <div className='name'>
          <label className='labname'>Name :</label>
          <input type='text'
                 className='form-control'
                 name="name"
                 onChange={getData}
                 required
          />
      </div>

      <div className='email'>
          <label className='labname'>Email :</label>
          <input type='email'
                 className='form-control'
                 name='email' 
                 onChange={getData}
                 required />
      </div>

      <div className='age'>
          <label className='labname'>Age :</label>
          <input type='number'
                 className='form-control_age'
                 name='age' 
                 onChange={getData}
                 required />
      </div>

      <div className='gender_sty'>
          <label className='labname'>Gender :</label>
          <input type='radio'
                 className='form-control_gender'
                 name='gender'
                 value='male'
                 onChange={getData}
                 required />
          <label>Male</label>
          <input type='radio'
                 name='gender'
                 value='female'
                 onChange={getData}
                 required />
          <label>Female</label>
      </div>
       
      <div className='button_btn'>
          <button type='submit' className='submit_btn'>Submit</button>
      </div>
      </form>
      </div>
    </div>
  )
}
export default Create;