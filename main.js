if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    if (window.location.hash) {
        window.history.replaceState(null, null, window.location.pathname + window.location.search);
    }
});

var textlinks = document.getElementsByClassName("text-links");
var aboutcontents = document.getElementsByClassName("about-content");

function opentab(tabname){
    for(let textlink of textlinks){
        textlink.classList.remove("active-link");
    }
    for(let aboutcontent of aboutcontents){
        aboutcontent.classList.remove("active-content");
    }

    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add("active-link");
    }
    document.getElementById(tabname).classList.add("active-content");
}

var currentPages = document.getElementsByClassName("current-page");
var sidemenu = document.getElementById("sidemenu");

function openSection(){
    for(let currentPage of currentPages){
        currentPage.classList.remove("active-content");
    }
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add("active-content");
    }
    closemenu();
}

function openmenu(){
    if (sidemenu) sidemenu.classList.add("open");
}

function closemenu(){
    if (sidemenu) sidemenu.classList.remove("open");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyUL36BU9D8O2WU85-vxiTzYB9s49MKi1qaNRFg5ocQkl0cIKehrrgcbtySems-3Y40/exec'
const form = document.forms['Google-Form']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "<p><i class='bx bxs-message-square-check'></i> Message Sent Successfully</p>";
            setTimeout(function(){
                msg.innerHTML = ""
            },2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})