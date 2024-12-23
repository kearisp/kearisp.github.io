let canvas,
    context;

let error = "";
let svg = undefined;

self.addEventListener("message", (event) => {
    switch(event.data.type) {
        case "set-layer": {
            const {
                imageData
            } = event.data;

            canvas = new OffscreenCanvas(imageData.width, imageData.height);
            context = canvas.getContext("2d");
            context.putImageData(imageData, 0 ,0);
        }
    }

    const {type} = event.data;

    console.log(event.type, event.data);
});

self.addEventListener("fetch", async function(event) {
    const url = new URL(event.request.url);

    console.log(url.pathname, url.searchParams);

    if(url.pathname !== "/assets/map" || !url.searchParams) {
        return;
    }

    const x = url.searchParams.get("x");
    const y = url.searchParams.get("y");
    const z = url.searchParams.get("z");

    console.log(x, y, z);

    event.respondWith((async () => {
        try {
            if(!canvas) {
                const res = await fetch("/never-demand-world.svg");
                const blob = await res.blob();
                canvas = new OffscreenCanvas();
                context = canvas.getContext("2d");

                const image = new Image();

                await new Promise((resolve, reject) => {
                    image.onload = resolve;
                    image.onerror = reject;

                    image.src = URL.createObjectURL(blob);
                });
                // canvas.drawImage()
                // context.drawImage(blob, 0, 0);
            }
        }
        catch(err) {
            console.error(err);
        }

        try {
            const imageData = context.getImageData(x * z, y * z, 100, 100);
            const f = new OffscreenCanvas(100, 100);
            const c = f.getContext("2d");
            c.putImageData(imageData, 0, 0);

            const blob = await f.convertToBlob();

            return new Response(blob, {
                headers: {
                    "Content-Type": "image/png"
                },
                status: 200,
                statusText: "OK"
            });
        }
        catch(err) {
            return new Response(err.message, {
                status: 500,
                statusText: "Internal Server Error"
            });
        }
    })());
});

(async () => {
    try {
        console.log(1);

        const res = await fetch("/never-demand-world.svg");
        const svg = await res.text();
        const blob = new Blob([svg], {
            type: "image/svg+xml"
        });

        console.log(2, svg, blob);

        const [, widthMatch] = svg.match(/<svg(?:\n|[^>])*width="(\d+(?:.\d+)?)(\w+)"/) || [];
        const [, heightMatch] = svg.match(/<svg(?:\n|[^>])*height="(\d+(?:.\d+)?)(\w+)"/) || [];

        console.log(widthMatch, heightMatch);

        const bitmap = await createImageBitmap(blob);

//         console.log(3, bitmap);

//         const imgblob = await fetch('https://upload.wikimedia.org/wikipedia/commons/5/55/John_William_Waterhouse_A_Mermaid.jpg')
//       .then(r => r.blob());
//     	const img = await createImageBitmap(imgblob);

//         console.log(">_<", img);
    }
    catch(err) {
        console.error(err);
    }
})();

