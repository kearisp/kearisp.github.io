import React, {useState, useCallback, useEffect} from "react";
import Drawer from "@mui/material/Drawer";

import {ConfigPanel, ConfigProvider, PathBuilder} from "./blocks";


const PathBuilderPage: React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if(e.key === "p") {
                setOpen((open) => !open);
                e.preventDefault();
            }
        };

        document.addEventListener("keydown", handleKeydown);

        return () => {
            document.removeEventListener("keydown", handleKeydown);
        };
    }, []);

    return (
        <ConfigProvider>
            <Drawer
              sx={{
                width: "40vw"
              }}
              PaperProps={{
                sx: {
                    width: "40vw",
                    padding: 2
                }
              }}
              open={isOpen}
              anchor="left"
              onClose={handleClose}>
                <ConfigPanel />
            </Drawer>

            <PathBuilder />
        </ConfigProvider>
    );
};


export default PathBuilderPage;
