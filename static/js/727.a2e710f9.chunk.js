"use strict";(self.webpackChunkezyview=self.webpackChunkezyview||[]).push([[727],{3727:function(e,a,t){t.r(a),t.d(a,{MTLLoader:function(){return l}});var r=t(5671),s=t(3144),i=t(136),n=t(9388),o=t(3272),l=function(e){(0,i.Z)(t,e);var a=(0,n.Z)(t);function t(e){return(0,r.Z)(this,t),a.call(this,e)}return(0,s.Z)(t,[{key:"load",value:function(e,a,t,r){var s=this,i=""===this.path?o.Zp0.extractUrlBase(e):this.path,n=new o.hH6(this.manager);n.setPath(this.path),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(function(t){try{a(s.parse(t,i))}catch(n){r?r(n):console.error(n),s.manager.itemError(e)}}),t,r)}},{key:"setMaterialOptions",value:function(e){return this.materialOptions=e,this}},{key:"parse",value:function(e,a){for(var t=e.split("\n"),r={},s=/\s+/,i={},n=0;n<t.length;n++){var o=t[n];if(0!==(o=o.trim()).length&&"#"!==o.charAt(0)){var l=o.indexOf(" "),h=l>=0?o.substring(0,l):o;h=h.toLowerCase();var c=l>=0?o.substring(l+1):"";if(c=c.trim(),"newmtl"===h)r={name:c},i[c]=r;else if("ka"===h||"kd"===h||"ks"===h||"ke"===h){var u=c.split(s,3);r[h]=[parseFloat(u[0]),parseFloat(u[1]),parseFloat(u[2])]}else r[h]=c}}var m=new p(this.resourcePath||a,this.materialOptions);return m.setCrossOrigin(this.crossOrigin),m.setManager(this.manager),m.setMaterials(i),m}}]),t}(o.aNw),p=function(){function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,r.Z)(this,e),this.baseUrl=a,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=void 0!==this.options.side?this.options.side:o.Wl3,this.wrap=void 0!==this.options.wrap?this.options.wrap:o.rpg}return(0,s.Z)(e,[{key:"setCrossOrigin",value:function(e){return this.crossOrigin=e,this}},{key:"setManager",value:function(e){this.manager=e}},{key:"setMaterials",value:function(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}},{key:"convert",value:function(e){if(!this.options)return e;var a={};for(var t in e){var r=e[t],s={};for(var i in a[t]=s,r){var n=!0,o=r[i],l=i.toLowerCase();switch(l){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(o=[o[0]/255,o[1]/255,o[2]/255]),this.options&&this.options.ignoreZeroRGBs&&0===o[0]&&0===o[1]&&0===o[2]&&(n=!1)}n&&(s[l]=o)}}return a}},{key:"preload",value:function(){for(var e in this.materialsInfo)this.create(e)}},{key:"getIndex",value:function(e){return this.nameLookup[e]}},{key:"getAsArray",value:function(){var e=0;for(var a in this.materialsInfo)this.materialsArray[e]=this.create(a),this.nameLookup[a]=e,e++;return this.materialsArray}},{key:"create",value:function(e){return void 0===this.materials[e]&&this.createMaterial_(e),this.materials[e]}},{key:"createMaterial_",value:function(e){var a=this,t=this.materialsInfo[e],r={name:e,side:this.side};function s(e,t){if(!r[e]){var s,i,n=a.getTextureParams(t,r),l=a.loadTexture((s=a.baseUrl,"string"!==typeof(i=n.url)||""===i?"":/^https?:\/\//i.test(i)?i:s+i));l.repeat.copy(n.scale),l.offset.copy(n.offset),l.wrapS=a.wrap,l.wrapT=a.wrap,"map"!==e&&"emissiveMap"!==e||(l.encoding=o.knz),r[e]=l}}for(var i in t){var n=t[i],l=void 0;if(""!==n)switch(i.toLowerCase()){case"kd":r.color=(new o.Ilk).fromArray(n).convertSRGBToLinear();break;case"ks":r.specular=(new o.Ilk).fromArray(n).convertSRGBToLinear();break;case"ke":r.emissive=(new o.Ilk).fromArray(n).convertSRGBToLinear();break;case"map_kd":s("map",n);break;case"map_ks":s("specularMap",n);break;case"map_ke":s("emissiveMap",n);break;case"norm":s("normalMap",n);break;case"map_bump":case"bump":s("bumpMap",n);break;case"map_d":s("alphaMap",n),r.transparent=!0;break;case"ns":r.shininess=parseFloat(n);break;case"d":(l=parseFloat(n))<1&&(r.opacity=l,r.transparent=!0);break;case"tr":l=parseFloat(n),this.options&&this.options.invertTrProperty&&(l=1-l),l>0&&(r.opacity=1-l,r.transparent=!0)}}return this.materials[e]=new o.xoR(r),this.materials[e]}},{key:"getTextureParams",value:function(e,a){var t,r={scale:new o.FM8(1,1),offset:new o.FM8(0,0)},s=e.split(/\s+/);return(t=s.indexOf("-bm"))>=0&&(a.bumpScale=parseFloat(s[t+1]),s.splice(t,2)),(t=s.indexOf("-s"))>=0&&(r.scale.set(parseFloat(s[t+1]),parseFloat(s[t+2])),s.splice(t,4)),(t=s.indexOf("-o"))>=0&&(r.offset.set(parseFloat(s[t+1]),parseFloat(s[t+2])),s.splice(t,4)),r.url=s.join(" ").trim(),r}},{key:"loadTexture",value:function(e,a,t,r,s){var i=void 0!==this.manager?this.manager:o.tEQ,n=i.getHandler(e);null===n&&(n=new o.dpR(i)),n.setCrossOrigin&&n.setCrossOrigin(this.crossOrigin);var l=n.load(e,t,r,s);return void 0!==a&&(l.mapping=a),l}}]),e}()}}]);