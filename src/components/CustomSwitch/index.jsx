import { Switch } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { indigo } from "@mui/material/colors";

const StyleSwitch = styled(Switch)((params) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: indigo[600],
    "&:hover": {
      backgroundColor: alpha(
        indigo[600],
        params.theme.palette.action.hoverOpacity
      )
    }
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: indigo[600]
  }
}));

const CustomSwitch = () => {
  return <StyleSwitch defaultChecked />;
};

export default CustomSwitch;
