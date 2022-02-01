import React from 'react';
import { useClaimFormContext } from '../../context-stores/CliamContext';

export default function ClaimForm2() {
    const { holders_name } = useClaimFormContext();

    return (
        <div>
            {holders_name &&
                <div>
                    <h1>Name: {holders_name}</h1>
                </div>
            }
        </div>
    );
}
