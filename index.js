document.addEventListener('DOMContentLoaded', function () {
    const serviceOptions = document.querySelectorAll('input[name="service"]');
    const serviceImage = document.getElementById('service-image');

    serviceOptions.forEach(option => {
        option.addEventListener('change', function () {
            if (this.checked) {
                switch (this.value) {
                    case 'softscapes':
                        serviceImage.src = './softscape.png';
                        break;
                    case 'hardscapes':
                        serviceImage.src = './hardscape.png';
                        break;
                    case 'structures':
                        serviceImage.src = './structures.png';
                        break;
                    case 'consulting':
                        serviceImage.src = './consulting.png';
                        break;
                }
            }
        });
    });
});
