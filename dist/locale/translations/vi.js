!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):((n=n||self).vdp_translation_vi=n.vdp_translation_vi||{},n.vdp_translation_vi.js=t())}(this,function(){"use strict";function n(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return new(function(){function t(n,e,r,i){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.language=n,this.months=e,this.monthsAbbr=r,this.days=i,this.rtl=!1,this.ymd=!1,this.yearSuffix=""}var e,r,i;return e=t,(r=[{key:"language",get:function(){return this._language},set:function(n){if("string"!=typeof n)throw new TypeError("Language must be a string");this._language=n}},{key:"months",get:function(){return this._months},set:function(n){if(12!==n.length)throw new RangeError("There must be 12 months for ".concat(this.language," language"));this._months=n}},{key:"monthsAbbr",get:function(){return this._monthsAbbr},set:function(n){if(12!==n.length)throw new RangeError("There must be 12 abbreviated months for ".concat(this.language," language"));this._monthsAbbr=n}},{key:"days",get:function(){return this._days},set:function(n){if(7!==n.length)throw new RangeError("There must be 7 days for ".concat(this.language," language"));this._days=n}}])&&n(e.prototype,r),i&&n(e,i),t}())("Vietnamese",["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12"],["T 01","T 02","T 03","T 04","T 05","T 06","T 07","T 08","T 09","T 10","T 11","T 12"],["CN","Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7"])});
