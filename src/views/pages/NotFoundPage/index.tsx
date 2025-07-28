import React from "react";
import {Link} from "react-router-dom";
import {Router} from "src/env";


export const NotFoundPage: React.FC = () => {
    return (
        <React.Fragment>
            404

            <Link to={Router.url("home")}>Home</Link>
        </React.Fragment>
    );
};
