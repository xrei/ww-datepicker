!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):((t=t||self).vdp_translation_it=t.vdp_translation_it||{},t.vdp_translation_it.js=e())}(this,function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return new(function(){function e(t,n,o,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.language=t,this.months=n,this.monthsAbbr=o,this.days=r,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var n,o,r;return n=e,(o=[{key:"language",get:function(){return this._language},set:function(t){if("string"!=typeof t)throw new TypeError("Language must be a string");this._language=t}},{key:"months",get:function(){return this._months},set:function(t){if(12!==t.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=t}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(t){if(12!==t.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=t}},{key:"days",get:function(){return this._days},set:function(t){if(7!==t.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=t}}])&&t(n.prototype,o),r&&t(n,r),e}())("Italian",["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"],["Dom","Lun","Mar","Mer","Gio","Ven","Sab"])});
