// react intl
import { FormattedMessage } from 'react-intl';

// material-ui
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

// assets
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import GavelIcon from '@mui/icons-material/Gavel';

const mainListItems = [
  { text: <FormattedMessage id="home" />, icon: <HomeRoundedIcon /> },
  { text: <FormattedMessage id='bike-creator' />, icon: <PedalBikeIcon /> },
  { text: <FormattedMessage id='rules' />, icon: <GavelIcon /> },
];


export default function MenuContent() {
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton selected={index === 0}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Stack>
  );
}