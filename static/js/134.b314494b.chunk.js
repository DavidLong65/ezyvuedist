"use strict";(self.webpackChunkezyvuefree=self.webpackChunkezyvuefree||[]).push([[134],{20134:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(15671),i=n(43144),d=n(60136),o=n(29388),l=n(72791),a=n(91523),c=n(80184),s=function(e){(0,d.Z)(n,e);var t=(0,o.Z)(n);function n(){return(0,r.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"render",value:function(){return(0,c.jsxs)("div",{className:"help-page",children:[(0,c.jsx)("h1",{children:"Integrate the viewer with your Webflow site"}),(0,c.jsx)("h2",{children:"Add the viewer to a product page"}),(0,c.jsx)("h4",{children:"1. link a Webflow product to an Ezyvue product"}),(0,c.jsxs)("ol",{children:[(0,c.jsx)("li",{children:"Copy the Webflow product id from heading item ID on the product page"}),(0,c.jsx)("li",{children:"Paste it into the External Product ID textbox in the Metadata section of the Manage Project page."}),(0,c.jsx)("li",{children:"Click Save Changes."})]}),(0,c.jsx)("h4",{children:"2. Add an Embed element to the products template page"}),(0,c.jsxs)("ol",{children:[(0,c.jsx)("li",{children:"Select Pages and select Products template under Ecommerce pages."}),(0,c.jsx)("li",{children:"Select Add and under Components select Embed to add the element to the page."})]}),(0,c.jsx)("h4",{children:"3. Add code to the Embed element"}),(0,c.jsxs)("ol",{children:[(0,c.jsx)("li",{children:"Select the Embed element on the canvas and double-click to open the code editor."}),(0,c.jsxs)("li",{children:["Copy and paste the code below into the editor:",(0,c.jsx)("pre",{children:'\n<div id="ezyvue-viewer-container" style="width:400px;height:400px;display:none">\n    <iframe id="ezyvue-viewer" width="100%" height="100%" style="border:none; "frameborder="0" xr-spatial-tracking="true" autoplay allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen"></iframe>\n</div>\n<script>\n    var urlParams = new URLSearchParams(document.location.search);\n    var productId = urlParams.get(\'itemId\');\n    if(productId) {\n        var xmlhttp = new XMLHttpRequest();\n        var url = \'https://www.ezyvue.com/api/product?externalProductID=\' + productId;\n\n        xmlhttp.onreadystatechange = function() {\n            if (this.readyState == 4 && this.status == 200) {\n                    var evProduct = JSON.parse(this.responseText);if(evProduct) {\n                    var iframe = document.getElementById("ezyvue-viewer");\n                    var options = \'&hidemenu\';\n                    \n                    iframe.src = \'https://www.ezyvue.com/viewer?\' + \'productId=\' + evProduct._id + options;\n                    \n                    var el = document.getElementById("ezyvue-viewer-container");\n                    if(el)\n                        el.style.display = \'block\';\n                }\n            }\n        };\n        \n        xmlhttp.open("GET", url, true);\n        xmlhttp.send();\n    }\n<\/script>\n                    '})]}),"The 3d viewer should appear on the page."]}),(0,c.jsx)("h4",{children:"4. Set the viewer options"}),"Note: product-specific settings can be set in the settings tab of Ezyvue Studio.",(0,c.jsxs)("ol",{children:[(0,c.jsxs)("li",{children:["Navigate to the ",(0,c.jsx)(a.rU,{to:"/embed",children:"integrate viewer page"})," and choose the required settings."]}),(0,c.jsx)("li",{children:"Replace the &hidemenu option in the code above with the options from the HTML code textbox. (Each option begins with the character &)."})]}),(0,c.jsx)("h2",{children:"Add the viewer for a specific product"}),(0,c.jsxs)("p",{children:["You can embed the viewer on any template page by addding an iframe to an Embed element. Follow this ",(0,c.jsx)(a.rU,{to:"/help/embedViewer",children:"guide"})]})]})}}]),n}(l.Component)}}]);
//# sourceMappingURL=134.b314494b.chunk.js.map