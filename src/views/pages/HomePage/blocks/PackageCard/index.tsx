import React from "react";
import {Link} from "react-router-dom";
import {Check} from "lucide-react";
import {Button} from "src/views/blocks";
import {PackageMeta} from "../../data/packages";


type Props = {
    meta: PackageMeta;
    title: string;
    tagline: string;
    description: string;
    features: string[];
    demoLabel: string;
    githubLabel: string;
    npmLabel: string;
    statusLabel?: string;
};

export const PackageCard: React.FC<Props> = (props) => {
    const {
        meta,
        title,
        tagline,
        description,
        features,
        demoLabel,
        githubLabel,
        npmLabel,
        statusLabel
    } = props;

    const Icon = meta.icon;

    return (
        <article className="rounded-lg border border-border bg-card text-card-foreground p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <span className="inline-flex shrink-0 items-center justify-center size-10 rounded-md bg-primary/10 text-primary">
                    <Icon className="size-5" />
                </span>

                <div>
                    <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold text-foreground">{title}</h3>

                        {statusLabel && (
                            <span className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600 dark:text-amber-400">
                                {statusLabel}
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-muted-foreground">{tagline}</p>
                </div>
            </div>

            <p className="text-sm text-muted-foreground">{description}</p>

            <ul className="flex flex-col gap-2">
                {features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="size-4 shrink-0 mt-0.5 text-primary" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-auto flex flex-col gap-2 pt-2">
                <Button
                  as={Link}
                  variant="primary"
                  className="w-full"
                  to={meta.demoRoute}>
                    {demoLabel}
                </Button>

                <Button
                  as="a"
                  variant="outline"
                  className="w-full"
                  href={meta.githubUrl}
                  target="_blank"
                  rel="noreferrer">
                    {githubLabel}
                </Button>

                {meta.npmName && (
                    <Button
                      as="a"
                      variant="secondary"
                      className="w-full"
                      href={`https://www.npmjs.com/package/${meta.npmName}`}
                      target="_blank"
                      rel="noreferrer">
                        {npmLabel}
                    </Button>
                )}
            </div>
        </article>
    );
};
