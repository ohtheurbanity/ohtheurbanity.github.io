function getColorhinc70(d) {
    return d >= 74367 ? '#c61cbe' :
           d >= 66853 ? '#cd35c5' :
           d >= 59069 ? '#d34ecd' :
           d >= 51285 ? '#d968d4' :
           d >= 43501 ? '#e081db' :
           d >= 35720 ? '#e69ae2' :
           d >= 27936 ? '#ecb4ea' :
           d >= 20152 ? '#f3cdf1' :
           d >= 12365 ? '#f9e6f8' :
           d >= 0 ? '#ffffff' :
                    '#808080';}
function style70hinc(feature) {
    return {
        fillColor: getColorhinc70(feature.properties.hinc),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
    }

function getColorhinc80(d) {
    return d >= 81184 ? '#c61cbe' :
           d >= 72459 ? '#cd35c5' :
           d >= 63734 ? '#d34ecd' :
           d >= 55009 ? '#d968d4' :
           d >= 46284 ? '#e081db' :
           d >= 37559 ? '#e69ae2' :
           d >= 28834 ? '#ecb4ea' :
           d >= 20109 ? '#f3cdf1' :
           d >= 11384 ? '#f9e6f8' :
           d >= 0 ? '#ffffff' :
                    '#808080';}

function style80hinc(feature) {
    return {
        fillColor: getColorhinc80(feature.properties.hinc),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
    }
function getColorhinc90(d) {
    return d >= 82010 ? '#c61cbe' :
           d >= 73240 ? '#cd35c5' :
           d >= 64470 ? '#d34ecd' :
           d >= 55700 ? '#d968d4' :
           d >= 46930 ? '#e081db' :
           d >= 38160 ? '#e69ae2' :
           d >= 29390 ? '#ecb4ea' :
           d >= 20620 ? '#f3cdf1' :
           d >= 11850 ? '#f9e6f8' :
           d >= 0 ? '#ffffff' :
                    '#808080';}

function style90hinc(feature) {
    return {
        fillColor: getColorhinc90(feature.properties.hinc),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
    }
function getColorhinc00(d) {
    return d >= 91168 ? '#c61cbe' :
           d >= 80789.50 ? '#cd35c5' :
           d >= 70411 ? '#d34ecd' :
           d >= 60032.50 ? '#d968d4' :
           d >= 49564 ? '#e081db' :
           d >= 39275.50 ? '#e69ae2' :
           d >= 28897 ? '#ecb4ea' :
           d >= 18518.50 ? '#f3cdf1' :
           d >= 8140 ? '#f9e6f8' :
           d >= 0 ? '#ffffff' :
                    '#808080';}

function style00hinc(feature) {
    return {
        fillColor: getColorhinc00(feature.properties.hinc),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
    }
function getColorhinc10(d) {
    return d >= 89426 ? '#c61cbe' :
           d >= 78907 ? '#cd35c5' :
           d >= 68388 ? '#d34ecd' :
           d >= 57869 ? '#d968d4' :
           d >= 47350 ? '#e081db' :
           d >= 36831 ? '#e69ae2' :
           d >= 26312 ? '#ecb4ea' :
           d >= 15793 ? '#f3cdf1' :
           d >= 5274 ? '#f9e6f8' :
           d >= 0 ? '#ffffff' :
                    '#808080';}

function style10hinc(feature) {
    return {
        fillColor: getColorhinc00(feature.properties.hinc),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
    }
