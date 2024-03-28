import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteClient, getClientById } from "./clientApi";
import { useDispatch } from "react-redux";
import { Sidebar } from 'primereact/sidebar';
import { Image } from 'primereact/image';


export const OneClient = () => {
  const [client, setclient] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visibleRight, setVisibleRight] = useState(false);

  const getSomeClientById = async () => {
    try {
      const res = await getClientById(params.id);
      setclient(res.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    getSomeClientById();
  }, [params.id]);

  const handleButton = () => {
    setVisibleRight(true);
  }
  const accept = async () => {
    try {
      const res = await deleteClient(client._id);
      if (res) {
        alert("הצליח למחוק ");
        navigate('/client')

      }

    } catch (err) {
      alert("לא הצליח למחוק" + err.response.data.message);
      console.log(err);
    }
  }
  return (
    <>
      <style>
        {`
          .product-details-container {
            display: flex;
            justify-content: center;
            position:fixed;
            top:5%;
            left:0;
            right:0;
            align-items:center;
            z-index:100;
            wight:100%;
            height:100%;
            background-color:white;
            height: calc(100vh -64vh); /* גובה העמוד פחות גובה ה-Nav bar */
          }

          .product-details {
            display: flex;
            align-items: center;
            width: 200vh;
            padding: 30px;
            // border: 1px solid #ccc;
            // border-radius: 10px;
            // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .product-image {
            width: 40%;
            border-radius: 10px;
          }

          .product-info {
            width: 50%;
            padding: 0 20px;
          }

          button {
            background-color: #ff0000;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          button:hover {
            background-color: #ff0000 ;
          }
        `}

      </style>
      <div className="product-details-container">
        {client && (
          <div className="product-details" >
            <div className="card flex justify-content-center">
              <Image src={client.img} alt="Image" width="250" preview style={{ paddingRight: '190px' }} />
            </div>
            <div className="product-info">
              <p>{client.clientFirstName}   {client.clientLastName} </p>
              <p></p>
              <p>phone: {client.phone}</p>
              <p>cellPhone:  {client.cellPhone}</p>
              <p>OutComeDisease:  {client.OutComeDisease}</p>
              <p>recoveryDisease:  {client.recoveryDisease}</p>
              <h2>addres</h2>
              <p>city:  {client.addres.city}</p>
              <p>street:  {client.addres.street}  {client.addres.number}</p>
              <ul>
                <h2>vaccination</h2>
                {client.vaccination.map((vaccine, index) => (
                  <li key={index}>
                    {index + 1}{"  "}{vaccine.dateGet} <br />
                    {vaccine.manufacturer}
                  </li>
                ))}
              </ul>
              <button onClick={(accept)}> delete</button>
              <button onClick={() => navigate(-1)}>back </button>
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
            </Sidebar>
          </div>
        )}
      </div>
    </>
  );
};
