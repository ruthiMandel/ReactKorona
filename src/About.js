import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

export const About = () => {
    const navigate = useNavigate();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
            <h1 style={{ color: '#00203B', fontFamily: 'cursive', fontSize: '2.5rem', marginBottom: '20px' }}>KORONA</h1>
            <img
                src="https://caregivers.org.il/wp-content/uploads/2020/03/%D7%A7%D7%95%D7%A8%D7%95%D7%A0%D7%94.jpg"
                style={{
                    maxWidth: '60%',
                    border: '5px solid red',
                    borderRadius: '15px',
                    marginBottom: '14px' 
                }}
            />
             <Button label='לרשימת הלקוחות' severity="secondary" aria-label="Bookmark" onClick={() => { navigate("/client") }} style={{ padding: '6px', width: '200px', fontSize: '0.9em', fontWeight: 'bold' ,color: '#00203B',backgroundColor:'#ff0000'}}/>
        </div>
    );
}