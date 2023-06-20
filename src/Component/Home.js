import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Route,Routes,Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import bookstoreservice from '../Service/bookstoreservice';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align menu to the right
  },
  menu: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
    display: 'none',
    position: 'absolute',
    right: 0, // Align menu to the right
  },
  menuItem: {
    cursor: 'pointer',
  },
  search: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  section: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  cart: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  footer: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Home() {
  const classes = useStyles();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h4" component="h1" gutterBottom>
          BookStore
        </Typography>
        <div>
        <Link to="/signin">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<PersonIcon />}
          >
            Sign In
          </Button></Link>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ShoppingCartIcon />}
          >
            Cart
          </Button>
          <Button
            className={classes.menuButton}
            color="inherit"
            onClick={handleMenuClick}
            startIcon={<MenuIcon />}
          >
            Menu
          </Button>
        </div>
      </header>
      {isMenuOpen && (
        <nav className={classes.menu}>
          <ul>
            <li className={classes.menuItem}>About</li>
            <li className={classes.menuItem}>Categories</li>
            <li className={classes.menuItem}>Settings</li>
            <li className={classes.menuItem}>Contact Us</li>
          </ul>
        </nav>
      )}
      <main>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} className={classes.search}>
            <Input type="text" placeholder="Search..." fullWidth />
            <Button variant="contained" color="primary">
              Search
            </Button>
          </Grid>
          <Grid item xs={12} sm={8} className={classes.section}>
            <Typography variant="h6" component="h2" gutterBottom>
              Books
            </Typography>
            {/* Display books here */}
          </Grid>
          
        </Grid>
      </main>
      
    </div>
  );
}

export default Home;