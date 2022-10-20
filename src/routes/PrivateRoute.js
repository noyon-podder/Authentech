import { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        console.log('Loading come here')
        return <div>Loading....</div>
    }
    if(user){
    return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;