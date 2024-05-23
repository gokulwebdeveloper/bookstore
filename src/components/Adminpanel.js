import { useNavigate } from 'react-router-dom';
import { updateContext } from '../store/actions';
import MemberList from './adminpanel/MemberList';
const AdminPanel = () =>{
    const navigate = useNavigate();
    const { BookState } = updateContext();
    const { logged } = BookState;
   // !logged && navigate('/login');
    return (
        <div className="admin-panel">
            <h2>Welcome Admin</h2>
            <MemberList />
        </div>
    );
}
export default AdminPanel;