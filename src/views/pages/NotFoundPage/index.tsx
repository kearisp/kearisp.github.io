import React from "react";
import {Link} from "react-router-dom";

import {ROUTES} from "src/env";


const NotFoundPage: React.FC = () => {
    return (
        <React.Fragment>
            404

            <Link to={ROUTES.home}>Home</Link>
        </React.Fragment>
    );
};


export {NotFoundPage};