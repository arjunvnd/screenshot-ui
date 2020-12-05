import React from "react";
import PropTypes from "prop-types";
import { InputLabel, MenuItem, Select } from "@material-ui/core";

function ResolutionSelect({ menuItems, value, handleChange, title }) {
  return (
    <div>
      <InputLabel>{title}</InputLabel>

      <Select fullWidth value={value} onChange={handleChange}>
        {menuItems.map((menuItem) => {
          return (
            <MenuItem key={menuItem.id} value={menuItem.id}>
              {menuItem.name}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
}

ResolutionSelect.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

ResolutionSelect.defaultProps = {
  title: "",
  value: null,
  handleChange: () => null,
  menuItems: [],
};

export default ResolutionSelect;
