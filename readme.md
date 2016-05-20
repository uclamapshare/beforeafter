# A before and after image map viewer
<img src="https://raw.githubusercontent.com/uclamapshare/beforeafter/master/img/beforeafter_screenshot.jpg">

### What is this?
This is a ready-to-use html code template that allows you to create an interactive image viewer. This viewer requires at least two image to be compared side by side, with a handle that lets you swipe the screen left and right. Try the following demo that compares maps in Los Angeles:

http://sandbox.idre.ucla.edu/web/beforeafter/

### How does it work?
This simple map viewer puts two images side-by-side in a single viewer. The two images are separated by a "slider" with a green handle. Moving, or "swiping" the handle left and right allows you to reveal more or less of each image. Additionally, zooming in and out of the image allows you to show more or less detail within the viewer window.

When two or more images are included in the project, the dropdown menu on the bottom left and right, respectively, allows users to choose which maps to compare.

### How was the project produced?
This project borrows from the following Zev Ross blog post:

http://zevross.com/blog/2014/08/12/add-a-before-after-map-slider-to-a-leaflet-map/

According to Zev, the following describes the origins of the project:
<blockquote>
<p>The jQuery Before/After plugin is a great interactive tool to explore changes through time. This plugin has been used to great effect by the New York Times to <a href="http://www.nytimes.com/interactive/2011/03/13/world/asia/satellite-photos-japan-before-and-after-tsunami.html?_r=0" target="_blank">show changes in Japan before and after the tsunami that destroyed the Fukushima Daiichi Nuclear Plant</a>. In most examples of the plugin, though, the maps are static images and the user cannot zoom or pan.
</p>
<p>
Thanks to the work of Graham MacDonald at the Urban Institute there is a tool that allows for the combination of the Before/After plugin with a slippy map (the kind that lets you zoom and pan). You can read <a href="http://datatools.metrotrends.org/charts/metrodata/_Blog/Maps/BeforeAfter/index.cfm" target="_blank">Graham’s discussion</a> but we will provide a walk-through of the code in this post. By the way, the Urban Institute has a very nice implementation of the functionality in their <a href="http://datatools.metrotrends.org/charts/metrodata/_Blog/Maps/PovertyRace_DW/Map.html" target="_blank">Poverty and Race in America map</a>.
</p>
</blockquote>

### How can I use it?
1. If you are familiar with git, you can clone this project.
2. If you are not familiar with git, you can choose to download it directly by going to the green "clone or download" button (located at the top of this page), and select "download zip".
3. Unzip the project into a desired location on your computer, or your server.
2. Add the images you would like to compare in the "imgs" folder. You must have at least two images, and images must have the same pixel dimensions.
3. Open the "Settings.js" file in a text editor.
4. Update the file with information based on the images you loaded. You will need to enter the pixel dimensions of the images (width and height), relative paths to the images, and a title description for each image.
5. Open a browser, and open the index.html file.
