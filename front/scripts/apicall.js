"use strict";
const api_url = 'http://localhost:8000/posts/';
const app = document.getElementById("container");

async function getTrails(url) {
    const resp = await fetch(url);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
}
getTrails(api_url);

function showTrails(data) {
    if (showTrails.status >= 200 && showTrails.status < 400) {
        data.forEach((trail) => {
            console.log(data);
            console.log(showTrails);
            const card = document.createElement("div");
            card.setAttribute("class", "card");


            const h1 = document.createElement('h1');
            h1.textContent = trail.name;
            console.log(trail.name);
            const p = document.createElement("p");
            trail.content = trail.content.substring(0, 300);
            p.textContent = `${trail.description}`;

            const imgURI = document.createElement("img");
            imgURI.innerHTML = `${trail.thumbnail}`;
            console.log(trail.thumbnail);

            app.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement("marquee");
        errorMessage.textContent = `Gah, it's not working!`;
        app.appendChild(errorMessage);
    }
}
