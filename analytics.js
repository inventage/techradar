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

  // The radar is a Next.js client-side app: navigating between quadrants and
  // blips changes the URL via the History API without a full page load, so the
  // initial trackPageView above would be the only hit. Patch pushState/
  // replaceState (and listen for popstate) to record a page view per in-app
  // navigation. Deferred so Next has committed the new document.title first.
  var previousUrl = location.href;
  function trackSpaPageView() {
    if (location.href === previousUrl) return;
    _paq.push(["setReferrerUrl", previousUrl]);
    _paq.push(["setCustomUrl", location.href]);
    _paq.push(["setDocumentTitle", document.title]);
    _paq.push(["trackPageView"]);
    // Re-scan the new DOM so outbound links stay tracked.
    _paq.push(["enableLinkTracking"]);
    previousUrl = location.href;
  }
  ["pushState", "replaceState"].forEach(function (type) {
    var orig = history[type];
    history[type] = function () {
      var rv = orig.apply(this, arguments);
      setTimeout(trackSpaPageView, 0);
      return rv;
    };
  });
  window.addEventListener("popstate", function () {
    setTimeout(trackSpaPageView, 0);
  });
})();
