import {
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
} from "@mui/material";
import React, { useContext } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { DrawerHeader } from "../layouts/MainLayout";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth } from "../layouts/MainLayout";
import NavContainerContext from "../context/NavContainerContext";
import { NavContainerContextType } from "../shared/types";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { UserContextType } from "../shared/types";

import SettingsAccessibilityIcon from "@mui/icons-material/SettingsAccessibility";
import HealingIcon from "@mui/icons-material/Healing";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import ScoreboardIcon from "@mui/icons-material/Scoreboard";

// MUI drawer template styling //////////////////////////////

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const SideBarDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

// /////////////////// MUI drawer template styling /////

const SideBar = () => {
    const { user } = useContext(UserContext) as UserContextType; //TODO FIX ERROR

    const { sideBarOpen, handleSideBarClose } = useContext(
        NavContainerContext
    ) as NavContainerContextType;

    const navigate = useNavigate();

    return (
        <SideBarDrawer variant="permanent" open={sideBarOpen}>
            <DrawerHeader>
                <IconButton onClick={handleSideBarClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {/* tabs/links go here */}
                <ListItem
                    key="player-info"
                    disablePadding
                    sx={{ display: "block" }}
                >
                    <ListItemButton onClick={() => navigate("player-info")}>
                        <ListItemIcon>
                            <SettingsAccessibilityIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Player Profile"
                            sx={{ opacity: sideBarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key="injury-info"
                    disablePadding
                    sx={{ display: "block" }}
                >
                    <ListItemButton onClick={() => navigate("injury-info")}>
                        <ListItemIcon>
                            <HealingIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Injury History"
                            sx={{ opacity: sideBarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key="team-info"
                    disablePadding
                    sx={{ display: "block" }}
                >
                    <ListItemButton onClick={() => navigate("team-info")}>
                        <ListItemIcon>
                            <GroupsIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Team Profile"
                            sx={{ opacity: sideBarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key="schedule-info"
                    disablePadding
                    sx={{ display: "block" }}
                >
                    <ListItemButton onClick={() => navigate("schedule-info")}>
                        <ListItemIcon>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Schedule"
                            sx={{ opacity: sideBarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key="game-info"
                    disablePadding
                    sx={{ display: "block" }}
                >
                    <ListItemButton onClick={() => navigate("game-info")}>
                        <ListItemIcon>
                            <ScoreboardIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary="Game History"
                            sx={{ opacity: sideBarOpen ? 1 : 0 }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </SideBarDrawer>
    );
};

export default SideBar;
