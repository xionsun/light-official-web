(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6374],{5789:function(e,t,i){"use strict";i.d(t,{P:function(){return d},n:function(){return h}});var r=i(60341),s=i(43054),n=i(65943);let a={type:"words",x:0,y:0,opacity:0,duration:.3,stagger:.0032,wordStagger:.013,wordClass:"word",revert:!0},o={type:"words",x:0,y:0,opacity:0,duration:.3,stagger:.0132,wordStagger:.013,wordClass:"word",revert:!0},l=!1;function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};l||(l=!0,r.default.registerPlugin(s.Z));let{type:i,opacity:o,stagger:d,wordClass:h,revert:u,wordStagger:c}={...a,...t},p=new s.Z(e,{type:i,wordsClass:h}),f=r.default.timeline(),m=p.words,_="number"==typeof c?r.default.utils.clamp(.001,c,.3/m.length):d;return m&&f.add(r.default.fromTo(m,{display:"inline",opacity:o},{duration:.133,opacity:1,stagger:_,ease:n.Z.jorisBlinkIn,onComplete:()=>{u&&p.revert()}})),f}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];l||(l=!0,r.default.registerPlugin(s.Z));let{type:a,opacity:d,duration:h,stagger:u,wordStagger:c,wordClass:p,revert:f}={...o,...t},m=new s.Z(e,{type:a,wordsClass:p}),_=r.default.timeline(),g=m.words,w=g[0],y="number"==typeof c?r.default.utils.clamp(.001,c,.3/g.length):u;return g&&g.length>0&&(i?(_.add(r.default.fromTo(w,{opacity:d},{duration:.166,opacity:1,ease:n.Z.jorisBlinkIn}),0),_.add(r.default.fromTo(g,{opacity:d},{duration:h,opacity:1,stagger:y,ease:"none",onComplete:()=>{f&&m.revert()}}))):_.add(r.default.fromTo(g,{opacity:d},{duration:.001,opacity:1,stagger:y,ease:"none",onComplete:()=>{f&&m.revert()}}))),_}},29068:function(e,t,i){"use strict";i.d(t,{AQ:function(){return G},Ke:function(){return a},de:function(){return l}});var r,s,n,a,o,l,d=i(85893),h=i(62011),u=i(22753),c=i(94184),p=i.n(c),f=i(67294),m=i(77823),_=i(7626),g=i(67106),w=i(11786),y=i(86562),v=i(74371),x=i(86181),Z=i(60763),j=i(90538);class C extends Z.Z{constructor(e,t=1,i=3){super(e),this.setIcosahedron(),i>6&&(i=6);for(let e=0;e<i;e++)this.subdivide();this.normalize();let r=this._positions.length,s=new Float32Array(3*r),n=0;for(let e=0;e<r;e++)s[n++]=this._positions[e].x*t,s[n++]=this._positions[e].y*t,s[n++]=this._positions[e].z*t;this.setPositions(s),this.setIndices(this._indices);let a=0,o=new Float32Array(3*r);for(let e=0;e<r;e++)o[a++]=this._positions[e].x,o[a++]=this._positions[e].y,o[a++]=this._positions[e].z;this.setNormals(o),this.addTexcoords(this._positions)}addTexcoords(e){let t,i,r;let s=e.length,n=new Float32Array(2*s),a=0,o=1/(2*Math.PI),l=1/Math.PI;for(var d=0;d<s;d++)t=this._positions[d].x,i=this._positions[d].y,r=this._positions[d].z,n[a++]=Math.atan2(r,t)*o+.5,n[a++]=Math.asin(i)*l+.5;this.setUV0(n)}setIcosahedron(){this._indices=new Uint16Array([1,4,0,4,9,0,4,5,9,8,5,4,1,8,4,1,10,8,10,3,8,8,3,5,3,2,5,3,7,2,3,10,7,10,6,7,6,11,7,6,0,11,6,1,0,10,1,6,11,0,9,2,11,9,5,2,9,11,2,7]),this._positions=[],this._positions.push(new j.Z(-.5257311121191336,0,.8506508083520399)),this._positions.push(new j.Z(.5257311121191336,0,.8506508083520399)),this._positions.push(new j.Z(-.5257311121191336,0,-.8506508083520399)),this._positions.push(new j.Z(.5257311121191336,0,-.8506508083520399)),this._positions.push(new j.Z(0,.8506508083520399,.5257311121191336)),this._positions.push(new j.Z(0,.8506508083520399,-.5257311121191336)),this._positions.push(new j.Z(0,-.8506508083520399,.5257311121191336)),this._positions.push(new j.Z(0,-.8506508083520399,-.5257311121191336)),this._positions.push(new j.Z(.8506508083520399,.5257311121191336,0)),this._positions.push(new j.Z(-.8506508083520399,.5257311121191336,0)),this._positions.push(new j.Z(.8506508083520399,-.5257311121191336,0)),this._positions.push(new j.Z(-.8506508083520399,-.5257311121191336,0))}subdivide(){let e=[],t=this._indices.length,i=[],r=this._positions;for(let s=0;s<t-2;s+=3){let t=this._indices[s],n=this._indices[s+1],a=this._indices[s+2],o=this.getMidpointIndex(e,r,t,n),l=this.getMidpointIndex(e,r,n,a),d=this.getMidpointIndex(e,r,a,t);i.push(t,o,d,n,l,o,a,d,l,d,o,l)}this._indices=new Uint16Array(i)}getMidpointIndex(e,t,i,r){return e[i]&&e[i][r]?e[i][r]:e[r]&&e[r][i]?e[r][i]:(e[i]||(e[i]=[]),C.addVertex(e,t,i,r))}static addVertex(e,t,i,r){let s=t[i],n=t[r],a=j.Z.add(s,n).multiplyScalar(.5),o=t.length;return e[i][r]=o,t.push(a),o}normalize(){let e=this._positions.length;for(let t=0;t<e;t++)this._positions[t].normalize()}}var b=i(70216),M=i(92565),S=i(20098),A=i(53269),L=i(64874),P=i(64085),T=i(5144),I=i(31026),O=i(15487),k=i(57962),N=i(30875),q=i(79740),F=i(65470),V=i.n(F);class Y{paused=!1;mesh=null;transform=new A.Z;lineColor=new j.Z;fillColor=new q.Z;unity=null;isInit=!1;static staticIndex=0;constructor(e,t,r,s,n,a){this.instanceIndex=Y.staticIndex++,this.canvasManager=new L.Z(e,null),this.renderer=new x.Z(t,this.canvasManager.canvas,i(29136),!0,!0),this.setColor(r,s,n);let o=V().mobile?4:7;this.camera=new S.Z(1,.01,20),this.camera.view.transform.position=new j.Z(0,0,o),this.logoCamera=new S.Z(1,.01,20),this.logoCamera.lookAt(new j.Z(0,.4*o,o),new j.Z(0,0,0)),a?(this.mesh=new C(this.renderer,1,3),b.Z.addBaryCentricCoords(this.mesh)):(this.unity=new O.Z(this.renderer,t,i(20443),{},{}),this.unity.loadMaterial=!1),this.material=new M.Z(this.renderer,t,"wireframe"),this.material.setPreMultipliedAlphaBlending(),this.material.depthWrite=!0,this.linesMaterial=new M.Z(this.renderer,t,"lines"),this.fillMaterial=new M.Z(this.renderer,t,"fill"),this.fillMaterial.setPreMultipliedAlphaBlending(),this.fillMaterial.depthWrite=!0}init(){let e=new P.Z;e.init("controls"),this.renderer.init(),this.renderer.clearColor=new T.Z(0,0,0,0),this.material.setVector3("_CameraPosition",this.camera.view.transform.worldPosition),this.setColorUniforms(),this.convertMesh(),this.isInit=!0,this.update()}convertMesh(){if(this.unity){this.logoMesh=this.unity.meshes[0];let e=new k.Z(this.renderer,this.logoMesh);for(let t of this.unity.models)t.mesh=e}}update(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(I.Z.instance.update(e),!this.paused){let e=I.Z.instance.deltaTime;if(this.canvasManager.update(e),this.camera.projection.aspectRatio=this.renderer.aspectRatio,this.mesh)this.transform.rotateY(-(.25*e)),this.material.setMatrix("_World",this.transform.worldMatrix),this.material.setMatrix("_ViewProjection",this.camera.viewProjection),this.renderer.draw(this.mesh,this.material);else if(this.unity){for(let t of(this.unity.rootTransform.rotateY(-(.25*e)),this.fillMaterial.setMatrix("_ViewProjection",this.logoCamera.viewProjection),this.unity.models))this.fillMaterial.setMatrix("_Model",t.transform.worldMatrix),this.renderer.draw(this.logoMesh,this.fillMaterial);for(let e of(this.renderer.context.enable(N.Z.POLYGON_OFFSET_FILL),this.renderer.context.polygonOffset(-5,1),this.linesMaterial.setFloat("_ScreenHeight",this.renderer.height),this.linesMaterial.setFloat("_AspectRatio",this.renderer.aspectRatio),this.linesMaterial.setMatrix("_ViewProjection",this.logoCamera.viewProjection),this.unity.models))this.linesMaterial.setMatrix("_Model",e.transform.worldMatrix),this.renderer.draw(e.mesh,this.linesMaterial);this.renderer.context.disable(N.Z.POLYGON_OFFSET_FILL)}}window.requestAnimationFrame(e=>this.update(e))}setColor(e,t,i){this.lineColor=T.Z.fromHex(e).vector3,this.fillColor=T.Z.fromHex(t),this.fillColor.w=i,this.isInit&&this.setColorUniforms()}setColorUniforms(){this.material.setVector3("_LineColor",this.lineColor),this.material.setVector4("_FillColor",this.fillColor),this.linesMaterial.setVector4("_Color",new q.Z(this.lineColor.x,this.lineColor.y,this.lineColor.z,1)),this.fillMaterial.setVector4("_Color",this.fillColor)}destruct(){var e,t,i;null===(e=this.mesh)||void 0===e||e.destruct(),this.material.destruct(),this.linesMaterial.destruct(),this.fillMaterial.destruct(),null===(t=this.unity)||void 0===t||t.destruct(),null===(i=this.logoMesh)||void 0===i||i.destruct(),this.canvasManager.destruct(),this.renderer.destruct()}}class B extends y.default{init(e,t,i,r,s){this.preloader=new v.Z,this.webglApp=new Y(e,this.preloader,t,i,r,s)}load(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};this.preloader.load(()=>{this.webglApp.init(),e()},t)}setColor(e,t,i){this.webglApp.setColor(e,t,i)}play(){this.webglApp.paused=!1}pause(){this.webglApp.paused=!0}destruct(){var e,t;null===(e=this.preloader)||void 0===e||e.destruct(),null===(t=this.webglApp)||void 0===t||t.destruct()}}var z=i(92493),H=i(23914),R=i(60341),W=i(65943),Q=i(36134),U=i(5789),E=i(60623),D=i.n(E);(r=a||(a={})).Default="default",r.Ball="ball",(s=o||(o={})).Default="default",s.Full="full",(n=l||(l={})).Primary="primary",n.Secondary="secondary";let G=(0,u.o8)((e,t)=>{let{className:i,description:r,video:s,object:n,lineType:c=o.Default,theme:y=l.Primary}=e,v=(0,u.v6)({self:t}),x=(0,w.D)(),Z=(0,f.useRef)(null),j=(0,h.nd)(v.line),C=(0,h._7)(()=>(function(e,t){let{self:i,description:r,object:s,overlay:n}=(0,u.tY)(e),a=R.default.timeline({paused:!0});for(let[e,o]of(a.add((0,Q.t)(i,{duration:.01})),a.fromTo(i,{autoAlpha:0,border:"1px solid transparent"},{autoAlpha:1,border:getComputedStyle(i).border,clearProps:"border",ease:W.Z.jorisBlinkIn,duration:.233},0),a.fromTo(n,{autoAlpha:1},{autoAlpha:0,ease:W.Z.jorisBlinkIn,duration:.233},0),t[0]&&a.add((0,U.P)(r,{stagger:.1}),.3),a.fromTo(s,{autoAlpha:0},{autoAlpha:1,ease:W.Z.jorisBlinkIn,duration:.133},.4),t.entries()))a.add(o.play(0),.4+.1*e);return a})(v,j),[v,j]);return(0,h.ko)(C,t),(0,g.O)(async()=>(function(e){let{self:t}=(0,u.tY)(e),i=R.default.timeline();return i.add((0,Q.w)(t)),i})(v),[v]),(0,h.$p)(()=>(function(e,t){let{self:i,object:r,video:s}=(0,u.tY)(e),n=R.default.timeline({scrollTrigger:{trigger:i,scrub:!0,start:"top center",end:"bottom center"}}),a=R.default.timeline({scrollTrigger:{trigger:i,scrub:!0,start:"top top",end:"bottom top"}});return t||n.fromTo(r,{y:50},{y:-50,ease:"none"},0),s&&a.fromTo(s,{scale:1},{scale:2,ease:"none"},0),n})(v,x),[v,x]),(0,_.c)(()=>{Z.current=new B,v.object.current&&Z.current.init(v.object.current,y===l.Primary?"#d6d6d6":"#ffffff",y===l.Primary?"#ffffff":"#000000",y===l.Primary?1:0,n===a.Ball),Z.current.load(()=>{})}),(0,m.Z)(()=>{var e;null===(e=Z.current)||void 0===e||e.destruct()}),(0,d.jsxs)("div",{className:p()(D().objectSquareCard,D()[y],i),ref:v.self,children:[(0,d.jsx)(H.e,{ref:(0,u.Q7)(v.line,0),animate:!1,direction:"left",className:p()(D().firstLine,D()[c])}),(0,d.jsx)(H.e,{ref:(0,u.Q7)(v.line,1),animate:!1,direction:"right",className:p()(D().secondLine,D()[c])}),s&&(0,d.jsxs)("div",{className:D().videoWrapper,children:[(0,d.jsx)("video",{className:D().video,ref:v.video,crossOrigin:"anonymous",autoPlay:!0,playsInline:!0,muted:!0,loop:!0,children:(0,d.jsx)("source",{src:s})}),(0,d.jsx)("div",{className:D().grid})]}),y===l.Secondary&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(H.e,{ref:(0,u.Q7)(v.line,2),animate:!1,direction:"left",className:p()(D().firstTopLine,D()[c]),theme:y}),(0,d.jsx)(H.e,{ref:(0,u.Q7)(v.line,3),animate:!1,direction:"right",className:p()(D().secondTopLine,D()[c]),theme:y})]}),(0,d.jsx)(z.Z,{className:D().description,ref:v.description,size:z.Y.LabelS,richText:r}),(0,d.jsx)("div",{className:D().object,ref:v.object}),(0,d.jsx)("div",{className:D().overlay,ref:v.overlay})]})})},23914:function(e,t,i){"use strict";i.d(t,{e:function(){return w}});var r=i(85893),s=i(62011),n=i(22753),a=i(94184),o=i.n(a),l=i(67294),d=i(89048),h=i(77823),u=i(7626),c=i(67106),p=i(60341),f=i(65943),m=i(36134),_=i(94177),g=i.n(_);let w=(0,n.o8)((e,t)=>{let{className:i,direction:a,animate:_=!0,theme:w="primary"}=e,y=(0,n.v6)({self:t}),v=(0,l.useRef)(null),x=(0,s._7)(()=>(function(e,t){let{self:i}=(0,n.tY)(e),r=p.default.timeline({paused:!0});return r.add((0,m.t)(i,{duration:.01})),r.fromTo(i,{autoAlpha:0},{autoAlpha:1,duration:.5,ease:f.Z.jorisBlinkIn}),t.current&&r.add(()=>{var e;null===(e=t.current)||void 0===e||e.play()}),r})(y,v),[y,v]);return(0,s.ko)(x,t),(0,c.O)(async()=>(function(e){let{self:t}=(0,n.tY)(e),i=p.default.timeline();return i.add((0,m.w)(t)),i})(y),[y]),(0,u.c)(()=>{if(_){var e;null===(e=x.current)||void 0===e||e.play()}}),(0,d.Z)(()=>{v.current=function(e){let{self:t}=(0,n.tY)(e),i=p.default.timeline({repeat:-1,repeatRefresh:!0,paused:!0});return i.to(t,{autoAlpha:.2,ease:f.Z.jorisBlinkIn,duration:p.default.utils.random(.2,.5),clearProps:"opacity"},p.default.utils.random(2,5)),i}(y)}),(0,h.Z)(()=>{var e;null===(e=v.current)||void 0===e||e.kill()}),(0,r.jsx)("svg",{className:o()(g().strokeLine,i,g()[w]),ref:y.self,"aria-hidden":"true",focusable:"false",preserveAspectRatio:"none",children:"left"===a?(0,r.jsx)("line",{x1:"100%",y1:"100%",x2:"0",y2:"0"}):(0,r.jsx)("line",{x1:"100%",y1:"0",x2:"0",y2:"100%"})})})},8564:function(e,t,i){"use strict";i.d(t,{P:function(){return m}});var r=i(85893),s=i(62011),n=i(22753),a=i(94184),o=i.n(a),l=i(46498),d=i(3820),h=i(60341),u=i(36134),c=i(5789),p=i(43665),f=i.n(p);let m=(0,n.o8)((e,t)=>{let{showIcon:i=!0,tagline:a,copy:p,headingTag:m="h1",className:_}=e,g=(0,n.v6)({self:t}),w=(0,s._7)(()=>(function(e){let{self:t,tagline:i,heading:r}=(0,n.tY)(e),s=h.default.timeline({paused:!0});return s.add((0,u.t)(t,{duration:.01})),s.fromTo(i,{autoAlpha:0},{autoAlpha:1,duration:.1}),s.add((0,c.n)(r,{},!0)),s})(g),[g]);return(0,s.ko)(w,t),(0,r.jsxs)(d.Z,{className:o()(f().taglineHeading,_),as:m,size:d.G.L,ref:g.self,children:[(0,r.jsxs)("span",{className:o()(f().tagline,"copySizeLabelM"),ref:g.tagline,children:[i&&(0,r.jsx)(l.Z,{className:f().icon}),a]}),(0,r.jsx)("span",{ref:g.heading,children:p})]})})},60623:function(e){e.exports={description:"ObjectSquareCard_description__q9t8F",overlay:"ObjectSquareCard_overlay__w2IYk",grid:"ObjectSquareCard_grid__FQ1JS",videoWrapper:"ObjectSquareCard_videoWrapper__YvhKV",video:"ObjectSquareCard_video__nmPgA",object:"ObjectSquareCard_object__cbL06",firstLine:"ObjectSquareCard_firstLine__qQmWb",full:"ObjectSquareCard_full__y6SfU",secondLine:"ObjectSquareCard_secondLine__wkll_",firstTopLine:"ObjectSquareCard_firstTopLine__SYBtO",secondTopLine:"ObjectSquareCard_secondTopLine__GO875",objectSquareCard:"ObjectSquareCard_objectSquareCard__pVF9K",secondary:"ObjectSquareCard_secondary__2mZbv"}},94177:function(e){e.exports={strokeLine:"StrokeLine_strokeLine__tRyuc",secondary:"StrokeLine_secondary__6LfZ3"}},43665:function(e){e.exports={taglineHeading:"TaglineHeading_taglineHeading__08yWn",tagline:"TaglineHeading_tagline__2KEjV",icon:"TaglineHeading_icon__W3nVL"}}}]);