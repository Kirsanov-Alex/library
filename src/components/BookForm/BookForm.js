import React, { useState } from "react";
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
import { emptyBook, GENRES, AVAILABILITIES } from "../../constants";
import { createBook } from "../../store/actions/actions";

function BookForm() {
  const [book, setBook] = useState(emptyBook);

  const onChangeCheckbox = (outputId) => {
    const position = book.genre.indexOf(outputId);
    if (position > -1) {
      book.genre.splice(position, 1);
    } else {
      book.genre.push(outputId);
    }
    setBook({ ...book });
  };

  const onChangeForm = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length) {
      const img = e.target.files[0];
      setBook({ ...book, file: URL.createObjectURL(img) });
    }
  };

  const deleteForm = () => {
    setBook(emptyBook);
  };

  const checkAll = () => {
    if (book.genre.length === GENRES.length) {
      book.genre.splice(0);
    } else {
      GENRES.forEach(({ id }) => {
        if (book.genre.indexOf(id) === -1) {
          book.genre.push(id);
        }
      });
    }
    setBook({ ...book });
  };

  const previewForm = () => {
    alert(`
    Название книги : ${book.bookName}
    Автор : ${book.authorName}
    Описание : ${book.discription}
    Жанр : ${book.genre}
    Стоимость : ${book.cost} $
    Язык : ${book.language}
    Наличие : ${book.availability}
    `);
  };
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
                value={book.bookName}
                onChange={onChangeForm}
                placeholder="Enter book name"
                name="bookName"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={book.authorName}
                onChange={onChangeForm}
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
              value={book.discription}
              onChange={onChangeForm}
              placeholder="..."
              name="discription"
              variant="outlined"
              fullWidth
            />
          </Grid>
          {GENRES.map(({ id }) => (
            <FormControlLabel
              value={book.genre}
              name="genre"
              key={id}
              control={<Checkbox defaultChecked />}
              label={id}
              id={`inline-${id}-3`}
              onChange={() => onChangeCheckbox(id)}
              checked={book.genre.indexOf(id) > -1}
            />
          ))}
          <Button onClick={() => checkAll()} variant="contained">
            Checkbox
          </Button>
          <Grid mt={2}>
            <FormControl sx={{ m: 1 }}>
              <InputLabel htmlFor="cost">Cost</InputLabel>
              <OutlinedInput
                value={book.cost}
                name="cost"
                onChange={onChangeForm}
                type="number"
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="language">Language</InputLabel>
              <Select
                name="language"
                id="language"
                value={book.language}
                label="language"
                onChange={onChangeForm}
              >
                <MenuItem value={book.language}>Орчинкский</MenuItem>
                <MenuItem value={book.language}>Українська</MenuItem>
                <MenuItem>English</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid mt={2}>
            <FormControl>
              <FormLabel sx={{ ml: 1 }} id="controlled-radio-buttons-group">
                Availability
              </FormLabel>
              {AVAILABILITIES.map(({ label, value }) => (
                <RadioGroup
                  row
                  sx={{ ml: 1 }}
                  name="availability"
                  onChange={onChangeForm}
                >
                  <FormControlLabel
                    checked={book.availability === value}
                    value={value}
                    control={<Radio />}
                    label={label}
                  />
                </RadioGroup>
              ))}
            </FormControl>

            <Button
              sx={{ ml: 20, mt: 3 }}
              variant="contained"
              component="label"
            >
              <input name="file" onChange={onImageChange} type="file" hidden />
              {book.file ? (
                <img className="image" alt="" src={book.file} />
              ) : (
                <span>Файл не выбран</span>
              )}
            </Button>
          </Grid>
          <div className="buttons">
            <Button onClick={() => createBook()} variant="contained">
              Save
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={deleteForm}
            >
              Очистить форму
            </Button>
            <Button variant="contained" onClick={previewForm}>
              Предпросмотр
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BookForm;
