// resize layers control to fit into view.
function resizeLayerControl() {
  var layerControlHeight = document.body.clientHeight - (10 + 50);
  var layerControl = document.getElementsByClassName('leaflet-control-layers-expanded')[0];

  layerControl.style.overflowY = 'auto';
  layerControl.style.maxHeight = layerControlHeight + 'px';
}

function createMap(divName) {
// Create a map
var map = L.map(divName, {
worldCopyJump: true
}).fitBounds([[-34.2,17.65],[-33.55,19.39]]);

// Create a layer switcher
var layers = L.control.layers(null, null, {collapsed:false}).addTo(map);

// Add OpenStreetMap layer
layers.addBaseLayer(L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
attribution: "© <a target=\"_parent\" href=\"https://www.openstreetmap.org\">OpenStreetMap</a> and contributors, under an <a target=\"_parent\" href=\"https://www.openstreetmap.org/copyright\">open license</a>",
maxZoom: 19
}), "OpenStreetMap");

  var AerialImagery_AerialImagery2021Mar_v3 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2021Mar_v3',
    attribution: '2021 March orthorectified colour mosaic (updated: version 3). Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 10x compression. Planimmetric fidelity expected within 0.3m. No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2021Mar_v3, "Aerial Imagery 2021 Mar v3");
  AerialImagery_AerialImagery2021Mar_v3.addTo(map);

  var AerialImagery_AerialImagery2020Jan = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2020Jan',
    attribution: '2020 January orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m. No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2020Jan, "Aerial Imagery 2020 Jan");

  var AerialImagery_AerialImagery2019Jan = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2019Jan',
    attribution: '2020 January orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m. No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2019Jan, "Aerial Imagery 2019 Jan");

  var AerialImagery_AerialImagery2018Feb = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2018Feb',
    attribution: '2018 February orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2018Feb, "Aerial Imagery 2018 Feb");

  var AerialImagery_AerialImagery2017Jan_CBDTrueOrtho = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2017Jan_CBD True Ortho',
    attribution: '2017 January true orthorectified colour mosaic.  Orthorectified using a DSM generated from the source imagery. Coverage is only of the CBD. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2017Jan_CBDTrueOrtho, "Aerial Imagery 2017Jan_CBD True Ortho");

  var AerialImagery_AerialImagery2017Jan = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2017Jan',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2017Jan, "Aerial Imagery 2017 Jan");

  var AerialImagery_AerialImagery2016_Paarl = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2016_Paarl',
    attribution: '2016 Paarl orthorectified colour mosaic. Coverage is only of Paarl Municipality. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.10m.  Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2016_Paarl, "Aerial Imagery 2016 - Paarl");

  var AerialImagery_AerialImagery2016Jan_CBDTrueOrtho = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2016Jan_CBD True Ortho',
    attribution: '2016 January true orthorectified colour mosaic.  Orthorectified using a DSM generated from the source imagery. Coverage is only of the CBD. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2016Jan_CBDTrueOrtho, "Aerial Imagery 2016 Jan - CBD - True Ortho");

  var AerialImagery_AerialImagery2016Jan = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2016Jan',
    attribution: '2016 January orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2016Jan, "Aerial Imagery 2016 Jan");

  var AerialImagery_AerialImagery2015Feb = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2015Feb',
    attribution: '2015 February orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2015Feb, "Aerial Imagery 2015 Feb");

  var AerialImagery_AerialImagery2014_NGI = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2014_NGI',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2014_NGI, "Aerial Imagery 2014 - NGI");

  var AerialImagery_AerialImagery2013Dec_RobbenIsland = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2013Dec_Robben Island',
    attribution: '2013 December Robben Island orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2013Dec_RobbenIsland, "Aerial Imagery 2013 Dec - Robben Island");

  var AerialImagery_AerialImagery2013Dec = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2013Dec',
    attribution: '2013 December orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2013Dec, "Aerial Imagery 2013 Dec");

  var AerialImagery_AerialImagery2012Dec = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2012Dec',
    attribution: '2012 December orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.08m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2012Dec, "Aerial Imagery 2012 Dec");

  var AerialImagery_AerialImagery2011Mar = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2011Mar',
    attribution: '2011 March orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.125m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2011Mar, "Aerial Imagery 2011 Mar");


  var AerialImagery_AerialImagery2011Dec = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2011Dec',
    attribution: '2011 December orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.125m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 0.3m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2011Dec, "Aerial Imagery 2011 Dec");


  var AerialImagery_AerialImagery2009_WemmershoekPipeline = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2009_Wemmershoek Pipeline',
    attribution: '2009 Wemershoek pipeline orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.20m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2009_WemmershoekPipeline, "Aerial Imagery 2009 - Wemmershoek Pipeline");


  var AerialImagery_AerialImagery2009_VoelVleiPipeline = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2009_VoelVlei Pipeline',
    attribution: '2009 Voelvlei pipeline orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.20m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2009_VoelVleiPipeline, "Aerial Imagery 2009 - VoelVlei Pipeline");


  var AerialImagery_AerialImagery2009Nov = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2009Nov',
    attribution: '2009 November orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.125m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2009Nov, "Aerial Imagery 2009 Nov");


  var AerialImagery_AerialImagery2009Mar = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2009Mar',
    attribution: '2009 March orthorectified colour mosaic. Original imagery property of CCT. Imagery captured with digital camera to enable mosaic pixel size of 0.125m. Compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2009Mar, "Aerial Imagery 2009 Mar");


  var AerialImagery_AerialImagery2008June = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2008June',
    attribution: '2008 orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2008June, "Aerial Imagery 2008 June");


  var AerialImagery_AerialImagery2008June_RobbenIsland = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2008June_Robben Island',
    attribution: '2008 June Robben Island orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2008June_RobbenIsland, "Aerial Imagery 2008 June - Robben Island");

  var AerialImagery_AerialImagery2007Sep = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2007Sep',
    attribution: '2007 September orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2007Sep, "Aerial Imagery 2007 Sep");


  var AerialImagery_AerialImagery2007Jan = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2007Jan',
    attribution: '2007 Jan orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2007Jan, "Aerial Imagery 2007 Jan");


  var AerialImagery_AerialImagery2006May = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2006May',
    attribution: '2006 May orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2006May, "Aerial Imagery 2006 May");


  var AerialImagery_AerialImagery2005Feb = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2005Feb',
    attribution: '2005 February orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2005Feb, "Aerial Imagery 2005 Feb");


  var AerialImagery_AerialImagery2004July = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2004July',
    attribution: '2004 July orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2004July, "Aerial Imagery 2004 July");


  var AerialImagery_AerialImagery2003July = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2003July',
    attribution: '2003 July orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. This dataset covers most of the informal settlements of the CCT at that time. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2003July, "Aerial Imagery 2003 July");


  var AerialImagery_AerialImagery2002Jan = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2002Jan',
    attribution: '2002 Jan orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2002Jan, "Aerial Imagery 2002 Jan");


  var AerialImagery_AerialImagery2000Apr = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 2000Apr',
    attribution: '1998 Orthorectified colour mosaic. Original imagery property of CCT. Original scale 1:15 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery2000Apr, "Aerial Imagery 2000 Apr");


  var AerialImagery_AerialImagery1998May = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1998May',
    attribution: 'The 1998 digital orthophoto displays the first colour image covering the municipal area of the City of Cape Town except for a large portion of Malmesbury farms. It was processed from 1998 aerial photography at the scale of 1:10000. Vertical aerial photography is widely used for cartography, town planning, environmental studies and engineering purposes. Aerial photography forms the basis of orthophotos which are geometrically \‘corrected\’ for the effects of image perspective and terrain relief, thereby representing features in their \'true\' positions. The orthophoto has a constant scale and pixel size which allows for accurate direct measurement of distances, angles and areas. The digital orthophoto is available in ECW format at 25cm GSD (ground sampling distance). The 1998 orthophoto data set covers the municipal area of the City of Cape Town except for a large portion of Malmesbury farms. The dataset is not being updated.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1998May, "Aerial Imagery 1998 May");


  var AerialImagery_AerialImagery1997 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1997',
    attribution: 'The 1997 digital orthophoto displays a b/w image covering the former Central Substructure of the municipal area of the City of Cape Town. It was processed from 1997 aerial photography at the scale of 1:10000. The 1997 digital orthophoto displays a  b/w image covering the former Central Substructure of the municipal area of the City of Cape Town.  It was processed from 1997 aerial photography at the scale of 1:10000.  The digital orthophoto is available in ECW format at 25cm GSD (ground sampling distance).',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1997, "Aerial Imagery 1997");


  var AerialImagery_AerialImagery1996 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1996',
    attribution: 'The 1996 digital orthophoto displays a b/w image covering the municipal area of the City of Cape Town except for a few Malmesbury farms but including Robben Island. It was processed from 1996 aerial photography at the scale of 1:5000. Vertical aerial photography is widely used for cartography, town planning, environmental studies and engineering purposes. Aerial photography forms the basis of orthophotos which are geometrically \‘corrected\’ for the effects of image perspective and terrain relief, thereby representing features in their \'true\' positions. The orthophoto has a constant scale and pixel size which allows for accurate direct measurement of distances, angles and areas. The digital orthophoto is available in ECW format at 20cm GSD (ground sampling distance).',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1996, "Aerial Imagery 1996");

  var AerialImagery_AerialImagery1992 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1992',
    attribution: '1992 Orthorectified greyscale mosaic covers Muizenberg. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.20m pixel size, compressed to ecw 20x compression. Planimetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1992, "Aerial Imagery 1992 - Muizenberg");

  var AerialImagery_AerialImagery1988 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1988',
    attribution: 'The 1988 digital orthophoto displays the first colour image covering the municipal area of the City of Cape Town except for a large portion of Malmesbury farms. It was processed from 1988 aerial photography at the scale of 1:10000. Vertical aerial photography is widely used for cartography, town planning, environmental studies and engineering purposes. Aerial photography forms the basis of orthophotos which are geometrically \‘corrected\’ for the effects of image perspective and terrain relief, thereby representing features in their \'true\' positions. The orthophoto has a constant scale and pixel size which allows for accurate direct measurement of distances, angles and areas. The digital orthophoto is available in ECW format at 25cm GSD (ground sampling distance).',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1988, "Aerial Imagery 1988");


  var AerialImagery_AerialImagery1987 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1987',
    attribution: 'The 1987 digital orthophoto displays a b/w image covering patches over Kogelbaai, Vissershok, Coastal Park and Swartklip in the municipal area of the City of Cape Town.  It was processed from 1987 aerial photography at the scale of 1:6000.  The digital orthophoto is available in ECW format at 20cm GSD (ground sampling distance).',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1987, "Aerial Imagery 1987");


  var AerialImagery_AerialImagery1986 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1986',
    attribution: 'The 1986 digital orthophoto displays a b/w image covering the Bridgetown, Heideveld and Bonteheuwel suburbs of the municipal area of the City of Cape Town. It was processed from 1986 aerial photography at the scale of 1:5000. Vertical aerial photography is widely used for cartography, town planning, environmental studies and engineering purposes. Aerial photography forms the basis of orthophotos which are geometrically \‘corrected\’ for the effects of image perspective and terrain relief, thereby representing features in their \'true\' positions. The orthophoto has a constant scale and pixel size which allows for accurate direct measurement of distances, angles and areas. The digital orthophoto is available in ECW format at 20cm GSD (ground sampling distance).',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1986, "Aerial Imagery 1986");


  var AerialImagery_AerialImagery1984 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1984',
    attribution: 'The 1984 digital orthophoto displays a  b/w image covering patches over Crossroads, Vissershok, Strandfontein, Swartklip, Zeekoevlei, CBD, Woodstock, Bishopscourt, Epping Industrial, Wemmershoek-Tygerberg Pipeline and Kuilsriver in the municipal area of the City of Cape Town.  It was processed from 1984 aerial photography at the scale of 1:6000.  The digital orthophoto is available in ECW format at 20cm GSD (ground sampling distance).',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1984, "Aerial Imagery 1984");


  var AerialImagery_AerialImagery1983 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1983',
    attribution: '1983 Orthorectified greyscale mosaic. Original imagery property of CCT. Original scale 1:6 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1983, "Aerial Imagery 1983");


  var AerialImagery_AerialImagery1982 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1982',
    attribution: '1982 Orthorectified greyscale mosaic. Original imagery property of CCT. Original scale 1:6 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1982, "Aerial Imagery 1982");


  var AerialImagery_AerialImagery1981 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1981',
    attribution: '1981 Orthorectified greyscale mosaic. Original imagery property of CCT. Original scale 1:6 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1981, "Aerial Imagery 1981");


  var AerialImagery_AerialImagery1980 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1980',
    attribution: '1980 Orthorectified greyscale mosaic. Original imagery property of CCT. Original scale 1:10 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1980, "Aerial Imagery 1980");


  var AerialImagery_AerialImagery1973 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1973',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1973, "Aerial Imagery 1973");

  var AerialImagery_AerialImagery1971 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1971',
    attribution: 'https://mportal.capetown.gov.za/agsport/home/item.html?id=6f50f1fd77864daf973df0e36902ebe7',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1971, "Aerial Imagery 1971");


  var AerialImagery_AerialImagery1968 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1968',
    attribution: '1968 Orthorectified and rubber-sheeted greyscale mosaic. Original imagery property of CCT. Original scale 1:20 000. Mosaicked to 0.20m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1968, "Aerial Imagery 1968");


  var AerialImagery_AerialImagery1958 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1958',
    attribution: '1958 Orthorectified and rubber-sheeted greyscale mosaic. Original imagery property of National Geospatial Information. Original scale XXX. Mosaicked to XXXm pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1958, "Aerial Imagery 1958");


  var AerialImagery_AerialImagery1953 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1953',
    attribution: '1953 Orthorectified and rubber-sheeted greyscale mosaic. Original imagery property of National Geospatial Information. Original scale 1:36 000. Mosaicked to 0.25m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1953, "Aerial Imagery 1953");


  var AerialImagery_AerialImagery1945 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1945',
    attribution: '1945 Orthorectified and rubber-sheeted greyscale mosaic. Original imagery property of CCT. Original scale 1:8400. Mosaicked to 1m pixel size,  compressed to ecw 20x compression. Planimmetric fidelity expected within 1m.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1945, "Aerial Imagery 1945");

  var AerialImagery_AerialImagery1938 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1938',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1938, "Aerial Imagery 1938");

  var AerialImagery_AerialImagery1935 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1935',
    attribution: '1935 Orthorectified (using reprographic methods) and rubber-sheeted greyscale mosaic. Original imagery property of CCT. Original scale 1:8400. Mosaicked to 1m pixel size,  compressed to ecw 20x compression. Planimetric fidelity expected within 1m except on high slope.... No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1935, "Aerial Imagery 1935");

  var AerialImagery_AerialImagery1926 = L.tileLayer.wms('https://cityimg.capetown.gov.za/erdas-iws/ogc/wms/GeoSpatial%20Datasets?', {
    layers: 'Aerial Imagery_Aerial Imagery 1926',
    attribution: '1926 Georeferenced greyscale mosaic. Original imagery property of CCT. Original scale unknown. Mosaicked to 0.5m pixel size, compressed to ecw 20x compression. No restrictions on the digital file for non-commercial purposes.',
    maxZoom: 22
  })
  layers.addBaseLayer(AerialImagery_AerialImagery1926, "Aerial Imagery 1926");

  // Add the permalink control
  map.addControl(new L.Control.Permalink());

   var lc = L.control.locate({
    position: 'bottomleft'
  }).addTo(map);

  map.on('resize', resizeLayerControl);
  resizeLayerControl();

  return map;
}