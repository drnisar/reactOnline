import { Link } from "react-router-dom";

type User = {
    id: number;
    name: string;
}

interface Props {
    users: User[];
}
const Users = ({ users }: Props)=>{
    return (
        <ul className="list-style-none">
            {users.length === 0 ? (
                <p>No users found.</p>
            ) : (
                users.map(user => (
                    <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                ))
            )}
        </ul>
    )
}
export default Users;