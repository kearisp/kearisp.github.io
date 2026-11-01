import React from "react";
import {Boxes, MessageSquareText, FormInput} from "lucide-react";
import {Router} from "src/env";


export type PackageId = "motor-js" | "react-canny" | "react-compose-form";

export type PackageMeta = {
    id: PackageId;
    npmName?: string;
    status?: "experiment";
    githubUrl: string;
    demoRoute: string;
    icon: React.ComponentType<{className?: string}>;
};

export const PACKAGES: PackageMeta[] = [
    {
        id: "motor-js",
        status: "experiment",
        githubUrl: "https://github.com/kearisp/motor-js",
        demoRoute: Router.url("pathBuilder"),
        icon: Boxes
    },
    {
        id: "react-canny",
        npmName: "react-canny",
        githubUrl: "https://github.com/kearisp/react-canny",
        demoRoute: Router.url("feedback"),
        icon: MessageSquareText
    },
    {
        id: "react-compose-form",
        npmName: "react-compose-form",
        githubUrl: "https://github.com/kearisp/react-compose-form",
        demoRoute: Router.url("admin"),
        icon: FormInput
    }
];
