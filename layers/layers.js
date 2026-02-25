var wms_layers = [];

var format_LOTPALINGFINAL_0 = new ol.format.GeoJSON();
var features_LOTPALINGFINAL_0 = format_LOTPALINGFINAL_0.readFeatures(json_LOTPALINGFINAL_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTPALINGFINAL_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTPALINGFINAL_0.addFeatures(features_LOTPALINGFINAL_0);
var lyr_LOTPALINGFINAL_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTPALINGFINAL_0, 
                style: style_LOTPALINGFINAL_0,
                popuplayertitle: 'LOT PALING FINAL',
                interactive: true,
                title: '<img src="styles/legend/LOTPALINGFINAL_0.png" /> LOT PALING FINAL'
            });
var format_TANDASEMPADANGABUNG_1 = new ol.format.GeoJSON();
var features_TANDASEMPADANGABUNG_1 = format_TANDASEMPADANGABUNG_1.readFeatures(json_TANDASEMPADANGABUNG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANDASEMPADANGABUNG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANDASEMPADANGABUNG_1.addFeatures(features_TANDASEMPADANGABUNG_1);
var lyr_TANDASEMPADANGABUNG_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANDASEMPADANGABUNG_1, 
                style: style_TANDASEMPADANGABUNG_1,
                popuplayertitle: 'TANDA SEMPADAN GABUNG',
                interactive: true,
                title: '<img src="styles/legend/TANDASEMPADANGABUNG_1.png" /> TANDA SEMPADAN GABUNG'
            });

lyr_LOTPALINGFINAL_0.setVisible(true);lyr_TANDASEMPADANGABUNG_1.setVisible(true);
var layersList = [lyr_LOTPALINGFINAL_0,lyr_TANDASEMPADANGABUNG_1];
lyr_LOTPALINGFINAL_0.set('fieldAliases', {'NO_LOT': 'NO_LOT', 'AREA': 'AREA', 'layer': 'layer', 'path': 'path', 'tsp — ha': 'tsp — ha', 'tsp — _1': 'tsp — _1', 'tsp — pe': 'tsp — pe', });
lyr_TANDASEMPADANGABUNG_1.set('fieldAliases', {'fid': 'fid', 'NO_LOT': 'NO_LOT', 'AREA': 'AREA', 'distance': 'distance', 'angle': 'angle', 'vertex_ind': 'vertex_ind', 'vertex_par': 'vertex_par', 'vertex_p_1': 'vertex_p_1', 'vertex_p_2': 'vertex_p_2', 'layer': 'layer', 'path': 'path', });
lyr_LOTPALINGFINAL_0.set('fieldImages', {'NO_LOT': '', 'AREA': '', 'layer': '', 'path': '', 'tsp — ha': '', 'tsp — _1': '', 'tsp — pe': '', });
lyr_TANDASEMPADANGABUNG_1.set('fieldImages', {'fid': '', 'NO_LOT': '', 'AREA': '', 'distance': '', 'angle': '', 'vertex_ind': '', 'vertex_par': '', 'vertex_p_1': '', 'vertex_p_2': '', 'layer': '', 'path': '', });
lyr_LOTPALINGFINAL_0.set('fieldLabels', {'NO_LOT': 'header label - visible with data', 'AREA': 'no label', 'layer': 'no label', 'path': 'no label', 'tsp — ha': 'no label', 'tsp — _1': 'no label', 'tsp — pe': 'no label', });
lyr_TANDASEMPADANGABUNG_1.set('fieldLabels', {'fid': 'no label', 'NO_LOT': 'no label', 'AREA': 'no label', 'distance': 'no label', 'angle': 'no label', 'vertex_ind': 'no label', 'vertex_par': 'no label', 'vertex_p_1': 'no label', 'vertex_p_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_TANDASEMPADANGABUNG_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});