import React from "react";
import { useState } from "react";
import {
  Stack,
  Button,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import MovingIcon from '@mui/icons-material/Moving';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Box, Typography } from '@mui/material'
import { nanoid } from "nanoid";
import "../assets/Header.css";

const Header = () => {
  const [formats, setFormats] = useState("");
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const [info, setInfo] = useState([]);

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


  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };
  return (
    <div class="component">
      <div class="row">
        <Stack spacing={3} direction="row">
					<div class="heading">Vehicle List</div>
					<div class="button-style">
          <Button variant="contained" color="primary" size='small'  onClick={() => setIsDrawerOpen(true)}>
            + Add Vehicle
          </Button>
					<Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' role='presentation' textAlign='center'>
          <Typography variant='h6' component='div'>
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
          </Typography>
        </Box>
      </Drawer>
					</div>
					<div class="togglebtn">
          <ToggleButtonGroup
            exclusive
            value={formats}
            onChange={handleFormatChange}
            aria-label="text formatting"
          >
            <ToggleButton value="bold" aria-label="bold">
						<MenuIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
						<MovingIcon />
            </ToggleButton>
          </ToggleButtonGroup>
					</div>
				</Stack>
      </div>
    </div>
  );
};

export default Header;
