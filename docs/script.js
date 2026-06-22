document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    // Trigger the fade-out effect at 3.5 seconds
    setTimeout(() => {
        body.classList.add("fade-out");
    }, 3500);

    // Redirect to the PDF exactly at 4 seconds
    setTimeout(() => {
        // .replace() is used here so the splash screen doesn't clutter the user's "Back" button history
        window.location.replace("Project_Quagmire_Doc.pdf");
    }, 4000);
});
