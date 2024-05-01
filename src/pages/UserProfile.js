import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const [user, setUser] = useState({});
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:4000/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch user");
                }
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUser();
    }, [userId]);

    if (!user.name) {
        return <h1>Loading...</h1>;
    }

    return (
        <aside>
            <h1>{user.name}</h1>
        </aside>
    );
};

export default UserProfile;