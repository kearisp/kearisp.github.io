import React, {useState, useEffect} from "react";
import {Container, List, ListItem, ListItemText} from "@mui/material";


const HomePage: React.FC = () => {
    const [packages] = useState([
        "react-canny",
        "@kearisp/cli",
        "@wocker/ws",
        "@wocker/core",
        "@wocker/utils",
        "@wocker/mariadb-plugin",
        "@wocker/serveo-plugin",
        "fodec"
    ]);

    const [mapData, setMapData] = useState<any>({});

    useEffect(() => {
        const abortController = new AbortController();

        (async () => {
            try {
                for(const packageName of packages) {
                    const res = await fetch(`https://registry.npmjs.org/${encodeURIComponent(packageName)}`, {
                        signal: abortController.signal
                    });

                    if(res.status !== 200) {
                        continue;
                    }

                    const data = await res.json();

                    setMapData((mapData) => {
                        return {
                            ...mapData,
                            [packageName]: data
                        };
                    });
                }
            }
            catch(err) {
                //
            }
        })();

        return () => abortController.abort();
    }, []);

    return (
        <Container>
            <List>
                {packages.map((packageName: string, index) => {
                    const {
                        "dist-tags": {
                            latest = ""
                        } = {}
                    } = mapData[packageName] || {};

                    return (
                        <ListItem key={index}>
                            <ListItemText
                              primary={packageName}
                              secondary={latest} />
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
};


export default HomePage;