import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function AutoGridNoWrap() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <p>Nov 05 2019</p>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>B</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>Baqir Raza</Typography>
          </Grid>
        </Grid>
      </Paper>
      <p>Nov 06 2019</p>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>S</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>Salman Ahmed</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>I</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Imran Ismail</Typography>
          </Grid>
        </Grid>
      </Paper>
      <p>Nov 08 2019</p>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>
          <Grid item xs>
            <Typography noWrap>Ahmed Khan</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
