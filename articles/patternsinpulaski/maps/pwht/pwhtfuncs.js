function getColor(d) {
    return d >= 0.96 ? '#c61cbe' :
           d >= 0.91 ? '#d042c9' :
           d >= 0.86 ? '#d968d4' :
           d >= 0.75 ? '#e38edf' :
           d >= 0.62 ? '#ecb4ea' :
           d >= 0.27 ? '#f6daf5' :
           d >= 0.0 ? '#ffffff':
                    "#808080";}
function style(feature) {
    return {
        fillColor: getColor(feature.properties.pwht),
        weight: 0.5,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
    };
    }

