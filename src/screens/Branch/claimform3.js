import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import FormTextInput from './Formtextinput';
import { useForm } from "react-hook-form";
import { Button } from '@material-ui/core';

export default function ClaimForm3() {
    const [collateral_damage, setCollateralDamage] = useState([]);
    const { handleSubmit, reset, control } = useForm()
    const [id, setId] = useState(1)

    const collateral_damage_columns = [
        { field: 'id', headerName: '#', width: 5 },
        { field: 'owners_name', headerName: 'Owner\'s name', width: 200 },
        { field: 'owners_address', headerName: 'Owner\'s address', width: 150, },
        { field: 'reg_no', headerName: 'Reg Number', width: 150, },
        { field: 'insurers_name', headerName: 'Name of Insurer', width: 150, },
        { field: 'other_property_damaged', headerName: 'Other Property Damaged', width: 150, },
    ]

    const collateralDamageSubmit = (data, e) => {
        setCollateralDamage(prevState => [...prevState, { id: id, ...data }]);
        setId(prevState => prevState + 1);
        reset('', {
            keepValues: false,
        })
    }

    return (
        <div style={{ height: 650, width: '100%', background: '#ece5dd', }}>
            {collateral_damage &&
                <DataGrid
                    rows={collateral_damage}
                    columns={collateral_damage_columns}
                    pageSize={20}
                    rowsPerPageOptions={[20]}
                />
            }
            <form onSubmit={handleSubmit(collateralDamageSubmit)}>
                <FormTextInput control={control} name="owners_name" label="Owner\'s name" required />
                <FormTextInput control={control} name="owners_address" label="Owner\'s address" />
                <FormTextInput control={control} name="reg_no" label="Registration Number" />
                <FormTextInput control={control} name="insurers_name" label="Owner\'s name" />
                <FormTextInput control={control} name="other_property_damaged" label="Other Property damage" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
