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
import Grid from "@mui/material/Grid2";
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
      <Grid container spacing={2}>
        <Grid size={12} sx={{ backgroundColor: "#CCC" }}>
          Primer Celda
        </Grid>
        <Grid size={9} sx={{ backgroundColor: "#ECC" }}>
          Segunda Celda
        </Grid>
        <Grid size={6} sx={{ backgroundColor: "#CCE" }}>
          Tercer Celda
        </Grid>
        <Grid size={12} container>
          <Grid size={3} sx={{ backgroundColor: "#CEC" }}>
            Tercer Celda
          </Grid>
        </Grid>
      </Grid>

      <Grid container>
        <Grid size={12}>
          <h1>Formulario</h1>
        </Grid>
        <Grid size={6}>
          {/* AUTOCOMPLETE SELECT */}
          <Autocomplete
            options={paises}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Pais de Origen" />
            )}
          />
        </Grid>
        <Grid
          size={6}
          sx={{
            textAlign: "start"
          }}
        >
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
        </Grid>
        <Grid size={6}>
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
              <FormControlLabel value={"O"} control={<Radio />} label="Otro" />
              <FormControlLabel
                value={"P"}
                control={<Radio />}
                label="Prefiero no decirlo"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid size={6}>
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
        </Grid>
        <Grid size={3}>
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
        </Grid>
        <Grid size={5}>
          <FavoriteRating />
        </Grid>
        <Grid size={2}>
          <QuestRating />
        </Grid>
        <Grid size={2}>
          <SexRating />
        </Grid>
        <Grid size={12}>
          <Switch defaultChecked color="warning" />
          <Switch defaultChecked color="error" />
          <Switch defaultChecked color="secondary" />
          <Switch defaultChecked color="success" />
          <Switch defaultChecked color="default" />
          <CustomSwitch />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField label="Nombre" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField label="Nombre" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField label="Nombre" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Nombre" variant="standard" fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Nombre" variant="standard" fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField label="Nombre" variant="standard" fullWidth />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Nombre"
            error
            helperText="Complete el nombre"
            fullWidth
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Nombre"
            error
            helperText="Complete el nombre"
            fullWidth
          />
        </Grid>
        <Grid size={4}>
          <TextField
            label="Nombre"
            error
            helperText="Complete el nombre"
            fullWidth
          />
        </Grid>
      </Grid>

      <p className="read-the-docs">Formulario creado con Material UI</p>
    </Box>
  );
}

export default App;
