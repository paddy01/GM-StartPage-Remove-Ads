// ==UserScript==
// @name        StartPage Remove Ads
// @namespace   tag:paddyonline.net,2012-08-11:stpgdelad
// @description Removes Ads from startpage.com
// @match       *://startpage.com/*
// @match       *://*.startpage.com/*
// @version     1.0.0
// ==/UserScript==

var stpgDeleted = document.getElementById('sponsored');
stpgDeleted.parentNode.removeChild(stpgDeleted);