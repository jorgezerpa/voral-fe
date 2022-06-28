import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

const BottomNavigationMenu = ({ toggleDrawer }) => {
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
        <BottomNavigationAction label="categories" onClick={toggleDrawer()} />
        <BottomNavigationAction label="Logo" />
        <BottomNavigationAction label="cart" />
      </BottomNavigation>
    </Box>
  );
}

export default BottomNavigationMenu;