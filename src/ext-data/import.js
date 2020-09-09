const axios = require('axios').default;
const fs = require('fs');

function DownloadData() {
    axios.get('https://raw.githubusercontent.com/Fyrd/caniuse/master/data.json',
        { headers: { 'Accept': 'application/json' } })
        .then(function (response) {
            const data = response.data;
            const features = [];
            Object.entries(data.data).forEach(([featureKey, featureData]) => {
                let newFeatureData = {
                    "name": featureKey,
                    "title": featureData.title,
                    "description": featureData.description,
                    "usage_perc_y": featureData.usage_perc_y,
                    "usage_perc_a": featureData.usage_perc_a,
                    "notes_by_num": featureData.notes_by_num,
                    "stats": {},
                };
                Object.entries(featureData.stats).forEach(([featureStatsKey, featureStats]) => {
                    newFeatureData['stats'][featureStatsKey] = Object.entries(featureStats)
                        .sort(function (a, b) { return parseFloat(a[0]) - parseFloat(b[0]); })
                        .reverse()
                        .slice(0, 5)
                        .reverse();
                });
                features.push(newFeatureData);
            })
            fs.writeFileSync('./src/ext-data/caniuse-data-lite.json', JSON.stringify(features));
        }).catch(function (error) {
            console.log('error', error);
        });
}

DownloadData();
