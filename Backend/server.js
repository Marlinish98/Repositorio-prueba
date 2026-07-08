require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); 
app.use(express.json());

// Configuramos el transporte
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Ruta que recibe los datos
app.post('/enviar-cotizacion', async (req, res) => {
    // 1. Extraemos los datos aquí, DENTRO de la ruta
    const { nombre, telefono, email, destino, fecha, personas, presupuesto } = req.body;

    // 2. Definimos el diseño del correo AQUÍ, usando las variables extraídas arriba
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: `✈️ Nueva Cotización: ${destino} - ${nombre}`,
        html: `
            <div style="font-family: 'Segoe UI', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                <div style="background: linear-gradient(135deg, #3182ce 0%, #2b6cb0 100%); padding: 30px 20px; text-align: center; color: white;">
                    <h1 style="margin: 0; font-size: 26px;">¡Nueva Solicitud de Viaje!</h1>
                </div>
                <div style="padding: 30px; background-color: #ffffff;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 10px; font-weight: bold;">Nombre:</td><td>${nombre}</td></tr>
                        <tr style="background-color: #f7fafc;"><td style="padding: 10px; font-weight: bold;">Teléfono:</td><td><a href="https://wa.me/504${telefono}">+504 ${telefono}</a></td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Correo:</td><td>${email}</td></tr>
                        <tr style="background-color: #f7fafc;"><td style="padding: 10px; font-weight: bold;">Destino:</td><td>${destino}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Fecha:</td><td>${fecha}</td></tr>
                        <tr style="background-color: #f7fafc;"><td style="padding: 10px; font-weight: bold;">Personas:</td><td>${personas}</td></tr>
                        <tr><td style="padding: 10px; font-weight: bold;">Presupuesto:</td><td>${presupuesto || 'No especificado'}</td></tr>
                    </table>
                </div>
            </div>
        `
    };

    // 3. Enviamos el correo
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ mensaje: 'Cotización enviada con éxito' });
    } catch (error) {
        console.error('Error enviando correo:', error);
        res.status(500).json({ mensaje: 'Error al enviar la cotización' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});