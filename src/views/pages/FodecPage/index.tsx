import React from "react";
import {useTranslation} from "react-i18next";
import {Container} from "src/views/blocks/Container";
import "./index.scss";


const FodecPage: React.FC = () => {
    const {t} = useTranslation("fodec");

    return (
        <Container className="py-6">
            <h1 className="fodec text-4xl font-bold text-foreground">
                {t("header")}
            </h1>

            <p className="fodec text-base text-foreground mt-4">
                {t("example")}
            </p>
        </Container>
    );
};


export default FodecPage;
