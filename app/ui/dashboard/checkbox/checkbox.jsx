import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      {/* <FormLabel component="legend">Label placement</FormLabel> */}
      <h2>🔥Issues🔥</h2>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="0"
          control={<Checkbox />}
          label="Pas login ga langsung redirect"
          labelPlacement="end"
        />
        <FormControlLabel
          value="1"
          control={<Checkbox checked={true} />}
          label="Sidebar harusnya ga ikut ke-scroll"
          labelPlacement="end"
        />
        <FormControlLabel
          value="2"
          control={<Checkbox checked={true} />}
          label="Chart Spotlight satu row aja"
          labelPlacement="end"
        />
        <FormControlLabel
          value="3"
          control={<Checkbox />}
          label="Wordcloud belum (reference: https://www.npmjs.com/package/react-wordcloud#kitchen-sink)"
          labelPlacement="end"
        />
        <FormControlLabel
          value="4"
          control={<Checkbox checked={true} />}
          label="Most Positive/Negative Topics/Instance juga belum"
          labelPlacement="end"
        />
        <FormControlLabel
          value="5"
          control={<Checkbox />}
          label="Logo OJK pasang, terkendala di fill"
          labelPlacement="end"
        />
        <FormControlLabel
          value="6"
          control={<Checkbox checked={true} />}
          label="bikin z-index navbar paling atas"
          labelPlacement="end"
        />
        <FormControlLabel
          value="7"
          control={<Checkbox checked={true} />}
          label="Legend chart keluar container noh"
          labelPlacement="end"
        />
        <FormControlLabel
          value="8"
          control={<Checkbox />}
          label="Image Optimizer"
          labelPlacement="end"
        />
        <FormControlLabel
          value="9"
          control={<Checkbox checked={true} />}
          label="Samakan styles container chart denga card"
          labelPlacement="end"
        />
      </FormGroup>
    </FormControl>
  );
}
