import React ,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin, loginSelector } from '../../redux/Slices/Login';

const Login = ()=>{
  const dispatch = useDispatch();
    const { loading,hasErrors,user} = useSelector(loginSelector);

    useEffect(()=>{
      dispatch(fetchLogin())
    },[dispatch]);
   console.log(user)
    return(
      <div>
        { user !== (null || undefined) ?  <p>{user}</p> : <p>user</p>}
      </div>
    )

}

export default Login;