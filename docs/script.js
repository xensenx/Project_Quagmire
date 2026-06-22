document.addEventListener("DOMContentLoaded", () => {
    const titleEl = document.getElementById("main-title");
    const titleText = titleEl.textContent;
    
    // 1. Reset title to empty so it can type out dynamically
    titleEl.textContent = ""; 
    
    let charIndex = 0;
    // Calculates exact speed per letter to fit perfectly inside a 2-second (2000ms) window
    const typingSpeed = 2000 / titleText.length; 

    function typeWriter() {
        if (charIndex < titleText.length) {
            titleEl.textContent += titleText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // Start the typewriter sequence immediately on load
    typeWriter();

    // 2. Timeline Orchestration (7 Seconds Total)
    // At 6.5 seconds: Trigger the overall screen fade-out (takes 0.5s)
    setTimeout(() => {
        document.body.classList.add("fade-out");
    }, 6500);

    // At 7.0 seconds: Seamlessly transition directly to the PDF
    setTimeout(() => {
        window.location.replace("Project_Quagmire_Doc.pdf");
    }, 7000);
});