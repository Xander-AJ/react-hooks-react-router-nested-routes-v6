import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import UserCard from "../components/UserCard";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:4000/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUsers();
    }, []);

    const userList = users.map(user => <UserCard key={user.id} user={user}/>);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>Home!</h1>
                {userList}
                <Outlet />
            </main>
        </>
    );
};

export default Home;