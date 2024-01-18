import React from "react";
import {useTranslation} from "react-i18next";
import {Container, Typography} from "@mui/material";

import "./index.scss";


const FodecPage: React.FC = () => {
    const {t} = useTranslation("fodec");

    return (
        <Container>
            <Typography variant="h1">
                <span className="fodec">{t("header")}</span>
            </Typography>

            <Typography className="fodec" variant="body1">
                {t("example")}
            </Typography>
        </Container>
    );
};


export default FodecPage;
