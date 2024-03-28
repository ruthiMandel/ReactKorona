import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ClientListItem from "./clientListItem.js";
import { Link, Outlet } from "react-router-dom";
import { getClient } from "./clientApi.js";

export const ClientList = () => {
    let dispatch = useDispatch();

    let [arr, setArr] = useState([]);
    const getSomeClients = async () => {
        try {
            let res = await getClient();
            setArr(res.data);
        } catch (err) {
            alert(err);
        }
    }

    useEffect(() => { getSomeClients() }, []);

    const clientListStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: '20px',
        listStyle: 'none'

    };

    return (
        <>
            <Outlet />
            
            <ul style={clientListStyle}>
                {arr.map(item => (
                    <div key={item._id}>
                        <Link to={"" + item._id}>
                            <ClientListItem one={item} />
                        </Link>
                    </div>
                ))}
            </ul>
        </>
    );
}
