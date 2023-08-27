"use strict";(self.webpackChunkezyvuefree=self.webpackChunkezyvuefree||[]).push([[8216],{98216:function(e,t,r){r.r(t),r.d(t,{LDrawLoader:function(){return D}});var a=r(74165),n=r(15861),i=r(43144),o=r(15671),s=r(97326),l=r(60136),c=r(29388),u=r(70804),d="16",h="24",g=new u.Pa4,p=new u.Pa4,f=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(e){var a;return(0,o.Z)(this,r),a=t.call(this,{uniforms:u.rDY.merge([u.rBU.fog,{diffuse:{value:new u.Ilk},opacity:{value:1}}]),vertexShader:"\n\t\t\t\tattribute vec3 control0;\n\t\t\t\tattribute vec3 control1;\n\t\t\t\tattribute vec3 direction;\n\t\t\t\tvarying float discardFlag;\n\n\t\t\t\t#include <common>\n\t\t\t\t#include <color_pars_vertex>\n\t\t\t\t#include <fog_pars_vertex>\n\t\t\t\t#include <logdepthbuf_pars_vertex>\n\t\t\t\t#include <clipping_planes_pars_vertex>\n\t\t\t\tvoid main() {\n\t\t\t\t\t#include <color_vertex>\n\n\t\t\t\t\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tgl_Position = projectionMatrix * mvPosition;\n\n\t\t\t\t\t// Transform the line segment ends and control points into camera clip space\n\t\t\t\t\tvec4 c0 = projectionMatrix * modelViewMatrix * vec4( control0, 1.0 );\n\t\t\t\t\tvec4 c1 = projectionMatrix * modelViewMatrix * vec4( control1, 1.0 );\n\t\t\t\t\tvec4 p0 = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\t\t\t\t\tvec4 p1 = projectionMatrix * modelViewMatrix * vec4( position + direction, 1.0 );\n\n\t\t\t\t\tc0.xy /= c0.w;\n\t\t\t\t\tc1.xy /= c1.w;\n\t\t\t\t\tp0.xy /= p0.w;\n\t\t\t\t\tp1.xy /= p1.w;\n\n\t\t\t\t\t// Get the direction of the segment and an orthogonal vector\n\t\t\t\t\tvec2 dir = p1.xy - p0.xy;\n\t\t\t\t\tvec2 norm = vec2( -dir.y, dir.x );\n\n\t\t\t\t\t// Get control point directions from the line\n\t\t\t\t\tvec2 c0dir = c0.xy - p1.xy;\n\t\t\t\t\tvec2 c1dir = c1.xy - p1.xy;\n\n\t\t\t\t\t// If the vectors to the controls points are pointed in different directions away\n\t\t\t\t\t// from the line segment then the line should not be drawn.\n\t\t\t\t\tfloat d0 = dot( normalize( norm ), normalize( c0dir ) );\n\t\t\t\t\tfloat d1 = dot( normalize( norm ), normalize( c1dir ) );\n\t\t\t\t\tdiscardFlag = float( sign( d0 ) != sign( d1 ) );\n\n\t\t\t\t\t#include <logdepthbuf_vertex>\n\t\t\t\t\t#include <clipping_planes_vertex>\n\t\t\t\t\t#include <fog_vertex>\n\t\t\t\t}\n\t\t\t",fragmentShader:"\n\t\t\tuniform vec3 diffuse;\n\t\t\tuniform float opacity;\n\t\t\tvarying float discardFlag;\n\n\t\t\t#include <common>\n\t\t\t#include <color_pars_fragment>\n\t\t\t#include <fog_pars_fragment>\n\t\t\t#include <logdepthbuf_pars_fragment>\n\t\t\t#include <clipping_planes_pars_fragment>\n\t\t\tvoid main() {\n\n\t\t\t\tif ( discardFlag > 0.5 ) discard;\n\n\t\t\t\t#include <clipping_planes_fragment>\n\t\t\t\tvec3 outgoingLight = vec3( 0.0 );\n\t\t\t\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t\t\t\t#include <logdepthbuf_fragment>\n\t\t\t\t#include <color_fragment>\n\t\t\t\toutgoingLight = diffuseColor.rgb; // simple shader\n\t\t\t\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t\t\t\t#include <tonemapping_fragment>\n\t\t\t\t#include <encodings_fragment>\n\t\t\t\t#include <fog_fragment>\n\t\t\t\t#include <premultiplied_alpha_fragment>\n\t\t\t}\n\t\t\t"}),Object.defineProperties((0,s.Z)(a),{opacity:{get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},color:{get:function(){return this.uniforms.diffuse.value}}}),a.setValues(e),a.isLDrawConditionalLineMaterial=!0,a}return(0,i.Z)(r)}(u.jyz),m=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(e,a){var n;return(0,o.Z)(this,r),(n=t.call(this,e,a)).isConditionalLine=!0,n}return(0,i.Z)(r)}(u.ejS);function v(e){for(var t=0,r=e.length;t<r;t++){var a=e[t],n=a.vertices,i=n[0],o=n[1],s=n[2];g.subVectors(o,i),p.subVectors(s,o),a.faceNormal=(new u.Pa4).crossVectors(g,p).normalize()}}var C=new u.zHn;function k(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=100*(1+1e-10);function n(e){var t=~~(e.x*a),r=~~(e.y*a),n=~~(e.z*a);return"".concat(t,",").concat(r,",").concat(n)}function i(e,t){return"".concat(n(e),"_").concat(n(t))}function o(e,t,r){r.direction.subVectors(t,e).normalize();var a=e.dot(r.direction);return r.origin.copy(e).addScaledVector(r.direction,-a),r}function s(e){return i(e.origin,e.direction)}for(var l=new Set,c=new Map,d={},h=[],g=0,p=t.length;g<p;g++){var f=t[g].vertices,m=f[0],v=f[1];if(l.add(i(m,v)),l.add(i(v,m)),r){var k=o(m,v,new u.zHn),b=s(k);if(!c.has(b)){o(v,m,k);var w=s(k),y={ray:k,distances:[]};c.set(b,y),c.set(w,y)}var M=c.get(b),x=M.ray.direction.dot(m),L=M.ray.direction.dot(v);if(x>L){var E=[L,x];x=E[0],L=E[1]}M.distances.push(x,L)}}for(var D=0,T=e.length;D<T;D++)for(var S=e[D],N=S.vertices,_=N.length,Z=0;Z<_;Z++){var A=Z,F=(Z+1)%_,V=N[A],I=N[F],P=i(V,I);if(!l.has(P)){if(r){o(V,I,C);var R=s(C);if(c.has(R)){var W=c.get(R),z=W.ray,O=W.distances,B=z.direction.dot(V),j=z.direction.dot(I);if(B>j){var G=[j,B];B=G[0],j=G[1]}for(var U=!1,H=0,q=O.length;H<q;H+=2)if(B>=O[H]&&j<=O[H+1]){U=!0;break}if(U)continue}}var Y={index:A,tri:S};d[P]=Y}}for(;;){var K=null;for(var X in d){K=d[X];break}if(null===K)break;for(var J=[K];J.length>0;)for(var Q=J.pop().tri,$=Q.vertices,ee=Q.normals,te=Q.faceNormal,re=$.length,ae=0;ae<re;ae++){var ne=ae,ie=(ae+1)%re,oe=$[ne],se=$[ie];delete d[i(oe,se)];var le=i(se,oe),ce=d[le];if(ce){var ue=ce.tri,de=ce.index,he=ue.normals,ge=he.length,pe=ue.faceNormal;if(Math.abs(ue.faceNormal.dot(Q.faceNormal))<.25)continue;le in d&&(J.push(ce),delete d[le]);var fe=(de+1)%ge;ee[ne]&&he[fe]&&ee[ne]!==he[fe]&&(he[fe].norm.add(ee[ne].norm),ee[ne].norm=he[fe].norm);var me=ee[ne]||he[fe];null===me&&(me={norm:new u.Pa4},h.push(me.norm)),null===ee[ne]&&(ee[ne]=me,me.norm.add(te)),null===he[fe]&&(he[fe]=me,me.norm.add(pe)),ee[ie]&&he[de]&&ee[ie]!==he[de]&&(he[de].norm.add(ee[ie].norm),ee[ie].norm=he[de].norm);var ve=ee[ie]||he[de];null===ve&&(ve={norm:new u.Pa4},h.push(ve.norm)),null===ee[ie]&&(ee[ie]=ve,ve.norm.add(te)),null===he[de]&&(he[de]=ve,ve.norm.add(pe))}}}for(var Ce=0,ke=h.length;Ce<ke;Ce++)h[Ce].normalize()}function b(e){return"Part"===e||"Unofficial_Part"===e}var w=function(){function e(t,r){(0,o.Z)(this,e),this.line=t,this.lineLength=t.length,this.currentCharIndex=0,this.currentChar=" ",this.lineNumber=r}return(0,i.Z)(e,[{key:"seekNonSpace",value:function(){for(;this.currentCharIndex<this.lineLength;){if(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar&&"\t"!==this.currentChar)return;this.currentCharIndex++}}},{key:"getToken",value:function(){for(var e=this.currentCharIndex++;this.currentCharIndex<this.lineLength&&(this.currentChar=this.line.charAt(this.currentCharIndex)," "!==this.currentChar&&"\t"!==this.currentChar);)this.currentCharIndex++;var t=this.currentCharIndex;return this.seekNonSpace(),this.line.substring(e,t)}},{key:"getVector",value:function(){return new u.Pa4(parseFloat(this.getToken()),parseFloat(this.getToken()),parseFloat(this.getToken()))}},{key:"getRemainingString",value:function(){return this.line.substring(this.currentCharIndex,this.lineLength)}},{key:"isAtTheEnd",value:function(){return this.currentCharIndex>=this.lineLength}},{key:"setToEnd",value:function(){this.currentCharIndex=this.lineLength}},{key:"getLineNumberString",value:function(){return this.lineNumber>=0?" at line "+this.lineNumber:""}}]),e}(),y=function(){function e(t){(0,o.Z)(this,e),this.loader=t,this._cache={}}return(0,i.Z)(e,[{key:"cloneResult",value:function(e){var t={};return t.faces=e.faces.map((function(e){return{colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((function(e){return e.clone()})),normals:e.normals.map((function(){return null})),faceNormal:null}})),t.conditionalSegments=e.conditionalSegments.map((function(e){return{colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((function(e){return e.clone()})),controlPoints:e.controlPoints.map((function(e){return e.clone()}))}})),t.lineSegments=e.lineSegments.map((function(e){return{colorCode:e.colorCode,material:e.material,vertices:e.vertices.map((function(e){return e.clone()}))}})),t.type=e.type,t.category=e.category,t.keywords=e.keywords,t.author=e.author,t.subobjects=e.subobjects,t.fileName=e.fileName,t.totalFaces=e.totalFaces,t.startingBuildingStep=e.startingBuildingStep,t.materials=e.materials,t.group=null,t}},{key:"fetchData",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,o,s,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!1,n=0;case 2:if(6===n){e.next=40;break}i=t,e.t0=n,e.next=3===e.t0?7:0===e.t0?9:1===e.t0?12:2===e.t0?15:4===e.t0?18:5===e.t0?21:23;break;case 7:return n+=1,e.abrupt("break",23);case 9:return i="parts/"+i,n+=1,e.abrupt("break",23);case 12:return i="p/"+i,n+=1,e.abrupt("break",23);case 15:return i="models/"+i,n+=1,e.abrupt("break",23);case 18:return i=t.substring(0,t.lastIndexOf("/")+1)+i,n+=1,e.abrupt("break",23);case 21:return r?n=6:(t=t.toLowerCase(),i=t,r=!0,n=0),e.abrupt("break",23);case 23:return o=this.loader,(s=new u.hH6(o.manager)).setPath(o.partsLibraryPath),s.setRequestHeader(o.requestHeader),s.setWithCredentials(o.withCredentials),e.prev=28,e.next=31,s.loadAsync(i);case 31:return l=e.sent,e.abrupt("return",l);case 35:return e.prev=35,e.t1=e.catch(28),e.abrupt("continue",2);case 38:e.next=2;break;case 40:throw new Error('LDrawLoader: Subobject "'+t+'" could not be loaded.');case 41:case"end":return e.stop()}}),e,this,[[28,35]])})));return function(t){return e.apply(this,arguments)}}()},{key:"parse",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.loader,a=[],n=[],i=[],o=[],s={},l=function(e){return s[e]||null},c="Model",d=null,h=null,g=null,p=0;-1!==e.indexOf("\r\n")&&(e=e.replace(/\r\n/g,"\n"));for(var f=e.split("\n"),m=f.length,v=!1,C=null,k=null,b=!1,y=!0,M=!1,x=!0,L=!1,E=0;E<m;E++){var D=f[E];if(0!==D.length)if(v)D.startsWith("0 FILE ")?(this.setData(C,k),C=D.substring(7),k=""):k+=D+"\n";else{var T=new w(D,E+1);if(T.seekNonSpace(),!T.isAtTheEnd()){var S=T.getToken(),N=void 0,_=void 0,Z=void 0,A=void 0,F=void 0,V=void 0,I=void 0,P=void 0;switch(S){case"0":var R=T.getToken();if(R)switch(R){case"!LDRAW_ORG":c=T.getToken();break;case"!COLOUR":(N=r.parseColorMetaDirective(T))?s[N.userData.code]=N:console.warn("LDrawLoader: Error parsing material"+T.getLineNumberString());break;case"!CATEGORY":d=T.getToken();break;case"!KEYWORDS":var W=T.getRemainingString().split(",");W.length>0&&(h||(h=[]),W.forEach((function(e){h.push(e.trim())})));break;case"FILE":E>0&&(v=!0,C=T.getRemainingString(),k="",b=!1,y=!0);break;case"BFC":for(;!T.isAtTheEnd();){var z=T.getToken();switch(z){case"CERTIFY":case"NOCERTIFY":b="CERTIFY"===z,y=!0;break;case"CW":case"CCW":y="CCW"===z;break;case"INVERTNEXT":M=!0;break;case"CLIP":case"NOCLIP":x="CLIP"===z;break;default:console.warn('THREE.LDrawLoader: BFC directive "'+z+'" is unknown.')}}break;case"STEP":L=!0;break;case"Author:":g=T.getToken()}break;case"1":N=l(_=T.getToken());var O=parseFloat(T.getToken()),B=parseFloat(T.getToken()),j=parseFloat(T.getToken()),G=parseFloat(T.getToken()),U=parseFloat(T.getToken()),H=parseFloat(T.getToken()),q=parseFloat(T.getToken()),Y=parseFloat(T.getToken()),K=parseFloat(T.getToken()),X=parseFloat(T.getToken()),J=parseFloat(T.getToken()),Q=parseFloat(T.getToken()),$=(new u.yGw).set(G,U,H,O,q,Y,K,B,X,J,Q,j,0,0,0,1),ee=T.getRemainingString().trim().replace(/\\/g,"/");r.fileMap[ee]?ee=r.fileMap[ee]:ee.startsWith("s/")?ee="parts/"+ee:ee.startsWith("48/")&&(ee="p/"+ee),o.push({material:N,colorCode:_,matrix:$,fileName:ee,inverted:M,startingBuildingStep:L}),L=!1,M=!1;break;case"2":Z={material:N=l(_=T.getToken()),colorCode:_,vertices:[F=T.getVector(),V=T.getVector()]},n.push(Z);break;case"5":Z={material:N=l(_=T.getToken()),colorCode:_,vertices:[F=T.getVector(),V=T.getVector()],controlPoints:[T.getVector(),T.getVector()]},i.push(Z);break;case"3":N=l(_=T.getToken()),A=!b||!x,!0===y?(F=T.getVector(),V=T.getVector(),I=T.getVector()):(I=T.getVector(),V=T.getVector(),F=T.getVector()),a.push({material:N,colorCode:_,faceNormal:null,vertices:[F,V,I],normals:[null,null,null]}),p++,!0===A&&(a.push({material:N,colorCode:_,faceNormal:null,vertices:[I,V,F],normals:[null,null,null]}),p++);break;case"4":N=l(_=T.getToken()),A=!b||!x,!0===y?(F=T.getVector(),V=T.getVector(),I=T.getVector(),P=T.getVector()):(P=T.getVector(),I=T.getVector(),V=T.getVector(),F=T.getVector()),a.push({material:N,colorCode:_,faceNormal:null,vertices:[F,V,I,P],normals:[null,null,null,null]}),p+=2,!0===A&&(a.push({material:N,colorCode:_,faceNormal:null,vertices:[P,I,V,F],normals:[null,null,null,null]}),p+=2);break;default:throw new Error('LDrawLoader: Unknown line type "'+S+'"'+T.getLineNumberString()+".")}}}}return v&&this.setData(C,k),{faces:a,conditionalSegments:i,lineSegments:n,type:c,category:d,keywords:h,author:g,subobjects:o,totalFaces:p,startingBuildingStep:L,materials:s,fileName:t,group:null}}},{key:"getData",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=e.toLowerCase(),a=this._cache[r];return null===a||a instanceof Promise?null:t?this.cloneResult(a):a}},{key:"ensureDataLoaded",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.toLowerCase())in this._cache||(this._cache[r]=this.fetchData(t).then((function(e){var a=n.parse(e,t);return n._cache[r]=a,a}))),e.next=4,this._cache[r];case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setData",value:function(e,t){var r=e.toLowerCase();this._cache[r]=this.parse(t,e)}}]),e}();function M(e,t,r,a){return(!a&&e===d||a&&e===h)&&(e=t),r[e]||null}var x=function(){function e(t){(0,o.Z)(this,e),this.loader=t,this.parseCache=new y(t),this._cache={}}return(0,i.Z)(e,[{key:"processIntoMesh",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,i,o,s,l,c,g,p,f=this;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=this.loader,i=this.parseCache,o=new Set,s=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var n,l,c,g,p,m,v,C,k,b,w,y,x,L,E,D,T,S,N,_,Z,A,F,V,I,P,R,W,z,O,B,j,G,U,H,q,Y,K,X,J=arguments;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=J.length>1&&void 0!==J[1]?J[1]:null,l=t.subobjects,c=[],g=(0,a.Z)().mark((function e(){var t,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=l[p],r=i.ensureDataLoaded(t.fileName).then((function(){var e,r=i.getData(t.fileName,!1);return e=r.type,/primitive/i.test(e)||"Subpart"===e?s(i.getData(t.fileName),t):f.loadModel(t.fileName).catch((function(e){return console.warn(e),null}))})),c.push(r);case 3:case"end":return e.stop()}}),e)})),p=0,m=l.length;case 5:if(!(p<m)){e.next=10;break}return e.delegateYield(g(),"t0",7);case 7:p++,e.next=5;break;case 10:return(v=new u.ZAu).userData.category=t.category,v.userData.keywords=t.keywords,v.userData.author=t.author,v.userData.type=t.type,v.userData.fileName=t.fileName,t.group=v,e.next=19,Promise.all(c);case 19:C=e.sent,k=0,b=C.length;case 21:if(!(k<b)){e.next=54;break}if(w=t.subobjects[k],null!==(y=C[k])){e.next=26;break}return e.abrupt("continue",51);case 26:if(!y.isGroup){e.next=35;break}return x=y,w.matrix.decompose(x.position,x.quaternion,x.scale),x.userData.startingBuildingStep=w.startingBuildingStep,x.name=w.fileName,r.applyMaterialsToMesh(x,w.colorCode,t.materials),x.userData.colorCode=w.colorCode,v.add(x),e.abrupt("continue",51);case 35:for(y.group.children.length&&v.add(y.group),L=t.lineSegments,E=t.conditionalSegments,D=t.faces,T=y.lineSegments,S=y.conditionalSegments,N=y.faces,_=w.matrix,Z=w.inverted,A=_.determinant()<0,F=w.colorCode,V=F===d?h:F,I=0,P=T.length;I<P;I++)R=T[I],(W=R.vertices)[0].applyMatrix4(_),W[1].applyMatrix4(_),R.colorCode=R.colorCode===h?V:R.colorCode,R.material=R.material||M(R.colorCode,R.colorCode,t.materials,!0),L.push(R);for(z=0,O=S.length;z<O;z++)B=S[z],j=B.vertices,G=B.controlPoints,j[0].applyMatrix4(_),j[1].applyMatrix4(_),G[0].applyMatrix4(_),G[1].applyMatrix4(_),B.colorCode=B.colorCode===h?V:B.colorCode,B.material=B.material||M(B.colorCode,B.colorCode,t.materials,!0),E.push(B);for(U=0,H=N.length;U<H;U++){for(q=N[U],Y=q.vertices,K=0,X=Y.length;K<X;K++)Y[K].applyMatrix4(_);q.colorCode=q.colorCode===d?F:q.colorCode,q.material=q.material||M(q.colorCode,F,t.materials,!1),o.add(q.colorCode),A!==Z&&Y.reverse(),D.push(q)}t.totalFaces+=y.totalFaces;case 51:k++,e.next=21;break;case 54:return n&&(r.applyMaterialsToMesh(v,n.colorCode,t.materials),v.userData.colorCode=n.colorCode),e.abrupt("return",t);case 56:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=0,c=t.faces;l<c;l++)o.add(t.faces[l].colorCode);return e.next=7,s(t);case 7:return r.smoothNormals&&(g=o.size>1,v(t.faces),k(t.faces,t.lineSegments,g)),p=t.group,t.faces.length>0&&p.add(E(t.faces,3,!1,t.totalFaces)),t.lineSegments.length>0&&p.add(E(t.lineSegments,2)),t.conditionalSegments.length>0&&p.add(E(t.conditionalSegments,2,!0)),e.abrupt("return",p);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"hasCachedModel",value:function(e){return null!==e&&e.toLowerCase()in this._cache}},{key:"getCachedModel",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===t||!this.hasCachedModel(t)){e.next=8;break}return r=t.toLowerCase(),e.next=4,this._cache[r];case 4:return n=e.sent,e.abrupt("return",n.clone());case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"loadModel",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,o,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.parseCache,n=t.toLowerCase(),!this.hasCachedModel(t)){e.next=6;break}return e.abrupt("return",this.getCachedModel(t));case 6:return e.next=8,r.ensureDataLoaded(t);case 8:if(i=r.getData(t),o=this.processIntoMesh(i),!this.hasCachedModel(t)){e.next=12;break}return e.abrupt("return",this.getCachedModel(t));case 12:return b(i.type)&&(this._cache[n]=o),e.next=15,o;case 15:return s=e.sent,e.abrupt("return",s.clone());case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"parseModel",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.parseCache,!b((n=r.parse(t)).type)||!this.hasCachedModel(n.fileName)){e.next=4;break}return e.abrupt("return",this.getCachedModel(n.fileName));case 4:return e.abrupt("return",this.processIntoMesh(n));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function L(e,t){return e.colorCode===t.colorCode?0:e.colorCode<t.colorCode?-1:1}function E(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e.sort(L),null===a&&(a=e.length);for(var n=new Float32Array(t*a*3),i=3===t?new Float32Array(t*a*3):null,o=[],s=new Array(6),l=new u.u9r,c=null,d=0,h=0,f=0,v=0,C=e.length;v<C;v++){var k=e[v],b=k.vertices;4===b.length&&(s[0]=b[0],s[1]=b[1],s[2]=b[2],s[3]=b[0],s[4]=b[2],s[5]=b[3],b=s);for(var w=0,y=b.length;w<y;w++){var M=b[w],x=f+3*w;n[x+0]=M.x,n[x+1]=M.y,n[x+2]=M.z}if(3===t){if(!k.faceNormal){var E=b[0],D=b[1],T=b[2];g.subVectors(D,E),p.subVectors(T,D),k.faceNormal=(new u.Pa4).crossVectors(g,p).normalize()}var S=k.normals;4===S.length&&(s[0]=S[0],s[1]=S[1],s[2]=S[2],s[3]=S[0],s[4]=S[2],s[5]=S[3],S=s);for(var N=0,_=S.length;N<_;N++){var Z=k.faceNormal;S[N]&&(Z=S[N].norm);var A=f+3*N;i[A+0]=Z.x,i[A+1]=Z.y,i[A+2]=Z.z}}if(c!==k.colorCode){null!==c&&l.addGroup(d,h,o.length-1);var F=k.material;null!==F?3===t?o.push(F):2===t&&(r?o.push(F.userData.edgeMaterial.userData.conditionalEdgeMaterial):o.push(F.userData.edgeMaterial)):o.push(k.colorCode),c=k.colorCode,d=f/3,h=b.length}else h+=b.length;f+=3*b.length}h>0&&l.addGroup(d,1/0,o.length-1),l.setAttribute("position",new u.TlE(n,3)),null!==i&&l.setAttribute("normal",new u.TlE(i,3));var V=null;if(2===t?V=r?new m(l,1===o.length?o[0]:o):new u.ejS(l,1===o.length?o[0]:o):3===t&&(V=new u.Kj0(l,1===o.length?o[0]:o)),r){V.isConditionalLine=!0;for(var I=new Float32Array(3*e.length*2),P=new Float32Array(3*e.length*2),R=new Float32Array(3*e.length*2),W=0,z=e.length;W<z;W++){var O=e[W],B=O.vertices,j=O.controlPoints,G=j[0],U=j[1],H=B[0],q=B[1],Y=3*W*2;I[Y+0]=G.x,I[Y+1]=G.y,I[Y+2]=G.z,I[Y+3]=G.x,I[Y+4]=G.y,I[Y+5]=G.z,P[Y+0]=U.x,P[Y+1]=U.y,P[Y+2]=U.z,P[Y+3]=U.x,P[Y+4]=U.y,P[Y+5]=U.z,R[Y+0]=q.x-H.x,R[Y+1]=q.y-H.y,R[Y+2]=q.z-H.z,R[Y+3]=q.x-H.x,R[Y+4]=q.y-H.y,R[Y+5]=q.z-H.z}l.setAttribute("control0",new u.TlE(I,3,!1)),l.setAttribute("control1",new u.TlE(P,3,!1)),l.setAttribute("direction",new u.TlE(R,3,!1))}return V}var D=function(e){(0,l.Z)(r,e);var t=(0,c.Z)(r);function r(e){var a;return(0,o.Z)(this,r),(a=t.call(this,e)).materials=[],a.materialLibrary={},a.partsCache=new x((0,s.Z)(a)),a.fileMap={},a.setMaterials([]),a.smoothNormals=!0,a.partsLibraryPath="",a.missingColorMaterial=new u.Wid({color:16711935,roughness:.3,metalness:0}),a.missingColorMaterial.name="Missing material",a.missingEdgeColorMaterial=new u.nls({color:16711935}),a.missingEdgeColorMaterial.name="Missing material - Edge",a.missingConditionalEdgeColorMaterial=new f({fog:!0,color:16711935}),a.missingConditionalEdgeColorMaterial.name="Missing material - Conditional Edge",a.missingColorMaterial.userData.edgeMaterial=a.missingEdgeColorMaterial,a.missingEdgeColorMaterial.userData.conditionalEdgeMaterial=a.missingConditionalEdgeColorMaterial,a}return(0,i.Z)(r,[{key:"setPartsLibraryPath",value:function(e){return this.partsLibraryPath=e,this}},{key:"preloadMaterials",value:function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t){var r,n,i,o,s,l,c,d,h,g;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new u.hH6(this.manager)).setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),e.next=6,r.loadAsync(t);case 6:for(n=e.sent,i=/^0 !COLOUR/,o=n.split(/[\n\r]/g),s=[],l=0,c=o.length;l<c;l++)d=o[l],i.test(d)&&(h=d.replace(i,""),g=this.parseColorMetaDirective(new w(h)),s.push(g));this.setMaterials(s);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"load",value:function(e,t,r,a){var n=this,i=new u.hH6(this.manager);i.setPath(this.path),i.setRequestHeader(this.requestHeader),i.setWithCredentials(this.withCredentials),i.load(e,(function(r){n.partsCache.parseModel(r,n.materialLibrary).then((function(r){n.applyMaterialsToMesh(r,d,n.materialLibrary,!0),n.computeBuildingSteps(r),r.userData.fileName=e,t(r)})).catch(a)}),r,a)}},{key:"parse",value:function(e,t){var r=this;this.partsCache.parseModel(e,this.materialLibrary).then((function(e){r.applyMaterialsToMesh(e,d,r.materialLibrary,!0),r.computeBuildingSteps(e),e.userData.fileName="",t(e)}))}},{key:"setMaterials",value:function(e){this.materialLibrary={},this.materials=[];for(var t=0,r=e.length;t<r;t++)this.addMaterial(e[t]);return this.addMaterial(this.parseColorMetaDirective(new w("Main_Colour CODE 16 VALUE #FF8080 EDGE #333333"))),this.addMaterial(this.parseColorMetaDirective(new w("Edge_Colour CODE 24 VALUE #A0A0A0 EDGE #333333"))),this}},{key:"setFileMap",value:function(e){return this.fileMap=e,this}},{key:"addMaterial",value:function(e){var t=this.materialLibrary;return t[e.userData.code]||(this.materials.push(e),t[e.userData.code]=e),this}},{key:"getMaterial",value:function(e){if(e.startsWith("0x2")){var t=e.substring(3);return this.parseColorMetaDirective(new w("Direct_Color_"+t+" CODE -1 VALUE #"+t+" EDGE #"+t))}return this.materialLibrary[e]||null}},{key:"applyMaterialsToMesh",value:function(e,t,r){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],n=this,i=t===d;function o(e,o){if(i&&!(o in r)&&!a)return o;var s=e.isLineSegments||e.isConditionalLine;(!s&&o===d||s&&o===h)&&(o=t);var l=null;if(o in r)l=r[o];else{if(!a)return o;null===(l=n.getMaterial(o))&&(console.warn("LDrawLoader: Material properties for code ".concat(o," not available.")),l=n.missingColorMaterial)}return e.isLineSegments&&(l=l.userData.edgeMaterial,e.isConditionalLine&&(l=l.userData.conditionalEdgeMaterial)),l}e.traverse((function(e){if(e.isMesh||e.isLineSegments)if(Array.isArray(e.material))for(var t=0,r=e.material.length;t<r;t++)e.material[t].isMaterial||(e.material[t]=o(e,e.material[t]));else e.material.isMaterial||(e.material=o(e,e.material))}))}},{key:"getMainMaterial",value:function(){return this.getMaterial(d)}},{key:"getMainEdgeMaterial",value:function(){var e=this.getMaterial(h);return e?e.userData.edgeMaterial:null}},{key:"parseColorMetaDirective",value:function(e){var t=null,r=16711935,a=16711935,n=1,i=!1,o=0,s=0,l=null,c=e.getToken();if(!c)throw new Error('LDrawLoader: Material name was expected after "!COLOUR tag'+e.getLineNumberString()+".");for(var d=null;d=e.getToken();)if(!g(d))switch(d.toUpperCase()){case"CODE":t=e.getToken();break;case"VALUE":if((r=e.getToken()).startsWith("0x"))r="#"+r.substring(2);else if(!r.startsWith("#"))throw new Error("LDrawLoader: Invalid color while parsing material"+e.getLineNumberString()+".");break;case"EDGE":if((a=e.getToken()).startsWith("0x"))a="#"+a.substring(2);else if(!a.startsWith("#")){if(!(l=this.getMaterial(a)))throw new Error("LDrawLoader: Invalid edge color while parsing material"+e.getLineNumberString()+".");l=l.userData.edgeMaterial}break;case"ALPHA":if(n=parseInt(e.getToken()),isNaN(n))throw new Error("LDrawLoader: Invalid alpha value in material definition"+e.getLineNumberString()+".");(n=Math.max(0,Math.min(1,n/255)))<1&&(i=!0);break;case"LUMINANCE":if(!g(e.getToken()))throw new Error("LDrawLoader: Invalid luminance value in material definition"+w.getLineNumberString()+".");break;case"CHROME":s=1;break;case"PEARLESCENT":s=2;break;case"RUBBER":s=3;break;case"MATTE_METALLIC":s=4;break;case"METAL":s=5;break;case"MATERIAL":e.setToEnd();break;default:throw new Error('LDrawLoader: Unknown token "'+d+'" while parsing material'+e.getLineNumberString()+".")}var h=null;switch(s){case 0:h=new u.Wid({color:r,roughness:.3,metalness:0});break;case 2:h=new u.Wid({color:r,roughness:.3,metalness:.25});break;case 1:h=new u.Wid({color:r,roughness:0,metalness:1});break;case 3:h=new u.Wid({color:r,roughness:.9,metalness:0});break;case 4:h=new u.Wid({color:r,roughness:.8,metalness:.4});break;case 5:h=new u.Wid({color:r,roughness:.2,metalness:.85})}return h.transparent=i,h.premultipliedAlpha=!0,h.opacity=n,h.depthWrite=!i,h.color.convertSRGBToLinear(),h.polygonOffset=!0,h.polygonOffsetFactor=1,0!==o&&h.emissive.set(h.color).multiplyScalar(o),l||((l=new u.nls({color:a,transparent:i,opacity:n,depthWrite:!i})).userData.code=t,l.name=c+" - Edge",l.color.convertSRGBToLinear(),l.userData.conditionalEdgeMaterial=new f({fog:!0,transparent:i,depthWrite:!i,color:a,opacity:n}),l.userData.conditionalEdgeMaterial.color.convertSRGBToLinear(),l.userData.conditionalEdgeMaterial.userData.code=t,l.userData.conditionalEdgeMaterial.name=c+" - Conditional Edge"),h.userData.code=t,h.name=c,h.userData.edgeMaterial=l,this.addMaterial(h),h;function g(e){var t;return t=e.startsWith("LUMINANCE")?parseInt(e.substring(9)):parseInt(e),!isNaN(t)&&(o=Math.max(0,Math.min(1,t/255)),!0)}}},{key:"computeBuildingSteps",value:function(e){var t=0;e.traverse((function(e){e.isGroup&&(e.userData.startingBuildingStep&&t++,e.userData.buildingStep=t)})),e.userData.numBuildingSteps=t+1}}]),r}(u.aNw)}}]);
//# sourceMappingURL=8216.33b2f581.chunk.js.map