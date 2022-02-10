import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
<<<<<<< HEAD
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

=======
  { field: 'PolicyHoldername', headerName: 'Policy Holder', width: 180 },
  { field: 'policynumber', headerName: 'Policy Number', width: 180 },
  { field: 'carReg', headerName: 'Car Reg', width: 130 },
  { field: 'type', headerName: 'Type', width: 180 },
  { field: 'branch', headerName: 'Branch', width: 100 },
  { field: 'claimhandler', headerName: 'Claim Handler', width: 150 },
  { field: 'Datereceived', headerName: 'Date Received', width: 150 },
  { field: 'time', headerName: 'Time', width: 180 },
  
];

const rows = [
  { id: 1, policynumber: '009/88/227/19', carReg: 'KAQ 057C', type:"claim form", PolicyHoldername: "Benson Kariuki", branch:"Kisumu" ,claimhandler:'Ken@Agent', Datereceived:"10/5/2016", time:"10:00am" },
  { id: 2, policynumber: '459/77/467/18', carReg: 'KBS 978B', type:"Document", PolicyHoldername: "John maina", branch:"Thika" ,claimhandler:'sam@Branch', Datereceived:"29/8/2019", time:"11:10am"  },
  { id: 3, policynumber: '078/01/897/21', carReg: 'KCD 087D', type:"claim notification", PolicyHoldername: "Martha Jane", branch:"Kitale" ,claimhandler:'Ian@Client', Datereceived:"10/5/2010", time:"2:14pm"},
  
>>>>>>> 528e97967e9633b2c79a213d7b20fc6717090aca
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
<<<<<<< HEAD

=======
>>>>>>> 528e97967e9633b2c79a213d7b20fc6717090aca
      />
    </div>
  );
}
export default ReportedClaimTable