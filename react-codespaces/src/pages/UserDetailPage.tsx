import { useParams } from "react-router-dom";
import { useUserStore } from "../state-management/userStore";
import { useEffect } from "react";
import axios from "axios";


const UserDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const { name } = useUserStore();



    return (
        <div>
            <h1>{name} Detail Page</h1>
            <p>User ID: {id}</p>
        </div>
    );
};

export default UserDetailPage;
