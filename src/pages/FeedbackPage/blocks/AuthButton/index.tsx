import React from "react";
import {useCannyContext} from "react-canny";


const AuthButton: React.FC = () => {
    const {canny, isLoaded} = useCannyContext();

    if(!isLoaded) {
        return;
    }

    return (
        <a href={canny.authenticateCannyLink(location.href)}>
            Auth
        </a>
    );
};


export {AuthButton};
