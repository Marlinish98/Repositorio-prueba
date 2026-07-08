document.addEventListener('DOMContentLoaded', () => {
    const travelForm = document.getElementById('formCotizacion');
    const telInput = travelForm.querySelector('input[type="tel"]');
    const btnSubmit = travelForm.querySelector('.btn-submit');

    // --- EVITAR LETRAS EN TIEMPO REAL ---
    telInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length > 8) {
            e.target.value = e.target.value.slice(0, 8);
        }
    });

    travelForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Extraemos los valores usando los atributos 'name' corregidos
        const nombre = travelForm.querySelector('input[name="nombre"]').value.trim();
        const telefono = telInput.value.trim(); 
        const email = travelForm.querySelector('input[name="email"]').value.trim();
        const destino = travelForm.querySelector('input[name="destino"]').value.trim();

        // --- VALIDACIONES ---
        if (nombre.length < 3) {
            alert("Por favor, ingresa tu nombre completo.");
            return;
        }

        if (telefono === "") {
            alert("El número de teléfono es obligatorio.");
            return;
        } else if (telefono.length !== 8) {
            alert("El número de teléfono debe tener exactamente 8 dígitos.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email !== "" && !emailRegex.test(email)) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        if (destino === "") {
            alert("Escribe el sitio al que deseas viajar.");
            return;
        }

        // --- INICIO DEL ENVÍO CON ANIMACIÓN ---
        
        // Guardamos el texto original para restaurarlo luego
        const textoOriginal = btnSubmit.innerHTML;
        
        // Colocamos el spinner CSS y cambiamos el texto
        btnSubmit.innerHTML = '<div class="spinner"></div> <span>Enviando...</span>';
        btnSubmit.disabled = true;

        // Recolectamos los datos del formulario automáticamente
        const formData = new FormData(travelForm);
        const datos = Object.fromEntries(formData.entries());

        try {
            // Realizamos la petición a tu servidor Node.js
            const response = await fetch('http://localhost:3000/enviar-cotizacion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datos)
            });

            if (response.ok) {
                alert(`¡Gracias, ${nombre}! Tu solicitud de cotización ha sido enviada con éxito.`);
                travelForm.reset();
            } else {
                alert("Hubo un error en el servidor al procesar la cotización.");
            }
        } catch (error) {
            console.error("Error de conexión:", error);
            alert("No se pudo conectar con el servidor. Asegúrate de tener encendido tu backend en Node.js (node server.js).");
        } finally {
            // --- FIN DEL ENVÍO: Removemos la animación ---
            btnSubmit.innerHTML = textoOriginal;
            btnSubmit.disabled = false;
        }
    });
});