import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Table = ({ Scale }) => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper} elevation={5}>
              {Scale.map((res) => (
                <div>
                  <Typography> {res.data}</Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={2}>
                      <Typography>Pegada</Typography>
                      <Typography>{res.pegada}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <Typography>Linha</Typography>
                      <Typography>{res.codlinha}</Typography>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <Typography>Serviço</Typography>
                      <Typography>{res.servico}</Typography>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <Typography>Origem</Typography>
                      <Typography>{res.origem}</Typography>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <Typography>Hr.Ini</Typography>
                      <Typography>{res.hrini}</Typography>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <Typography>Hr.Fim</Typography>
                      <Typography>{res.hrfim}</Typography>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
  );
};

export default Table;
