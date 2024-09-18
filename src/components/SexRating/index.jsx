import PropTypes from "prop-types";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import WcIcon from "@mui/icons-material/Wc";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyleRating = styled(Rating)((params) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: params.theme.palette.action.disabled
  }
}));

const icons = {
  1: {
    icon: <WomanIcon fontSize="large" color="error" />,
    label: "Femenino"
  },
  2: {
    icon: <ManIcon fontSize="large" color="info" />,
    label: "Masculino"
  },
  3: {
    icon: <WcIcon fontSize="large" color="warning" />,
    label: "Otro"
  }
};

const IconsContainer = (props) => {
  const { value, ...other } = props;
  return <span {...other}>{icons[value].icon}</span>;
};

IconsContainer.propTypes = {
  value: PropTypes.number.isRequired
};

const SexRating = () => {
  return (
    <StyleRating
      max={3}
      defaultValue={1}
      IconContainerComponent={IconsContainer}
      getLabelText={(value) => icons[value].label}
      highlightSelectedOnly
    />
  );
};

export default SexRating;
