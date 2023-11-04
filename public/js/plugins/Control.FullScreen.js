!function(e,n){"function"==typeof define&&define.amd?define("screenfull",n):"object"==typeof module&&module.exports?module.exports.screenfull=n():e.screenfull=n()}("undefined"!=typeof self?self:this,function(){"use strict";var r="undefined"!=typeof window&&void 0!==window.document?window.document:{},o=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],l=0,t=n.length,s={};l<t;l++)if((e=n[l])&&e[1]in r){for(l=0;l<e.length;l++)s[n[0][l]]=e[l];return s}return!1}(),l={change:o.fullscreenchange,error:o.fullscreenerror},e={request:function(s,i){return new Promise(function(e,n){var l=function(){this.off("change",l),e()}.bind(this),t=(this.on("change",l),(s=s||r.documentElement)[o.requestFullscreen](i));t instanceof Promise&&t.then(l).catch(n)}.bind(this))},exit:function(){return new Promise(function(e,n){var l,t;this.isFullscreen?(l=function(){this.off("change",l),e()}.bind(this),this.on("change",l),(t=r[o.exitFullscreen]())instanceof Promise&&t.then(l).catch(n)):e()}.bind(this))},toggle:function(e,n){return this.isFullscreen?this.exit():this.request(e,n)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){e=l[e];e&&r.addEventListener(e,n,!1)},off:function(e,n){e=l[e];e&&r.removeEventListener(e,n,!1)},raw:o};return o?(Object.defineProperties(e,{isFullscreen:{get:function(){return Boolean(r[o.fullscreenElement])}},element:{enumerable:!0,get:function(){return r[o.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(r[o.fullscreenEnabled])}}}),e):{isEnabled:!1}}),function(e,n){"function"==typeof define&&define.amd?define("leafletFullScreen",["leaflet","screenfull"],n):"object"==typeof module&&module.exports?module.exports=n(require("leaflet"),require("screenfull")):n(e.L,e.screenfull)}("undefined"!=typeof self?self:this,function(r,e){"use strict";return r.Control.FullScreen=r.Control.extend({options:{position:"topleft",title:"Full Screen",titleCancel:"Exit Full Screen",forceSeparateButton:!1,forcePseudoFullscreen:!1,fullscreenElement:!1},_screenfull:e,onAdd:function(e){var n="leaflet-control-zoom-fullscreen",l="",e=e.zoomControl&&!this.options.forceSeparateButton?e.zoomControl._container:r.DomUtil.create("div","leaflet-bar");return this.options.content?l=this.options.content:n+=" fullscreen-icon",this._createButton(this.options.title,n,l,e,this.toggleFullScreen,this),(this._map.fullscreenControl=this)._map.on("enterFullscreen exitFullscreen",this._toggleState,this),e},onRemove:function(){r.DomEvent.off(this.link,"click",r.DomEvent.stop).off(this.link,"click",this.toggleFullScreen,this),this._screenfull.isEnabled&&(r.DomEvent.off(this._container,this._screenfull.raw.fullscreenchange,r.DomEvent.stop).off(this._container,this._screenfull.raw.fullscreenchange,this._handleFullscreenChange,this),r.DomEvent.off(document,this._screenfull.raw.fullscreenchange,r.DomEvent.stop).off(document,this._screenfull.raw.fullscreenchange,this._handleFullscreenChange,this))},_createButton:function(e,n,l,t,s,i){return this.link=r.DomUtil.create("a",n,t),this.link.href="#",this.link.title=e,this.link.innerHTML=l,this.link.setAttribute("role","button"),this.link.setAttribute("aria-label",e),L.DomEvent.disableClickPropagation(t),r.DomEvent.on(this.link,"click",r.DomEvent.stop).on(this.link,"click",s,i),this._screenfull.isEnabled&&(r.DomEvent.on(t,this._screenfull.raw.fullscreenchange,r.DomEvent.stop).on(t,this._screenfull.raw.fullscreenchange,this._handleFullscreenChange,i),r.DomEvent.on(document,this._screenfull.raw.fullscreenchange,r.DomEvent.stop).on(document,this._screenfull.raw.fullscreenchange,this._handleFullscreenChange,i)),this.link},toggleFullScreen:function(){var e=this._map;e._exitFired=!1,e._isFullscreen?(this._screenfull.isEnabled&&!this.options.forcePseudoFullscreen?this._screenfull.exit():(r.DomUtil.removeClass(this.options.fullscreenElement||e._container,"leaflet-pseudo-fullscreen"),e.invalidateSize()),e.fire("exitFullscreen"),e._exitFired=!0,e._isFullscreen=!1):(this._screenfull.isEnabled&&!this.options.forcePseudoFullscreen?this._screenfull.request(this.options.fullscreenElement||e._container):(r.DomUtil.addClass(this.options.fullscreenElement||e._container,"leaflet-pseudo-fullscreen"),e.invalidateSize()),e.fire("enterFullscreen"),e._isFullscreen=!0)},_toggleState:function(){this.link.title=this._map._isFullscreen?this.options.title:this.options.titleCancel,this._map._isFullscreen?L.DomUtil.removeClass(this.link,"leaflet-fullscreen-on"):L.DomUtil.addClass(this.link,"leaflet-fullscreen-on")},_handleFullscreenChange:function(){var e=this._map;e.invalidateSize(),this._screenfull.isFullscreen||e._exitFired||(e.fire("exitFullscreen"),e._exitFired=!0,e._isFullscreen=!1)}}),r.Map.include({toggleFullscreen:function(){this.fullscreenControl.toggleFullScreen()}}),r.Map.addInitHook(function(){this.options.fullscreenControl&&this.addControl(r.control.fullscreen(this.options.fullscreenControlOptions))}),r.control.fullscreen=function(e){return new r.Control.FullScreen(e)},{leaflet:r,screenfull:e}});