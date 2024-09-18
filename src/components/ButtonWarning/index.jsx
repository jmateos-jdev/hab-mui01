import { Button } from "@mui/material";
import { PropTypes } from "prop-types";

const ButtonWarning = ({ fn, text = "WARNING" }) => {
  return (
    <Button variant="contained" color="warning" size="large" onClick={fn}>
      {text}
    </Button>
  );
};

ButtonWarning.propTypes = {
  fn: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default ButtonWarning;
