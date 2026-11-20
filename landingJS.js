const questionaireButton = document.getElementById("questionaireButton");
    const select = document.getElementById("dropdownMenu");
    const resultDiv = document.getElementById("result");
    const splash = document.getElementById("splash");

    questionaireButton.style.opacity = 0;


    

    function displayResult() {
        
       
        const selectedValue = select.value;
        
        let text = "";
        let hours = 0;
        
        switch(selectedValue) {
            case "1": 
                text = "10 or more hours of sleep is execellent. Instead of sleeping more, the aim is to improve the quality. Fill out the questionaire below to learn more."; 
                hours = 10;
                break;
            case "2": 
                text = "8-10 hours is in the ideal healthy range for a teen. Make sure to keep it up and work on quality and consistency. Fill out the questionaire below in order to find out how."; 
                hours = 9;
                break;
            case "3": 
                text = "7-8 is just under the ideal range to promote mental health. Fill out the questionaire below so we can help you get it up to 8-10."; 
                hours = 8;
                break;
            case "4": 
                text = "6-7 is roughly 2 hours below of the recommended range. Fill out the questionaire below so we can find where those 2 hours went."; 
                hours = 7;
                break;
            case "5": 
                text = "6 or below may be negatively impacting your mental health. It is crucial we find a way to bump up the time, please fill out the questionaire below."; 
                hours = 6;
                break;
            default: 
                text = "Please select a range.";
                hours = 0;
        }
        

        localStorage.setItem("sleepHours", hours);
        resultDiv.innerText = text;
        resultDiv.style.display = "block";
    
    
        
        
        resultDiv.animate([
            { opacity: 0, transform: 'translateY(-10px)' },
            { opacity: 1, transform: 'translateY(0)' }
        ], {
            duration: 300,
            fill: 'forwards'
        });

       

        questionaireButton.animate([
    { opacity: 0, transform: 'translateY(-10px)' },
    { opacity: 1, transform: 'translateY(0)' }
], {
    duration: 300,
    delay: 1000, 
    fill: 'forwards'
});
    }
