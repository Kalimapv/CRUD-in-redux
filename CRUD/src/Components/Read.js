import React, { useEffect } from 'react'
import { DeleteUser, readUser } from '../Redux/CrudSlice';
import { useDispatch,useSelector } from 'react-redux';
import './Read.css'
import { Link } from 'react-router-dom';

const Read = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.userDetail)

  useEffect(() => {
  dispatch(readUser());
  },[])

  return (
    <div className='main'> 
      <h1>DATA</h1>
      {user.map((e) => { 
        return( 
          <div className='data'>
            <div className='headers'>
            <h3>Name : {e.name}</h3>
            <h3>Email : {e.email}</h3>
            <h3>Age : {e.age}</h3>
            <h3>Gender : {e.gender}</h3>
          <Link to={`/edit/${e.id}`}>  
            <button>Edit</button>
          </Link>
            <button onClick={()=> dispatch(DeleteUser(e.id))} className='btn_del'>Delete</button>
            <Link to='/'>  
            <button className='btn_del'>Home</button>
          </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Read;








