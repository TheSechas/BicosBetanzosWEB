document.addEventListener('DOMContentLoaded', function() {
    const days = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo'];
    const today = new Date().getDay()-1;
    const scheduleItems = document.querySelectorAll('#schedule li');

    scheduleItems.forEach((item, index) => {
        if (index === today) {
            item.innerHTML = 'Hoy: ' + item.innerHTML.split(': ')[1];
            item.classList.add('today');
        }
    });
});

