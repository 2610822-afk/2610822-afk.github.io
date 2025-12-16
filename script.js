// Funkcija za promenu grada u iframe
function promeniGrad() {
    const gradovi = [
        "https://naslovi.net/vremenska-prognoza/beograd",
        "https://naslovi.net/vremenska-prognoza/kragujevac",
        "https://naslovi.net/vremenska-prognoza/nis",
        "https://naslovi.net/vremenska-prognoza/novi-sad"
    ];
    const sel = document.getElementById('sel');
    const iframe = document.getElementById('iframe');
    iframe.src = gradovi[sel.value];
}