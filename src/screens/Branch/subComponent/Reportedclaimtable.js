import  React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
        

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'policynumber', headerName: 'Policy Number', width: 180 },
  { field: 'carReg', headerName: 'Car Reg', width: 130 },
  { field: 'PolicyHoldername', headerName: 'Policy Holder', width: 180 },
  { field: 'claimhandler', headerName: 'Claim Handler', width: 150 },
  { field: 'Datereceived', headerName: 'Date Received', width: 150 },
  
];

const rows = [
  { id: 1, policynumber: '009/88/227/19', carReg: 'KAQ 057C',PolicyHoldername: "Benson Kariuki" ,claimhandler:'sam@invesco', Datereceived:"10/5/2016" },
  
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