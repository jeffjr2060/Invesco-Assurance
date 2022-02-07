import  React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
        

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'policynumber', headerName: 'Policy Number', width: 180 },
  { field: 'carReg', headerName: 'Car Reg', width: 130 },
  { field: 'PolicyHoldername', headerName: 'Policy Holder', width: 180 },
  { field: 'from', headerName: 'From', width: 100 },
  { field: 'claimhandler', headerName: 'Claim Handler', width: 150 },
  { field: 'Datereceived', headerName: 'Date Received', width: 150 },
  
];

const rows = [
  { id: 1, policynumber: '009/88/227/19', carReg: 'KAQ 057C',PolicyHoldername: "Benson Kariuki", from:"Agent" ,claimhandler:'Ken@Agent', Datereceived:"10/5/2016" },
  { id: 2, policynumber: '459/77/467/18', carReg: 'KBS 978B',PolicyHoldername: "John maina", from:"Branch" ,claimhandler:'sam@Branch', Datereceived:"29/8/2019" },
  { id: 3, policynumber: '078/01/897/21', carReg: 'KCD 087D',PolicyHoldername: "Martha Jane", from:"Client" ,claimhandler:'Ian@Client', Datereceived:"10/5/2010" },
  
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