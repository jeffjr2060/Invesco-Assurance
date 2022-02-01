import React, { useState, useContext } from 'react';
import { useClaimFormContext } from '../../context-stores/CliamContext';
import { Link } from 'react-router-dom';

export default function Claimform1() {
    const [vehicle_registration, setVehicleRegistration] = useState('');
    const { autofillfunc, holders_name, tell_no } = useClaimFormContext();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(vehicle_registration);
        autofillfunc(vehicle_registration);
    }

    return (
        <div style={{ background: '#000' }}>
            <h1>Cliam Form 1</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="vehicle_reg" >Enter Car Registration
                    <input id="vehicle_reg" style={{ background: '#ece5dd' }} type="text" value={vehicle_registration} onChange={e => setVehicleRegistration(e.target.value)} />
                    <input type="submit" value="Submit" />
                </label>
            </form>
            <div style={{ color: 'white' }}>
                {holders_name &&
                    <div>
                        <h1>Name: {holders_name}</h1>
                    </div>
                }
                {tell_no &&
                    <div>
                        <h1>Tell No: {tell_no}</h1>
                    </div>
                }
            </div>
            <Link to="/claimform2">Next</Link>
        </div>
    )
}
