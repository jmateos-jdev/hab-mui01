import Slider from "@mui/material/Slider";
import { useState } from "react";

const ColorSlider = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Slider
      defaultValue={0}
      value={value}
      onChange={handleSliderChange}
      valueLabelDisplay="auto"
      step={0.25}
      min={-5}
      max={5}
      marks
      sx={{
        // Aplicamos estilos condicionales al componente principal
        "& .MuiSlider-thumb": {
          backgroundColor: value < 0 ? "red" : "blue"
        },

        "& .MuiSlider-track": {
          // Degradado de azul a rojo
          background: value < 0 ? "red" : "blue"
        }
      }}
    />
  );
};

export default ColorSlider;
