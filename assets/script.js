function defineType(cat) {
    if (cat==="abissinio") {
        return catType = "abissinio__info";
    } else if (cat==="american") {
        return catType = "american__info";
    } else if (cat==="british") {
        return catType = "british__info";
    } else if (cat==="devon") {
        return catType = "devon__info";
    } else if (cat==="exotico") {
        return catType = "exotico__info";
    } else if (cat==="bengala") {
        return catType = "bengala__info";
    } else if (cat==="maine") {
        return catType = "maine__info";
    } else if (cat==="persa") {
        return catType = "persa__info";
    } else if (cat==="ragdoll") {
        return catType = "ragdoll__info";
    } else if (cat==="scottish") {
        return catType = "scottish__info";
    } else if (cat==="siames") {
        return catType = "siames__info";
    } else if (cat==="sphynx") {
        return catType = "sphynx__info";
    }
}

function openOverlay(cat) {
    if (cat==="abissinio") {
        document.getElementById("abissinio__info").style.display = "flex";
    } else if (cat==="american") {
        document.getElementById("american__info").style.display = "flex";
    } else if (cat==="british") {
        document.getElementById("british__info").style.display = "flex";
    } else if (cat==="devon") {
        document.getElementById("devon__info").style.display = "flex";
    } else if (cat==="exotico") {
        document.getElementById("exotico__info").style.display = "flex";
    } else if (cat==="bengala") {
        document.getElementById("bengala__info").style.display = "flex";
    } else if (cat==="maine") {
        document.getElementById("maine__info").style.display = "flex";
    } else if (cat==="persa") {
        document.getElementById("persa__info").style.display = "flex";
    } else if (cat==="ragdoll") {
        document.getElementById("ragdoll__info").style.display = "flex";
    } else if (cat==="scottish") {
        document.getElementById("scottish__info").style.display = "flex";
    } else if (cat==="siames") {
        document.getElementById("siames__info").style.display = "flex";
    } else if (cat==="sphynx") {
        document.getElementById("sphynx__info").style.display = "flex";
    }
}

function closeOverlay() {
    document.getElementById(catType).style.display = "none";
}

window.onscroll = function scrollFunction() {
    if (window.scrollY >= 800) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}