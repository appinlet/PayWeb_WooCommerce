(()=>{"use strict";const t=window.wp.htmlEntities,e=window.wp.i18n,n=window.wc.wcBlocksRegistry,a=window.wc.wcSettings;var i,l,o=function(){var t=(0,a.getSetting)("paygate_data",null);if(!t)throw new Error("Paygate initialization data is not available");return t},r=function(){var e;return(0,t.decodeEntities)((null===(e=o())||void 0===e?void 0:e.description)||"")},c=function(){var t,e;return React.createElement("img",{src:null===(t=o())||void 0===t?void 0:t.logo_url,alt:null===(e=o())||void 0===e?void 0:e.title})};(0,n.registerPaymentMethod)({name:"paygate",label:React.createElement(c,null),ariaLabel:(0,e.__)("Paygate","paygate"),canMakePayment:function(){return!0},content:React.createElement(r,null),edit:React.createElement(r,null),supports:{features:null!==(i=null===(l=o())||void 0===l?void 0:l.supports)&&void 0!==i?i:[]}})})();