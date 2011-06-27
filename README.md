# Cobbler

Cobbler: server-side API and templating for mobile web sites.

This project is an abstract app to explore techniques for building content-focued mobile web sites in a way that supports less capable devices.

A-grade mobile browsers can consume a JSON API and render views on the client. Templates and controller code can be cached for offline, reducing the amount of bandwidth and the number of connections required to display content fed from an API.

Lesser devices may not have the capability to fetch resources with AJAX, manipulate the DOM, or have JavaScript enabled at all. In that case, the template rendering is passed off to a server-side JS app and the fully-rendered HTML view is returned to the client.

Based on a desired user agent pattern, app responds with either JSON or already-rendered-HTML.

## TODO:
* WURFL integration at the rack level
* template caching (based on an id?)