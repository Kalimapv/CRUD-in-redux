import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { UpdateUser } from "../Redux/CrudSlice";
import './Edit.css'

const Edit = () => {
  const {user} = useSelector((state) => state.userDetail)
  const {id} = useParams();
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const [updateData,setupdateData] = useState();

  useEffect(() => {
    if(id) {
      const SingleData = user.filter((val) => val.id === id)  
          setupdateData(SingleData[0]);
          console.log(SingleData);
           }
    },[])

  const newData = (e) => {
      setupdateData({...updateData, [e.target.name] : e.target.value})
      };
      console.log("updateData",updateData);
      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpdateUser(updateData))
        navigate('/read');
      };

  return (
    <div className='Main-div'>
      <div  className='sub-div'>
        <form  onSubmit={handleSubmit}>
          <h1 className='head'>
              Edit the Data
          </h1>
        <div className='name'>
          <label className='labname'>Name :</label>
          <input type='text'
              className='form-control'
              name="name"
              onChange={newData}
              value={updateData && updateData.name}
              required
          />
        </div>

        <div className='email'>
          <label className='labname'>Email :</label>
          <input type='email'
                 className='form-control'
                name='email' 
                onChange={newData}
                value={updateData && updateData.email}
                required />
          </div>
      <div className='age'>
          <label className='labname'>Age :</label>
          <input type='number'
                 className='form-control_age'
                 name='age' 
                 onChange={newData}
                 value={updateData && updateData.age}
                 required />
      </div>
      <div className='gender_sty'>
          <label className='labname'>Gender :</label>
          <input type='radio'
                 className='form-control_gender'
                 name='gender'
                 value='male'
                 onChange={newData}
                 checked={updateData && updateData.gender === "male"}
                 required />
                 <label>Male</label>
  
          <input type='radio'
                 name='gender'
                 value='female'
                 onChange={newData}
                 checked={updateData && updateData.gender === "female"}
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
export default Edit;


