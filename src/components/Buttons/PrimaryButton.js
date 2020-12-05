import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

function SuccessButton({ title, handleClick, ...props }) {
  return (
    <div>
      <Button variant="contained" color="primary" {...props} onClick={handleClick} >
        {title}
      </Button>
    </div>
  );
}

SuccessButton.propTypes = {
  handleClick: PropTypes.func,
  title: PropTypes.string,
};

SuccessButton.defaultProps = {
  handleClick: () => null,
  title: "",
};

export default SuccessButton;
