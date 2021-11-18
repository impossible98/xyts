import { faHome, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { APP_NAME } from "@/utils/constants";

import { Link } from "react-router-dom";

interface Props {
}

function AppDrawer(props: Props) {
    return (
        <Box>
            <Toolbar>
                <Box
                    sx={{
                        position: "absolute",
                        textAlign: "center",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Typography variant="h4">
                        {APP_NAME}
                    </Typography>
                </Box>
            </Toolbar>
            <Divider />
            <List>
                <Link to="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FontAwesomeIcon
                                    icon={faHome}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <Link to="/about">
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <FontAwesomeIcon
                                icon={faInfoCircle}
                            />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
            </Link>
        </Box>
    );
}

export default AppDrawer;
