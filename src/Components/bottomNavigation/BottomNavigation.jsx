import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigationWrapper from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Fastfood from '@material-ui/icons/Fastfood';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles({
  root: {
    width: "100%",
    bottom: "0",
    position: "absolute",
  },
});

const BottomNavigation = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigationWrapper
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="All" icon={<Fastfood />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Add new" icon={<Add />} />
    </BottomNavigationWrapper>
  );
}

export default BottomNavigation;

