document.addEventListener('DOMContentLoaded', function() {
    // Get the language selector element
    const languageSelector = document.getElementById('language-selector');

    // Get all elements with the 'language-label' class
    const languageLabels = document.querySelectorAll('.language-label');

    // Define translations for labels
    const translations = {
        english: {
            name: "Name:",
            age: "Age:",
            number: "Phone Number:",
            occupation: "Occupation:",
            experience: "Years of Experience:",
            currentCity: "Current City:",
            interestedCity: "Interested City:",
            jobType:"Job Type",
            salary: "Salary",
            contract: "Contract",
            dailyWages: "Daily Wages",
            gender: "Gender:",
            male: "Male",
            female: "Female",
            additionalInformation: "Additional Information:",
            audioFile: "Audio File:"
        },
        hindi: {
            name: "नाम:",
            age: "आयु:",
            number: "फ़ोन नंबर:",
            occupation: "व्यवसाय:",
            experience: "अनुभव के साल:",
            currentCity: "वर्तमान शहर:",
            interestedCity: "इच्छुक शहर:",
            jobType: "कार्य का प्रकार",
            salary: "वेतन",
            contract: "अनुबंध आधार",
            dailyWages: "रोज़गारी",
            gender: "लिंग:",
            male: "पुरुष",
            female: "महिला",
            additionalInformation: "अतिरिक्त जानकारी:",
            audioFile: "ऑडियो फ़ाइल:"
        },
        telugu: {
            name: "పేరు:",
            age: "పట్టు:",
            number: "ఫోను నంబరు:",
            occupation: "వృత్తి:",
            experience: "నివేదిక సంవత్సరాలు:",
            currentCity: "ప్రస్తుత నగరం:",
            interestedCity: "ఆసక్తి కలదు నగరం:",
            jobType: "ఉద్యోగ రకము",
            salary: "జీతాలు",
            contract: "ఒప్పందం",
            dailyWages: "రోజుకీ జీతాలు",
            gender: "లింగం:",
            male: "పురుషుడు",
            female: "మహిళ",
            additionalInformation: "అదనపు సమాచారం:",
            audioFile: "ఆడియో ఫైల్:"
        }
    };

    // Function to update labels based on language selection
    function updateLabels(language) {
        languageLabels.forEach(label => {
            const field = label.getAttribute('for');
            label.textContent = translations[language][field];
        });
    }

    // Add an event listener to the language selector
    languageSelector.addEventListener('change', function() {
        const selectedLanguage = languageSelector.value;
        updateLabels(selectedLanguage);
    });

    // Initialize labels based on the default language
    const defaultLanguage = languageSelector.value;
    updateLabels(defaultLanguage);
});
