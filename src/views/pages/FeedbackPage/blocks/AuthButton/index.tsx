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
        <a href={url}>
             Auth
        </a>
    );
};


export {AuthButton};
