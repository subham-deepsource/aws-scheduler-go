import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Create from './pages/Create';
import Details from './pages/Details';
import List from './pages/List';

const Styles = makeStyles((theme) => ({
  toolbar: {
    '& a': {
      color: theme.palette.common.white,
      textDecoration: 'none'
    }
  },
  title: {
    flexGrow: 1
  },
  main: {
    margin: theme.spacing(4, 0)
  }
}));

const App = () => {
  const styles = Styles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <Typography className={styles.title} component="h1" variant="h6">
            <Link to="/">AWS Scheduler</Link>
          </Typography>
          <Link to="/create">
            <Button color="secondary" size="medium" variant="contained">
              Create
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <main className={styles.main}>
          <Switch>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/:id">
              <Details />
            </Route>
            <Route exact path="/">
              <List />
            </Route>
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  );
};

export default App;
