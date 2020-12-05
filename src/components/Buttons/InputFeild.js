import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

function InputFeild({ title, value, handleChange }) {
  return (
    <div>
      <TextField
        value={value}
        fullWidth
        onChange={handleChange}
        label={title}
        //   variant="outlined"
      />
    </div>
  );
}

InputFeild.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
};

InputFeild.defaultProps={
    title: "",
    value: null,
    handleChange: () => null,
}

export default InputFeild;
