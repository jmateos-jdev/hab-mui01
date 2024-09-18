import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Rating } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyleRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#F44"
  },
  "& .MuiRating-iconHover": {
    color: "#F00"
  }
});

const FavoriteRating = () => {
  return (
    <StyleRating
      size="large"
      icon={<FavoriteIcon fontSize="large" />}
      emptyIcon={<FavoriteBorderIcon fontSize="large" />}
      max={10}
      precision={1}
    />
  );
};

export default FavoriteRating;
