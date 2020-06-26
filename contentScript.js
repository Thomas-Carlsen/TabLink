
window.addEventListener('load',  () => {
    let anchors = document.getElementsByTagName('a');
    for (let i = 0; i < anchors.length; i++) {
        let a = anchors[i];
        a.setAttribute('target', "_blank");
    }
});
