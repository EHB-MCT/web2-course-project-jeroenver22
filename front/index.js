"use strict";

import { api } from "./utils.js";

const api_url = "http://localhost:8000/posts";
const main = document.getElementById("container");
const $searchBar = document.getElementById("searchbar");

const renderdTrails = async(query) =>{
    main.innerHTML = '';
    const trails = await api(api_url);
    const searchByQuery = query ? trails.posts.filter(({ title }) => title.toLowerCase().includes(query.toLowerCase())) : trails.posts;  
    
    console.log(trails);
    console.log(renderdTrails);
 const rederTrails = renderdTrails.forEach(
     ({description, name, url, length, city, region, country, rating, thumbnail, difficulty  }) => {
     
        const $trail = document.createElement("article");
        $trail.innerHTML= `
        <h3>${name}</h3>
        <p>${description}</p>
        <p>${length}</p>
        <p>${city}</p>
        <p>${region}</p>
        <p>${country}</p>
        ${thumbnail != "" && `<img src="${thumbnail}/>"`}
        <p>${difficulty}</p>
     `;
     main.append($trail);
 });   

};