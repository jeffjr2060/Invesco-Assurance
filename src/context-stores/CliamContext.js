import React, { useContext, useState, useReducer } from 'react';
import { Controller, useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ClaimFormContext = React.createContext();

export function useClaimFormContext() {
    return useContext(ClaimFormContext);
}

export default function ClaimFormContextProvider({ children }) {

    const [req_one_data, setReqOneData] = useState(null);

    const [collateral_damage, setCollateralDamage] = useState([]);
    const [persons_injured, setPersonsInjured] = useState([]);
    const [independent_witnesses, setIndependentWitnesses] = useState([]);
    const [passengers, setPassengers] = useState([]);

    const [copy_notice, setCopyNotice] = useState();
    const [police_abstract, setPoliceAbstract] = useState();
    const [drivers_license, setDriversLicense] = useState();
    const [psv_license, setPsvLicense] = useState();
    const [inspection_report, setInspectionReport] = useState();

    const { handleSubmit, reset, control } = useForm({
        defaultValues: {
            accident_blame: "",
            accident_liability: "",
            apparent_damages: "",
            chassis_no: "",
            condition: "",
            date_time_of_accident: new Date(Date.now()),
            date_of_issue: new Date(Date.now()),
            drivers_dob: new Date(Date.now()),
            drivers_name: "",
            drivers_occupation: "",
            drivers_po_box: 0,
            drivers_policy_no: "",
            drivers_statement: "",
            drivers_tell_no: 0,
            drivers_po_code: 0,
            driving_duration: 0,
            employed_by_policyholder: "",
            estimated_speed: 0,
            expiry_date: new Date(Date.now()),
            garage_address: "",
            garage_name: "",
            garage_telno: "",
            goods_carried: "",
            hire_purchase_company: "",
            holders_address: "",
            holders_name: "",
            hp_cc: 1500,
            inspection_location: "",
            inspection_date: new Date(Date.now()),
            insurers_address: "",
            insurers_name: "",
            license_holder: "",
            license_number: 0,
            lights: "",
            load_weight: 0,
            make_model: "",
            manufacture_year: new Date(Date.now()),
            occupation: "",
            owner_of_goods: "",
            owners_address: "",
            owners_name: "",
            owns_vehicle: "",
            permission: "",
            place: "",
            police_investigation: "",
            police_officers_name: "",
            police_officers_station: "",
            police_officers_no: "",
            police_stations: "",
            policy_holders_statement: "",
            policy_number: "",
            prev_accident_details: "",
            prev_accidents: "",
            prev_conviction_details: "",
            prev_convictions: "",
            reporting_branch_region: "",
            reporting_party: "",
            road_surface: "",
            service_duration: 0,
            tell_no: "",
            trailer_attached: "",
            trailer_capacity: 0,
            trailer_registration: "",
            trailer_weight: 0,
            use_of_vehicle: "",
            vehicle_capacity: 0,
            vehicle_registration: "",
            vehicle_still_used: "",
            visibility: "",
            warning_signs: "",
            weather_condition: ""
        }
    });

    // policy_Holders Details
    const [holders_name, setholders_name] = useState('');
    const [tell_no, settell_no] = useState('');
    const [holders_address, setholders_address] = useState('');
    const [holders_occupation, setholders_occupation] = useState('');
    const [policy_number, setpolicy_number] = useState('');
    const [expiry_date, setexpiry_date] = useState(null);
    const [hire_purchase_company, sethire_purchase_company] = useState('');
    const navigate = useNavigate();

    //vehicles details
    const [make_model, setmake_model] = useState('');
    const [hp_cc, sethp_cc] = useState('');
    const [manufacture_year, setmanufacture_year] = useState(null);
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
            Yearofmanufacture: 2005,
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
            setexpiry_date(policy.Periodto);

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
        let payload = {
            ...data,
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
        }
        console.log(payload);
        setReqOneData({ ...payload });
        navigate('/claimform3');
    }

    const submitData = () => {
        axios.post('/newclaim', req_one_data).then(response => {
            let data = response.data
            console.log(data.Claim_id);
            let payload = {
                collateral_damage: collateral_damage,
                persons_injured: persons_injured,
                independent_witnesses: independent_witnesses,
                passengers: passengers,
            }
            let cliam_id = data.Claim_id
            console.log(payload);
            axios.post(`claimdata/${cliam_id}`, payload).then(response => {
                let data = response.data;
            });

            const formdata = new FormData();
            formdata.append("file_type", "copy_notice");
            formdata.append("file", copy_notice);

            axios.post(`/file-upload/${cliam_id}`, formdata).then((response) => {
                console.log(response.data);

                const formdata2 = new FormData();
                formdata2.append("file_type", "police_abstract");
                formdata2.append("file", police_abstract);
                axios.post(`/file-upload/${cliam_id}`, formdata2).then((response) => {
                    console.log(response.data);
                })

                const formdata3 = new FormData();
                formdata3.append("file_type", "drivers_license");
                formdata3.append("file", drivers_license);
                axios.post(`/file-upload/${cliam_id}`, formdata3).then((response) => {
                    console.log(response.data);
                })

                const formdata4 = new FormData();
                formdata4.append("file_type", "psv_license");
                formdata4.append("file", drivers_license);
                axios.post(`/file-upload/${cliam_id}`, formdata4).then((response) => {
                    console.log(response.data);
                })

                const formdata5 = new FormData();
                formdata5.append("file_type", "inspection_report");
                formdata5.append("file", inspection_report);
                axios.post(`/file-upload/${cliam_id}`, formdata5).then((response) => {
                    console.log(response.data);
                })
            })

            alert('Uploaded data successfully')
            navigate("/branchhome")
        });
    }

    const clearStates = () => {
        setholders_name('');
        sethire_purchase_company('');
        settell_no('');
        setholders_address('');
        setholders_occupation('');
        setpolicy_number('');
        setexpiry_date(null);

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

    const value = {
        autofillfunc: autofill,
        clearStates: clearStates,
        submitData: submitData,

        //collateral_damage state
        collateral_damage: collateral_damage,
        setCollateralDamage: setCollateralDamage,

        //Persons Injured State
        persons_injured: persons_injured,
        setPersonsInjured: setPersonsInjured,

        //Independent Witnesses State
        independent_witnesses: independent_witnesses,
        setIndependentWitnesses: setIndependentWitnesses,

        //Passengers in vehicle state
        passengers: passengers,
        setPassengers: setPassengers,

        //file upload states
        copy_notice: copy_notice,
        setCopyNotice: setCopyNotice,

        police_abstract: police_abstract,
        setPoliceAbstract: setPoliceAbstract,

        drivers_license: drivers_license,
        setDriversLicense: setDriversLicense,

        psv_license: psv_license,
        setPsvLicense: setPsvLicense,

        inspection_report: inspection_report,
        setInspectionReport: setInspectionReport,

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
        onSubmit: onSubmit,

        //Data submission
        submitData: submitData,
    }

    return (
        <ClaimFormContext.Provider value={value}>
            {children}
        </ClaimFormContext.Provider>
    )
}
