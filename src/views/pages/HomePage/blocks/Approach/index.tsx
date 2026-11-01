import React from "react";
import {useTranslation} from "react-i18next";
import {Container} from "src/views/blocks/Container";


export const Approach: React.FC = () => {
    const {t} = useTranslation("home");

    return (
        <div className="bg-secondary/30">
            <Container className="py-16 flex flex-col gap-3 max-w-(--breakpoint-md)!">
                <span className="text-sm font-medium uppercase tracking-wide text-primary">
                    {t("approach.eyebrow")}
                </span>

                <h2 className="text-2xl font-bold text-foreground">
                    {t("approach.title")}
                </h2>

                <p className="text-muted-foreground">
                    {t("approach.body")}
                </p>
            </Container>
        </div>
    );
};
