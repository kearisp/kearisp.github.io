import React from "react";
import {useCannyContext} from "react-canny";


const AuthButton: React.FC = () => {
    const {
        canny,
        isLoaded,
        isIdentified
    } = useCannyContext();

    if(!isLoaded || !isIdentified) {
        return;
    }

    let url: string = "";

    try {
        url = canny.authenticateCannyLink(location.href);
    }
    catch(err) {
        console.error("authenticateCannyLink", err);
    }

    return (
        <a
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 h-9 text-sm font-medium text-secondary-foreground bg-secondary hover:bg-secondary/80 transition-colors"
          href={url}>
            Auth
        </a>
    );
};


export {AuthButton};
