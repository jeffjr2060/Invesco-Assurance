import React, { useState, useContext } from 'react';
import { useClaimFormContext } from '../../../context-stores/CliamContext';
import { useNavigate } from 'react-router-dom';

// material ui imports
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material'
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import TextField from '@mui/material/TextField';
import { ListItemButton, ListItemText } from '@mui/material';


export default function Claimform1() {
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);
    function handleClick() {
        setLoading(true);
    }
    const [car_registration, setCarRegistration] = useState('');
    const
        { autofillfunc,
            clearStates,
            holders_name,
            tell_no,
            holders_address,
            holders_occupation,
            expiry_date,
            policy_number,
            hire_purchase_company,
            make_model,
            hp_cc,
            manufacture_year,
            vehicle_registration,
            vehicle_capacity,
            trailer_registration,
            trailer_capacity,
            owners_name,
            owners_address,
            chasis_no,
        } = useClaimFormContext();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(car_registration);
        autofillfunc(car_registration);
    }

    return (

        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "100vw",
                height: "100vh",

            }}>
            {/* this box hold the form brand headings */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    width: "100%",
                    height: "380px",

                }}>
                {/* logo and Address */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}>
                    {/* logo */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            mt: "5%",
                            ml: "5%"
                        }}>
                        <Typography
                            sx={{
                                fontSize: "60px",
                                fontWeight: "900",
                                color: "orange",
                            }}>
                            <ArrowDropUpTwoToneIcon
                                sx={{
                                    color: "#075e54",
                                    fontSize: "85px",
                                    position: "absolute",
                                    ml: "-34px",
                                    mt: "-34px",
                                }}
                            />INVESCO</Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                mt: "-11px",
                                ml: "3px",
                                color: "#075e54",
                                fontWeight: '900',
                            }}
                        >INVESCO ASSURANCE COMPANY LTD</Typography>
                        <Typography
                            sx={{
                                fontSize: "17px",
                                ml: "5px",
                                color: "#000",
                                fontWeight: '900',
                            }}
                        >Moving ahead with confidence</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                        }}>
                    </Box>
                    {/* Address */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            width: "400px",
                            height: '180px',
                            mt: '3.5%',
                        }}>
                        <Typography>Head Office: Bishop Magua Centre,3rd Floor</Typography>
                        <Typography>George Padmore Lane,Off Ngong Road</Typography>
                        <Typography>P.O BOX 52964-00200 Nairobi, Kenya</Typography>
                        <Typography>Pilot Line:0719070000</Typography>
                        <Typography>Call Center:0719070200/1-10</Typography>
                        <Typography>E-mail:invesco@invescoassurance.co.ke</Typography>
                        <Typography>Website:www.invescoassurance.co.ke</Typography>


                    </Box>
                </Box>
                {/* end */}
                {/* Title */}
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "#075e54",
                        height: "60px",
                        mt: "3%"
                    }}>
                    <Typography
                        sx={{
                            fontSize: "22px",
                            color: "#FFC000",
                        }}>MOTOR ACCIDENT REPORT FORM</Typography>
                </Box>
            </Box>


            {/* first Step */}

            <Box
                sx={{
                    display: "flex",
                    height: "200px",
                    width: "100vw",

                }}>
                {/* car Reg Input */}
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <TextField
                        id="standard-basic"
                        label="Enter the Car Registration"
                        variant="standard"
                        value={car_registration}
                        onChange={e => {
                            setCarRegistration(e.target.value)
                            clearStates();
                        }}
                        sx={{ width: "50%", }}

                    />
                    <input
                        type="submit"
                        value="Submit"
                        style={{
                            width: "150px",
                            height: "50px",
                            background: "#075e54",
                            borderRadius: "8px",
                            outline: "none",
                            marginLeft: "135px"
                        }}
                    />

                </form>


                {/* Policy Details  */}


                {/*name and tell no  */}

            </Box>

            <Typography sx={{ fontSize: "20px", mt: "2%", fontWeight: "900" }}>POLICY DETAILS</Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: 'column',
                    ml: "15%",
                    mt: "2%"
                }}
            >

                {/* name and tell no */}

                {holders_name &&
                    <Typography

                    >Name: {holders_name}
                    </Typography>
                }

                {tell_no &&
                    <Typography

                    >Tell No: {tell_no}
                    </Typography>
                }

                {/* address  and occupation */}

                {holders_address &&
                    <Typography

                    >Address: {holders_address}
                    </Typography>
                }

                {holders_occupation &&
                    <Typography

                    >Occupation: {holders_occupation}
                    </Typography>
                }

                {/* policy no & expiry Date */}

                {policy_number &&
                    <Typography

                    >Policy Number: {policy_number}
                    </Typography>
                }

                {expiry_date &&
                    <Typography

                    >Expiry Date: {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                    }).format(expiry_date)}
                    </Typography>
                }

                {/* name of hire purchase and make */}

                {hire_purchase_company &&
                    <Typography

                    >Name of Hirepurchase Company: {hire_purchase_company}
                    </Typography>
                }

                {make_model &&
                    <Typography

                    >Make and Model: {make_model}
                    </Typography>
                }

                {/* hp cc and year of manufacture */}

                {hp_cc &&
                    <Typography

                    >Hp_Cc: {hp_cc}
                    </Typography>
                }

                {manufacture_year &&
                    <Typography

                    >Year of manufacture: {new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                    }).format(manufacture_year)}
                    </Typography>
                }

                {/* REG NO   and CARRYING CAPACITY */}

                {vehicle_registration &&
                    <Typography
                        sx={{
                            display: "flex",
                            fontSize: "20px",
                        }}
                    >Vehicle Reg No: {vehicle_registration}
                    </Typography>
                }

                {vehicle_capacity &&
                    <Typography

                    >Carrying Capacity: {vehicle_capacity}
                    </Typography>
                }

                {/* Reg no of Trailer  and trailer carrying Capacity */}

                {trailer_registration &&
                    <Typography

                    >Trailer Registration: {trailer_registration}
                    </Typography>
                }

                {trailer_capacity &&
                    <Typography

                    >Trailer Carrying Capacity: {trailer_capacity}
                    </Typography>
                }

                {/* Chasis no  and  Owner Address */}

                {owners_address &&
                    <Typography

                    >Owmer Address: {owners_address}
                    </Typography>
                }

                {chasis_no &&
                    <Typography

                    >Chasis no: {chasis_no}
                    </Typography>
                }

                {/* end of box */}
            </Box>
            <Box sx={{
                display: "flex",
                width: "150px",
                height: "5vh",
                ml: "45%"
            }}>

                <ListItemButton
                    onClick={() => navigate("/claimform2")}
                >
                    <ListItemText
                        primary="Next"
                        sx={{ alignItems: "center", justifyContent: 'center' }}
                    />
                </ListItemButton>

            </Box>


        </Container>
    )