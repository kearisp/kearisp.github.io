import React from "react";
import {useTranslation} from "react-i18next";
import {Container} from "src/views/blocks/Container";
import {Button} from "src/views/blocks";


export const Hero: React.FC = () => {
    const {t} = useTranslation("home");

    return (
        <div className="bg-gradient-to-b from-secondary/40 to-background">
            <Container className="py-20 flex flex-col items-start gap-6">
                <span className="text-sm font-medium uppercase tracking-wide text-primary">
                    {t("hero.eyebrow")}
                </span>

                <h1 className="text-4xl sm:text-5xl font-bold text-foreground max-w-2xl">
                    {t("hero.title")}
                </h1>

                <p className="text-lg text-muted-foreground max-w-2xl">
                    {t("hero.subtitle")}
                </p>

                <div className="flex flex-wrap gap-3 mt-2">
                    <Button
                      as="a"
                      variant="primary"
                      href="#packages"
                      onClick={(event: React.MouseEvent) => {
                          event.preventDefault();

                          document.getElementById("packages")?.scrollIntoView({behavior: "smooth"});
                      }}>
                        {t("hero.primaryCta")}
                    </Button>

                    <Button
                      as="a"
                      variant="outline"
                      href="https://github.com/kearisp"
                      target="_blank"
                      rel="noreferrer">
                        {t("hero.secondaryCta")}
                    </Button>
                </div>
            </Container>
        </div>
    );
};
