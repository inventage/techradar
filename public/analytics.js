// Matomo analytics. Loaded via the radar's `jsFile` config option
// (config.json -> jsFile), which renders this as a <script src> on every page.
var _paq = (window._paq = window._paq || []);
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(["trackPageView"]);
_paq.push(["enableLinkTracking"]);
(function () {
  var u = "https://analytics.inventage.com/";
  _paq.push(["setTrackerUrl", u + "matomo.php"]);
  _paq.push(["setSiteId", "15"]);
  var d = document,
    g = d.createElement("script"),
    s = d.getElementsByTagName("script")[0];
  g.async = true;
  g.src = u + "matomo.js";
  s.parentNode.insertBefore(g, s);
})();
