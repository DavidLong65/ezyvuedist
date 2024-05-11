"use strict";(self.webpackChunkezyview=self.webpackChunkezyview||[]).push([[631],{6631:function(e,t,r){r.r(t),r.d(t,{OBJLoader:function(){return j}});var s=r(5671),i=r(3144),a=r(136),o=r(9388),n=r(3272),l=/^[og]\s*(.+)?/,h=/^mtllib /,c=/^usemtl /,u=/^usemap /,p=/\s+/,d=new n.Pa4,m=new n.Pa4,v=new n.Pa4,f=new n.Pa4,g=new n.Pa4,b=new n.Ilk;function y(){var e={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=e,void(this.object.fromDeclaration=!1!==t);var r=this.object&&"function"===typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"===typeof this.object._finalize&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:!1!==t,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(e,t){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var s={index:this.materials.length,name:e||"",mtllib:Array.isArray(t)&&t.length>0?t[t.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(e){var t={index:"number"===typeof e?e:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return t.clone=this.clone.bind(t),t}};return this.materials.push(s),s},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(e){var t=this.currentMaterial();if(t&&-1===t.groupEnd&&(t.groupEnd=this.geometry.vertices.length/3,t.groupCount=t.groupEnd-t.groupStart,t.inherited=!1),e&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return e&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),t}},r&&r.name&&"function"===typeof r.clone){var s=r.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&"function"===typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseNormalIndex:function(e,t){var r=parseInt(e,10);return 3*(r>=0?r-1:r+t/3)},parseUVIndex:function(e,t){var r=parseInt(e,10);return 2*(r>=0?r-1:r+t/2)},addVertex:function(e,t,r){var s=this.vertices,i=this.object.geometry.vertices;i.push(s[e+0],s[e+1],s[e+2]),i.push(s[t+0],s[t+1],s[t+2]),i.push(s[r+0],s[r+1],s[r+2])},addVertexPoint:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){var t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,r){var s=this.normals,i=this.object.geometry.normals;i.push(s[e+0],s[e+1],s[e+2]),i.push(s[t+0],s[t+1],s[t+2]),i.push(s[r+0],s[r+1],s[r+2])},addFaceNormal:function(e,t,r){var s=this.vertices,i=this.object.geometry.normals;d.fromArray(s,e),m.fromArray(s,t),v.fromArray(s,r),g.subVectors(v,m),f.subVectors(d,m),g.cross(f),g.normalize(),i.push(g.x,g.y,g.z),i.push(g.x,g.y,g.z),i.push(g.x,g.y,g.z)},addColor:function(e,t,r){var s=this.colors,i=this.object.geometry.colors;void 0!==s[e]&&i.push(s[e+0],s[e+1],s[e+2]),void 0!==s[t]&&i.push(s[t+0],s[t+1],s[t+2]),void 0!==s[r]&&i.push(s[r+0],s[r+1],s[r+2])},addUV:function(e,t,r){var s=this.uvs,i=this.object.geometry.uvs;i.push(s[e+0],s[e+1]),i.push(s[t+0],s[t+1]),i.push(s[r+0],s[r+1])},addDefaultUV:function(){var e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){var t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,r,s,i,a,o,n,l){var h=this.vertices.length,c=this.parseVertexIndex(e,h),u=this.parseVertexIndex(t,h),p=this.parseVertexIndex(r,h);if(this.addVertex(c,u,p),this.addColor(c,u,p),void 0!==o&&""!==o){var d=this.normals.length;c=this.parseNormalIndex(o,d),u=this.parseNormalIndex(n,d),p=this.parseNormalIndex(l,d),this.addNormal(c,u,p)}else this.addFaceNormal(c,u,p);if(void 0!==s&&""!==s){var m=this.uvs.length;c=this.parseUVIndex(s,m),u=this.parseUVIndex(i,m),p=this.parseUVIndex(a,m),this.addUV(c,u,p),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";for(var t=this.vertices.length,r=0,s=e.length;r<s;r++){var i=this.parseVertexIndex(e[r],t);this.addVertexPoint(i),this.addColor(i)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";for(var r=this.vertices.length,s=this.uvs.length,i=0,a=e.length;i<a;i++)this.addVertexLine(this.parseVertexIndex(e[i],r));for(var o=0,n=t.length;o<n;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return e.startObject("",!1),e}var j=function(e){(0,a.Z)(r,e);var t=(0,o.Z)(r);function r(e){var i;return(0,s.Z)(this,r),(i=t.call(this,e)).materials=null,i}return(0,i.Z)(r,[{key:"load",value:function(e,t,r,s){var i=this,a=new n.hH6(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(r){try{t(i.parse(r))}catch(a){s?s(a):console.error(a),i.manager.itemError(e)}}),r,s)}},{key:"setMaterials",value:function(e){return this.materials=e,this}},{key:"parse",value:function(e){var t=new y;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n")),-1!==e.indexOf("\\\n")&&(e=e.replace(/\\\n/g,""));for(var r=e.split("\n"),s=[],i=0,a=r.length;i<a;i++){var o=r[i].trimStart();if(0!==o.length){var d=o.charAt(0);if("#"!==d)if("v"===d){var m=o.split(p);switch(m[0]){case"v":t.vertices.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3])),m.length>=7?(b.setRGB(parseFloat(m[4]),parseFloat(m[5]),parseFloat(m[6])).convertSRGBToLinear(),t.colors.push(b.r,b.g,b.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(m[1]),parseFloat(m[2]),parseFloat(m[3]));break;case"vt":t.uvs.push(parseFloat(m[1]),parseFloat(m[2]))}}else if("f"===d){for(var v=o.slice(1).trim().split(p),f=[],g=0,j=v.length;g<j;g++){var w=v[g];if(w.length>0){var x=w.split("/");f.push(x)}}for(var V=f[0],I=1,z=f.length-1;I<z;I++){var L=f[I],U=f[I+1];t.addFace(V[0],L[0],U[0],V[1],L[1],U[1],V[2],L[2],U[2])}}else if("l"===d){var F=o.substring(1).trim().split(" "),A=[],C=[];if(-1===o.indexOf("/"))A=F;else for(var P=0,E=F.length;P<E;P++){var k=F[P].split("/");""!==k[0]&&A.push(k[0]),""!==k[1]&&C.push(k[1])}t.addLineGeometry(A,C)}else if("p"===d){var M=o.slice(1).trim().split(" ");t.addPointGeometry(M)}else if(null!==(s=l.exec(o))){var N=(" "+s[0].slice(1).trim()).slice(1);t.startObject(N)}else if(c.test(o))t.object.startMaterial(o.substring(7).trim(),t.materialLibraries);else if(h.test(o))t.materialLibraries.push(o.substring(7).trim());else if(u.test(o))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if("s"===d){if((s=o.split(" ")).length>1){var O=s[1].trim().toLowerCase();t.object.smooth="0"!==O&&"off"!==O}else t.object.smooth=!0;var S=t.object.currentMaterial();S&&(S.smooth=t.object.smooth)}else{if("\0"===o)continue;console.warn('THREE.OBJLoader: Unexpected line: "'+o+'"')}}}t.finalize();var _=new n.ZAu;if(_.materialLibraries=[].concat(t.materialLibraries),!0===!(1===t.objects.length&&0===t.objects[0].geometry.vertices.length))for(var G=0,R=t.objects.length;G<R;G++){var T=t.objects[G],$=T.geometry,B=T.materials,D="Line"===$.type,H="Points"===$.type,Z=!1;if(0!==$.vertices.length){var Y=new n.u9r;Y.setAttribute("position",new n.a$l($.vertices,3)),$.normals.length>0&&Y.setAttribute("normal",new n.a$l($.normals,3)),$.colors.length>0&&(Z=!0,Y.setAttribute("color",new n.a$l($.colors,3))),!0===$.hasUVIndices&&Y.setAttribute("uv",new n.a$l($.uvs,2));for(var J=[],q=0,K=B.length;q<K;q++){var W=B[q],Q=W.name+"_"+W.smooth+"_"+Z,X=t.materials[Q];if(null!==this.materials)if(X=this.materials.create(W.name),!D||!X||X instanceof n.nls){if(H&&X&&!(X instanceof n.UY4)){var ee=new n.UY4({size:10,sizeAttenuation:!1});n.F5T.prototype.copy.call(ee,X),ee.color.copy(X.color),ee.map=X.map,X=ee}}else{var te=new n.nls;n.F5T.prototype.copy.call(te,X),te.color.copy(X.color),X=te}void 0===X&&((X=D?new n.nls:H?new n.UY4({size:1,sizeAttenuation:!1}):new n.xoR).name=W.name,X.flatShading=!W.smooth,X.vertexColors=Z,t.materials[Q]=X),J.push(X)}var re=void 0;if(J.length>1){for(var se=0,ie=B.length;se<ie;se++){var ae=B[se];Y.addGroup(ae.groupStart,ae.groupCount,se)}re=D?new n.ejS(Y,J):H?new n.woe(Y,J):new n.Kj0(Y,J)}else re=D?new n.ejS(Y,J[0]):H?new n.woe(Y,J[0]):new n.Kj0(Y,J[0]);re.name=T.name,_.add(re)}}else if(t.vertices.length>0){var oe=new n.UY4({size:1,sizeAttenuation:!1}),ne=new n.u9r;ne.setAttribute("position",new n.a$l(t.vertices,3)),t.colors.length>0&&void 0!==t.colors[0]&&(ne.setAttribute("color",new n.a$l(t.colors,3)),oe.vertexColors=!0);var le=new n.woe(ne,oe);_.add(le)}return _}}]),r}(n.aNw)}}]);