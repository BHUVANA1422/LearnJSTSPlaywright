let browser = "Brave";
switch (browser) {
    case "Chrome":
    case "Brave":
    case "Edge":
        console.log("Chromium project");
        break;
    case "Firefox":
        console.log("Mozilla project");
        break;
    case "Safari":
        console.log("Apple project - uses JavaScriptCore engine");
        break;
    default:
        console.log("No idea which browser it is");
}