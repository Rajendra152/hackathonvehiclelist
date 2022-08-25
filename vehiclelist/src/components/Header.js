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
import "../assets/Header.css";

const Header = () => {
  const [formats, setFormats] = useState("");

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
          <Button variant="contained" color="primary" size='small'>
            + Add Vehicle
          </Button>
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
