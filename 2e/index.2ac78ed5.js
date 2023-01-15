var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,n),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(i,t,n)},d=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return r(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const h=window,c=h.trustedTypes,p=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?p:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:g};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(d(t))}else void 0!==t&&e.push(d(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:_).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:_;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.5.0");const $=window,b=$.trustedTypes,y=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,w="?"+A,x=`<${w}>`,S=document,E=(t="")=>S.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,T=t=>N(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,H=/>/g,U=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,O=/"/g,I=/^(?:script|style|textarea|title)$/i,D=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),B=D(1),M=(D(2),Symbol.for("lit-noChange")),L=Symbol.for("lit-nothing"),q=new WeakMap,z=S.createTreeWalker(S,129,null,!1),j=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",r=k;for(let e=0;e<i;e++){const i=t[e];let a,d,l=-1,h=0;for(;h<i.length&&(r.lastIndex=h,d=r.exec(i),null!==d);)h=r.lastIndex,r===k?"!--"===d[1]?r=R:void 0!==d[1]?r=H:void 0!==d[2]?(I.test(d[2])&&(s=RegExp("</"+d[2],"g")),r=U):void 0!==d[3]&&(r=U):r===U?">"===d[0]?(r=null!=s?s:k,l=-1):void 0===d[1]?l=-2:(l=r.lastIndex-d[2].length,a=d[1],r=void 0===d[3]?U:'"'===d[3]?O:P):r===O||r===P?r=U:r===R||r===H?r=k:(r=U,s=void 0);const c=r===U&&t[e+1].startsWith("/>")?" ":"";o+=r===k?i+x:l>=0?(n.push(a),i.slice(0,l)+"$lit$"+i.slice(l)+A+c):i+A+(-2===l?(n.push(void 0),e):c)}const a=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,n]};class W{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const r=t.length-1,a=this.parts,[d,l]=j(t,e);if(this.el=W.createElement(d,i),z.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=z.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(A)){const i=l[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Z:"@"===e[1]?Q:K})}else a.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(I.test(n.tagName)){const t=n.textContent.split(A),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],E()),z.nextNode(),a.push({type:2,index:++s});n.append(t[e],E())}}}else if(8===n.nodeType)if(n.data===w)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(A,t+1));)a.push({type:7,index:s}),t+=A.length-1}s++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,n){var s,o,r,a;if(e===M)return e;let d=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const l=C(e)?void 0:e._$litDirective$;return(null==d?void 0:d.constructor)!==l&&(null===(o=null==d?void 0:d._$AO)||void 0===o||o.call(d,!1),void 0===l?d=void 0:(d=new l(t),d._$AT(t,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=d:i._$Cl=d),void 0!==d&&(e=F(t,d._$AS(t,e.values),d,n)),e}class V{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(i,!0);z.currentNode=s;let o=z.nextNode(),r=0,a=0,d=n[0];for(;void 0!==d;){if(r===d.index){let e;2===d.type?e=new G(o,o.nextSibling,this,t):1===d.type?e=new d.ctor(o,d.name,d.strings,this,t):6===d.type&&(e=new X(o,this,t)),this.u.push(e),d=n[++a]}r!==(null==d?void 0:d.index)&&(o=z.nextNode(),r++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{constructor(t,e,i,n){var s;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),C(t)?t===L||null==t||""===t?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):T(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==L&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=W.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new V(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new W(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new G(this.O(E()),this.O(E()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class K{constructor(t,e,i,n,s){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=F(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const n=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=F(this,n[i+r],e,r),a===M&&(a=this._$AH[r]),o||(o=!C(a)||a!==this._$AH[r]),a===L?t=L:t!==L&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}o&&!n&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}}const Y=b?b.emptyScript:"";class Z extends K{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class Q extends K{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:L)===M)return;const n=this._$AH,s=t===L&&n!==L||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==L&&(n===L||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const tt={P:"$lit$",A:A,M:w,C:1,L:j,R:V,D:T,V:F,I:G,H:K,N:Z,U:Q,B:J,F:X},et=$.litHtmlPolyfillSupport;null==et||et(W,G),(null!==(m=$.litHtmlVersions)&&void 0!==m?m:$.litHtmlVersions=[]).push("2.5.0");const it=(t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new G(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt,st;class ot extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=it(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}}ot.finalized=!0,ot._$litElement$=!0,null===(nt=globalThis.litElementHydrateSupport)||void 0===nt||nt.call(globalThis,{LitElement:ot});const rt=globalThis.litElementPolyfillSupport;null==rt||rt({LitElement:ot});(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.2.2");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;function at(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dt={},lt={get exports(){return dt},set exports(t){dt=t}};function ht(t){this.sections=[],this.startingNode=t}ht.prototype.append=function(t){t.container=this,this.sections.push(t)};var ct=ht,pt={};function ut(t){return t.tagName.toUpperCase()}function _t(t){return function(e){return gt(e)&&new RegExp(t,"i").test(ut(e))}}function gt(t){return t&&t.tagName}var ft=_t("^H[1-6]|HGROUP$");pt.getTagName=ut,pt.hasHiddenAttribute=function(t){return gt(t)&&t.hasAttribute("hidden")},pt.isSecRoot=_t("^(BLOCKQUOTE|BODY|DETAILS|FIELDSET|FIGURE|TD)$"),pt.isSecContent=_t("^(ARTICLE|ASIDE|NAV|SECTION)$"),pt.isHeading=ft,pt.getRankingHeadingElement=function(t){if(!ft(t))throw new Error("Not a heading element");if("HGROUP"!==ut(t))return t;for(var e=1;e<=6;e++){var i=t.getElementsByTagName("H"+e);if(i.length)return i[0]}return null},pt.escapeHtml=function(t){return(""+t).replace(/&/g,"&amp;").replace(/</g,"&lt;")};var vt=pt;function mt(t){if(t.heading.implied)return"<i>Untitled "+vt.getTagName(t.startingNode)+"</i>";var e=vt.getRankingHeadingElement(t.heading);if(!e)return"<i>Error: no H1-H6 inside HGROUP</i>";var i=e.textContent;return i?vt.escapeHtml(i):"<i>No text content inside "+vt.getTagName(e)+"</i>"}function $t(t,e){var i=t.startingNode.getAttribute("id");if(i)return i;if(!t.heading.implied){var n=t.heading.getAttribute("id");if(n)return n}var s=t.startingNode;do{var o="h5o-"+ ++e.linkCounter}while(s.ownerDocument.getElementById(o));return s.setAttribute("id",o),o}var bt=function t(e,i){if("object"!=typeof i&&(i={createLinks:!!i}),!e.length)return"";if(i.skipTopHeader)return t(e[0].sections,{skipToHeader:!1,createLinks:i.createLinks});void 0===i.linkCounter&&(i.linkCounter=0);var n=!!i.createLinks,s=[];s.push("<ol>");for(var o=0;o<e.length;o++){var r=e[o];s.push("<li>"),n&&s.push('<a href="#'+$t(r,i)+'">'),s.push(mt(r)),n&&s.push("</a>"),s.push(t(r.sections,i)),s.push("</li>")}return s.push("</ol>"),s.join("")},yt=bt;function At(t,e){this.startingNode=t.node,this.sections=[e]}At.prototype.getLastSection=function(){return this.sections[this.sections.length-1]},At.prototype.asHTML=function(t){return yt(this.sections,t)};var wt,xt,St,Et=ct,Ct=At,Nt=function(t){this.node=t},Tt=function(t,e,i){var n=t;t:for(;n;)if(e(n),n.firstChild)n=n.firstChild;else for(;n;){if(i(n),n.nextSibling){n=n.nextSibling;continue t}n=n==t?null:n.parentNode}},kt=pt;function Rt(){if(St.length)return St[St.length-1].node}function Ht(t){var e=kt.getRankingHeadingElement(t);return e?-parseInt(kt.getTagName(e).substr(1)):-1}function Ut(t){var e=Rt();if(!kt.isHeading(e)&&!kt.hasHiddenAttribute(e))if(kt.hasHiddenAttribute(t))St.push({node:t});else{if(kt.isSecContent(t))return null!=wt&&(xt.heading||(xt.heading={implied:!0}),St.push(wt)),wt=new Nt(t),xt=new Et(t),void(wt.outline=new Ct(wt.node,xt));if(kt.isSecRoot(t))return null!=wt&&St.push(wt),(wt=new Nt(t)).parentSection=xt,xt=new Et(t),void(wt.outline=new Ct(wt.node,xt));if(kt.isHeading(t)){if(xt.heading)if(wt.outline.getLastSection().heading.implied||Ht(t)>=Ht(wt.outline.getLastSection().heading)){var i=new Et(t);wt.outline.sections.push(i),(xt=i).heading=t}else{var n=!1,s=xt;do{if(Ht(t)<Ht(s.heading)){i=new Et(t);s.append(i),(xt=i).heading=t,n=!0}s=s.container}while(!n)}else xt.heading=t;St.push({node:t})}else;}}function Pt(t){var e=Rt();if(e===t&&St.pop(),!kt.isHeading(e)&&!kt.hasHiddenAttribute(e))if(kt.isSecContent(t)&&St.length>0){xt.heading||(xt.heading={implied:!0});var i=wt;wt=St.pop(),xt=wt.outline.getLastSection();for(var n=0;n<i.outline.sections.length;n++)xt.append(i.outline.sections[n])}else{if(kt.isSecRoot(t)&&St.length>0)return xt.heading||(xt.heading={implied:!0}),xt=wt.parentSection,void(wt=St.pop());(kt.isSecContent(t)||kt.isSecRoot(t))&&(xt.heading||(xt.heading={implied:!0}))}}var Ot=function(t){if(!kt.isSecContent(t)&&!kt.isSecRoot(t))throw new TypeError("Invalid argument: start element must either be sectioning root or sectioning content.");return wt=null,xt=null,St=[],Tt(t,Ut,Pt),wt.outline};lt.exports=Ot;var It=at(dt);const Dt=new WeakMap;function Bt(t){return e=>{if(function(t,e){let i=e;for(;i;){if(Dt.get(i)===t)return!0;i=Object.getPrototypeOf(i)}return!1}(t,e))return e;const i=t(e);return Dt.set(i,t),i}}const Mt=Bt((t=>class extends t{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this._requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){!1===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){!0===this._requestedToBeDisabled&&(this._requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(t){this.__isUserSettingDisabled=!1,this.disabled=t,this.__isUserSettingDisabled=!0}requestUpdate(t,e,i){super.requestUpdate(t,e,i),"disabled"===t&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),!1===this.disabled&&!0===this._requestedToBeDisabled&&this.__internalSetDisabled(!0))}}));Bt((t=>class extends(Mt(t)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),!1===this._requestedToBeDisabled&&null!=this.tabIndex&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),!0===this._requestedToBeDisabled&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(t){this.__isUserSettingTabIndex=!1,this.tabIndex=t,this.__isUserSettingTabIndex=!0}requestUpdate(t,e,i){super.requestUpdate(t,e,i),"disabled"===t&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),"tabIndex"===t&&(this.__isUserSettingTabIndex&&null!=this.tabIndex&&(this.__restoreTabIndexTo=this.tabIndex),-1!==this.tabIndex&&!0===this._requestedToBeDisabled&&this.__internalSetTabIndex(-1))}firstUpdated(t){super.firstUpdated(t),this.disabled&&this.__internalSetTabIndex(-1)}}));
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const{I:Lt}=tt,qt=t=>!Array.isArray(t)&&"object"==typeof t&&"template"in t;Bt((t=>class extends t{get slots(){return{}}constructor(){super(),this.__scopedRenderRoots=new Map,this.__slotsThatNeedRerender=new Set,this.__slotsProvidedByUserOnFirstConnected=new Set,this.__privateSlots=new Set}connectedCallback(){super.connectedCallback(),this._connectSlotMixin()}__rerenderSlot(t){const e=this.slots[t]();this.__renderTemplateInScopedContext({template:e.template,slotName:t,shouldRerender:!0}),e.afterRender?.()}updated(t){if(super.updated(t),this.__slotsThatNeedRerender.size)for(const t of Array.from(this.__slotsThatNeedRerender))this.__rerenderSlot(t);this.__isFirstSlotUpdate&&(this.__isFirstSlotUpdate=!1)}__renderTemplateInScopedContext({template:t,slotName:e,shouldRerender:i}){const n=!!ShadowRoot.prototype.createElement?this.shadowRoot:document;let s;this.__scopedRenderRoots.has(e)?s=this.__scopedRenderRoots.get(e):(s=n.createElement("div"),i&&(s.slot=e,this.appendChild(s)),this.__scopedRenderRoots.set(e,s));const{creationScope:o,host:r}=this.renderOptions;return it(t,s,{creationScope:o,host:r}),s}__appendNodesForOneTimeRender({nodes:t,renderParent:e=this,slotName:i}){for(const n of t){if(!(n instanceof Node))return;n instanceof Element&&i&&""!==i&&n.setAttribute("slot",i),e.appendChild(n)}}__initSlots(t){for(const n of t){if(this.__slotsProvidedByUserOnFirstConnected.has(n))continue;const t=this.slots[n]();if(void 0!==t)if(this.__isConnectedSlotMixin||this.__privateSlots.add(n),e=t,void 0===(i=void 0)?void 0!==(null==e?void 0:e._$litType$):(null==e?void 0:e._$litType$)===i){const e=this.__renderTemplateInScopedContext({template:t,slotName:n}),i=Array.from(e.childNodes);this.__appendNodesForOneTimeRender({nodes:i,renderParent:this,slotName:n})}else if(t instanceof Node){const e=[t];this.__appendNodesForOneTimeRender({nodes:e,renderParent:this,slotName:n})}else{if(!qt(t))throw new Error(`Slot "${n}" configured inside "get slots()" (in prototype) of ${this.constructor.name} may return these types: TemplateResult | Node | {template:TemplateResult, afterRender?:function} | undefined.\n            You provided: ${t}`);this.__slotsThatNeedRerender.add(n)}}var e,i}_connectSlotMixin(){if(this.__isConnectedSlotMixin)return;const t=Object.keys(this.slots);for(const e of t){(""===e?Array.from(this.children).find((t=>!t.hasAttribute("slot"))):Array.from(this.children).find((t=>t.slot===e)))&&this.__slotsProvidedByUserOnFirstConnected.add(e)}this.__initSlots(t),this.__isConnectedSlotMixin=!0}_isPrivateSlot(t){return this.__privateSlots.has(t)}}));function zt(t="google-chrome"){const e=window.chrome;if("chromium"===t)return e;const i=window.navigator,n=i.vendor,s=void 0!==window.opr,o=i.userAgent.indexOf("Edge")>-1,r=i.userAgent.match("CriOS");return"ios"===t?r:"google-chrome"===t?null!=e&&"Google Inc."===n&&!1===s&&!1===o:void 0}/Trident/.test(window.navigator.userAgent),zt(),zt("ios"),zt("chromium"),navigator.appVersion.indexOf("Mac");class jt extends ot{static get styles(){return[a`
        :host {
          display: block;
        }

        :host ::slotted([slot='content']) {
          overflow: hidden;
        }
      `]}static get properties(){return{opened:{type:Boolean,reflect:!0}}}render(){return B`
      <slot name="invoker"></slot>
      <slot name="content"></slot>
    `}constructor(){super(),this.opened=!1,this.toggle=this.toggle.bind(this)}connectedCallback(){super.connectedCallback();const t=function(t=""){return`${t.length>0?`${t}-`:""}${Math.random().toString(36).substr(2,10)}`}();this._invokerNode&&(this._invokerNode.addEventListener("click",this.toggle),this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this._invokerNode.setAttribute("id",`collapsible-invoker-${t}`),this._invokerNode.setAttribute("aria-controls",`collapsible-content-${t}`)),this._contentNode&&(this._contentNode.setAttribute("aria-labelledby",`collapsible-invoker-${t}`),this._contentNode.setAttribute("id",`collapsible-content-${t}`)),this.__setDefaultState()}updated(t){t.has("opened")&&this.__openedChanged()}disconnectedCallback(){super.disconnectedCallback(),this._invokerNode&&this._invokerNode.removeEventListener("click",this.toggle)}show(){this.opened||(this.opened=!0)}hide(){this.opened&&(this.opened=!1)}toggle(){this.opened=!this.opened,this.requestUpdate()}async _showAnimation(t){}async _hideAnimation(t){}get _invokerNode(){return Array.from(this.children).find((t=>"invoker"===t.slot))}get _contentNode(){return Array.from(this.children).find((t=>"content"===t.slot))}get _contentHeight(){return`${this._contentNode?.getBoundingClientRect().height||0}px`}__openedChanged(){this.__updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this.dispatchEvent(new CustomEvent("opened-changed"))}async __updateContentSize(){this._contentNode&&(this.opened?(this._contentNode.style.setProperty("display",""),await this._showAnimation({contentNode:this._contentNode})):(await this._hideAnimation({contentNode:this._contentNode}),this._contentNode.style.setProperty("display","none")))}__setDefaultState(){!this.opened&&this._contentNode&&this._contentNode.style.setProperty("display","none")}}const Wt=a`
  :host {
    display: block;
    height: 100%;
    --min-width: 72px;
    --max-width: 320px;
    --min-height: auto;
    --max-height: fit-content;
    --start-width: var(--min-width);
    --start-height: 100%;
    --transition-property: width;
  }

  :host([position='top']) {
    width: 100%;
    --min-width: 0px;
    --max-width: none;
    --min-height: 50px;
    --max-height: 200px;
    --start-width: 100%;
    --start-height: var(--min-height);
    --transition-property: height;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: var(--start-width);
    height: var(--start-height);
    min-width: var(--min-width);
    max-width: var(--max-width);
    min-height: var(--min-height);
    max-height: var(--max-height);
    overflow: hidden;
    box-sizing: border-box;
    transition: var(--transition-property) 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .headline-container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }

  :host([position='right']) .headline-container {
    flex-direction: row-reverse;
  }

  .content-container {
    overflow: hidden;
    flex-grow: 1;
  }

  ::slotted([slot='content']) {
    width: var(--max-width);
  }
`,Ft="transitionend",Vt="transitionstart";customElements.define("lion-drawer",class extends jt{static get properties(){return{transitioning:{type:Boolean,reflect:!0},opened:{type:Boolean,reflect:!0},position:{type:String,reflect:!0}}}constructor(){super(),this.__toggle=()=>{this.opened=!this.opened}}connectedCallback(){super.connectedCallback(),this.hasAttribute("position")||(this.position="left"),this._contentNode&&this._contentNode.style.setProperty("display",""),this.__setBoundaries()}updated(t){t.has("opened")&&this._openedChanged()}static get styles(){return[Wt]}__setBoundaries(){const t=this.shadowRoot?.host;"top"===this.position?(this.minHeight=t?getComputedStyle(t).getPropertyValue("--min-height"):"0px",this.maxHeight=t?getComputedStyle(t).getPropertyValue("--max-height"):"0px",this.minWidth="0px",this.maxWidth="none"):(this.minWidth=t?getComputedStyle(t).getPropertyValue("--min-width"):"0px",this.maxWidth=t?getComputedStyle(t).getPropertyValue("--max-width"):"0px",this.minHeight="auto",this.maxHeight="fit-content"),setTimeout((()=>{const t="top"===this.position?"width":"height";this.__contentNode&&this.__contentNode.style.setProperty(t,"")}))}set position(t){const e=this.position;this._position=t,this.setAttribute("position",t),this.__setBoundaries(),this.requestUpdate("position",e)}get position(){return this._position??"left"}async _showAnimation({contentNode:t}){const e="top"===this.position?this.minHeight:this.minWidth,i="top"===this.position?this.maxHeight:this.maxWidth,n="top"===this.position?"height":"width";t.style.setProperty(n,e),await new Promise((t=>requestAnimationFrame((()=>t(!0))))),t.style.setProperty(n,i),await this._waitForTransition({contentNode:t})}async _hideAnimation({contentNode:t}){if(("left"===this.position||"right"===this.position)&&this._contentWidth===this.minWidth||"top"===this.position&&this._contentHeight===this.minHeight)return;const e="top"===this.position?this.minHeight:this.minWidth,i="top"===this.position?"height":"width";t.style.setProperty(i,e),await this._waitForTransition({contentNode:t})}_waitForTransition({contentNode:t}){return new Promise((e=>{const i=()=>{t.removeEventListener(Vt,i),this.transitioning=!0};t.addEventListener(Vt,i);const n=()=>{t.removeEventListener(Ft,n),this.transitioning=!1,e()};t.addEventListener(Ft,n)}))}get __contentNode(){return this.shadowRoot?.querySelector(".container")}get _contentWidth(){return`${this.__contentNode?.getBoundingClientRect().width||0}px`}get _contentHeight(){return`${this.__contentNode?.getBoundingClientRect().height||0}px`}_openedChanged(){this._updateContentSize(),this._invokerNode&&this._invokerNode.setAttribute("aria-expanded",`${this.opened}`),this.dispatchEvent(new CustomEvent("opened-changed"))}async _updateContentSize(){this.__contentNode&&(this.opened?await this._showAnimation({contentNode:this.__contentNode}):await this._hideAnimation({contentNode:this.__contentNode}))}render(){return B`
      <div class="container">
        <div class="headline-container">
          <slot name="invoker"></slot>
          <slot name="headline"></slot>
        </div>
        <div class="content-container">
          <slot name="content"></slot>
        </div>
      </div>
    `}});window.customElements.define("vellum-doc",class extends ot{static get styles(){return a`
      :host {
        display: inline-block;
        width: 100%;
      }

      #sidebar {
        background-color: #efefef;
        position: fixed;
        left: 0;
        top: 0;
        --min-width: 0;
        --max-width: var(--sidebar-width, 15em);
        font-weight: bold;
        padding-top: 10em;
        padding-left: 2em;
        padding-right: 2em;
        font-size: 10px;
      }

      #sidebar h1 {
        text-align: center;
        font-size: 42px;
        line-height: 1em;
        margin-top: 1em;
        margin-bottom: 1em;
      }

      #sidebar a {
        outline: none;
        text-decoration: none;
      }

      #sidebar a:link {
        color: black;
      }

      #sidebar a:hover {
        color: black;
        text-decoration: underline;
      }

      #sidebar a:visited {
        color: black;
      }

      ul#index {
        padding-left: 0;
      }

      ul#index > li {
        font-variant-caps: small-caps;
        font-size: 2em;
        font-weight: bold;
      }

      ul#index > li ul {
        font-variant-caps: normal;
        font-weight: normal;
        margin-left: 1.8em;
        padding: 0;
        font-size: 18px;
      }

      ul#index li {
        margin: 6px 0;
      }

      ul#index,
      #index ul {
        list-style-type: none;
      }

      .toggle {
        position: fixed;
        top: 0;
        left: 0;
        font-size: 18px;
        color: black;
        padding: 1em;
        margin: 2.5em;
        background-color: lightgray;
        border-radius: 50%;
      }

      .toggle:hover {
        color: white;
      }

      #document {
        padding-top: 6em;
        padding-left: var(--sidebar-width, 5em);
      }
    `}static get properties(){return{depth:{type:Number}}}constructor(){super(),this.depth=3}render(){return B`
      <lion-drawer id="sidebar">
        <svg
          class="toggle"
          slot="invoker"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>

        <div slot="content">${this.renderIndex()}</div>
      </lion-drawer>

      <article id="document">
        <slot name="content"></slot>
      </article>
    `}renderIndex(){const t=e=>i=>{if(e>this.depth)return B``;const{heading:n}=i;return B`
        <li>
          <p><a href="#${n.id}">${n.textContent}</a></p>

          ${i.sections.length>0?B`<ul>
                ${i.sections.map(t(e+1))}
              </ul>`:B``}
        </li>
      `};return this.outline.sections.map((e=>{const{heading:i}=e;return B`
        <h1><a href="#${i.id}">${i.textContent}</a></h1>

        ${e.sections.length>0?B`<ul id="index">
              ${e.sections.map(t(0))}
            </ul>`:B``}
        <li></li>
      `}))}get contentElement(){return this.querySelector('*[slot="content"]')}get outline(){return It(this.contentElement)}});
//# sourceMappingURL=index.2ac78ed5.js.map
