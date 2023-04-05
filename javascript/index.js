window.onload = function () {
    const form = document.querySelector('#reclamo-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        guardarReclamo();
    });
}    

    function guardarReclamo() {
        const nombre = document.querySelector('#nombre').value.trim();
        const apellido = document.querySelector('#apellido').value.trim();
        const email = document.querySelector('#email').value.trim();
        const numero = document.querySelector('#numero').value.trim();
        const problema = document.querySelector('#problema').value.trim();

        if (!nombre || !apellido || !email || !numero || !problema) {
            alert('Por favor complete todos los campos obligatorios');
            return; // detiene la ejecución de la función
        }

        const reclamo = {
            nombre,
            apellido,
            numero,
            email,
            problema
        };

        console.log(reclamo);
        // Mostrar alerta
        alert('Reclamo enviado');
    }