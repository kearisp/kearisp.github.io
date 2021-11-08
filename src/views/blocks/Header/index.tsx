import React from "react";
import {Link} from "react-router-dom";
import {
    Grid,
    AppBar,
    Toolbar,
    IconButton,
    Icon,
    Button,
    Divider
} from "@mui/material";
import {Menu as MenuIcon} from "@mui/icons-material";

import {HEADER_MENU} from "src/routing";


const Header:React.FC = () => {
    return (
        <AppBar
          position="relative">
            <Toolbar>
                <IconButton
                  size="medium">
                    <Icon
                      component={MenuIcon} />
                </IconButton>

                <Grid sx={{flex: 1}} />

                {HEADER_MENU.map((route, index:number) => {
                    const {
                        label,
                        to
                    } = route;

                    return (
                        <Button key={index}
                          component={Link}
                          variant="text"
                          color="secondary"
                          to={to}>
                            {label}
                        </Button>
                    );
                })}
            </Toolbar>
        </AppBar>
    );
};


export default Header;