import React from "react";
import {useTranslation} from "react-i18next";
import {Container} from "src/views/blocks/Container";
import {Button} from "src/views/blocks";


export const Cta: React.FC = () => {
    const {t} = useTranslation("home");

    return (
        <Container className="py-16 flex flex-col items-start gap-4">
            <h2 className="text-2xl font-bold text-foreground">
                {t("cta.title")}
            </h2>

            <p className="text-muted-foreground max-w-2xl">
                {t("cta.subtitle")}
            </p>

            <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  variant="primary"
                  href="https://github.com/kearisp"
                  target="_blank"
                  rel="noreferrer">
                    {t("cta.githubLabel")}
                </Button>

                <Button
                  as="a"
                  variant="outline"
                  href="mailto:krispcut@gmail.com">
                    {t("cta.emailLabel")}
                </Button>
            </div>
        </Container>
    );
};
