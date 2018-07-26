var skim_advertiser_id = 342;

(function(){var API,build_post_request,config,encode_uri,g_detect,get_script,json_stringify,local_stringify,make_post_request,__hasProp={}.hasOwnProperty,__indexOf=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};
g_detect=function(){return function(){var a;a=navigator.userAgent.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||0>a.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:parseFloat(a[2])||0}}}(this)();
local_stringify=function(a){var b,c,d,e,f;if("object"===typeof a||a instanceof Array){e="";d=0;c=a instanceof Array;for(f in a)__hasProp.call(a,f)&&(b=a[f],0<d&&(e+=","),c?e+=json_stringify(b):(b=json_stringify(b),e+='"'+f+'":'+b),d++);return c?"["+e+"]":"{"+e+"}"}if("string"===typeof a)return b=a.replace(/"/g,'\\"',a),'"'+b+'"';if(isNaN(a))return"null";if("number"===typeof a)return a+""};
json_stringify=function(){return function(){var a;return"undefined"!==typeof JSON&&null!==JSON&&JSON.stringify&&'["la"]'===JSON.stringify(["la"])?(a=JSON.stringify,function(b){return a(b)}):local_stringify}}(this)();
get_script=function(a,b,c){var i;var d,e,f,g,h;null==c&&(c={});d=c.charset||null;h=c.target||null;i=null!=(e=c.async)?e:!0,c=i;e=null!=h&&h.document?h.document:document;f=e.getElementsByTagName("head")[0];g=e.createElement("script");g.type="text/javascript";if(d)g.charset=d;if(b)g.onload=g.onreadystatechange=function(a){return function(){var c;c=!1;return function(){var d;d=a.readyState;if(!c&&(!d||"complete"===d||"loaded"===d))return g.onload=g.onreadystatechange=null,c=!0,b.call(h),!0}}}(this)();
g.async=!1!==c;g.src=a;f.appendChild(g);return g};encode_uri=function(){return function(){var a,b;b=[function(){var b,d,e,f;e=[["%20","+"],["!","%21"],["'","%27"],["\\(","%28"],["\\)","%29"],["\\*","%2A"],["\\~","%7E"]];f=[];for(b=0,d=e.length;b<d;b++)a=e[b],f.push([RegExp(a[0],"g"),a[1]]);return f}()];return function(c){var d,e,c=encodeURIComponent(c);for(d=0,e=b.length;d<e;d++)a=b[d],c=c.replace(a[0],a[1]);return c}}}(this)();
build_post_request=function(a){var b,c;b=[];"undefined"!==typeof sl_xrf&&null!==sl_xrf&&(a.xrf=1);for(c in a)a.hasOwnProperty(c)&&b.push(""+c+"="+encode_uri(a[c]));return b.join("&")};
make_post_request=function(a,b,c){var d,e,f;if("msie"!==g_detect.browser)e=!1,f=new XMLHttpRequest,f.open("POST",a,!0),f.setRequestHeader("Content-type","application/x-www-form-urlencoded"),0<=__indexOf.call(f,"withCredentials")&&(f.withCredentials=!0),f.async="true",f.onreadystatechange=function(){var a;if(e)return!0;if(4===f.readyState){e=!0;if(200===f.status){a={};try{a=JSON.parse(f.responseText)}catch(b){try{a=eval("("+f.responseText+")")}catch(d){a={}}}c(a);return!0}return!1}},f.send(b);else if(window.XDomainRequest){if(d=
new XDomainRequest,0<=__indexOf.call(d,"withCredentials")&&(d.withCredentials=!0),d){d.open("POST",a,!0);d.onload=function(){var a;a={};if("undefined"!==typeof JSON&&null!==JSON&&JSON.parse)try{a=JSON.parse(d.responseText)}catch(b){a={}}else try{a=eval("("+d.responseText+")")}catch(e){a={}}c(a);return!0};d.onerror=function(){return!1};d.onprogress=function(){return!1};d.ontimeout=function(){return!1};d.async=!0;try{d.send(b)}catch(g){return!1}}}else return!1;return!0};
API={tracked:{page_impression:!1,sale:!1},autoDetectPollTimeout:null,autoDetectStartTimeout:null,__getSkimCookie:function(a,b){return get_script(a+"?callback="+b)},__allCallbacksAreDone:function(){for(var a in config.callbackStatuses)if(!config.callbackStatuses[a])return!1;return!0},__cookieCallbackRedirectingat:function(a){config.data.guid_redirectingat=a.guid||null;config.callbackStatuses.redirectingat=!0;if(skimTag.__allCallbacksAreDone())return skimTag.track()},__cookieCallbackSkimresources:function(a){config.data.guid_skimresources=
a.guid||null;config.callbackStatuses.skimresources=!0;if(skimTag.__allCallbacksAreDone())return skimTag.track()},__traverseRules:function(a,b){var c,d,e,f,g;d=b[0];f=b.slice(1);"object"===typeof d?"string"===typeof d.func?(eval(d.func),scoped_func&&(c=scoped_func.call(API,a,d.params))):c=d.func.call(API,a,d.params):c=a[d]||null;if(null===c)return null;if(0===f.length)return c;if(c.constructor===Array&&"events"!==d)for(d=0,g=c.length;d<g;d++){if(e=c[d],e=API.__traverseRules(e,f))return e}else return API.__traverseRules(c,
f);return null},__sumFields:function(a,b){var c,d,e,f;d=0;for(e=0,f=b.length;e<f;e++)c=b[e],a[c]&&(c=parseFloat(a[c]))&&(d+=c);return!d?null:d},__traverseRuleSets:function(a,b){var c,d,e,f;d=API.__copyMultiDimensional(b);for(e=0,f=d.length;e<f;e++)if(c=d[e],c=API.__traverseRules(a,c))return c;return null},__getLastMatchingFromList:function(a,b){var c,d,e,f,g,h,i,j,k,l,m;e=[];for(h=0,k=a.length;h<k;h++){c=d=a[h];for(i=0,l=b.length;i<l;i++){f=b[i];if(f.constructor===Array){for(j=0,m=f.length;j<m;j++)if(g=
f[j],!c[g]){c=null;break}c&&(c=c[f[0]])}else c=c[f]||null;if(!c)break}c&&e.push(d)}return!e.length?null:e[e.length-1]},__hashString:function(a){return a.split("").reduce(function(a,c){a=(a<<5)-a+c.charCodeAt(0);return a&a},0)},__copyMultiDimensional:function(a){return"object"!==typeof a?null:a.map(function(a){return a.slice()})},__hasProductData:function(a){for(var b in a)if(a[b])return!0;return!1},__handleProductField:function(a,b,c){return(b=API.__copyMultiDimensional(config.productParsingMap[b][c]))?
API.__traverseRuleSets(a,b):null},__buildProducts:function(a,b){var c,d,e,f;d=[];for(e=0,f=a.length;e<f;e++)c=a[e],c={name:API.__handleProductField(c,b,"titlePaths"),category:API.__handleProductField(c,b,"categoryPaths"),price:API.__handleProductField(c,b,"pricePaths"),currency:API.__handleProductField(c,b,"currencyPaths"),quantity:API.__handleProductField(c,b,"quantityPaths")},API.__hasProductData(c)&&d.push(c);return d},__handleEventField:function(a,b,c,d){return!config.data.event_data[b]&&c[d]&&
(config.data.event_data[b]=API.__traverseRuleSets(a,c[d]),config.data.event_data[b])?!0:!1},__isConversion:function(){return config.data.event_data.order_id||config.data.event_data.order_value||config.data.event_data.currency},__getTealiumProducts:function(a){var b,c,d,e,f,g,h,i,j,k,l;if(!a.product_id)return[];d=[];f=a.product_id;for(b=e=0,f=f.length;e<f;b=++e){c=null;if(null!=(null!=(g=a.product_unit_price)?g[b]:void 0))c=a.product_unit_price[b];else if(null!=(null!=(h=a.product_list_price)?h[b]:
void 0))c=null!=(i=a.product_list_price)?i[b]:void 0;c={name:(null!=(null!=(j=a.product_name)?j[b]:void 0)?a.product_name[b]:void 0)||null,category:(null!=(null!=(k=a.product_category)?k[b]:void 0)?a.product_category[b]:void 0)||null,quantity:(null!=(null!=(l=a.product_quantity)?l[b]:void 0)?a.product_quantity[b]:void 0)||null,price:c};for(b in c)c[b]&&c[b].constructor===Array&&c[b][0]&&(c[b]=c[b][0]);API.__hasProductData(c)&&d.push(c)}return d},__stripWww:function(){return function(){var a;a=/^www\./i;
return function(b){return b.replace(a,"")}}}(this)(),__getDomainFromUrl:function(a){var b;b=document.createElement("a");b.href=a;return API.__stripWww(b.hostname)},__setCookie:function(a,b,c){var d;d=new Date;d.setTime(d.getTime()+864E5*c);c="expires="+d.toUTCString();return document.cookie=a+"="+b+"; "+c+"; path=/"},__getCookie:function(a){var b,c,d,e;c=a+"=";b=document.cookie.split(";");for(d=0,e=b.length;d<e;d++){for(a=b[d];" "===a.charAt(0);)a=a.substring(1);if(0===a.indexOf(c))return a.substring(c.length,
a.length)}return null},__setReferrerCookie:function(a){return API.__setCookie("skimTagReferrer",a,30)},__getReferrerCookie:function(){return API.__getCookie("skimTagReferrer")},__getReferrer:function(){var a,b,c;if(a=window.document.referrer||null)if(c=API.__getDomainFromUrl(a),b=API.__getDomainFromUrl(config.data.page_url),c&&c!==b)return API.__setReferrerCookie(a.substr(0,400)),a;return API.__getReferrerCookie()},__parseOrderValueFromString:function(a){return a.replace(/[^0-9\.\,]/g,"")},__parseCurrencyFromString:function(a){return a.indexOf("$")?
"USD":a.indexOf("\u00a3")?"GBP":a.indexOf("\u20ac")?"EUR":a.indexOf("&pound;")?"GBP":a.indexOf("&euro;")?"EUR":a.toUpperCase().indexOf("GBP")?"GBP":a.toUpperCase().indexOf("EUR")?"EUR":a.toUpperCase().indexOf("USD")?"USD":null},__extractParamsFromUrl:function(a){var b,c,d,e;b=document.createElement("a");b.href=a;b=b.search;a={};"?"===b[0]&&(b=b.substring(1));b=b.replace("&amp;","&");e=b.split("&");for(c=0,d=e.length;c<d;c++)b=e[c],b=b.split("="),a[b[0]]=b[1]?b[1]:null;return a},__extractLinkshareData:function(a){a=
API.__extractParamsFromUrl(a);config.data.event_data.order_id=a.ord||null;config.data.event_data.currency=a.cur||null;if(a.amtlist)a=a.amtlist.split("|"),config.data.event_data.order_value=a.reduce(function(a,c){return parseFloat(a)/100+parseFloat(c)/100});if(config.data.event_data.order_id)return config.data.event_data.event_sources=["linkshare"]},__extractPricerunnerData:function(a){a=API.__extractParamsFromUrl(a);config.data.event_data.order_id=a.OID||null;config.data.event_data.currency=a.CURRENCY||
null;config.data.event_data.order_value=a.AMOUNT||null;if(config.data.event_data.order_id)return config.data.event_data.event_sources=["pricerunner"]},__checkAffiliatePixel:function(){var a,b,c;if(!document.querySelector)return!1;c=[];for(b in config.trackingPixels)(a=document.querySelector('img[src*="'+b+'"]'))&&("linkshare"===config.trackingPixels[b].type?c.push(API.__extractLinkshareData(a.src)):"pricerunner"===config.trackingPixels[b].type?c.push(API.__extractPricerunnerData(a.src)):c.push(void 0));
return c},__measurePerformance:function(){var a;if(null==("undefined"!==typeof performance&&null!==performance?performance.timing:void 0)||null==("undefined"!==typeof Date&&null!==Date?Date.now:void 0))return!1;a=performance.timing;config.data.response_start=a.responseStart||0;return config.data.interaction_start=a.domInteractive||0},autoDetect:function(){var a,b,c,d,e,f,g,h,i;config.data.event_data={event_sources:[],order_id:null,order_value:null,currency:null,products:[],event_type:null};config.data.scheme_version=
2;h=config.variableOrder;for(f=0,g=h.length;f<g;f++)if(e=h[f],b=config.parsingMap[e]||null){i=b.variableName;for(a=0,c=i.length;a<c&&!(d=i[a],d=window[d]||null);a++);if(d){a=!1;API.__handleEventField(d,"order_id",b,"orderIdPaths")&&(a=!0);API.__handleEventField(d,"order_value",b,"orderValuePaths")&&(a=!0);API.__handleEventField(d,"currency",b,"currencyPaths")&&(a=!0);if(!config.data.event_data.products.length&&b.productsPaths&&(c=API.__traverseRuleSets(d,b.productsPaths),config.productParsingMap[e]&&
c))config.data.event_data.products=API.__buildProducts(c,e),config.data.event_data.products.length&&(a=!0);if(!config.data.email_hash&&b.userEmailPaths)config.data.email_hash=API.__traverseRuleSets(d,b.userEmailPaths),config.data.email_hash&&(a=!0);a&&config.data.event_data.event_sources.push(e)}}API.__isConversion()||API.__checkAffiliatePixel();API.__isConversion()?config.data.event_data.event_type="sale":config.data.event_data={event_sources:config.data.event_sources,event_type:"page_impression"};
config.callbackStatuses.data=!0;API.__allCallbacksAreDone()&&API.track();return!1},pollForSale:function(){API.autoDetectPollTimeout&&clearTimeout(API.autoDetectPollTimeout);return API.autoDetectPollTimeout=setTimeout(API.autoDetect,1E3)},track:function(){var a;if(API.tracked[config.data.event_data.event_type])return"page_impression"===config.data.event_data.event_type&&config.data.event_data.event_sources!==["manual"]&&API.pollForSale(),!1;API.__measurePerformance();if(config.data.email_hash)config.data.email_hash=
API.__hashString(config.data.email_hash);a={data:json_stringify(config.data)};a=build_post_request(a);make_post_request(config.skimtagApiUrl,a,function(){});API.tracked[config.data.event_data.event_type]=!0;"page_impression"===config.data.event_data.event_type&&config.data.event_data.event_sources!==["manual"]&&API.pollForSale();return!1},__validTranslatedProduct:function(a){for(var b in a)if(!a[b])return!1;return!0},trackEvent:function(a){a.event_sources=["manual"];config.data.scheme_version=3;config.data.event_data=
a;API.autoDetectPollTimeout&&clearTimeout(API.autoDetectPollTimeout);API.autoDetectStartTimeout&&clearTimeout(API.autoDetectStartTimeout);config.callbackStatuses.data=!0;if(API.__allCallbacksAreDone())return API.track()},customParsing:function(a){var b,c,d;d=[];for(c in a)config.parsingMap[c]&&d.push(function(){var d;d=[];for(b in a[c])config.parsingMap[c][b]&&d.push(config.parsingMap[c][b]=a[c][b]);return d}());return d},init:function(){var a;if(window.skimTagInitialized)return!0;window.skimTagInitialized=
!0;window.skimCookieCallbackSkimresources=API.__cookieCallbackSkimresources;window.skimCookieCallbackRedirectingat=API.__cookieCallbackRedirectingat;if(null!=("undefined"!==typeof Date&&null!==Date?Date.now:void 0))config.data.skimtag_start=Date.now();window.skimtag_parsingmap&&API.customParsing(window.skimtag_parsingmap);API.__getSkimCookie(config.skimlinksApiUrl,"skimCookieCallbackSkimresources");API.__getSkimCookie(config.redirectApiUrl,"skimCookieCallbackRedirectingat");config.data.referrer=API.__getReferrer();
config.data.advertiser_id=window.skim_advertiser_id||null;config.data.timezone="function"===typeof(a=new Date).getTimezoneOffset?a.getTimezoneOffset():void 0;return null!=window.skimTagEvent?API.trackEvent(window.skimTagEvent):API.autoDetect()}};
config={skimtagApiUrl:"//t.skimresources.com/api/skimtag",skimlinksApiUrl:"//r.skimresources.com/api/",redirectApiUrl:"//r.redirectingat.com/api/",callbackStatuses:{skimresources:!1,redirectingat:!1,data:!1},variableOrder:["uni","gdl","awin","tealium","digitaldata"],productParsingMap:{uni:{titlePaths:[["product","name"]],pricePaths:[["product","unit_sale_price"],["product","unit_price"]],currencyPaths:[["product","currency"]],quantityPaths:[["quantity"]]},gdl:{titlePaths:[["name"]],pricePaths:[["price"]],
categoryPaths:[["category"]],quantityPaths:[["quantity"]]},tealium:{titlePaths:[["name"]],pricePaths:[["price"]],categoryPaths:[["category"]],quantityPaths:[["quantity"]]},digitaldata:{titlePaths:[["productInfo","productName"]],pricePaths:[["price"]],quantityPaths:[["quantity"]],currencyPaths:[["currency"]]}},parsingMap:{uni:{variableName:["universal_variable"],orderIdPaths:[["transaction","orderId"],["transaction","order_id"],["transaction","conversionID"]],orderValuePaths:[["transaction","total"],
["transaction","subtotal"]],currencyPaths:[["transaction","currency"]],userEmailPaths:[["user","email"]],productsPaths:[["transaction","line_items"]]},gdl:{variableName:["dataLayer","gtmData"],orderIdPaths:[[{func:API.__getLastMatchingFromList,params:["ecommerce","purchase"]},"ecommerce","purchase","actionField","id"],[{func:API.__getLastMatchingFromList,params:["ecommerce"]},"ecommerce","checkout","products","purchase","actionField","id"],[{func:API.__getLastMatchingFromList,params:["ecommerce"]},
"ecommerce","purchase","actionField","Order Number"],[{func:API.__getLastMatchingFromList,params:["TransactionID"]},"TransactionID"],[{func:API.__getLastMatchingFromList,params:["transactionId"]},"transactionId"],[{func:API.__getLastMatchingFromList,params:[["order number"]]},"order number"]],orderValuePaths:[[{func:API.__getLastMatchingFromList,params:["ecommerce","purchase"]},"ecommerce","purchase","actionField",{func:API.__sumFields,params:["revenue","tax","shipping"]}],[{func:API.__getLastMatchingFromList,
params:["ecommerce"]},"ecommerce","checkout","products","purchase","actionField",{func:API.__sumFields,params:["revenue","tax","shipping"]}],[{func:API.__getLastMatchingFromList,params:["ecommerce"]},"ecommerce","purchase","actionField","Total Revenue"],[{func:API.__getLastMatchingFromList,params:[["TransactionID","OrderValue"]]},"OrderValue"],[{func:API.__getLastMatchingFromList,params:[["transactionId","transactionTotal"]]},"transactionTotal"],[{func:API.__getLastMatchingFromList,params:[["order total"]]},
"order total"]],currencyPaths:[[{func:API.__getLastMatchingFromList,params:["ecommerce","currencyCode"]},"ecommerce","currencyCode"],[{func:API.__getLastMatchingFromList,params:["ecommerce","purchase"]},"ecommerce","purchase","actionField","currency"],[{func:API.__getLastMatchingFromList,params:["ecommerce"]},"ecommerce","checkout","products","currencyCode"],[{func:API.__getLastMatchingFromList,params:[["transactionId","transactionCurrency"]]},"transactionCurrency"],[{func:API.__getLastMatchingFromList,
params:[["transactionId","currency"]]},"currency"],[{func:API.__getLastMatchingFromList,params:[["transactionId","transactionCurrency"]]},"transactionCurrency"],[{func:API.__getLastMatchingFromList,params:[["transactionId","currencyCode"]]},"currencyCode"]],userEmailPaths:[["visitor","email"]],productsPaths:[[{func:API.__getLastMatchingFromList,params:["ecommerce","purchase"]},"ecommerce","purchase","products"],[{func:API.__getLastMatchingFromList,params:["ecommerce","checkout","products","purchase"]},
"ecommerce","checkout","products","purchase","products"],[{func:API.__getLastMatchingFromList,params:["transactionProducts"]},"transactionProducts"]]},awin:{variableName:["AWIN"],orderIdPaths:[["Tracking","Sale","orderRef"],["Sale","orderRef"]],orderValuePaths:[["Tracking","Sale","amount"],["Sale","amount"]],currencyPaths:[["Tracking","Sale","currency"],["Sale","currency"]]},tealium:{variableName:["utag_data"],orderIdPaths:[["order_id"]],orderValuePaths:[["order_total"]],currencyPaths:[["order_currency"]],
productsPaths:[[{func:API.__getTealiumProducts,params:null}]]},digitaldata:{variableName:["digitalData"],orderIdPaths:[["transaction","transactionID"]],orderValuePaths:[["transaction","total","transactionTotal"],["transaction","total","price"]],currencyPaths:[["transaction","total","currency"]],productsPaths:[["cart","item"]]}},trackingPixels:{"track.linksynergy.com":{type:"linkshare"},"emjcd.com":{type:"pricerunner"}},scrapers:null,data:{page_url:window.location.href||window.location||null,referrer:null,
email_hash:null,guid_skimresources:null,guid_redirectingat:null,advertiser_id:null,timezone:null,event_data:{event_sources:[],order_id:null,order_value:null,currency:null,products:[],event_type:null},raw_event_data:null,scheme_version:3,typ:"a",response_start:0,interaction_start:0,skimtag_start:0}};window.skimTag||(window.skimTag=API);skimTag.init();})();
