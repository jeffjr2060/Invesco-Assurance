import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'policy_holders_name', headerName: 'Policy Holder', width: 180 },
  { field: 'policy_number', headerName: 'Policy Number', width: 180 },
  { field: 'car_reg_no', headerName: 'Car Reg', width: 130 },
  { field: 'type', headerName: 'Type', width: 170 },
  { field: 'from', headerName: 'From', width: 100 },
  { field: 'claim_handler', headerName: 'Claim Handler', width: 150 },
  { field: 'date_received', headerName: 'Date & Time Received', width: 150 },
];

const rows = [
  { id: 1, policy_number: '009/88/227/19', car_reg_no: 'KAQ 057C', type: "claim form", policy_holders_name: "Benson Kariuki", from: "Agent", claimhandler: 'Ken@Agent', Datereceived: "10/5/2016", time: "10:00am" },
  { id: 2, policy_number: '459/77/467/18', car_reg_no: 'KBS 978B', type: "Document", policy_holders_name: "John maina", from: "Branch", claimhandler: 'sam@Branch', Datereceived: "29/8/2019", time: "11:10am" },
  { id: 3, policy_number: '078/01/897/21', car_reg_no: 'KCD 087D', type: "claim notification", policy_holders_name: "Martha Jane", from: "Client", claimhandler: 'Ian@Client', Datereceived: "10/5/2010", time: "2:14pm" },

];

function ReportedClaimTable() {

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/claimformmetadataretrieval').then(response => {
      console.log(response.data);
      setData(response.data);
    })
  }, [])

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}

      />
    </div>
  );
}
export default ReportedClaimTable