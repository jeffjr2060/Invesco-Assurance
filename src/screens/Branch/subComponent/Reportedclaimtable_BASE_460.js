import  React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';

        

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'PolicyHoldername', headerName: 'Policy Holder', width: 180 },
  { field: 'policynumber', headerName: 'Policy Number', width: 180 },
  { field: 'carReg', headerName: 'Car Reg', width: 130 },
  { field: 'type', headerName: 'Type', width: 170 },
  { field: 'from', headerName: 'From', width: 100 },
  { field: 'claimhandler', headerName: 'Claim Handler', width: 150 },
  { field: 'Datereceived', headerName: 'Date Received', width: 150 },
  { field: 'time', headerName: 'Time', width: 180 },
  
];

const rows = [
  { id: 1, policynumber: '009/88/227/19', carReg: 'KAQ 057C', type:"claim form", PolicyHoldername: "Benson Kariuki", from:"Agent" ,claimhandler:'Ken@Agent', Datereceived:"10/5/2016", time:"10:00am" },
  { id: 2, policynumber: '459/77/467/18', carReg: 'KBS 978B', type:"Document", PolicyHoldername: "John maina", from:"Branch" ,claimhandler:'sam@Branch', Datereceived:"29/8/2019", time:"11:10am"  },
  { id: 3, policynumber: '078/01/897/21', carReg: 'KCD 087D', type:"claim notification", PolicyHoldername: "Martha Jane", from:"Client" ,claimhandler:'Ian@Client', Datereceived:"10/5/2010", time:"2:14pm"},
  
];

 function ReportedClaimTable() {



  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
       
      />
    </div>
  );
}
export default ReportedClaimTable