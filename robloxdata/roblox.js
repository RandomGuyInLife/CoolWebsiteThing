const iframe = document.body.appendChild(document.createElement("iframe"));
iframe.width = screen.width;
iframe.height = screen.height*3/4;
fetch('https://educationbluesky.com').then(response => {response.text()}).then(data => {
    const b64d = btoa(data);
    iframe.src = "data:text/html;base64," + b64d;
})