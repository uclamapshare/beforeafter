/*

	Run when page loads

*/
$( document ).ready(function() {
	ba.init();
	ba.enableDropdown();
	$('#map-container').css('height',$(window).height())
	$('#before').css('height',$(window).height())
	$('#after').css('height',$(window).height())
});

/*

	Initialize the maps

*/
ba.init = function () 
{
	// map options
	ba.mapOptions = {
		minZoom: 1,
		maxZoom: 6,
		center: [0, 0],
		zoom: 1,
		crs: L.CRS.Simple,
		inertia: false,
		attributionControl: false,
	};

	ba.before = L.map('before', ba.mapOptions),
	ba.after = L.map('after', ba.mapOptions);

	// calculate the edges of the image, in coordinate space
	ba.southWest = ba.before.unproject([0, ba.height], ba.before.getMaxZoom()-3);
	ba.northEast = ba.before.unproject([ba.width, 0], ba.before.getMaxZoom()-3);
	ba.bounds = new L.LatLngBounds(ba.southWest, ba.northEast);

	// add the image overlay so that it covers the entire map
	ba.beforeOverlay = L.imageOverlay(ba.imageURLs[0], ba.bounds);
	ba.beforeOverlay.addTo(ba.before);
	$('#before-title').html(ba.imageTitles[0]);

	ba.afterOverlay = L.imageOverlay(ba.imageURLs[1], ba.bounds);
	ba.afterOverlay.addTo(ba.after);
	$('#after-title').html(ba.imageTitles[1]);

	ba.before.fitBounds(ba.bounds)
	ba.after.fitBounds(ba.bounds)

	// Call the ba.Before-After plugin, passing through the variables that you used to setup the maps, and (optional) any options you'd like
	$('#map-container').beforeAfter(ba.before,ba.after);
}

/*

	Set up the dropdowns

*/
ba.enableDropdown = function ()
{
	$.each(ba.imageURLs,function(i,val){
		var li = '<li><a href="#" onclick="ba.changeOverlay('+i+',\'before\')">'+ba.imageTitles[i]+'</a></li>';
		$('.menu1').append(li);
	})
	$.each(ba.imageURLs,function(i,val){
		var li = '<li><a href="#" onclick="ba.changeOverlay('+i+',\'after\')">'+ba.imageTitles[i]+'</a></li>';
		$('.menu2').append(li);
	})

	$('.menu1 li').on('click', function() {
		$('#before-title').html($(this).find('a').html());
	});
	$('.menu2 li').on('click', function() {
		$('#after-title').html($(this).find('a').html());
	});

}

/*

	Switch images from dropdown

*/
ba.changeOverlay = function (i,beforeorafter)
{
	if(beforeorafter == 'before')
	{
		ba.before.removeLayer(ba.beforeOverlay)
		ba.beforeOverlay = L.imageOverlay(ba.imageURLs[i], ba.bounds);
		ba.before.addLayer(ba.beforeOverlay)
	}
	else
	{
		ba.after.removeLayer(ba.afterOverlay)
		ba.afterOverlay = L.imageOverlay(ba.imageURLs[i], ba.bounds);
		ba.after.addLayer(ba.afterOverlay)
	}		
}