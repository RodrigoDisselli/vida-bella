var ctaButton = document.getElementById("button-cta");

setTimeout(() => callAtention(), 3000)

function callAtention(){
    ctaButton.classList.add("heartbeat");
}

function removeAtention(){
    ctaButton.classList.remove("heartbeat");
}