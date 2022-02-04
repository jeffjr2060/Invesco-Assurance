import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';





function UploadDocument() {

  const [file_type, setFileType] = useState('Police Abstract');
  const [file, setFile] = useState();
  const [files_uploaded, setFilesUploaded] = useState([]);

  const fileChangeHandler = (e) => {
    setFile(e.target.files[0]);
  }

  const fileUploadSubmit = (e) => {
    e.preventDefault();
    console.log(file.name);
    const formdata = new FormData();
    formdata.append("file_type", file_type);
    formdata.append("file", file);
    setFilesUploaded(prevState => [...prevState, file_type]);

    axios.post("/file-upload/1", formdata).then((response) => {
      console.log(response.data);
    })
  }

  return <div>
    <Container
      sx={{
        display: "flex",
        minWidth: '100vw',
        minHeight: '100vh',
        background: '#ece5dd',
      }}>

      {/* search bar */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          mt: "40px"

        }}>
        <form onSubmit={fileUploadSubmit}>
          <label for="file type">Select file type</label>
          <select name="file_type" id="cars" value={file_type} onChange={e => {
            setFileType(e.target.value);
            console.log(e.target.value);
          }
          }>
            <option value="police_abstract">Police Abstract</option>
            <option value="drivers_license">Copy of Driver's licence</option>
            <option value="psv_license">PSV licence</option>
            <option value="inspection_report">Inspection Report</option>
            <option value="intended_prosection_notice">Notice of intended prosecution</option>
          </select>
          <input type="file" name="file" onChange={fileChangeHandler} />
          <input type="submit" value="Submit" />
        </form>
      </Box>

      {/* intimation Tickets */}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          mt: "180px",
          ml: "-75%",
        }}>


      </Box>


    </Container>
  </div>;
}

export default UploadDocument;