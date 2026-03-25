import { Link } from "react-router-dom";
import { useUserStore } from "../state-management/userStore";

type User = {
    id: number;
    name: string;
}

interface Props {
    users: User[];
}
const Users = ({ users }: Props)=>{
    const {setName } = useUserStore();
    return (
        <ul className="list-style-none">
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                users.map(user => (
                    <li key={user.id} onClick={()=>setName(user.name)}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                ))
            )}
        </ul>
    )
}
export default Users;