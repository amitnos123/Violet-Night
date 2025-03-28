export function setDarkTheme() {
    const documentStyleSetProperty = document.documentElement.style.setProperty
    documentStyleSetProperty("--primary-color", "#BB86FC")
    documentStyleSetProperty("--primary-variant-color", "#3700B3")
    documentStyleSetProperty("--inside-primary", "black")
    documentStyleSetProperty("--secondary-color", "#03DAC5")
    documentStyleSetProperty("--secondary-variant-color", "#03DAC5")
    documentStyleSetProperty("--inside-secondary", "black")
    documentStyleSetProperty("--surface", "black")
    documentStyleSetProperty("--inside-surface", "white")
    documentStyleSetProperty("--elevation-overlay", "white")
    documentStyleSetProperty("--error", "#CF6679")
    documentStyleSetProperty("--inside-error", "black")
}

export function setLightTheme() {
    const documentStyleSetProperty = document.documentElement.style.setProperty
    documentStyleSetProperty("--primary-color", "#6200EE")
    documentStyleSetProperty("--primary-variant-color", "#3700B3")
    documentStyleSetProperty("--inside-primary", "black")
    documentStyleSetProperty("--secondary-color", "#03DAC5")
    documentStyleSetProperty("--secondary-variant-color", "#108786")
    documentStyleSetProperty("--inside-secondary", "black")
    documentStyleSetProperty("--surface", "white")
    documentStyleSetProperty("--inside-surface", "black")
    documentStyleSetProperty("--elevation-overlay", "black")
    documentStyleSetProperty("--error", "#B00020")
    documentStyleSetProperty("--inside-error", "white")
}