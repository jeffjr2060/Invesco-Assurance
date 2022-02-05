import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Intimationtickets() {

  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/claimsretrieval').then((response) => {
      console.log(response.data);
      setRows(response.data);
    })
  }, []);


  const [finalClickInfo, setFinalClickInfo] = useState(null);
  const handleOnCellClick = (params) => {
    console.log(params.id);
    navigate(`/claimdetails/${params.id}`);
    setFinalClickInfo(params);
  };

  const columns = [
    { field: 'id', headerName: '#', width: 5 },
    { field: 'policy_number', headerName: 'Claim no', width: 200 },
    { field: 'car_reg_no', headerName: 'Car Reg', width: 150, },
    // { field: 'status', headerName: 'Status', width: 130 },
    { field: 'policy_holders_name', headerName: 'Name', width: 100, },
    { field: 'tell_no', headerName: 'Tell Number', type: 'number', width: 150, },
    // { field: 'Category', headerName: 'Category', type: 'number', width: 150, },
  ];
  // const rows = [
  //   { id: 1, carReg: 'KAQ 126C', claimno: '256/3940/08/2018', status: 'Complete', progress: '100%', Claimhandler: 'Branch', Category: 'New Claim' },
  //   { id: 2, carReg: 'KDA 546B', claimno: '256/3940/08/2018', status: 'on Hold', progress: '54%', Claimhandler: 'Agent', Category: 'Document', },
  //   { id: 3, carReg: 'KCB 346E', claimno: '256/3940/08/2018', status: 'In-Review', progress: '33%', Claimhandler: 'Hq', Category: 'Document', },
  // ];
  return <div style={{ height: 650, width: '100%', background: '#ece5dd', }}>
    {rows &&
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        checkboxSelection
        onCellClick={handleOnCellClick}
      />
    }
    {finalClickInfo &&
      `Policy Number:${finalClickInfo.id}`


    }


  </div>;
}

export default Intimationtickets;
