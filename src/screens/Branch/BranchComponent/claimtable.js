import React, { useState }  from 'react';
import { DataGrid } from '@mui/x-data-grid';



function Claimtable() {
 

  const [finalClickInfo, setFinalClickInfo] = useState(null);
    const handleOnCellClick = (params) => {
        setFinalClickInfo(params);
      };
    
    const columns = [
        { field: 'id', headerName: '#', width: 5 },
        { field: 'claimno', headerName: 'Claim no', width: 200 },
        { field: 'carReg', headerName: 'Car Reg', width: 150,},
        { field: 'status', headerName: 'Status', width: 130 },
        { field: 'progress', headerName: 'Progress',  width: 100,},
        { field: 'tickets', headerName: 'Tickets', type: 'number', width: 80,}, 
        { field: 'Claimhandler', headerName: 'Claims Handler', type: 'number', width: 150,},
        
      ];
      const rows = [
        { id: 1, carReg: 'KAQ 126C', claimno: '256/3940/08/2018', status: 'Complete', progress: '100%', tickets:'0', Claimhandler:'Branch' },
        { id: 2, carReg: 'KDA 546B', claimno: '256/3940/08/2018', status: 'on Hold', progress: '54%', tickets:'2', Claimhandler:'Agent' },
        { id: 3, carReg: 'KCB 346E', claimno: '256/3940/08/2018', status: 'In-Review', progress: '33%', tickets:'0', Claimhandler:'Hq' },
        { id: 4, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
        { id: 5, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
        { id: 6, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
        { id: 7, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
        { id: 8, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
        { id: 9, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
        { id: 10, carReg: '', claimno: '', status: '', progress: '',  tickets:'', Claimhandler:''  },
    
       
      ];      
  return <div style={{ height: 650, width: '100%', background: '#ece5dd', }}>
     <DataGrid
        rows={rows}
        columns={columns}
        pageSize={20}
        rowsPerPageOptions={[20]}
        onCellClick={handleOnCellClick}
      />
     {finalClickInfo &&
        ''
        //navigate
      }
    
      
  </div>;
}

export default Claimtable;
