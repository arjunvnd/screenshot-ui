import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";

function RadioGroupFormat({ currentValue, handleChange }) {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose image format</FormLabel>
        <RadioGroup
          aria-label="quiz"
          name="quiz"
          value={currentValue}
          onChange={handleChange}
        >
          <FormControlLabel
            value="jpeg"
            checked={currentValue === "jpeg"}
            control={<Radio color="primary" />}
            label="JPEG"
          />
          <FormControlLabel
            value="png"
            checked={currentValue === "png"}
            control={<Radio color="primary" />}
            label="PNG"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

RadioGroupFormat.propTypes = {
  currentValue: PropTypes.string,
  handleChange: PropTypes.func,
};

RadioGroupFormat.defaultProps = {
  currentValue: "",
  handleChange: () => null,
};

export default RadioGroupFormat;
