import PropTypes from "prop-types";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyleRating = styled(Rating)((params) => ({
  "& .MuiRating-iconEmpty .MuiSvgIcon-root": {
    color: params.theme.palette.action.disabled
  }
}));

const icons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="large" color="error" />,
    label: "Muy disgustado"
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="large" color="error" />,
    label: "Disgustado"
  },
  3: {
    icon: <SentimentNeutralIcon fontSize="large" color="warning" />,
    label: "Indiferente"
  },
  4: {
    icon: <SentimentSatisfiedIcon fontSize="large" color="info" />,
    label: "Satisfecho"
  },
  5: {
    icon: <SentimentSatisfiedAltIcon fontSize="large" color="success" />,
    label: "Muy Satisfecho"
  },
  6: {
    icon: <SentimentVerySatisfiedIcon fontSize="large" color="success" />,
    label: "Altamente Satisfecho"
  }
};

const IconsContainer = (props) => {
  const { value, ...other } = props;
  return <span {...other}>{icons[value].icon}</span>;
};

IconsContainer.propTypes = {
  value: PropTypes.number.isRequired
};

const QuestRating = () => {
  return (
    <StyleRating
      max={6}
      defaultValue={3}
      IconContainerComponent={IconsContainer}
      getLabelText={(value) => icons[value].label}
      highlightSelectedOnly
    />
  );
};

export default QuestRating;
