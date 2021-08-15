"use strict";

export const api = async (url, method="get", body=null) => {

    const resp = await fetch(url, { 
       method, 
       //if body is true
       body: body && JSON.stringify(body)
    });
    // veranderd data naar json
    return await resp.json();
 
 };