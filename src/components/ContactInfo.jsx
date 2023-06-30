import React, { useState } from 'react';



const ContactInfo = (props) => {
    const {contact} = props;
    const [online, setValor] = useState(contact.online);
    const cambiarEstado = () =>{
        setValor(!online);
    }
    return (
        <div>
            <h2>Nombre: {contact.name}</h2>
            <h2>Apellido: {contact.lastName}</h2>
            <h2>Email: {contact.email}</h2>
            <h2>Estado: {online ? 'Contacto Disponible' : 'Contacto No Disponible'}</h2>
            <button onClick={cambiarEstado}>Cambiar Estado</button>
        </div>
    );
};


export default ContactInfo