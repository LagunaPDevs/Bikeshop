// material-ui
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";

// assets
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import GavelIcon from "@mui/icons-material/Gavel";

// router
import { useLocation, useNavigate } from "react-router";
import { bikeCreator, rulesPath } from "../../utils/constants/route_constants";

const mainListItems = [
  {
    text: "Product rules",
    icon: <GavelIcon />,
    path: rulesPath,
  },
  {
    text: "Bike simulator",
    icon: <PedalBikeIcon />,
    path: bikeCreator,
  },
];

export default function MenuContent() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{ display: "block" }}
            onClick={() => navigate(item.path)}
          >
            <ListItemButton selected={location.pathname === item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
