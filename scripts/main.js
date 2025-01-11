document.addEventListener("DOMContentLoaded", () => {
    // Add click listeners for navigation
    const buttons = {
        personal: document.getElementById("personal-budget"),
        family: document.getElementById("family-budget"),
        business: document.getElementById("business-budget"),
        enterprise: document.getElementById("enterprise-budget"),
    };

    Object.keys(buttons).forEach((key) => {
        const target = buttons[key];
        document
            .getElementById(`${key}-button`) // Add buttons with these IDs
            .addEventListener("click", () => {
                target.scrollIntoView({ behavior: "smooth" });
            });
    });
});
