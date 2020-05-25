import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      width: theme.spacing(32),
      height: theme.spacing(30)
    }
  },
  form: { margin: 10 },
  fontColor1: { color: "#FC9D01" },
  fontColor2: { color: "#005da6" },
  fontColorButton: { background: "#005da6", color: "#fff", marginTop: 15 },
}));

const Main = () => {
  const styles = useStyles();

  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState("");
  const [values, setValues] = useState([]);

  useEffect(() => {
    if(submit) {
      axios
        .get(`http://localhost:3001/escala?mat=${submit}&_sort=data`)
        .then((response) => setValues(response.data));
    }
  }, [submit]);

  function onSubmit(event) {
    event.preventDefault();
    setSubmit(input);
  }

  function onChange(event) {
    setInput(event.target.value);
  }
  return (
    <>
    <Container maxWidth="sm">
      <div className={styles.paper}>
        <Paper elevation={4}>
          <Typography align="center" variant="h4" className={styles.fontColor1}>
            Escala Diária
          </Typography>
          <Typography align="center" variant="h6" className={styles.fontColor2}>
            Empresa Vitória
          </Typography>
          <Divider variant="middle" />
          <form className={styles.form} onSubmit={onSubmit}>
            <Typography
              align="center"
              variant="subtitle1"
              className={styles.fontColor1}
            >
              Matrícula
            </Typography>
            <TextField
              required
              autoFocus
              fullWidth
              autoComplete="false"
              type="password"
              size="small"
              margin="normal"
              label="Matrícula"
              variant="outlined"
              onChange={onChange}
            />
            <Button
              fullWidth
              variant="contained"
              className={styles.fontColorButton}
              type="submit"
            >
              Consultar
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
    {values.length > 0 && <Table Scale={values} />}
    </>
  );
}

export default Main;

