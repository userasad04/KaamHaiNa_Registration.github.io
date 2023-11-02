document.addEventListener('DOMContentLoaded', function() {
    const microphoneIcons = document.querySelectorAll('.microphone-icon');
    const fieldsWithMic = document.querySelectorAll('.input-with-mic input, .input-with-mic textarea');

    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        microphoneIcons.forEach((icon, index) => {
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            const field = fieldsWithMic[index];

            recognition.lang = 'en-US';
            recognition.interimResults = false;
            recognition.maxAlternatives = 1;

            icon.addEventListener('click', () => {
                recognition.start();
                icon.classList.add('listening', 'shifting'); // Add 'shifting' class for animation
            });

            recognition.addEventListener('result', (event) => {
                const transcript = event.results[0][0].transcript;
                field.value = transcript;
                icon.classList.remove('listening', 'shifting'); // Remove 'listening' and 'shifting' classes
            });

            recognition.addEventListener('end', () => {
                icon.classList.remove('listening', 'shifting'); // Remove 'listening' and 'shifting' classes
            });
        });
    } else {
        microphoneIcons.forEach(icon => {
            icon.style.display = 'none';
        });
        console.log('Speech recognition not supported.');
    }

    // Voice recognition for "Additional Information"
    const additionalInformationTextarea = document.getElementById('additionalInformation');
    const additionalInformationMicIcon = additionalInformationTextarea.nextElementSibling;

    const additionalInformationRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    additionalInformationRecognition.lang = 'en-US';
    additionalInformationRecognition.interimResults = false;
    additionalInformationRecognition.maxAlternatives = 1;

    additionalInformationMicIcon.addEventListener('click', () => {
        additionalInformationRecognition.start();
        additionalInformationMicIcon.classList.add('listening', 'shifting'); // Add 'listening' and 'shifting' classes for animation
    });

    additionalInformationRecognition.addEventListener('result', (event) => {
        const transcript = event.results[0][0].transcript;
        additionalInformationTextarea.value = transcript;
        additionalInformationMicIcon.classList.remove('listening', 'shifting'); // Remove 'listening' and 'shifting' classes
    });

    additionalInformationRecognition.addEventListener('end', () => {
        additionalInformationMicIcon.classList.remove('listening', 'shifting'); // Remove 'listening' and 'shifting' classes
    });

    // Add a listener for form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Allow form submission even if "Additional Information" is not filled
        event.preventDefault();
        form.submit();
    });
});
