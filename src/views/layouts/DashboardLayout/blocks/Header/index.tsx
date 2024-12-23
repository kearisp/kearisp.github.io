import React from "react";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Icon,
    Button,
    Divider,
    Typography
} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";

import {ROUTES, HEADER_MENU} from "src/env";

import {ThemeToggle} from "../ThemeToggle";


const Header: React.FC = () => {
    const {t} = useTranslation();

    return (
        <AppBar position="relative" color="transparent">
            <Toolbar variant="dense">
                <IconButton
                  size="medium">
                    <Icon
                      component={MenuIcon} />
                </IconButton>

                <Typography
                  sx={{
                    flexGrow: 1,
                    display: {
                        xs: "none",
                        sm: "block"
                    },
                    mr: 2,
                    fontWeight: 700,
                    color: "inherit",
                    textDecoration: "none"
                  }}
                  component={Link}
                  variant="h6"
                  to={ROUTES.home}>
                    kearisp
                </Typography>

                <Grid sx={{flex: 1}} />

                {HEADER_MENU.map((route, index:number) => {
                    const {
                        label,
                        target,
                        to
                    } = route;

                    return (
                        <Button
                          key={index}
                          component={Link}
                          variant="text"
                          color="inherit"
                          target={target}
                          to={to}>
                            {t(label)}
                        </Button>
                    );
                })}

                <ThemeToggle />
            </Toolbar>
        </AppBar>
    );
};


export {Header};