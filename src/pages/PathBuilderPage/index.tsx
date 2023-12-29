import React from "react";

import {
    ConfigProvider,
    PathBuilder
} from "./blocks";


const PathBuilderPage: React.FC = () => {
    return (
        <ConfigProvider>
            <PathBuilder />
        </ConfigProvider>
    );
};


export default PathBuilderPage;
