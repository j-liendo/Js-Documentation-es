// document.addEventListener('DOMContentLoaded', function(e) {
//     document.documentElement.setAttribute("data-theme", "light");

//     // Get our button switcher
//     var themeSwitcher = document.getElementsByClassName("theme-switcher");

//     // When our button gets clicked
//     themeSwitcher.onclick = function() {
//         console.log("Hello")
//             // Get the current selected theme, on the first run
//             // it should be `light`
//         var currentTheme = document.documentElement.getAttribute("data-theme");

//         // Switch between `dark` and `light`
//         var switchToTheme = currentTheme === "dark" ? "light" : "dark"

//         // Set our currenet theme to the new one
//         document.documentElement.setAttribute("data-theme", switchToTheme);
//     }
// })
document.documentElement.setAttribute("data-theme", "light");

// Get our button switcher
var themeSwitcher = document.querySelector('.theme-switcher');

// When our button gets clicked
themeSwitcher.onclick = function() {
    console.log("Hello")
        // Get the current selected theme, on the first run
        // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"

    // Set our currenet theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
}