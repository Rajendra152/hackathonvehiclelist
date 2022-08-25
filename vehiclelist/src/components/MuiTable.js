import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "../assets/muitable.css";
import DeleteData from "./DeleteData";



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const MuiTable = () => {
    const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("https://63037d409eb72a839d824580.mockapi.io/Vehicle")
      .then((response) => response.json())
      .then((json) => setInfo(json));

  },[]);
    const [addFormData, setAddFormData] = useState({
      name: "",
      manufacturer: "",
      model: "",
      fuel: "",
      color: "",
      price: "",
      currency: "",
      city: "",
      country: ""
      });

      const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };

      const handleAddFormSubmit = (event) => {
        event.preventDefault();
    
        const newContact = {
          id: nanoid(),
          name: addFormData.name,
          manufacturer: addFormData.manufacturer,
          model: addFormData.model,
          fuel: addFormData.fuel,
          color: addFormData.color,
          price: addFormData.price,
          currency: addFormData.currency,
          city: addFormData.city,
          country: addFormData.country,
        };
    
        const newContacts = [...info, newContact];
        setInfo(newContacts);
      };

    const handleDeleteClick = (contactId) => {
        const newContacts = [...info];
        const index = info.findIndex((contact) => contact.id === contactId);
        newContacts.splice(index, 1);
        setInfo(newContacts);
    };

    return (
        <div className="app-container">
            <form>
                <table>
                    <thead>
                        <tr>
                        <th>NAME</th>
                        <th>MANUFACTURER</th>
                        <th>MODEL</th>
                        <th>FUEL</th>
                        <th>COLOR</th>
                        <th>PRICE</th>
                        <th>CURRENCY</th>
                        <th>CITY</th>
                        <th>COUNTRY</th>
                        <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {info.map((contact) => (
                            <>
                                <DeleteData
                                    contact={contact}
                                    handleDeleteClick={handleDeleteClick}
                                />
                            </>
                        ))}
                    </tbody>
                </table>
            </form>
            <div className="app-container">
        <h2>Add a Vehicle</h2>
        <span>All fields are mandatory</span>
        <div class="sub-container">
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="manufacturer"
          required="required"
          placeholder="Enter the details..."
          onChange={handleAddFormChange}
        />
        <br />
        <input
          type="text"
          name="model"
          required="required"
          placeholder="Enter the model..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="fuel"
          required="required"
          placeholder="Enter the fuel type..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="color"
          required="required"
          placeholder="Enter the color type..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="price"
          required="required"
          placeholder="Enter the price..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="currency"
          required="required"
          placeholder="Enter the currency..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="city"
          required="required"
          placeholder="Enter the city..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="country"
          required="required"
          placeholder="Enter the country..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
      </div>
      </div>
        </div>
    );
};

export default MuiTable;

// import {
//     TableContainer,
//     Table,
//     TableHead,
//     TableBody,
//     TableRow,
//     TableCell,
//     Paper
//   } from '@mui/material'
// import {
//   Box,
//   FormControlLabel,
//   Checkbox,
//   FormControl,
//   FormLabel,
//   FormGroup
// } from '@mui/material'
  
//   const MuiTable = () => {
//     return (
//       <TableContainer sx={{ maxHeight: '300px' }} component={Paper}>
//         <Table stickyHeader aria-label='simple table'>
//           <TableHead>
//             <TableRow>
//               <TableCell>
//                 <Checkbox
//               size='small'
//               color='secondary'
//             /></TableCell>
//               <TableCell>NAME</TableCell>
//               <TableCell>MANUFACTURER</TableCell>
//               <TableCell>MODEL</TableCell>
//               <TableCell>FUEL</TableCell>
//               <TableCell>COLOR</TableCell>
//               <TableCell>PRICE</TableCell>
//               <TableCell>CURRENCY</TableCell>
//               <TableCell>CITY</TableCell>
//               <TableCell>COUNTRY</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {tableData.map(row => (
//               <TableRow
//                 key={row.id}>
//                 <TableCell>{row.id}</TableCell>
//                 <TableCell>{row.first_name}</TableCell>
//                 <TableCell>{row.last_name}</TableCell>
//                 <TableCell align='center'>{row.email}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     )
//   }
//    export default MuiTable;
  
//    const tableData =[]

  