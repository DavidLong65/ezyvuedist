"use strict";(self.webpackChunkezyvuefree=self.webpackChunkezyvuefree||[]).push([[6825],{26825:function(e,a,s){s.r(a),s.d(a,{TDSLoader:function(){return h}});var t=s(15671),r=s(43144),i=s(60136),n=s(29388),d=s(70804),h=function(e){(0,i.Z)(s,e);var a=(0,n.Z)(s);function s(e){var r;return(0,t.Z)(this,s),(r=a.call(this,e)).debug=!1,r.group=null,r.materials=[],r.meshes=[],r}return(0,r.Z)(s,[{key:"load",value:function(e,a,s,t){var r=this,i=""===this.path?d.Zp0.extractUrlBase(e):this.path,n=new d.hH6(this.manager);n.setPath(this.path),n.setResponseType("arraybuffer"),n.setRequestHeader(this.requestHeader),n.setWithCredentials(this.withCredentials),n.load(e,(function(s){try{a(r.parse(s,i))}catch(n){t?t(n):console.error(n),r.manager.itemError(e)}}),s,t)}},{key:"parse",value:function(e,a){this.group=new d.ZAu,this.materials=[],this.meshes=[],this.readFile(e,a);for(var s=0;s<this.meshes.length;s++)this.group.add(this.meshes[s]);return this.group}},{key:"readFile",value:function(e,a){var s=new DataView(e),t=new o(s,0,this.debugMessage);if(t.id===l||t.id===g||t.id===u)for(var r=t.readChunk();r;){if(r.id===f){var i=r.readDWord();this.debugMessage("3DS file version: "+i)}else r.id===k?this.readMeshData(r,a):this.debugMessage("Unknown main chunk: "+r.hexId);r=t.readChunk()}this.debugMessage("Parsed "+this.meshes.length+" meshes")}},{key:"readMeshData",value:function(e,a){for(var s=e.readChunk();s;){if(s.id===y){var t=+s.readDWord();this.debugMessage("Mesh Version: "+t)}else if(s.id===w){var r=s.readFloat();this.debugMessage("Master scale: "+r),this.group.scale.set(r,r,r)}else s.id===L?(this.debugMessage("Named Object"),this.readNamedObject(s)):s.id===C?(this.debugMessage("Material"),this.readMaterialEntry(s,a)):this.debugMessage("Unknown MDATA chunk: "+s.hexId);s=e.readChunk()}}},{key:"readNamedObject",value:function(e){for(var a=e.readString(),s=e.readChunk();s;){if(s.id===q){var t=this.readMesh(s);t.name=a,this.meshes.push(t)}else this.debugMessage("Unknown named object chunk: "+s.hexId);s=e.readChunk()}}},{key:"readMaterialEntry",value:function(e,a){for(var s=e.readChunk(),t=new d.xoR;s;){if(s.id===F)t.name=s.readString(),this.debugMessage("   Name: "+t.name);else if(s.id===O)this.debugMessage("   Wireframe"),t.wireframe=!0;else if(s.id===A){var r=s.readByte();t.wireframeLinewidth=r,this.debugMessage("   Wireframe Thickness: "+r)}else if(s.id===D)t.side=d.ehD,this.debugMessage("   DoubleSided");else if(s.id===B)this.debugMessage("   Additive Blending"),t.blending=d.WMw;else if(s.id===W)this.debugMessage("   Diffuse Color"),t.color=this.readColor(s);else if(s.id===I)this.debugMessage("   Specular Color"),t.specular=this.readColor(s);else if(s.id===x)this.debugMessage("   Ambient color"),t.color=this.readColor(s);else if(s.id===S){var i=this.readPercentage(s);t.shininess=100*i,this.debugMessage("   Shininess : "+i)}else if(s.id===U){var n=this.readPercentage(s);t.opacity=1-n,this.debugMessage("  Transparency : "+n),t.transparent=t.opacity<1}else s.id===R?(this.debugMessage("   ColorMap"),t.map=this.readMap(s,a)):s.id===Z?(this.debugMessage("   BumpMap"),t.bumpMap=this.readMap(s,a)):s.id===G?(this.debugMessage("   OpacityMap"),t.alphaMap=this.readMap(s,a)):s.id===N?(this.debugMessage("   SpecularMap"),t.specularMap=this.readMap(s,a)):this.debugMessage("   Unknown material chunk: "+s.hexId);s=e.readChunk()}this.materials[t.name]=t}},{key:"readMesh",value:function(e){var a=e.readChunk(),s=new d.u9r,t=new d.xoR,r=new d.Kj0(s,t);for(r.name="mesh";a;){if(a.id===E){var i=a.readWord();this.debugMessage("   Vertex: "+i);for(var n=[],h=0;h<i;h++)n.push(a.readFloat()),n.push(a.readFloat()),n.push(a.readFloat());s.setAttribute("position",new d.a$l(n,3))}else if(a.id===H)this.readFaceArray(a,r);else if(a.id===Y){var o=a.readWord();this.debugMessage("   UV: "+o);for(var u=[],l=0;l<o;l++)u.push(a.readFloat()),u.push(a.readFloat());s.setAttribute("uv",new d.a$l(u,2))}else if(a.id===$){this.debugMessage("   Tranformation Matrix (TODO)");for(var g=[],f=0;f<12;f++)g[f]=a.readFloat();var c=new d.yGw;c.elements[0]=g[0],c.elements[1]=g[6],c.elements[2]=g[3],c.elements[3]=g[9],c.elements[4]=g[2],c.elements[5]=g[8],c.elements[6]=g[5],c.elements[7]=g[11],c.elements[8]=g[1],c.elements[9]=g[7],c.elements[10]=g[4],c.elements[11]=g[10],c.elements[12]=0,c.elements[13]=0,c.elements[14]=0,c.elements[15]=1,c.transpose();var p=new d.yGw;p.copy(c).invert(),s.applyMatrix4(p),c.decompose(r.position,r.quaternion,r.scale)}else this.debugMessage("   Unknown mesh chunk: "+a.hexId);a=e.readChunk()}return s.computeVertexNormals(),r}},{key:"readFaceArray",value:function(e,a){var s=e.readWord();this.debugMessage("   Faces: "+s);for(var t=[],r=0;r<s;++r)t.push(e.readWord(),e.readWord(),e.readWord()),e.readWord();a.geometry.setIndex(t);for(var i=0,n=0;!e.endOfChunk;){var d=e.readChunk();if(d.id===X){this.debugMessage("      Material Group");var h=this.readMaterialGroup(d),o=3*h.index.length;a.geometry.addGroup(n,o,i),n+=o,i++;var u=this.materials[h.name];!1===Array.isArray(a.material)&&(a.material=[]),void 0!==u&&a.material.push(u)}else this.debugMessage("      Unknown face array chunk: "+d.hexId)}1===a.material.length&&(a.material=a.material[0])}},{key:"readMap",value:function(e,a){var s=e.readChunk(),t={},r=new d.dpR(this.manager);for(r.setPath(this.resourcePath||a).setCrossOrigin(this.crossOrigin);s;){if(s.id===P){var i=s.readString();t=r.load(i),this.debugMessage("      File: "+a+i)}else s.id===j?(t.offset.x=s.readFloat(),this.debugMessage("      OffsetX: "+t.offset.x)):s.id===V?(t.offset.y=s.readFloat(),this.debugMessage("      OffsetY: "+t.offset.y)):s.id===T?(t.repeat.x=s.readFloat(),this.debugMessage("      RepeatX: "+t.repeat.x)):s.id===z?(t.repeat.y=s.readFloat(),this.debugMessage("      RepeatY: "+t.repeat.y)):this.debugMessage("      Unknown map chunk: "+s.hexId);s=e.readChunk()}return t}},{key:"readMaterialGroup",value:function(e){var a=e.readString(),s=e.readWord();this.debugMessage("         Name: "+a),this.debugMessage("         Faces: "+s);for(var t=[],r=0;r<s;++r)t.push(e.readWord());return{name:a,index:t}}},{key:"readColor",value:function(e){var a=e.readChunk(),s=new d.Ilk;if(a.id===p||a.id===M){var t=a.readByte(),r=a.readByte(),i=a.readByte();s.setRGB(t/255,r/255,i/255),this.debugMessage("      Color: "+s.r+", "+s.g+", "+s.b)}else if(a.id===c||a.id===v){var n=a.readFloat(),h=a.readFloat(),o=a.readFloat();s.setRGB(n,h,o),this.debugMessage("      Color: "+s.r+", "+s.g+", "+s.b)}else this.debugMessage("      Unknown color chunk: "+a.hexId);return s}},{key:"readPercentage",value:function(e){var a=e.readChunk();switch(a.id){case b:return a.readShort()/100;case m:return a.readFloat();default:return this.debugMessage("      Unknown percentage chunk: "+a.hexId),0}}},{key:"debugMessage",value:function(e){this.debug&&console.log(e)}}]),s}(d.aNw),o=function(){function e(a,s,r){(0,t.Z)(this,e),this.data=a,this.offset=s,this.position=s,this.debugMessage=r,this.debugMessage instanceof Function&&(this.debugMessage=function(){}),this.id=this.readWord(),this.size=this.readDWord(),this.end=this.offset+this.size,this.end>a.byteLength&&this.debugMessage("Bad chunk size for chunk at "+s)}return(0,r.Z)(e,[{key:"readChunk",value:function(){if(this.endOfChunk)return null;try{var a=new e(this.data,this.position,this.debugMessage);return this.position+=a.size,a}catch(s){return this.debugMessage("Unable to read chunk at "+this.position),null}}},{key:"hexId",get:function(){return this.id.toString(16)}},{key:"endOfChunk",get:function(){return this.position>=this.end}},{key:"readByte",value:function(){var e=this.data.getUint8(this.position,!0);return this.position+=1,e}},{key:"readFloat",value:function(){try{var e=this.data.getFloat32(this.position,!0);return this.position+=4,e}catch(a){return this.debugMessage(a+" "+this.position+" "+this.data.byteLength),0}}},{key:"readInt",value:function(){var e=this.data.getInt32(this.position,!0);return this.position+=4,e}},{key:"readShort",value:function(){var e=this.data.getInt16(this.position,!0);return this.position+=2,e}},{key:"readDWord",value:function(){var e=this.data.getUint32(this.position,!0);return this.position+=4,e}},{key:"readWord",value:function(){var e=this.data.getUint16(this.position,!0);return this.position+=2,e}},{key:"readString",value:function(){for(var e="",a=this.readByte();a;)e+=String.fromCharCode(a),a=this.readByte();return e}}]),e}(),u=19789,l=15786,g=49725,f=2,c=16,p=17,M=18,v=19,b=48,m=49,k=15677,y=15678,w=256,C=45055,F=40960,x=40976,W=40992,I=41008,S=41024,U=41040,D=41089,B=41091,O=41093,A=41095,R=41472,G=41488,Z=41520,N=41476,P=41728,T=41812,z=41814,j=41816,V=41818,L=16384,q=16640,E=16656,H=16672,X=16688,Y=16704,$=16736}}]);
//# sourceMappingURL=6825.0237fb27.chunk.js.map