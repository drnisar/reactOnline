import { useEffect, useState } from "react";
import Users from "../components/Users";
import axios from "axios";

const UsersPage = ()=> {


        const [users, setUsers]=useState([])

            useEffect(()=>{
        const fetchusers = async ()=>await axios.get("https://jsonplaceholder.typicode.com/users").then(res=>setUsers(res.data)).catch(err=>console.error(err))
        fetchusers();

    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Users</h1>
        <Users users={users} />
        </div>
    )
}
export default UsersPage;