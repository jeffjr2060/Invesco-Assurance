import React from 'react'
import { Field, Form, Formik } from 'formik';
import '../BranchStyles/claimform.css'
import { date } from 'yup';

function Claimform() {
  const arr=[{
    Policyno:'077/084/1/000202/2010/09',
     Carreg:'KAQ 057C',
     Name: 'Benson Kariuki',
     Address: 'Nakuru',
     Tellno: '0722774531',
     Occupation:'Businessman',
     Periodfrom: new Date(9/19/2011),
     Periodto: new Date(10/18/2011),
     Hirepurchase:'T.B.A',
     Make:'TOYOTA HIACE',
     Yearofmanufacture: new Date(2/11/2010),
     carryingCapacity: '14',
     TrailerRegno: 'N/A',
     Owner:'JOSEPH GITAU GATHURU',
     chasisno: 'SV30-0169266'

  }];
    return (
        <div container>
          <div className='containerHolder'>
            <Formik>
                <Form>
                <label htmlFor="person">Who is reporting</label>
                <Field  id="person "as="select" name="Person">
                  <option value="Insured">Insured</option>
                  <option value="ThirdParty">Third Party</option>
                  <option value="Agent">Agent</option>
                </Field>
                 <div>POLICY</div>
                 <label htmlFor="carreg"> Enter the Car Registration</label>
                 <input
                   id="carreg"
                   name="Car Reg"
                   type="text"
                  /> 
                <label htmlFor="expiry">Expiry Date</label>
                 <input
                   id="expiry"
                   name="Expiry"
                   type="Date"
                  /> 
                <label htmlFor="hirepurchase">Name of hire purchase of finance company</label>
                 <input
                   id="hirepurchase"
                   name="hire purchase"
                   type="text"
                  /> 
                  <div>POLICY HOLDER</div>
                  <label htmlFor="name">Enter Name</label>
                   <input
                    id="name"
                    name="Name"
                    type="text"
                   /> 
                   <label htmlFor="tellno">Tell No.</label>
                    <input
                     id="tellno"
                     name="Tell"
                     type="number"
                     /> 
                   <label htmlFor="address">Address</label>
                    <input
                     id="address"
                     name="Address"
                     type="text"
                    /> 
                 <label htmlFor="occupation">Business/Occupation</label>
                    <input
                     id="occupation"
                     name="Address"
                     type="text"
                    /> 
                    {/**VEHICLE */}
                    <div>VEHICLE</div>
                  <label htmlFor="make">Make & Model</label>
                   <input
                    id="make"
                    name="Make"
                    type="text"
                   /> 
                   <label htmlFor="hp/cc">HP / CC</label>
                    <input
                     id="hp/cc"
                     name="HPCC"
                     type="text"
                     /> 
                   <label htmlFor="year">Year of Manufacture</label>
                    <input
                     id="year"
                     name="Year"
                     type="date"
                    /> 
                 <label htmlFor="regno">Reg. No. of Vehicle</label>
                    <input
                     id="regno"
                     name="Regno"
                     type="text"
                    /> 
                 <label htmlFor="capacity">Carrying Capacity</label>
                    <input
                     id="capacity"
                     name="Capacity"
                     type="number"
                    /> 
                 <label htmlFor="trailer">Reg. No. of Trailer</label>
                    <input
                     id="trailer"
                     name="Trailer"
                     type="text"
                    /> 
                 <label htmlFor="capacity">Carrying Capacity</label>
                    <input
                     id="capacity"
                     name="Capacity"
                     type="number"
                    />  
                  <label htmlFor="owner">Name and Address of Owner</label>
                    <input
                     id="owner"
                     name="Owner"
                     type="text"
                    /> 
                  <label htmlFor="Chassis">Chassis No</label>
                    <input
                     id="chassis"
                     name="Chassis"
                     type="text"
                    /> 
                    {/**Vehicle ends */}
                    {/**Use start */}
          <div>USE</div>  
            <label htmlFor="person">State the exact puropse for which the Vehicle was being used at the time of accident</label>
             <Field  id="person"as="select" name="Use">
                <option value="Own">Own use/ Private Use</option>
                <option value="PSV">PSV -ferrying Passengers</option>
                <option value="PARCKED">Packed</option>
                <option value="AnyOther">Any Other</option>
             </Field>
         {/**Use ends */}
         <div>FOR COMMERCIAL VEHICLE</div>  
          <label htmlFor="description">Description of goods being carried</label>
            <input
              id="description"
              name="Description"
              type="text"
            /> 
           <label htmlFor="ownerdescription">Name of Owner of goods</label>
            <input
              id="ownerdescription"
              name="Ownerdescription"
              type="text"
            />  
            <label htmlFor="ownerdescription">Was a trailer attached</label>
               <Field id="ownerdescription" as="select" name="Commercial"> 
                    <option value="yes" name="Yes">Yes</option>
                    <option value="no" name="No">No</option>
               </Field> 
            <label htmlFor="weight">Weight of load on Vehicle</label>
            <input 
              id="weight"
              name="Weight"
              type="text"
            />
         <label htmlFor="Tweight">Weight of load on Trailer</label>
            <input 
              id="Tweight"
              name="TWeight"
              type="text"
            />
         {/**commercial ends */}
         {/**Driver section */}
         <div>DRIVER</div>
         <label htmlFor="driver">Name</label>
         <input 
              id="driver"
              name="drivername"
              type="text"
          />
        <label htmlFor="driveroccupation">Occupation</label>
         <input 
              id="driveroccupation"
              name="Driveroccupation"
              type="text"
          />
        <label htmlFor="dob">Actual Date of Birth</label>
         <input 
              id="dob"
              name="DOB"
              type="date"
          />
        <label htmlFor="pobox">P.O.BOX</label>
         <input 
              id="pobox"
              name="DOB"
              type="text"
          /> 
        <label htmlFor="code">Code</label>
         <input 
              id="code"
              name="CODE"
              type="number"
          />
         <label htmlFor="phoneno">Phone.No.</label>
         <input 
              id="phoneno"
              name="Phoneno"
              type="number"
          />  
       <label htmlFor="employed">Is he / she employed by you ?</label>
            <Field id="employed" as="select" name="Employed"> 
               <option value="yes" name="Yes">Yes</option>
                <option value="no" name="No">No</option>
                <option value="NA" name="na">N/A</option>
             </Field> 
       <label htmlFor="period">How long has he / she been in your service ?</label>
          <Field id="period" as="select" name="Period"> 
              <option value="less" name="Less">Less than a year</option>
              <option value="over" name="Over">Over one Year</option>
              <option value="NA" name="na">N/A</option>
          </Field>
       <label htmlFor="permission">Was he / she driving with your permission ?</label>
          <Field id="permission" as="select" name="Permission"> 
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
          </Field>  
       <label htmlFor="experience">How long has he / she been driving the motor Vehicle ?</label>
          <Field id="experience" as="select" name="Experience"> 
              <option value="less" name="Less">Less than a year</option>
              <option value="over" name="Over">Over one Year</option>
              <option value="NA" name="na">N/A</option>
          </Field> 
      <label htmlFor="blame">Was he / she in any way to blame for the accident?</label>
          <Field id="blame" as="select" name="Blame"> 
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
          </Field> 
     <label htmlFor="liability">Did he / she admit liability ?</label>
          <Field id="liability" as="select" name="Liability"> 
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
          </Field>     
      <label htmlFor="accident">Has he / she had any previous accident ?</label>
          <Field id="accident" as="select" name="Accident"> 
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
          </Field>
      <label htmlFor="conviction">Has he / she had any conviction for any offence in connection with any motor Vehicle or any charges pending ?</label>
         <Field id="conviction" as="select" name="Conviction"> 
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
          </Field>   
      <label htmlFor="licence">Does he / she hold a full or provisional licence to drive the Vehicle ?</label>
          <Field id="licence" as="select" name="Licence"> 
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
          </Field> 
      <label htmlFor="motovehicle">Does he / she own a Motor Vehicle ?</label>
          <Field id="motovehicle" as="select" name="Licence"> 
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
          </Field>
        {/**drivers details end */}  
      <div>ACCIDENT DETAILS</div>
      <label htmlFor="road">Type of road surface </label> 
      <Field id="road" as="select" name="Road"> 
              <option value="tarmac" name="Tarmac">Tarmac</option>
              <option value="marum" name="Marum">Marum</option>
      </Field> 
      <label htmlFor="visibility">Visibility</label> 
      <Field id="visibility" as="select" name="Visibility"> 
              <option value="light" name="Light">Day / Light</option>
              <option value="dark" name="Dark">Night / Dark </option>
      </Field>
      <label htmlFor="wetordry">Wet or Dry</label> 
      <Field id="wetordry" as="select" name="WetorDry"> 
              <option value="wet" name="Light">Wet</option>
              <option value="dry" name="Dark">Dry</option>
      </Field>  
      <label htmlFor="lights">What lights were showing on your Vehicle ?</label> 
      <Field id="lights" as="select" name="Lights"> 
              <option value="deam" name="Deam">Deam Lights</option>
              <option value="full" name="Full">Full Lights</option>
      </Field>    
      <label htmlFor="warning">What warning did your driver give ?</label> 
        <input 
              id="warning"
              name="Warning"
              type="text"
         />      
      <label htmlFor="speed">Estimated speed before accident</label> 
        <input 
              id="speed"
              name="Speed"
              type="text"
         />   
     <label htmlFor="weather">Weather conditions</label> 
        <input 
              id="weather"
              name="Weather"
              type="text"
         />  
       <label htmlFor="police">Did Police take particulars</label> 
        <input 
              id="police"
              name="Police"
              type="text"
         />  
       <label htmlFor="policestation">To which Police Station was the accident reported</label> 
        <input 
              id="policestation"
              name="Policestation"
              type="text"
         />  
       <label htmlFor="attached">Attach copy Notice of Intended Prosecution if any</label> 
        <input 
              id="attached"
              name="Attached"
              type="file"
         />                 
     </Form>
    </Formik>
  </div>
</div>
    )
}

export default Claimform

