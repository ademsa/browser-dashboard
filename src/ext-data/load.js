const features = require('./caniuse-data-lite.json');

export function GetFeatures(featuresStartIdx) {
    let featureIdx = featuresStartIdx;
    features.map(feature => {
        feature["id"] = featureIdx;
        featureIdx++;
        return feature;
    });
    return features;
}
