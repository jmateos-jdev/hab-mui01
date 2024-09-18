import { Button } from "@mui/material";
import { PropTypes } from "prop-types";

const ButtonSuccess = ({ fn, text }) => {
  return (
    <Button variant="outlined" color="success" size="large" onClick={fn}>
      {text}
    </Button>
  );
};

ButtonSuccess.propTypes = {
  fn: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default ButtonSuccess;
