import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();
    return (
        <div className="font-bold lg:grid lg:grid-cols-3 w-10/12 mx-auto gap-4">
            {/* <h1>User: {users.length}</h1> */}
            {
                users.map( user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;