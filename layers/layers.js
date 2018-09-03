var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_LimiteDepartamental_0 = new ol.format.GeoJSON();
var features_LimiteDepartamental_0 = format_LimiteDepartamental_0.readFeatures(json_LimiteDepartamental_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteDepartamental_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LimiteDepartamental_0.addFeatures(features_LimiteDepartamental_0);var lyr_LimiteDepartamental_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteDepartamental_0, 
                style: style_LimiteDepartamental_0,
                title: '<img src="styles/legend/LimiteDepartamental_0.png" /> Limite Departamental '
            });var format_SANTANDER_1 = new ol.format.GeoJSON();
var features_SANTANDER_1 = format_SANTANDER_1.readFeatures(json_SANTANDER_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SANTANDER_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_SANTANDER_1.addFeatures(features_SANTANDER_1);var lyr_SANTANDER_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SANTANDER_1, 
                style: style_SANTANDER_1,
                title: '<img src="styles/legend/SANTANDER_1.png" /> SANTANDER'
            });var format_RendimientoTonHaSantander2017_2 = new ol.format.GeoJSON();
var features_RendimientoTonHaSantander2017_2 = format_RendimientoTonHaSantander2017_2.readFeatures(json_RendimientoTonHaSantander2017_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RendimientoTonHaSantander2017_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RendimientoTonHaSantander2017_2.addFeatures(features_RendimientoTonHaSantander2017_2);var lyr_RendimientoTonHaSantander2017_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RendimientoTonHaSantander2017_2, 
                style: style_RendimientoTonHaSantander2017_2,
    title: 'Rendimiento(Ton/Ha)- Santander-2017<br />\
    <img src="styles/legend/RendimientoTonHaSantander2017_2_0.png" />  4 - 5 <br />\
    <img src="styles/legend/RendimientoTonHaSantander2017_2_1.png" />  5 - 7 <br />\
    <img src="styles/legend/RendimientoTonHaSantander2017_2_2.png" />  7 - 9 <br />\
    <img src="styles/legend/RendimientoTonHaSantander2017_2_3.png" />  9 - 11 <br />\
    <img src="styles/legend/RendimientoTonHaSantander2017_2_4.png" />  11 - 13 <br />'
        });

lyr_LimiteDepartamental_0.setVisible(true);lyr_SANTANDER_1.setVisible(true);lyr_RendimientoTonHaSantander2017_2.setVisible(true);
var layersList = [baseLayer,lyr_LimiteDepartamental_0,lyr_SANTANDER_1,lyr_RendimientoTonHaSantander2017_2];
lyr_LimiteDepartamental_0.set('fieldAliases', {'nombre_dep': 'nombre_dep', });
lyr_SANTANDER_1.set('fieldAliases', {'DEPT': 'DEPT', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'Muncipios': 'Muncipios', });
lyr_RendimientoTonHaSantander2017_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'R.(Ton/Ha)': 'R.(Ton/Ha)', 'No': 'No', });
lyr_LimiteDepartamental_0.set('fieldImages', {'nombre_dep': 'TextEdit', });
lyr_SANTANDER_1.set('fieldImages', {'DEPT': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'Muncipios': 'TextEdit', });
lyr_RendimientoTonHaSantander2017_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'R.(Ton/Ha)': 'TextEdit', 'No': 'TextEdit', });
lyr_LimiteDepartamental_0.set('fieldLabels', {'nombre_dep': 'inline label', });
lyr_SANTANDER_1.set('fieldLabels', {'DEPT': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'Muncipios': 'inline label', });
lyr_RendimientoTonHaSantander2017_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'R.(Ton/Ha)': 'inline label', 'No': 'inline label', });
lyr_RendimientoTonHaSantander2017_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});