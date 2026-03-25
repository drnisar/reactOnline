import Users from "../components/Users";

const UsersPage = ()=> {
    const users = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" },
            { id: 3, name: "Charlie" },
        ]
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">Users</h1>
        <Users users={users} />
        </div>
    )
}
export default UsersPage;