const title = "Mon titre";
const label = "Mon label";

/**
 * Insertion des constantes dans la box
 */
window.addEventListener('load', () => {
    document.getElementById('title').textContent = title;
    document.getElementById('label').textContent = label;
});