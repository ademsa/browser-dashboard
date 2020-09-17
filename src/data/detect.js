const fonts = require('./fonts');
const GetFonts = fonts.GetFonts;
export { GetFonts }

function getMimeTypes() {
    let mimeTypes = [];
    for (let idx = 0; idx < navigator.mimeTypes.length; idx++) {
        const mimeType = navigator.mimeTypes[idx];
        mimeTypes.push(mimeType.type);
    }
    return mimeTypes;
}

export function GetSpecs() {
    return [
        { "id": "1", "name": "navigator.platform", "value": navigator.platform, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/platform" },
        { "id": "2", "name": "navigator.oscpu", "value": navigator.oscpu !== undefined ? navigator.oscpu : "", "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/oscpu" },
        { "id": "3", "name": "navigator.userAgent", "value": navigator.userAgent, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/userAgent" },
        { "id": "4", "name": "navigator.appName", "value": navigator.appName, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appName" },
        { "id": "5", "name": "navigator.appCodeName", "value": navigator.appCodeName, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appCodeName" },
        { "id": "6", "name": "navigator.appVersion", "value": navigator.appVersion, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/appVersion" },
        { "id": "7", "name": "navigator.vendor", "value": navigator.vendor, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendor" },
        { "id": "8", "name": "navigator.vendorSub", "value": navigator.vendorSub, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/vendorSub" },
        { "id": "9", "name": "navigator.product", "value": navigator.product, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorID/product" },
        { "id": "10", "name": "navigator.productSub", "value": navigator.productSub, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/productSub" },
        { "id": "11", "name": "navigator.buildID", "value": navigator.buildID !== undefined ? navigator.buildID : "", "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/buildID" },
        { "id": "12", "name": "navigator.language", "value": navigator.language, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language" },
        { "id": "13", "name": "navigator.languages", "value": navigator.languages, "valueType": "array", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages" },
        { "id": "14", "name": "navigator.mimeTypes", "value": getMimeTypes(), "valueType": "array", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/mimeTypes" },
        { "id": "15", "name": "window.screen.width", "value": window.screen.width + " px", "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/width" },
        { "id": "16", "name": "window.screen.height", "value": window.screen.height + " px", "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/height" },
        { "id": "17", "name": "window.screen.availWidth", "value": window.screen.availWidth + " px", "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth" },
        { "id": "18", "name": "window.screen.availHeight", "value": window.screen.availHeight + " px", "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight" },
        { "id": "19", "name": "window.screen.colorDepth", "value": window.screen.colorDepth, "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth" },
        { "id": "20", "name": "window.screen.pixelDepth", "value": window.screen.pixelDepth, "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/pixelDepth" },
        { "id": "21", "name": "window.screen.orientation.type", "value": window.screen.orientation !== undefined ? window.screen.orientation.type : "", "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation" },
        { "id": "22", "name": "navigator.maxTouchPoints", "value": navigator.maxTouchPoints, "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/maxTouchPoints" },
        { "id": "23", "name": "navigator.hardwareConcurrency", "value": navigator.hardwareConcurrency, "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorConcurrentHardware/hardwareConcurrency" },
        { "id": "24", "name": "navigator.deviceMemory", "value": navigator.deviceMemory !== undefined ? navigator.deviceMemory + " GB of RAM" : "", "valueType": "number", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/deviceMemory" },
        { "id": "25", "name": "navigator.webdriver", "value": navigator.webdriver, "valueType": "boolean", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/webdriver" },
        { "id": "26", "name": "navigator.cookieEnabled", "value": String(navigator.cookieEnabled), "valueType": "boolean", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/cookieEnabled" },
        { "id": "27", "name": "navigator.doNotTrack", "value": navigator.doNotTrack, "valueType": "boolean", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack" },
        { "id": "28", "name": "navigator.javaEnabled()", "value": String(navigator.javaEnabled()), "valueType": "boolean", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/API/NavigatorPlugins/javaEnabled" },
        { "id": "29", "name": "Intl.DateTimeFormat() .resolvedOptions().timeZone", "value": Intl.DateTimeFormat().resolvedOptions().timeZone, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions" },
        { "id": "30", "name": "Intl.DateTimeFormat() .resolvedOptions().calendar", "value": Intl.DateTimeFormat().resolvedOptions().calendar, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions" },
        { "id": "31", "name": "Intl.DateTimeFormat() .resolvedOptions().locale", "value": Intl.DateTimeFormat().resolvedOptions().locale, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions" },
        { "id": "32", "name": "Intl.DateTimeFormat() .resolvedOptions().numberingSystem", "value": Intl.DateTimeFormat().resolvedOptions().numberingSystem, "valueType": "string", "descriptionUrl": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/resolvedOptions" },
    ];
}

export function GetPlugins(startIdx) {
    let plugins = [];
    for (let idx = 0; idx < navigator.plugins.length; idx++) {
        const plugin = navigator.plugins[idx];
        plugins.push({
            "id": String(startIdx) + "_" + String(idx + 1),
            "name": plugin.name,
            "filename": plugin.filename,
            "version": plugin.version ? plugin.version : "",
        });
    }
    return plugins;
}
