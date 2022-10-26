import React from "react";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "./BookForm.css";

function BookForm() {
  return (
    <div className="form">
      <Card>
        <Typography gutterBottom variant="h3" align="center">
          Book Form
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Book Name"
                placeholder="Enter book name"
                name="bookName"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Author Name"
                placeholder="Enter author"
                variant="outlined"
                name="authorName"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid mt={2} xs={12}>
            <TextField
              rows={3}
              multiline
              label="Discription"
              placeholder="..."
              name="discription"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <Button variant="contained">Checkbox</Button>
          <Grid mt={2}>
            <FormControl sx={{ m: 1 }}>
              <InputLabel htmlFor="cost">Cost</InputLabel>
              <OutlinedInput
                id="cost"
                value={""}
                onChange={""}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Cost"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="language">Language</InputLabel>
              <Select
                labelId="language"
                id="language"
                value={""}
                label="language"
                onChange={"handleChange"}
              >
                <MenuItem value={""}>Орчинкский</MenuItem>
                <MenuItem value={""}>Українська</MenuItem>
                <MenuItem>English</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid mt={2}>
            <FormControl>
              <FormLabel sx={{ ml: 1 }} id="controlled-radio-buttons-group">
                Availability
              </FormLabel>
              <RadioGroup
                row
                sx={{ ml: 1 }}
                aria-labelledby="controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={"value"}
                onChange={""}
              >
                <FormControlLabel value="" control={<Radio />} label="Yes" />
                <FormControlLabel value="" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
            <Button
              sx={{ ml: 20, mt: 3 }}
              variant="contained"
              component="label"
            >
              Upload File
              <input type="file" hidden />
            </Button>
          </Grid>
          <div className="buttons">
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={"deleteForm"}
            >
              Очистить форму
            </Button>
            <Button variant="contained" onClick={"previewForm"}>
              Предпросмотр
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookForm;
