console.log('script loaded');

async function getData() {
    let url = 'https://web2-course-project-jeroenver2.herokuapp.com/api/fillDatabase';
    let resp = await fetch(url);
    return await resp.json();
}

window.onload = () => {
    async function run() {
        let data = await getData();
        console.log(data);
    }
    run();
}