import React, { useContext, useState } from 'react';
import { Controller, useForm } from "react-hook-form";

const ClaimFormContext = React.createContext();

export function useClaimFormContext() {
    return useContext(ClaimFormContext);
}

export default function ClaimFormContextProvider({ children }) {
    // const [policy_data, setPolicy] = useState({});
    //react hook form
    const { handleSubmit, reset, control } = useForm();

    // policy_Holders Details
    const [holders_name, setholders_name] = useState('');
    const [tell_no, settell_no] = useState('');
    const [holders_address, setholders_address] = useState('');
    const [holders_occupation, setholders_occupation] = useState('');
    const [policy_number, setpolicy_number] = useState('');
    const [expiry_date, setexpiry_date] = useState('');
    const [hire_purchase_company, sethire_purchase_company] = useState('');

    //vehicles details
    const [make_model, setmake_model] = useState('');
    const [hp_cc, sethp_cc] = useState('');
    const [manufacture_year, setmanufacture_year] = useState('');
    const [vehicle_registration, setvehicle_registration] = useState('');
    const [vehicle_capacity, setvehicle_capacity] = useState('');
    const [trailer_registration, settrailer_registration] = useState('');
    const [trailer_capacity, settrailer_capacity] = useState('');
    const [owners_name, setowners_name] = useState('');
    const [owners_address, setowners_address] = useState('');
    const [chasis_no, setchasis_no] = useState('');

    // search
    const arr = [
        {
            Policyno: '077/084/1/000202/2010/09',
            Carreg: 'KAQ 057C',
            Name: 'Benson Kariuki',
            Address: 'Nakuru',
            Tellno: '0722774531',
            cc: 1500,
            Occupation: 'Businessman',
            Periodfrom: new Date(2022, 1, 1),
            Periodto: new Date(2023, 1, 1),
            Hirepurchase: 'T.B.A',
            Make: 'TOYOTA HIACE',
            Yearofmanufacture: new Date(2005, 1, 1),
            carryingCapacity: 14,
            TrailerRegno: 'N/A',
            chasisno: 'SV30-0169266'
        }
    ];

    //Autofill
    const autofill = (val) => {
        const policy = arr.find(o => {
            console.log("Seaching");
            return o.Carreg === val;
        });

        if (policy) {
            setholders_name(policy.Name);
            sethire_purchase_company(policy.Hirepurchase);
            settell_no(policy.Tellno);
            setholders_address(policy.Address);
            setholders_occupation(policy.Occupation);
            setpolicy_number(policy.Policyno)
            setexpiry_date(policy.expiry_date);

            setmake_model(policy.Make);
            sethp_cc(policy.cc);
            setmanufacture_year(policy.Yearofmanufacture);
            setvehicle_registration(policy.Carreg);
            setvehicle_capacity(policy.carryingCapacity);
            settrailer_registration(policy.TrailerRegno);
            settrailer_capacity(0);
            setowners_name(policy.Name);
            setowners_address(policy.Address);
            setchasis_no(policy.chasisno);
        } else {
            setholders_name('');
            sethire_purchase_company('');
            settell_no('');
            setholders_address('');
            setholders_occupation('');
            setpolicy_number('');
            setexpiry_date(new Date());

            setmake_model('');
            sethp_cc('');
            setmanufacture_year('');
            setvehicle_registration('');
            setvehicle_capacity('');
            settrailer_registration('');
            settrailer_capacity(0);
            setowners_name('');
            setowners_address('');
            setchasis_no('');
        }
    }

    const onSubmit = (data) => {
        console.log({ holders_name, tell_no, ...data });
    }

    const value = {
        autofillfunc: autofill,

        // policy holder
        holders_name: holders_name,
        tell_no: tell_no,
        holders_address: holders_address,
        occupation: holders_occupation,

        // policy
        policy_number: policy_number,
        expiry_date: expiry_date,
        hire_purchase_company: hire_purchase_company,

        //vehicle DETAILS
        make_model: make_model,
        hp_cc: hp_cc,
        manufacture_year: manufacture_year,
        vehicle_registration: vehicle_registration,
        vehicle_capacity: vehicle_capacity,
        trailer_registration: trailer_registration,
        trailer_capacity: trailer_capacity,
        owners_name: owners_name,
        owners_address: owners_address,
        chassis_no: chasis_no,

        //React hook form
        control: control,
        handleSubmit: handleSubmit,
        onSubmit: onSubmit
    }

    return (
        <ClaimFormContext.Provider value={value}>
            {children}
        </ClaimFormContext.Provider>
    )
}
