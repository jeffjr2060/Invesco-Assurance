import React from 'react';
import { useClaimFormContext } from '../../context-stores/CliamContext';

import FormTextInput from './Re-usable component/Formtextinput';
import FormRadioInput from './Re-usable component/Formradioinput';
import FormDateInput from './Re-usable component/Formdateinput';
import FormTextAreaInput from './Re-usable component/Formdateinput';

import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { Controller } from "react-hook-form";


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
    const { control, handleSubmit, onSubmit, ref } = useClaimFormContext();

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                {/* Use of vehicle */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        ml: "8%",
                        mt: "2%",
                    }}>
                    <FormTextInput name={"use_of_vehicle"} control={control} label={"Use of vehicle"} />
                </Box>

                {/* Commercial vehicle details*/}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        ml: "8%",
                        mt: "5%",
                    }}
                >
                    <Typography sx={{ fontSize: "30px", ml: "-5%" }}>Commercial vehicle</Typography>
                    <FormTextInput name={"goods_carried"} control={control} label={"Description of goods carried"} />
                    <FormTextInput name={"owner_of_goods"} control={control} label={"Name of owner of goods"} />
                    <FormTextInput name={"trailer_attached"} control={control} label={"Was trailer attached"} />
                    <FormTextInput name={"load_weight"} control={control} label={"Weight of load on vehicle"} />
                    <FormTextInput name={"trailer_weight"} control={control} label={"Weight of load on trailer"} />
                </Box>
                {/* Driver details */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        ml: "8%",
                        mt: "5%",
                    }}>
                    <Typography sx={{ fontSize: "30px", ml: "-5%" }}>Driver Details</Typography>
                    <FormTextInput name={"drivers_name"} control={control} label={"Name"} />
                    <FormTextInput name={"drivers_occupation"} control={control} label={"Occupation"} />
                    <FormDateInput name={"drivers_dob"} control={control} label="Actual Date of Birth" />
                    <FormTextInput name={"drivers_po_box"} control={control} label={"P.O Box"} />
                    <FormTextInput name={"drivers_po_code"} control={control} label={"Code"} />
                    <FormTextInput name={"drivers_tell_no"} control={control} label={"Tell no"} />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "85%",

                            mt: "5%",
                        }}>
                        <FormRadioInput name={"employed_by_policyholder"} control={control} label="Is he/she employed by you?" />
                        <FormTextInput name={"service_duration"} control={control} label={"How long has he/she been employed by you?"} />
                        <FormRadioInput name={"permission"} control={control} label="Was he/she driveing with your permission?" />
                        <FormTextInput name={"driving_duration"} control={control} label="How long has he/she been driving?" />
                        <FormRadioInput name={"accident_blame"} control={control} label="Was he/she in a way to blame for the accident?" />
                        <FormRadioInput name={"accident_liability"} control={control} label="Did he/she admit liability for the accident?" />
                        <FormRadioInput name={"prev_accidents"} control={control} label="Has he/she had any previous accidents?" />
                    </Box>
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
                </Box>
                {/* Plan of accident  */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        ml: "8%",
                        mt: "2%",
                    }}>
                    <Typography sx={{ fontSize: "30px", ml: "-5%" }}>Statement by the Driver</Typography>
                    <Controller
                        name="drivers_statement"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                            <TextareaAutosize
                                fullWidth
                                label="Note"
                                onChange={onChange}
                                value={value}
                                style={{ width: "100%", height: 250, fontSize: '24px' }}
                            />
                        )}
                    />
                    {/* to do */}
                    <Box sx={{ mt: "2%" }}>
                        <Typography >Statement by the Owner</Typography>
                        <Controller
                            name="policy_holders_statement"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextareaAutosize
                                    fullWidth
                                    label="Note"
                                    onChange={onChange}
                                    value={value}
                                    style={{ width: "100%", height: 250, fontSize: '24px' }}
                                />
                            )}
                        />
                    </Box>
                </Box>
                {/* Accident details */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        ml: "8%",
                        mt: "2%",
                    }}>
                    <Typography>Accident details</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            mt: "2%",
                        }}
                    >
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
                        <FormRadioInput name={"police_investigation"} control={control} label="Did police take particulars ?" />
                        <FormTextInput name={"police_officers_name"} control={control} label="If so, give officer's name" />
                        <FormTextInput name={"police_officers_station"} control={control} label="To which police Station Was the accident reported ?" />
                        <FormTextInput name={"police_officers_no"} control={control} label="Police officer's number" />
                        <FormTextInput name={"police_stations"} control={control} label="To which police station was the accident reported" />
                    </Box>
                </Box>
                {/* Damage to insured Vehicle */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "85%",
                        ml: "8%",
                        mt: "2%",
                    }}>
                    <Typography>Damage to insured Vehicle</Typography>
                    <FormTextInput name={"apparent_damages"} control={control} label="State briefly apparent damage" />
                    <FormTextInput name={"garage_name"} control={control} label="Name of the garage of my choice" />
                    <FormTextInput name={"garage_address"} control={control} label="Garage Address" />
                    <FormTextInput name={"garage_telno"} control={control} label="Garage Tel No" />
                    <FormRadioInput name={"vehicle_still_used"} control={control} label="Is the vehicle still in Use?" />
                    <FormTextInput name={"inspection_location"} control={control} label="Where can it be Inspected" />
                    <FormDateInput name={"inspection_date"} control={control} label="When can it be Inspected?" />
                </Box>
                {/*  */}
                <Box
                    sx={{
                        ml: "45%",
                        flexDirection: 'row',
                        justifyContent: "space-around",
                    }}>
                    <input
                        type="submit"
                        value="Submit"
                        style={{
                            display: "flex",
                            width: "150px",
                            height: "50px",
                            background: "#075e54",
                        }} />
                    <Link to="/claimform3">Next</Link>
                </Box>
            </form>
        </div>
    );
}
