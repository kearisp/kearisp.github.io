import React from "react";
import {Hero, PackageSection, Approach, Cta} from "./blocks";


const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <PackageSection />
            <Approach />
            <Cta />
        </>
    );
};


export default HomePage;
