
const FontLists = require('./font-lists');

let fontText = "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ_-.:,;<>|@{}[]()!?#/\\AAABBBaaabbb";

function createSpanElement(innerText, fontFamily) {
    let e = document.createElement("span");
    e.style.display = "inline-block";
    e.style.lineHeight = "normal";
    e.style.textDecoration = "none";
    e.style.textOrientation = "initial";
    e.style.textTransform = "none";
    e.style.textShadow = "none";
    e.style.textJustify = "initial";
    e.style.textShadow = "none";
    e.style.fontWeight = "initial";
    e.style.fontSize = "12px";
    e.style.letterSpacing = "normal";
    e.style.lineBreak = "auto";
    e.style.lineHeight = "normal";
    e.style.wordBreak = "normal";
    e.style.wordSpacing = "normal";
    e.style.fontWeight = "normal";
    e.style.fontStyle = "normal";
    e.style.fontFamily = fontFamily;
    e.innerText = innerText;
    return e;
}

function getFontSize(body, fontName) {
    let div = document.createElement("div");
    div.style.visibility = "hidden";
    let span = createSpanElement(fontText, fontName);
    div.appendChild(span);
    body.appendChild(div);
    let fontSize = {
        "w": span.offsetWidth,
        "h": span.offsetHeight
    }
    body.removeChild(div);
    return fontSize;
}

function getBaseFontSizes(body) {
    let fontSizes = [];
    FontLists.baseFontList.forEach(fontName =>
        fontSizes.push(getFontSize(body, fontName))
    );
    return fontSizes;
}

function getFontSizes(body, baseFontSizes, fontName) {
    let fontSizes = [];
    for (let idx = 0; idx < FontLists.baseFontList.length; idx++) {
        const baseFontName = FontLists.baseFontList[idx];
        const combinedFontName = "\"" + fontName + "\", " + baseFontName;

        let fontSize = getFontSize(body, combinedFontName);

        let fontSizeSame = false;
        if (fontSize.w === baseFontSizes[idx].w && fontSize.h === baseFontSizes[idx].h) {
            fontSizeSame = true;
        }

        fontSizes.push({
            "fontSizeSame": fontSizeSame,
            "w": fontSize.w,
            "h": fontSize.h,
        })
    }
    return fontSizes;
}

export function GetFonts(fontsStartIdx) {
    let body = document.querySelectorAll("body")[0];

    let baseFontSizes = getBaseFontSizes(body);

    let fonts = [];
    let fontIdx = fontsStartIdx;
    FontLists.fontList.forEach(fontName => {
        let fontSizes = getFontSizes(body, baseFontSizes, fontName);
        let fontAvailable = (fontSizes.filter(fontSize => fontSize.fontSizeSame === false)).length > 0;
        fonts.push({
            "id": fontIdx,
            "name": fontName,
            "available": fontAvailable,
        })
        fontIdx++;
    });

    return fonts;
}