import React from 'react';
import { useClaimFormContext } from '../../context-stores/CliamContext';

import FormTextInput from './Formtextinput';
import FormRadioInput from './Formradioinput';
import FormDateInput from './Formdateinput';
import FormInputDropdown from './Formselectinput';


const options = [
    {
        label: "Radio Option 1",
        value: "Yes",
    },
    {
        label: "Radio Option 2",
        value: "No",
    },
];

export default function ClaimForm2() {
    const { control, handleSubmit, onSubmit } = useClaimFormContext();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Use of vehicle */}
                <FormTextInput name={"use_of_vehicle"} control={control} label={"Use of vehicle"} />
                {/* Commercial vehicle details*/}
                <FormTextInput name={"goods_carried"} control={control} label={"Description of goods carried"} />
                <FormTextInput name={"owner_of_goods"} control={control} label={"Name of owner of goods"} />
                <FormTextInput name={"trailer_attached"} control={control} label={"Was trailer attached"} />
                <FormTextInput name={"load_weight"} control={control} label={"Weight of load on vehicle"} />
                <FormTextInput name={"trailer_weight"} control={control} label={"Weight of load on trailer"} />
                {/* Driver details */}
                <FormTextInput name={"drivers_name"} control={control} label={"Name"} />
                <FormTextInput name={"drivers_occupation"} control={control} label={"Occupation"} />
                <FormDateInput name={"drivers_dob"} control={control} label="Actual Date of Birth" />
                <FormTextInput name={"drivers_po_box"} control={control} label={"P.O Box"} />
                <FormTextInput name={"drives_po_code"} control={control} label={"Code"} />
                <FormTextInput name={"drivers_tell_no"} control={control} label={"Tell no"} />
                <FormRadioInput name={"employed_by_policyholder"} control={control} label="Is he/she employed by you?" />
                <FormTextInput name={"service_duration"} control={control} label={"How long has he/she been employed by you?"} />
                <FormRadioInput name={"permission"} control={control} label="Was he/she driveing with your permission?" />
                <FormTextInput name={"driving_duration"} control={control} label="How long has he/she been driving?" />
                <FormRadioInput name={"accident_blame"} control={control} label="Was he/she in a way to blame for the accident?" />
                <FormRadioInput name={"accident_liability"} control={control} label="Did he/she admit liability for the accident?" />
                <FormRadioInput name={"prev_accidents"} control={control} label="Has he/she had any previous accidents?" />
                <FormTextInput name={"prev_accident_details"} control={control} label="If so how many and approximate date" />
                <FormTextInput name={"prev_convictions"} control={control} label="Has he/she had any conviction for any offence in connection with any motor Vehicle or any Charges pending ?" />
                <FormTextInput name={"prev_conviction_details"} control={control} label="if so, give details including dates" /> 
                <FormTextInput name={"license_holder"} control={control} label="Does he/she hold a full or provisional licence to drive the vehicle?" />
                <FormTextInput name={"date_of_issue"} control={control} label="If full, state date of first issue" />
                <FormTextInput name={"license_number"} control={control} label="License Number" />
                <FormRadioInput name={"owns_vehicle"} control={control} label="Does he Own a vehicle?" />
                <FormTextInput name={"insurers_name"} control={control} label="Name of insurer" />
                <FormTextInput name={"insurers_address"} control={control} label="Address of insurer" />
                <FormTextInput name={"drivers_policy_no"} control={control} label="Driver's Policy No." />

                {/* Plan of accident  */}
                <textarea name={" drivers_statement"} control={control} label="Statement by the driver" />
                {/* to do */}
                <textarea name={""} control={control} label="Statement by the Owner or Policy Holder"/> 
     
                {/* Accident details */}
                <FormDateInput name={"date_of_accident"} control={control} label="Date" />
                <FormDateInput name={"time_of_accident"} control={control} label="Time" />
                <FormTextInput name={"place"} control={control} label="place" />
                <FormTextInput name={"road_surface"} control={control} label="Type of road surface" />
                <FormTextInput name={"visibility"} control={control} label="Visibility" />
                <FormTextInput name={"condition"} control={control} label="Wet of dry" />
                <FormTextInput name={"lights"} control={control} label="What lights were showing on your vehicle?" />
                <FormTextInput name={"warning_signs"} control={control} label="What warning did your driver give?" />
                <FormTextInput name={"estimated_speed"} control={control} label="Estimated Speed before accident" />
                <FormTextInput name={"weather_condition"} control={control} label="Weather Conditions" />
                <FormRadioInput name={"police_investigation"} control={control} label="Did police take particulars ?"/>
                <FormTextInput name={"police_officers_name"} control={control} label="If so, give officer's name" />
                <FormTextInput name={"police_officers_station"} control={control} label="To which police Station Was the accident reported ?" />
               
                {/* Damage to insured Vehicle */}
                <FormTextInput name={"apparent_damages"} control={control} label="State briefly apparent damage" />
                <FormTextInput name={"garage_name"} control={control} label="Name of the garage of my choice" />
                <FormTextInput name={"garage_address"} control={control} label="Garage Address" />
                <FormTextInput name={"garage_telno"} control={control} label="Garage Tel No" />
                <FormRadioInput name={"vehicle_still_used"} control={control} label="Is the vehicle still in Use?" />
                <FormTextInput name={"inspection"} control={control} label="Where can it be Inspected" />
                <FormDateInput name={"inspection_date"} control={control} label="When can it be Inspected?" />

                {/*  */}



                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
