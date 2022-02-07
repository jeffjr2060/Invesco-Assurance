import  React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
        

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'claimnumber', headerName: 'Claim Number', width: 180 },
  { field: 'carReg', headerName: 'Car Reg', width: 130 },
  { field: 'assigneddepartment', headerName: 'Assigned Department', width: 180 },
  { field: 'handler', headerName: 'Assigned To', width: 180 },
  { field: 'Date', headerName: 'Date', width: 130 },
  { field: 'Timeallocated', headerName: 'Time Allocated', width: 130 },
  { field: 'Timeleft', headerName: 'Time left', width: 130 },
  
];

const rows = [
  { id: 1, claimnumber: '009/88/227/19', carReg: 'KAQ 057C', assigneddepartment:"Investigation",handler:"Tony@Investigation",  Date: "11/12/2022", Timeallocated:"7 days", Timeleft:"3days" },
  { id: 2, claimnumber: '129/99/567/20', carReg: 'KBB 976e', assigneddepartment:"Assesment",handler:"simon@claims",  Date: "1/12/2021", Timeallocated:"4 days", Timeleft:"6hrs" },
  { id: 3, claimnumber: '367/99/887/19', carReg: 'KDB 567T', assigneddepartment:"Litigation",handler:"Ruth@litigation",  Date: "14/1/2022", Timeallocated:"7 days", Timeleft:"1 day" },
  
];

 function AssignedTable() {



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
export default AssignedTable