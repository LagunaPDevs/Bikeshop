// material-ui
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import { Grid2, Typography, Divider } from '@mui/material';

// project imports
import MenuContent from './MenuContent';

// assets
import markusLogo from "../assets/markus-logo.svg";
import { FormattedMessage } from 'react-intl';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
});

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mt: 'calc(var(--template-frame-height, 0px) + 4px)',
          p: 1.5,
        }}
      >
        <Grid2 container spacing={2} alignItems="center">
            <Grid2>
                <Box component="img" src={markusLogo} alt="Markus logo" sx={{width: 30}}/>
            </Grid2>
            <Grid2>
                <Typography variant="h5"><FormattedMessage id="markus-bike-shop" /></Typography>
            </Grid2>
        </Grid2>
      </Box>
      <Divider />
      <MenuContent />
    </Drawer>
  );
}