document.addEventListener('DOMContentLoaded', () => {
    const checkForm = document.getElementById('checkForm');
    const confirmMsg = document.getElementById('confirmMsg');

    checkForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const tickets = document.getElementById('tickets').value;

        confirmMsg.innerHTML = `
            <h3>Booking Confirmed!</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Number of Tickets: ${tickets}</p>
            <p>Thank you for booking with us!</p>
        `;

        checkForm.reset();
    });
});
