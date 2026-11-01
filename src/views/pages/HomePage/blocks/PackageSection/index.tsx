import React from "react";
import {useTranslation} from "react-i18next";
import {Container} from "src/views/blocks/Container";
import {PACKAGES} from "../../data/packages";
import {PackageCard} from "../PackageCard";


export const PackageSection: React.FC = () => {
    const {t} = useTranslation("home");

    return (
        <Container
          id="packages"
          className="py-16 flex flex-col gap-10 scroll-mt-[64px]">
            <div className="flex flex-col gap-2">
                <span className="text-sm font-medium uppercase tracking-wide text-primary">
                    {t("packages.eyebrow")}
                </span>

                <h2 className="text-3xl font-bold text-foreground">
                    {t("packages.title")}
                </h2>

                <p className="text-muted-foreground max-w-2xl">
                    {t("packages.subtitle")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {PACKAGES.map((meta) => (
                    <PackageCard
                      key={meta.id}
                      meta={meta}
                      title={t(`packages.items.${meta.id}.title`)}
                      tagline={t(`packages.items.${meta.id}.tagline`)}
                      description={t(`packages.items.${meta.id}.description`)}
                      features={t(`packages.items.${meta.id}.features`, {returnObjects: true}) as string[]}
                      demoLabel={t(`packages.items.${meta.id}.demoLabel`)}
                      githubLabel={t(`packages.items.${meta.id}.githubLabel`)}
                      npmLabel={t(`packages.items.${meta.id}.npmLabel`)}
                      statusLabel={meta.status ? t(`packages.status.${meta.status}`) : undefined} />
                ))}
            </div>
        </Container>
    );
};
