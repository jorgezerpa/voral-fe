import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNavigationMenu = ({ toggleDrawer, toggleCart }) => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction fontWeight='bold' label="categories" onClick={toggleDrawer()} />
        <BottomNavigationAction fontWeight='bold' label="Logo" />
        <BottomNavigationAction fontWeight='bold' label="cart" onClick={toggleCart()} />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNavigationMenu;