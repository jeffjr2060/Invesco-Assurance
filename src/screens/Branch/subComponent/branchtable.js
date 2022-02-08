import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import axios from 'axios';



function Branchtable() {


  const [finalClickInfo, setFinalClickInfo] = useState(null);
  const handleOnCellClick = (params) => {
    setFinalClickInfo(params);
  };

  const columns = [
    { field: 'id', headerName: '#', width: 5 },
    { field: 'policy_number', headerName: 'Policy Number', width: 150 },
    { field: 'car_reg_no', headerName: 'Car Reg', width: 150, },
    { field: 'policy_holders_name', headerName: 'Name', width: 130 },
  ];
  const rows = [
    { id: 1, carReg: 'KAQ 126C', policyno: '256/3940/08/2018', Dob: '12/02/2019', status: 'Sent', policyholder: 'Peter Kamau' },
    { id: 2, carReg: 'KDA 546B', policyno: '256/3940/08/2018', Dob: '12/02/2019', status: 'Pending', policyholder: 'Alice Mwangi' },
    { id: 3, carReg: 'KCB 346E', policyno: '256/3940/08/2018', Dob: '12/02/2019', status: 'Sent', policyholder: 'John doe' },

  ];
  return <Box sx={{
    display: "flex",
    height: 500,
    width: "100%",
    background: '#ece5dd',
  }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={7}
      rowsPerPageOptions={[7]}
      checkboxSelection
      onCellClick={handleOnCellClick}
    />
    {finalClickInfo &&
      ''
      //navigate
    }


  </Box>;
}

export default Branchtable;