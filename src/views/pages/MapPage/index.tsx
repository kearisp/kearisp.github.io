import React, {useMemo, useCallback, useEffect} from "react";
import {MapContainer, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css";


const getImage = async (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => {
            resolve(image);
        };

        image.onabort = () => {
            reject(null);
        };

        image.onerror = (err) => {
            reject(err);
        };

        image.src = src;
    });
};

const register = async () => {
    if(!("serviceWorker" in navigator)) {
        return;
    }

    try {
        const registration = await navigator.serviceWorker.register("service-worker.js");

        console.log("Service Worker registered with scope:", registration.scope);
    }
    catch(err) {
        console.error("Service Worker registration failed:", err);
    }
};

const unregister = async () => {
    if(!("serviceWorker" in navigator)) {
        return;
    }

    const worker = await navigator.serviceWorker.getRegistration("service-worker.js");

    if(worker) {
        await worker.unregister();
    }
};

const MapPage: React.FC = () => {
    const handleSetLayer = useCallback(async () => {
        const res = await fetch("/never-demand-world.svg");

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);

        const image = await getImage(url);

        console.log(image.width, image.height);

        const maxCanvasSize = 32767; // Максимальний розмір канвасу

        let scale = 1; // Масштаб

        if (image.width > maxCanvasSize || image.height > maxCanvasSize) {
            scale = Math.min(maxCanvasSize / image.width, maxCanvasSize / image.height);
        }

        const canvas = document.createElement("canvas");
        canvas.width = image.width * scale;
        canvas.height = image.height * scale;

        const context = canvas.getContext("2d") as CanvasRenderingContext2D;
        context.drawImage(image, 0, 0);

        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        navigator.serviceWorker.controller?.postMessage({
            type: "set-layer",
            v: 3,
            imageData
        });
    }, []);

    const handle = useCallback(async () => {
        await fetch("/assets/map?x=1&y=1&z=1");
    }, []);

    const handleRegister = useCallback(async () => {
        await unregister();
        await register();
    }, []);

    useEffect(() => {
        (async () => {
            await handleSetLayer();

            await handle();
        })();
    }, []);

    return (
        <div style={{width: "100%", height: "300px"}}>
            {/*<MapContainer center={{lng: 0, lat: 0}} zoom={30} style={{width: "100%", height: "100%"}}>*/}
            {/*    <TileLayer url="/assets/map?x={x}&y={y}&z={z}" />*/}
            {/*</MapContainer>*/}

            <button onClick={register}>Register</button>
            <button onClick={unregister}>Unregister</button>
            <button onClick={handleSetLayer}>Set layer</button>
            <button onClick={handle}>123</button>
        </div>
    );
};


export default MapPage;
