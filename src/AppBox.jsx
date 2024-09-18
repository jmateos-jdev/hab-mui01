import "./App.css";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import {
  Autocomplete,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Rating,
  Box,
  Slider,
  Switch
} from "@mui/material";
import { useState } from "react";
import FavoriteRating from "./components/FavoriteRating";
import QuestRating from "./components/QuestRating";
import SexRating from "./components/SexRating";
import ColorSlider from "./components/ColorSlider";
import CustomSwitch from "./components/CustomSwitch";

const paises = [
  { label: "Argentina", id: 1 },
  { label: "Belgica", id: 2 },
  { label: "Cuba", id: 3 },
  { label: "Dinamarca", id: 4 },
  { label: "España", id: 5 },
  { label: "Francia", id: 6 }
];

const voteValue = {
  1: "Malo",
  2: "No tan bueno",
  3: "Bueno",
  4: "Genial",
  5: "Espectacular"
};

const getFeedback = (value) => {
  return `${value} Estrella${value !== 1 ? "s" : ""}, ${voteValue[value]}`;
};

function App() {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);

  return (
    <Box>
      <h1>Formulario</h1>
      <Box className="card">
        <Box sx={{ display: "flex" }}>
          <Box>
            {/* AUTOCOMPLETE SELECT */}
            <Autocomplete
              options={paises}
              sx={{
                width: 500
              }}
              renderInput={(params) => (
                <TextField {...params} label="Pais de Origen" />
              )}
            />
          </Box>
          <Box sx={{ marginLeft: 5 }}>
            {/* CHECKBOX CON ICON */}
            <FormControlLabel
              required
              label="Acepta los términos y condiciones"
              control={
                <Checkbox
                  color="success"
                  size="large"
                  icon={<VerifiedOutlinedIcon />}
                  checkedIcon={<VerifiedOutlinedIcon />}
                />
              }
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "50%" }}>
            {/* RADIO BUTTONS */}
            <FormControl>
              <FormLabel id="genero">Genero</FormLabel>
              <RadioGroup
                aria-labelledby="genero"
                defaultValue={"O"}
                name="genero"
              >
                <FormControlLabel
                  value={"F"}
                  control={<Radio />}
                  label="Femenino"
                />
                <FormControlLabel
                  value={"M"}
                  control={<Radio />}
                  label="Masculino"
                />
                <FormControlLabel
                  value={"O"}
                  control={<Radio />}
                  label="Otro"
                />
                <FormControlLabel
                  value={"P"}
                  control={<Radio />}
                  label="Prefiero no decirlo"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Slider defaultValue={50} valueLabelDisplay="auto" />
            <Slider
              defaultValue={50}
              valueLabelDisplay="auto"
              step={10}
              min={30}
              max={200}
              marks
            />
            <Slider
              defaultValue={0}
              valueLabelDisplay="auto"
              step={0.25}
              min={-5}
              max={5}
              marks
            />
            <ColorSlider />
          </Box>
        </Box>

        {/* RATING */}
        <Box>
          <Rating
            value={value}
            max={10}
            getLabelText={getFeedback}
            onChange={(_, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(_, newHover) => {
              setHover(newHover);
            }}
            name="vote"
            precision={1}
            size="large"
          />
          {value !== null && (
            <Box>{voteValue[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
        <Box>
          <FavoriteRating />
        </Box>
        <Box>
          <QuestRating />
        </Box>
        <Box>
          <SexRating />
        </Box>
        <Box>
          <Switch defaultChecked color="warning" />
          <Switch defaultChecked color="error" />
          <Switch defaultChecked color="secondary" />
          <Switch defaultChecked color="success" />
          <Switch defaultChecked color="default" />
          <CustomSwitch />
        </Box>
        <Box sx={{ display: "flex", marginBottom: 3 }}>
          <TextField label="Nombre" fullWidth />
          <TextField label="Nombre" fullWidth />
          <TextField label="Nombre" fullWidth />
        </Box>
        <Box sx={{ display: "flex", marginBottom: 3 }}>
          <TextField label="Nombre" variant="filled" fullWidth />
          <TextField label="Nombre" variant="filled" fullWidth />
          <TextField label="Nombre" variant="filled" fullWidth />
        </Box>
        <Box sx={{ display: "flex", marginBottom: 3 }}>
          <TextField label="Nombre" variant="standard" fullWidth />
          <TextField label="Nombre" variant="standard" fullWidth />
          <TextField label="Nombre" variant="standard" fullWidth />
        </Box>
        <Box sx={{ display: "flex", marginBottom: 3 }}>
          <TextField
            label="Nombre"
            error
            helperText="Complete el nombre"
            fullWidth
          />
          <TextField
            label="Nombre"
            error
            helperText="Complete el nombre"
            fullWidth
          />
          <TextField
            label="Nombre"
            error
            helperText="Complete el nombre"
            fullWidth
          />
        </Box>
      </Box>
      <p className="read-the-docs">Formulario creado con Material UI</p>
    </Box>
  );
}

export default App;
