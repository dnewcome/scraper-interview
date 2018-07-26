/*!
 Colorbox 1.5.14
 license: MIT
 http://www.jacklmoore.com/colorbox
 */
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(z+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){z=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),z=W.index(_.el),-1===z&&(W=W.add(_.el),z=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),L=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(L),D=T.height()+k.height()+b.outerHeight(!0)-b.height(),j=C.width()+H.width()+b.outerWidth(!0)-b.width(),A=L.outerHeight(!0),N=L.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-N-j,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-A-D,L.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),S=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),I=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),S),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(I).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-A-D:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-N-j:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-N-j,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-A-D,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){S.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=new Image,t(U).addClass(Z+"Photo").bind("error",function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;t.each(["alt","longdesc","aria-describedby"],function(e,i){var n=t(_.el).attr(i)||t(_.el).attr("data-"+i);n&&U.setAttribute(i,n)}),_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[z+1])&&(U.style.cursor="pointer",U.onclick=function(){J.next()}),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,L,M,S,F,I,R,K,P,B,O,_,D,j,A,N,z,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[z+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;if(e=e||{},t.isFunction(o))o=t("<a/>"),e.open=!0;else if(!o[0])return o;return o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-j+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-D+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-N-j-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-N-j,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-A-D-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-A-D,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+N+j,height:_.h+A+D,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+N+j+"px",x[0].style.height=_.h+A+D+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-N-j),t.innerWidth&&(_.w=a(t.innerWidth,"x")),L.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-A-D),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=L.scrollTop(),L.css({height:"auto"}),_.h=L.height()),L.css({height:_.h}),e&&L.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||L.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||L.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");L.remove(),L=n(se,"LoadedContent").append(i),L.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),S.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),L.show(),a>1?("string"==typeof _.get("current")&&I.html(_.get("current").replace("{current}",z+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>z?"show":"hide"]().html(_.get("next")),P[_.get("loop")||z?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=e.createElement("iframe"),"frameBorder"in n&&(n.frameBorder=0),"allowTransparency"in n&&(n.allowTransparency="true"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),name:(new Date).getTime(),"class":Z+"Iframe",allowFullScreen:!0}).one("load",o).appendTo(L),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[z+1])&&(z=h(1),f(W[z]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||z)&&(z=h(-1),f(W[z]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),L.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);

/*!
 * iCheck v0.9.1 jQuery plugin, http://git.io/uhUPMA
 */
(function(f){function C(a,c,d){var b=a[0],e=/er/.test(d)?k:/bl/.test(d)?u:j;active=d==E?{checked:b[j],disabled:b[u],indeterminate:"true"==a.attr(k)||"false"==a.attr(v)}:b[e];if(/^(ch|di|in)/.test(d)&&!active)p(a,e);else if(/^(un|en|de)/.test(d)&&active)w(a,e);else if(d==E)for(var e in active)active[e]?p(a,e,!0):w(a,e,!0);else if(!c||"toggle"==d){if(!c)a[r]("ifClicked");active?b[l]!==x&&w(a,e):p(a,e)}}function p(a,c,d){var b=a[0],e=a.parent(),g=c==j,H=c==k,m=H?v:g?I:"enabled",r=h(b,m+y(b[l])),L=h(b,
c+y(b[l]));if(!0!==b[c]){if(!d&&c==j&&b[l]==x&&b.name){var p=a.closest("form"),s='input[name="'+b.name+'"]',s=p.length?p.find(s):f(s);s.each(function(){this!==b&&f.data(this,n)&&w(f(this),c)})}H?(b[c]=!0,b[j]&&w(a,j,"force")):(d||(b[c]=!0),g&&b[k]&&w(a,k,!1));J(a,g,c,d)}b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"default");e[t](L||h(b,c));e[A](r||h(b,m)||"")}function w(a,c,d){var b=a[0],e=a.parent(),g=c==j,f=c==k,m=f?v:g?I:"enabled",n=h(b,m+y(b[l])),p=h(b,c+y(b[l]));if(!1!==b[c]){if(f||!d||"force"==d)b[c]=
!1;J(a,g,m,d)}!b[u]&&h(b,z,!0)&&e.find("."+F).css(z,"pointer");e[A](p||h(b,c)||"");e[t](n||h(b,m))}function K(a,c){if(f.data(a,n)){var d=f(a);d.parent().html(d.attr("style",f.data(a,n).s||"")[r](c||""));d.off(".i").unwrap();f(D+'[for="'+a.id+'"]').add(d.closest(D)).off(".i")}}function h(a,c,d){if(f.data(a,n))return f.data(a,n).o[c+(d?"":"Class")]}function y(a){return a.charAt(0).toUpperCase()+a.slice(1)}function J(a,c,d,b){if(!b){if(c)a[r]("ifToggled");a[r]("ifChanged")[r]("if"+y(d))}}var n="iCheck",
F=n+"-helper",x="radio",j="checked",I="un"+j,u="disabled",v="determinate",k="in"+v,E="update",l="type",t="addClass",A="removeClass",r="trigger",D="label",z="cursor",G=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini/i.test(navigator.userAgent);f.fn[n]=function(a,c){var d=":checkbox, :"+x,b=f(),e=function(a){a.each(function(){var a=f(this);b=a.is(d)?b.add(a):b.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),
e(this),b.each(function(){"destroy"==a?K(this,"ifDestroyed"):C(f(this),!0,a);f.isFunction(c)&&c()});if("object"==typeof a||!a){var g=f.extend({checkedClass:j,disabledClass:u,indeterminateClass:k,labelHover:!0},a),h=g.handle,m=g.hoverClass||"hover",y=g.focusClass||"focus",v=g.activeClass||"active",z=!!g.labelHover,s=g.labelHoverClass||"hover",B=(""+g.increaseArea).replace("%","")|0;if("checkbox"==h||h==x)d=":"+h;-50>B&&(B=-50);e(this);return b.each(function(){K(this);var a=f(this),b=this,c=b.id,d=
-B+"%",e=100+2*B+"%",e={position:"absolute",top:d,left:d,display:"block",width:e,height:e,margin:0,padding:0,background:"#fff",border:0,opacity:0},d=G?{position:"absolute",visibility:"hidden"}:B?e:{position:"absolute",opacity:0},h="checkbox"==b[l]?g.checkboxClass||"icheckbox":g.radioClass||"i"+x,k=f(D+'[for="'+c+'"]').add(a.closest(D)),q=a.wrap('<div class="'+h+'"/>')[r]("ifCreated").parent().append(g.insert),e=f('<ins class="'+F+'"/>').css(e).appendTo(q);a.data(n,{o:g,s:a.attr("style")}).css(d);
g.inheritClass&&q[t](b.className);g.inheritID&&c&&q.attr("id",n+"-"+c);"static"==q.css("position")&&q.css("position","relative");C(a,!0,E);if(k.length)k.on("click.i mouseenter.i mouseleave.i touchbegin.i touchend.i",function(c){var d=c[l],e=f(this);if(!b[u])if("click"==d?C(a,!1,!0):z&&(/ve|nd/.test(d)?(q[A](m),e[A](s)):(q[t](m),e[t](s))),G)c.stopPropagation();else return!1});a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i",function(c){var d=c[l];c=c.keyCode;if("click"==d)return!1;if("keydown"==
d&&32==c)return b[l]==x&&b[j]||(b[j]?w(a,j):p(a,j)),!1;if("keyup"==d&&b[l]==x)!b[j]&&p(a,j);else if(/us|ur/.test(d))q["blur"==d?A:t](y)});e.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i",function(d){var c=d[l],e=/wn|up/.test(c)?v:m;if(!b[u]){if("click"==c)C(a,!1,!0);else{if(/wn|er|in/.test(c))q[t](e);else q[A](e+" "+v);if(k.length&&z&&e==m)k[/ut|nd/.test(c)?A:t](s)}if(G)d.stopPropagation();else return!1}})})}return this}})(jQuery);

function addProduct(productCode, size, sectionURL, sessionID, count, callback, isPopup, addFromWishList){
    var data = $.param({
        colorSelect: productCode,
        sizeSelect: size,
        sectionURL: sectionURL,
        sessionID: sessionID,
        count: count,
        contextReferrer: document.referrer,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/AddItemToBag.jsp',
        data: data,
        success: function(data){

            if(typeof(isPopup) != 'undefined' && isPopup) {
                insertPageTrackForMultiItemQuickView(document.getElementById('urlForPageTrack').value, productCode, true);
            } else {
                insertPageTrack(null, true, productCode);
            }
            var obj = parseRtn(data);
            if (obj.success){
                incrementBagCount(count);

                if (typeof gaAddToCartActionWithAjax === 'function'){
                    gaAddToCartActionWithAjax('add',productCode,size,count);
                }
               
            }else{
                if(obj.reCAPTCHA) {
                    showReCAPTCHA();
                } else if(obj.reachedBagLimit){
                    var hideWishList = addFromWishList;
                    if(window.location.href.indexOf("WishList.jsp") > -1) {
                        hideWishList = true;
                    }
                    showBagLimitPopup(productCode, size, hideWishList);
                }
            }
            if (typeof callback === 'function' && obj.reachedBagLimit != true){
                callback(obj);
            }
        }
    });
    try {
        window.optimizely = window.optimizely || window.parent.optimizely || window.top.optimizely || [];
        window.optimizely.push(["trackEvent", "addtobag"]);
    } catch(e){}
}

function showBagLimitPopup(code, size, hideWishList){
    var data = $.param({
        code : code,
        size : size,
        hideWishList : hideWishList
    });
    $.modal({
        url: "/fw/dialog/ShoppingBagLimit.jsp?" + data,
        type: "small",
        open: null,
        cache: false,
        overlayClose: true,
        triggerOpen: true,
        onComplete : function () {}
    });
}

function showReCAPTCHA(){
    $.modal({
        url: "/fw/dialog/VerifyHuman.jsp",
        type: "small",
        open: null,
        cache: false,
        overlayClose: true,
        closeButton: false,
        triggerOpen: true,
        onClose : function(){
            if(window.rcProps && typeof window.rcProps.ReCAPTCHARestore =='function'){
                window.rcProps.ReCAPTCHARestore();
                window.rcProps.ReCAPTCHARestore = "";
            }
        }
    });
}

function removeProduct(productCode, size, count, callback, serial){
    var data = $.param({
        code: productCode,
        size: size,
        count: count,
        fw: true

    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/RemoveFromBag.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);

            if (typeof gaAddToCartActionWithAjax === 'function'){
                gaAddToCartActionWithAjax('remove',productCode,size,count);
            }

            if (typeof callback === 'function')
                callback(obj);
            else {
//                    decrementBagCount(count);
//                    updateMiniBag();
            }
        }
    });
}

function incrementBagCount(incrementAmount){
    var bagCountElement = $('#cart_item_count');
    var bagCount = parseInt(bagCountElement.text(), 10);
    if (!incrementAmount)
        incrementAmount = 1;
    bagCountElement.text(bagCount+incrementAmount);
}

function decrementBagCount(decrementAmount){
    var bagCountElement = $('#cart_item_count');
    var bagCount = parseInt(bagCountElement.text(), 10);
    if (!decrementAmount)
        decrementAmount = 1;
    bagCountElement.text(bagCount-decrementAmount);
}

function signInWithRecaptcha(email, pw, captcharesp, remember, successCallback, isCheckoutAction, saveForLater){
    var isCheckoutSignin = $('#checkout_signin_email').is(':visible');
    var emailVisible = isCheckoutSignin ? $('#checkout_signin_email') : $('#signin_email');
    var pwVisible = isCheckoutSignin ? $('#checkout_signin_pw') : $('#signin_pw');
    var errorMessageOutput = $('#login_error_message');
    var rememberVisible = isCheckoutSignin ? $('#checkout_remember_signin') : $('#remember_signin');
    var email = email ? email : emailVisible.val();
    var pw = pw ? pw : pwVisible.val();
    var remember = remember ? remember : rememberVisible.prop('checked');
    var data = $.param({
        email: email,
        pw: pw,
        g_recaptcha_response : captcharesp,
        karmir_luys : true,
        rememberMe: remember,
        isCheckout: isCheckoutAction,
        saveForLater: saveForLater,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignIn.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            pwVisible.removeClass('errortextbox');
            emailVisible.removeClass('errortextbox');
            if (obj.success){

                if(obj.msg0){
                    <!-- Convertro tracking function for login user-->
                    if (typeof convertroLogin === 'function'){
                        convertroLogin(obj.msg0);
                    }
                }

                if (typeof successCallback != 'function')
                    location.reload();
            } else {
                if (obj.msg0 && obj.msg0.length > 0){
                    emailVisible.addClass('errortextbox').val(obj.msg0).one('focus', function(){ $(this).removeClass('errortextbox').val(''); });
                    pwVisible.val('');
                }
                if (obj.msg1 && obj.msg1.length > 0){
                    var turnOffErrorBox = function(){$(this).removeClass('errortextbox');};
                    emailVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
                    pwVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
                    errorMessageOutput.html(obj.msg1).slideDown();
                    setTimeout(function(){ errorMessageOutput.slideUp(); }, 6000);
                    $.colorbox.resize();
                }
                // unverified captcha , error code 3
                if(obj.msg2 && obj.msg2.length > 0){
                    errorMessageOutput.html(obj.msg2).slideDown();
                    setTimeout(function(){ errorMessageOutput.slideUp(); }, 6000);
                    $.colorbox.resize();
                }
            }
            if (typeof successCallback === 'function')
                successCallback(obj);
        }
    });
}
function signIn(email, pw, remember, successCallback, isCheckoutAction, saveForLater){
    var isCheckoutSignin = $('#checkout_signin_email').is(':visible');
    var emailVisible = isCheckoutSignin ? $('#checkout_signin_email') : $('#signin_email');
    var pwVisible = isCheckoutSignin ? $('#checkout_signin_pw') : $('#signin_pw');
    var errorMessageOutput = $('#login_error_message');
    var rememberVisible = isCheckoutSignin ? $('#checkout_remember_signin') : $('#remember_signin');

    var email = email ? email : emailVisible.val();
    var pw = pw ? pw : pwVisible.val();
    var remember = remember ? remember : rememberVisible.prop('checked');
    var data = $.param({
        email: email,
        pw: pw,
        rememberMe: remember,
        isCheckout: isCheckoutAction,
        saveForLater: saveForLater,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignIn.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            pwVisible.removeClass('errortextbox');
            emailVisible.removeClass('errortextbox');
            if (obj.success){

                if(obj.msg0){
                    <!-- Convertro tracking function for login user-->
                    if (typeof convertroLogin === 'function'){
                        convertroLogin(obj.msg0);
                    }
                }

                if (typeof successCallback != 'function')
                    location.reload();
            } else {
                if (obj.msg0 && obj.msg0.length > 0){
                    emailVisible.addClass('errortextbox').val(obj.msg0).one('focus', function(){ $(this).removeClass('errortextbox').val(''); });
                    pwVisible.val('');
                }
                if (obj.msg1 && obj.msg1.length > 0){
                    var turnOffErrorBox = function(){$(this).removeClass('errortextbox');};
                    emailVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
                    pwVisible.addClass('errortextbox').one('focus', turnOffErrorBox);
                    errorMessageOutput.html(obj.msg1).slideDown();
                    setTimeout(function(){ errorMessageOutput.slideUp(); }, 6000);
                    $.colorbox.resize();
                }
            }
            if (typeof successCallback === 'function')
                successCallback(obj);
        }
    });
}


function signOut(){
    try {
        if(typeof(cordial) != 'undefined' && cordial != null) {
            cordial.forget();
        }
    } catch(e) {
        console.log(e);
    }
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SignOut.jsp?fw=true',
        success: function(data){
            var obj = parseRtn(data);
            if (obj.success){
                location.reload();
            } else {
                alert ("Error logging out");
            }
        }
    });
}

function createAccountWithRecaptcha(email, pw, verify,captcharesp, saveCurrent, callback, subscribe, isFemale, saveForLater){
    if (typeof email === 'undefined')
        email = $('#create_acct_email').val();
    if (typeof pw === 'undefined')
        pw = $('#create_acct_pw').val();
    if (typeof verify === 'undefined')
        verify = $('#create_acct_pw_verify').val();
    if (typeof subscribe === 'undefined')
        subscribe = false;
    if (typeof isFemale === 'undefined')
        isFemale = true;

    var data = $.param({
        email: email,
        pw: pw,
        verifypw: verify,
        g_recaptcha_response : captcharesp,
        karmir_luys : true,
        saveCurrent: saveCurrent,
        subscribe: subscribe,
        isFemale: isFemale,
        saveForLater: saveForLater,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/CreateAccount.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);

            if (typeof callback === 'function')
                callback(obj);
            else {
                $('#create_acct_pw, #create_acct_pw_verify').val('');
                if (obj.success){
                    $.colorbox({
                        href:'dialog/Welcome.jsp',
                        onLoad: closeSignInCreate
                    });
                    if(obj.msg0){
                        if (typeof convertroNewAccount === 'function')
                            convertroNewAccount(obj.msg0);
                    }
                } else{
                    var outputLocation = $('#create_account_error_message');
                    switch(obj.code){
                        case 1:
                            outputLocation = $('#create_acct_email');
                            outputLocation.addClass('errortextbox');
                            break;
                        case 3:
                            $('#create_acct_pw, #create_acct_pw_verify').addClass('errortextbox');
                            break;
                        case 2:
                        case 4:
                            $('#create_acct_pw').addClass('errortextbox');
                            break;
                    }
                    outputLocation.html(obj.msg0);
                }
            }
        }
    });
}

function createAccount(email, pw, verify, saveCurrent, callback, subscribe, isFemale, saveForLater){
    if (typeof email === 'undefined')
        email = $('#create_acct_email').val();
    if (typeof pw === 'undefined')
        pw = $('#create_acct_pw').val();
    if (typeof verify === 'undefined')
        verify = $('#create_acct_pw_verify').val();
    if (typeof subscribe === 'undefined')
        subscribe = false;
    if (typeof isFemale === 'undefined')
        isFemale = true;

    var data = $.param({
        email: email,
        pw: pw,
        verifypw: verify,
        saveCurrent: saveCurrent,
        subscribe: subscribe,
        isFemale: isFemale,
        saveForLater: saveForLater,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/CreateAccount.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);

            if (typeof callback === 'function')
                callback(obj);
            else {
                $('#create_acct_pw, #create_acct_pw_verify').val('');
                if (obj.success){
                    $.colorbox({
                        href:'dialog/Welcome.jsp',
                        onLoad: closeSignInCreate
                    });
                    if(obj.msg0){
                        if (typeof convertroNewAccount === 'function')
                            convertroNewAccount(obj.msg0);
                    }
                } else{
                    var outputLocation = $('#create_account_error_message');
                    switch(obj.code){
                        case 1:
                            outputLocation = $('#create_acct_email');
                            outputLocation.addClass('errortextbox');
                            break;
                        case 3:
                            $('#create_acct_pw, #create_acct_pw_verify').addClass('errortextbox');
                            break;
                        case 2:
                        case 4:
                            $('#create_acct_pw').addClass('errortextbox');
                            break;
                    }
                    outputLocation.html(obj.msg0);
                }
            }
        }
    });
}

function sendPassword(param, callback){
    if ($('#login_lostpw_email').val().length == 0) {
        $('#login_lostpw_email').addClass('errortextbox');
        return;
    }
    var data = 'email=' + $('#login_lostpw_email').val();
    $.ajax({
        type: 'POST',
		// DOES NOT EXIST
        url: '/fw/ajax/EmailPassword.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);

            if (typeof callback !== 'undefined'){
                callback(obj);
            } else {
                if (obj.success){
                    if (param==null){
                        $.colorbox({
                            href: 'dialog/PasswordSent.jsp'
                        });
                    }
					// DOES NOT EXIST
                    // else if (param == 2) {
                    //     $.colorbox({
                    //         href: 'dialog/PasswordSentCheckout.jsp'
                    //     });
                    // }
                    else {
                        $.colorbox({
                            href: 'dialog/PasswordSent2.jsp'
                        });
                    }
                } else {
                    $('#login_lostpw_email').addClass('errortextbox').val(obj.msg0);
                }
            }
        }
    });
}

function sendPasswordCustomerCare(input, param, callback) {
	var email = input.val();
	if (email.length == 0) {
		input.addClass('errortextbox');
		return;
	}
	var data = $.param({
		email: email,
		fw: true
	});
	$.ajax({
		type: 'POST',
		url: '/r/ajax/EmailPassword.jsp',
		data: data,
		success: function(data){
			var obj = parseRtn(data);

			if (typeof callback !== 'undefined'){
				callback(obj);
			} else {
				if (obj.success){
					if (param==null){
						$.colorbox({
							href: '/fw/dialog/PasswordSent.jsp'
						});
					}
					// DOES NOT EXIST
					// else if (param == 2) {
					// 	$.colorbox({
					// 		href: '/r/dialog/PasswordSentCheckout.jsp'
					// 	});
					// }
					else {
						// DOES NOT EXIST
						$.colorbox({
							href: '/fw/dialog/PasswordSent2.jsp'
						});
					}
				} else {
					input.addClass('errortextbox').val(obj.msg0);
				}
			}
		}
	});
}

function setCurrency(currencySymbol){
    var data = 'currency=' + currencySymbol;
    $.ajax({
        type: 'POST',
        url: '/r/ajax/UpdateCountryPreferences.jsp',
        data: data,
        success: function(data){
            var obj = data;
            if (obj.success){
                location.reload();
            }
        }
    });
}

function setLanguage(language){
    var data = 'language=' + language;
    $.ajax({
        type: 'POST',
        url: '/r/ajax/UpdateCountryPreferences.jsp',
        data: data,
        success: function(data){
            var obj = data;
            if (obj.success){
                location.reload();
            }
        }
    });
}

function closeLightBox(){
    $.colorbox.close();
}

function backToSign(action) {
    if (action === 'closePopup') {
        $.colorbox.close();
    } else if (action == 'backToLogin') {
        window.location.href = "/fw/Login.jsp";
    }

}

function isLightBoxOpen(){
    return $("#colorbox").css("display")=="block";
}

/*    Live Chat    */
var __lc = {};

function liveChatIsChinese(lang) {
    return lang == 'zh' || lang == 'ch';
}

function liveChat(elem){
    if (!liveChatIsChinese(elem)) {
        __lc.license = 2506231;
    } else {
        __lc.license = 7020571;		// China/Taiwan LiveChat
    }
    liveChatCheck(elem);
}

function liveChatLoad() {

    (function() {
        var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = true;
        lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.livechatinc.com/tracking.js';
        lc.onload = function() {
            //var LC_API = LC_API || {};
            LC_API.on_before_load = function()
            {
                LC_API.hide_chat_window();
            };
            LC_API.on_chat_window_minimized = function()
            {
                LC_API.hide_chat_window();
            }
        };
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
    })();
}

function liveChatGroupSetZH(lang) {
    if (liveChatIsChinese(lang)) {
        __lc.group = 1;		// chinese
    } else{
        __lc.group = 1;		// chinese (default)
    }
}

function liveChatDefaultEnglish() {
    __lc.group = 2;		// DEFAULT TO ENGLISH
}

function liveChatGroupSet(lang) {

    // TODO: See InternationalUtils.java
    var LiveChatKO = true;//$("#live-chat-ko").data('live-chat-ko');
    var LiveChatJA = true;//$("#live-chat-ja").data('live-chat-ja');

    if (lang == 'ko' && LiveChatKO) {
        __lc.group = 4;		// korean
    }else if (lang == 'ja' && LiveChatJA) {
        __lc.group = 7;		// japanese
    } else {
        __lc.group = 2;		// english (default)
    }
}

function liveChatCheckZH(lang) {
    $.getJSON("/r/ajax/CheckLiveChat.jsp?lang="+lang, function(data) {
        if (data.zh == 'offline' && lang == 'zh') {
            liveChatGroupSetZH(lang);
        } else if (data.ch == 'offline' && lang == 'ch') {
            liveChatGroupSetZH(lang);
        } else {
            liveChatGroupSetZH(lang);
        }
        liveChatLoad();
    });
}

// NOTE: liveChat API must be called regardless of agent online/offline status for tracking purposes
function liveChatCheck(lang) {
    if (liveChatIsChinese(lang)) {
        liveChatCheckZH(lang);
    } else {
        // TODO: See InternationalUtils.java
        var LiveChatKO = true;//$("#live-chat-ko").data('live-chat-ko');
        var LiveChatJA = true;//$("#live-chat-ja").data('live-chat-ja');
        if ((lang == 'ja' && LiveChatJA) ||
            (lang == 'ko' && LiveChatKO)) {
            $.getJSON("/r/ajax/CheckLiveChat.jsp", function(data) {
                if ((data.ko == 'offline' && lang == 'ko' && LiveChatKO)) {
                    liveChatDefaultEnglish();
                } else if ((data.ja == 'offline' && lang == 'ja' && LiveChatJA)) {
                    liveChatDefaultEnglish();
                } else {
                    liveChatGroupSet(lang);
                }
                liveChatLoad();
            });
        } else {
            liveChatDefaultEnglish();
            liveChatLoad();
        }
    }
}

function openLiveHelp() {
    LC_API.open_chat_window();
}

function applyPromo(promo, callback){
    var data = $.param({
        promo: promo,
		scope: $('#employee-checkout').data('scope'),
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/ApplyPromoCode.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (typeof callback === 'function')
                callback(obj);
        }
    });
}

function applyGiftCertificate(giftCode, callback){
    var data = $.param({
        code: giftCode,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/ApplyGiftCode.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (typeof callback === 'function')
                callback(obj);
            else if (obj.success){
                location.reload();
            }
        }
    });
}

function applyCredit(credit, callback){
    var data = $.param({
        storeCredit: credit,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/ApplyStoreCredit.jsp',
        data: data,
        success: function(data){
            var obj = parseRtn(data);
            if (typeof callback === 'function')
                callback(obj);
            else if (obj.success){
                location.reload();
            }
        }
    });
}

function saveAndSetShippingAddress(name, street, street2, city, state, zip, telephone, country, callback, changeShipping, id, email, internationalID){
    var data = $.param({
        name: name,
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip: zip,
        country: country,
        telephone: telephone,
        ship: changeShipping,
        id: id,
        email: email,
        internationalID: internationalID,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SaveAndSetShippingAddress.jsp',
        data: data,
        success: function(data){
        var obj = parseRtn(data);
        if (typeof callback === 'function')
            callback(obj);
        }
    });
}

function submitPayPal(form, button, cancelPath, returnPath) {
	form.action='/fw/expresscheckout.jsp?&pathcancel=' + cancelPath + '&pathreturn=' + returnPath;
	form.submit();
	var intervalID = showButtonWorking(button, 'SIGNING IN TO PAYPAL');
}

function saveAndSetBillingOption(paymentType, number, code, expMonth, expYear, name, street, street2, city, state, zip, country, telephone, callback, id){
    var data = $.param({
        id: id,
		paymentType: paymentType,
        number: number,
        code: code,
        expMonth: expMonth,
        expYear: expYear,
        useShip: false,
        name: name,
        street: street,
        street2: street2,
        city: city,
        state: state,
        zip: zip,
        country: country,
        telephone: telephone,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/SavePaymentOptions.jsp',
        data: data,
        success: function(rtn){
            var obj = parseRtn(rtn);
            if (typeof callback === 'function')
                callback(obj);
        }
    });
}

function checkPaymentType(number, callback){
    var data = $.param({
        number: number,
        fw: true
    });
    $.ajax({
        type: 'POST',
        url: '/r/ajax/CheckValidCard.jsp',
        data: data,
        success: function(rtn){
            var obj = parseRtn(rtn);
            if (typeof callback === 'function')
                callback(obj);
        }
    });
}




/*
* jQuery Cycle2; v20130801
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
(function(e){"use strict";function t(e){return(e||"").toLowerCase()}var i="20130725";e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each(function(){var n,s,o,c,r=e(this),l=e.fn.cycle.log;if(!r.data("cycle.opts")){(r.data("cycle-log")===!1||i&&i.log===!1||s&&s.log===!1)&&(l=e.noop),l("--c2 init--"),n=r.data();for(var a in n)n.hasOwnProperty(a)&&/^cycle[A-Z]+/.test(a)&&(c=n[a],o=a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),l(o+":",c,"("+typeof c+")"),n[o]=c);s=e.extend({},e.fn.cycle.defaults,n,i||{}),s.timeoutId=0,s.paused=s.paused||!1,s.container=r,s._maxZ=s.maxZ,s.API=e.extend({_container:r},e.fn.cycle.API),s.API.log=l,s.API.trigger=function(e,t){return s.container.trigger(e,t),s.API},r.data("cycle.opts",s),r.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}}):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(n.s,n.c).cycle(i)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort(function(){return Math.random()-.5}),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css("opacity",1).show(),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(i.pauseOnHover!==!0&&(n=e(i.pauseOnHover)),n.hover(function(){i.API.pause(!0)},function(){i.API.resume(!0)})),i.timeout&&(t=i.API.getSlideOpts(i.nextSlide),i.API.queueTransition(t,t.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),s=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,s||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(0>i._remainingTimeout||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,s=this.opts(),o=s.slideCount,c=!1;"string"==e.type(t)&&(t=e.trim(t)),e(t).each(function(){var t,n=e(this);i?s.container.prepend(n):s.container.append(n),s.slideCount++,t=s.API.buildSlideOpts(n),s.slides=i?e(n).add(s.slides):s.slides.add(n),s.API.initSlide(t,n,--s._maxZ),n.data("cycle.opts",t),s.API.trigger("cycle-slide-added",[s,t,n])}),s.API.updateView(!0),c=s._preInitialized&&2>o&&s.slideCount>=1,c&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();e=parseInt(t.startingSlide||0,10),(e>=t.slides.length||0>e)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,0>t.nextSlide&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=0>t.nextSlide-1,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,s=t;return i&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,s,o,c,r=this.opts();return 2>r.slideCount?(r.timeoutId=0,void 0):(!e||r.busy&&!r.manualTrump||(r.API.stopTransition(),r.busy=!1,clearTimeout(r.timeoutId),r.timeoutId=0),r.busy||(0!==r.timeoutId||e)&&(n=r.slides[r.currSlide],s=r.slides[r.nextSlide],o=r.API.getSlideOpts(r.nextSlide),c=r.API.calcTx(o,e),r._tx=c,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),r.nextSlide!=r.currSlide&&(e||!r.paused&&!r.hoverPaused&&r.timeout)?(r.API.trigger("cycle-before",[o,n,s,t]),c.before&&c.before(o,n,s,t),i=function(){r.busy=!1,r.container.data("cycle.opts")&&(c.after&&c.after(o,n,s,t),r.API.trigger("cycle-after",[o,n,s,t]),r.API.queueTransition(o),r.API.updateView(!0))},r.busy=!0,c.transition?c.transition(o,n,s,t,i):r.API.doTransition(o,n,s,t,i),r.API.calcNextSlide(),r.API.updateView()):r.API.queueTransition(o)),void 0)},doTransition:function(t,i,n,s,o){var c=t,r=e(i),l=e(n),a=function(){l.animate(c.animIn||{opacity:1},c.speed,c.easeIn||c.easing,o)};l.css(c.cssBefore||{}),r.animate(c.animOut||{},c.speed,c.easeOut||c.easing,function(){r.css(c.cssAfter||{}),c.sync||a()}),c.sync&&a()},queueTransition:function(t,i){var n=this.opts(),s=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0===--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout(function(){n.API.trigger("cycle-finished",[n])},s):n.API.trigger("cycle-finished",[n]),n.nextSlide=n.currSlide,void 0):(s&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout(function(){n.API.prepareTx(!1,!n.reverse)},s))),void 0)},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,0>t.nextSlide?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,s,o=this.opts(),c=i.data()||{};for(var r in c)c.hasOwnProperty(r)&&/^cycle[A-Z]+/.test(r)&&(n=c[r],s=r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),c[s]=n);c=e.extend({},e.fn.cycle.defaults,o,c),c.slideNum=o.slideCount;try{delete c.API,delete c.slideCount,delete c.currSlide,delete c.nextSlide,delete c.slides}catch(l){}return c},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],s=e(n).data("cycle.opts");return e.extend({},i,s)},initSlide:function(t,i,n){var s=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(s.slideClass)},updateView:function(e){var t=this.opts();if(t._initialized){var i=t.API.getSlideOpts(),n=t.slides[t.currSlide];!e&&(t.API.trigger("cycle-update-view-before",[t,i,n]),0>t.updateView)||(t.slideActiveClass&&t.slides.removeClass(t.slideActiveClass).eq(t.currSlide).addClass(t.slideActiveClass),e&&t.hideNonActive&&t.slides.filter(":not(."+t.slideActiveClass+")").hide(),t.API.trigger("cycle-update-view",[t,i,n,e]),t.API.trigger("cycle-update-view-after",[t,i,n]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var s=this.opts();t||(t=s.slides[s.currSlide],i=s.slides[s.nextSlide],n=!s.reverse),e(t).css("zIndex",s.maxZ);var o,c=s.maxZ-2,r=s.slideCount;if(n){for(o=s.currSlide+1;r>o;o++)e(s.slides[o]).css("zIndex",c--);for(o=0;s.currSlide>o;o++)e(s.slides[o]).css("zIndex",c--)}else{for(o=s.currSlide-1;o>=0;o--)e(s.slides[o]).css("zIndex",c--);for(o=r-1;o>s.currSlide;o--)e(s.slides[o]).css("zIndex",c--)}e(i).css("zIndex",s.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: "+i},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,display:"block"}}},fade:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:0,display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:1,display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:-1},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})})(jQuery),function(e){"use strict";function t(t,n){var s,o,c,r=n.autoHeight;if("container"==r)o=e(n.slides[n.currSlide]).outerHeight(),n.container.height(o);else if(n._autoHeightRatio)n.container.height(n.container.width()/n._autoHeightRatio);else if("calc"===r||"number"==e.type(r)&&r>=0){if(c="calc"===r?i(t,n):r>=n.slides.length?0:r,c==n._sentinelIndex)return;n._sentinelIndex=c,n._sentinel&&n._sentinel.remove(),s=e(n.slides[c].cloneNode(!0)),s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),s.css({position:"static",visibility:"hidden",display:"block"}).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),s.find("*").css("visibility","hidden"),n._sentinel=s}}function i(t,i){var n=0,s=-1;return i.slides.each(function(t){var i=e(this).height();i>s&&(s=i,n=t)}),n}function n(t,i,n,s){var o=e(s).outerHeight(),c=i.sync?i.speed/2:i.speed;i.container.animate({height:o},c)}function s(i,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",t),o.container.off("cycle-destroyed",s),o.container.off("cycle-before",n),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0}),e(document).on("cycle-initialized",function(i,o){function c(){t(i,o)}var r,l=o.autoHeight,a=e.type(l),d=null;("string"===a||"number"===a)&&(o.container.on("cycle-slide-added cycle-slide-removed",t),o.container.on("cycle-destroyed",s),"container"==l?o.container.on("cycle-before",n):"string"===a&&/\d+\:\d+/.test(l)&&(r=l.match(/(\d+)\:(\d+)/),r=r[1]/r[2],o._autoHeightRatio=r),"number"!==a&&(o._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(c,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(c,30))})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(t,i,n,s){"caption"===i.captionModule&&e.each(["caption","overlay"],function(){var e=this,t=n[e+"Template"],o=i.API.getComponent(e);o.length&&t?(o.html(i.API.tmpl(t,n,i,s)),o.show()):o.hide()})}),e(document).on("cycle-destroyed",function(t,i){var n;e.each(["caption","overlay"],function(){var e=this,t=i[e+"Template"];i[e]&&t&&(n=i.API.getComponent("caption"),n.empty())})})}(jQuery),function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,s,o,c=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each(function(){var r;return n=i,o=e(this).data("cycle.opts"),void 0===o?(t.log('slideshow must be initialized before sending commands; "'+n+'" ignored'),void 0):(n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?(r=e.makeArray(c),r.shift(),s.apply(o.API,r)):(t.log("unknown command: ",n),void 0))}):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;e.allowWrap===!1&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;e.allowWrap===!1&&0>e.currSlide+t||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),i=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),i(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each(function(){e(this).removeData(),i(this,"parsedAttrs",!1)})},jump:function(e){var t,i=this.opts();if(!i.busy||i.manualTrump){var n=parseInt(e,10);if(isNaN(n)||0>n||n>=i.slides.length)return i.API.log("goto: invalid slide index: "+n),void 0;if(n==i.currSlide)return i.API.log("goto: skipping, already on slide",n),void 0;i.nextSlide=n,clearTimeout(i.timeoutId),i.timeoutId=0,i.API.log("goto: ",n," (zero-index)"),t=i.currSlide<i.nextSlide,i.API.prepareTx(!0,t)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(t.pauseOnHover!==!0&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,s=this.opts(),o=[],c=1,r=0;s.slides.length>r;r++)i=s.slides[r],r==t?n=i:(o.push(i),e(i).data("cycle.opts").slideNum=c,c++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),t==s.currSlide?s.API.advanceSlide(1):s.currSlide>t?s.currSlide--:s.currSlide++,s.API.trigger("cycle-slide-removed",[s,t,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),s=i.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,i.data("cycle-arg"))})}(jQuery),function(e){"use strict";function t(t,i){var n;return t._hashFence?(t._hashFence=!1,void 0):(n=window.location.hash.substring(1),t.slides.each(function(s){return e(this).data("cycle-hash")==n?(i===!0?t.startingSlide=s:(t.nextSlide=s,t.API.prepareTx(!0,!1)),!1):void 0}),void 0)}e(document).on("cycle-pre-initialize",function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)}),e(document).on("cycle-update-view",function(e,t,i){i.hash&&"#"+i.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=i.hash)}),e(document).on("cycle-destroyed",function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(t,i){function n(t,n){function o(t){var o;"wait"==i.loader?(r.push(t),0===a&&(r.sort(c),s.apply(i.API,[r,n]),i.container.removeClass("cycle-loading"))):(o=e(i.slides[i.currSlide]),s.apply(i.API,[t,n]),o.show(),i.container.removeClass("cycle-loading"))}function c(e,t){return e.data("index")-t.data("index")}var r=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var l=0;t.length>l;l++)t[l]=e(t[l])[0];t=e(t);var a=t.length;a&&(t.hide().appendTo("body").each(function(t){function c(){0===--l&&(--a,o(d))}var l=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",t),u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),u.length?(l=u.length,u.each(function(){this.complete?c():e(this).load(function(){c()}).error(function(){0===--l&&(i.API.log("slide skipped; img not loaded:",this.src),0===--a&&"wait"==i.loader&&s.apply(i.API,[r,n]))})}),void 0):(--a,r.push(d),void 0)}),a&&i.container.addClass("cycle-loading"))}var s;i.loader&&(s=i.API.add,i.API.add=n)})}(jQuery),function(e){"use strict";function t(t,i,n){var s,o=t.API.getComponent("pager");o.each(function(){var o=e(this);if(i.pagerTemplate){var c=t.API.tmpl(i.pagerTemplate,i,t,n[0]);s=e(c).appendTo(o)}else s=o.children().eq(t.slideCount-1);s.on(t.pagerEvent,function(e){e.preventDefault(),t.API.page(o,e.currentTarget)})})}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),s=n,o=s>i.currSlide;i.currSlide!=s&&(i.nextSlide=s,i.API.prepareTx(!0,o),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,i,n){n.buildPagerLink=t}),e(document).on("cycle-slide-added",function(e,t,n,s){t.pager&&(t.API.buildPagerLink(t,n,s),t.API.page=i)}),e(document).on("cycle-slide-removed",function(t,i,n){if(i.pager){var s=i.API.getComponent("pager");s.each(function(){var t=e(this);e(t.children()[n]).remove()})}}),e(document).on("cycle-update-view",function(t,i){var n;i.pager&&(n=i.API.getComponent("pager"),n.each(function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))}),e(document).on("cycle-destroyed",function(e,t){var i=t.API.getComponent("pager");i&&(i.children().off(t.pagerEvent),t.pagerTemplate&&i.empty())})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,t){if(t.API.getComponent("next").on(t.nextEvent,function(e){e.preventDefault(),t.API.next()}),t.API.getComponent("prev").on(t.prevEvent,function(e){e.preventDefault(),t.API.prev()}),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,function(){t.API.next()}),t.container.on(n,function(){t.API.prev()})}}),e(document).on("cycle-update-view",function(e,t){if(!t.allowWrap){var i=t.disabledClass,n=t.API.getComponent("next"),s=t.API.getComponent("prev"),o=t._prevBoundry||0,c=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==c?n.addClass(i).prop("disabled",!0):n.removeClass(i).prop("disabled",!1),t.currSlide===o?s.addClass(i).prop("disabled",!0):s.removeClass(i).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(t,i){if(i.progressive){var n,s,o=i.API,c=o.next,r=o.prev,l=o.prepareTx,a=e.type(i.progressive);if("array"==a)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==a){if(s=e(i.progressive),n=e.trim(s.html()),!n)return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(d){return o.log("error parsing progressive slides",d),void 0}else n=n.split(RegExp(s.data("cycle-split")||"\n")),n[n.length-1]||n.pop()}l&&(o.prepareTx=function(e,t){var s,o;return e||0===n.length?(l.apply(i.API,[e,t]),void 0):(t&&i.currSlide==i.slideCount-1?(o=n[0],n=n.slice(1),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.API.advanceSlide(1)},50)}),i.API.add(o)):t||0!==i.currSlide?l.apply(i.API,[e,t]):(s=n.length-1,o=n[s],n=n.slice(0,s),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.currSlide=1,t.API.advanceSlide(-1)},50)}),i.API.add(o,!0)),void 0)}),c&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",function(e,t){c.apply(t.API),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t)}else c.apply(e.API)}),r&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else r.apply(e.API)})}})}(jQuery),function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),t.replace(n,function(t,i){var n,o,c,r,l=i.split(".");for(n=0;s.length>n;n++)if(c=s[n]){if(l.length>1)for(r=c,o=0;l.length>o;o++)c=r,r=r[l[o]]||i;else r=c[i];if(e.isFunction(r))return r.apply(c,s);if(void 0!==r&&null!==r&&r!=i)return r}return i})}})}(jQuery);

/*! center plugin for Cycle2;  version: 20140121 */
(function($) {
"use strict";

$.extend($.fn.cycle.defaults, {
    centerHorz: false,
    centerVert: false
});

$(document).on( 'cycle-pre-initialize', function( e, opts ) {
    if ( !opts.centerHorz && !opts.centerVert )
        return;

    // throttle resize event
    var timeout, timeout2;

    $(window).on( 'resize orientationchange load', resize );

    opts.container.on( 'cycle-destroyed', destroy );

    opts.container.on( 'cycle-initialized cycle-slide-added cycle-slide-removed', function( e, opts, slideOpts, slide ) {
        resize();
    });

    adjustActive();

    function resize() {
        clearTimeout( timeout );
        timeout = setTimeout( adjustActive, 50 );
    }

    function destroy( e, opts ) {
        clearTimeout( timeout );
        clearTimeout( timeout2 );
        $( window ).off( 'resize orientationchange', resize );
    }

    function adjustAll() {
        opts.slides.each( adjustSlide );
    }

    function adjustActive() {
        /*jshint validthis: true */
        adjustSlide.apply( opts.container.find( '.' + opts.slideActiveClass ) );
        clearTimeout( timeout2 );
        timeout2 = setTimeout( adjustAll, 50 );
    }

    function adjustSlide() {
        /*jshint validthis: true */
        var slide = $(this);
        var contW = opts.container.width();
        var contH = opts.container.height();
        var w = slide.outerWidth();
        var h = slide.outerHeight();
        if (w) {
            if (opts.centerHorz && w <= contW)
                slide.css( 'marginLeft', (contW - w) / 2 );
            if (opts.centerVert && h <= contH)
                slide.css( 'marginTop', (contH - h) / 2 );
        }
    }
});

})(jQuery);

/*! Swipe Plugin for Cycle2; Copyright (c) 2012 M. Alsup; ver: 20121120 */
(function(a){"use strict";var b="ontouchend"in document;a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function g(b){if(!f)return;var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(f.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}var d=c.originalEvent.touches?c.originalEvent.touches[0]:c,e,f={time:(new Date).getTime(),coords:[d.pageX,d.pageY],origin:a(c.target)};b.bind("touchmove",g).one("touchend",function(c){b.unbind("touchmove",g),f&&e&&e.time-f.time<a.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&f.origin.trigger("swipe").trigger(f.coords[0]>e.coords[0]?"swipeleft":"swiperight"),f=e=undefined})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft})(jQuery);

/* Carousel Plugin for Cycle2; Copyright (c) 2012 M. Alsup; v20130528 */
(function(e){"use strict";e(document).on("cycle-bootstrap",function(e,i,t){"carousel"===i.fx&&(t.getSlideIndex=function(e){var i=this.opts()._carouselWrap.children(),t=i.index(e);return t%i.length},t.next=function(){var e=i.reverse?-1:1;i.allowWrap===!1&&i.currSlide+e>i.slideCount-i.carouselVisible||(i.API.advanceSlide(e),i.API.trigger("cycle-next",[i]).log("cycle-next"))})}),e.fn.cycle.transitions.carousel={preInit:function(i){i.hideNonActive=!1,i.container.on("cycle-destroyed",e.proxy(this.onDestroy,i.API)),i.API.stopTransition=this.stopTransition;for(var t=0;i.startingSlide>t;t++)i.container.append(i.slides[0])},postInit:function(i){var t,n,s,o,l=i.carouselVertical;i.carouselVisible&&i.carouselVisible>i.slideCount&&(i.carouselVisible=i.slideCount-1);var r=i.carouselVisible||i.slides.length,c={display:l?"block":"inline-block",position:"static"};if(i.container.css({position:"relative",overflow:"hidden"}),i.slides.css(c),i._currSlide=i.currSlide,o=e('<div class="cycle-carousel-wrap"></div>').prependTo(i.container).css({margin:0,padding:0,top:0,left:0,position:"absolute"}).append(i.slides),i._carouselWrap=o,l||o.css("white-space","nowrap"),i.allowWrap!==!1){for(n=0;(void 0===i.carouselVisible?2:1)>n;n++){for(t=0;i.slideCount>t;t++)o.append(i.slides[t].cloneNode(!0));for(t=i.slideCount;t--;)o.prepend(i.slides[t].cloneNode(!0))}o.find(".cycle-slide-active").removeClass("cycle-slide-active"),i.slides.eq(i.startingSlide).addClass("cycle-slide-active")}i.pager&&i.allowWrap===!1&&(s=i.slideCount-r,e(i.pager).children().filter(":gt("+s+")").hide()),i._nextBoundry=i.slideCount-i.carouselVisible,this.prepareDimensions(i)},prepareDimensions:function(i){var t,n,s,o=i.carouselVertical,l=i.carouselVisible||i.slides.length;if(i.carouselFluid&&i.carouselVisible?i._carouselResizeThrottle||this.fluidSlides(i):i.carouselVisible&&i.carouselSlideDimension?(t=l*i.carouselSlideDimension,i.container[o?"height":"width"](t)):i.carouselVisible&&(t=l*e(i.slides[0])[o?"outerHeight":"outerWidth"](!0),i.container[o?"height":"width"](t)),n=i.carouselOffset||0,i.allowWrap!==!1)if(i.carouselSlideDimension)n-=(i.slideCount+i.currSlide)*i.carouselSlideDimension;else{s=i._carouselWrap.children();for(var r=0;i.slideCount+i.currSlide>r;r++)n-=e(s[r])[o?"outerHeight":"outerWidth"](!0)}i._carouselWrap.css(o?"top":"left",n)},fluidSlides:function(i){function t(){clearTimeout(s),s=setTimeout(n,20)}function n(){i._carouselWrap.stop(!1,!0);var e=i.container.width()/i.carouselVisible;e=Math.ceil(e-l),i._carouselWrap.children().width(e),i._sentinel&&i._sentinel.width(e),r(i)}var s,o=i.slides.eq(0),l=o.outerWidth()-o.width(),r=this.prepareDimensions;e(window).on("resize",t),i._carouselResizeThrottle=t,n()},transition:function(i,t,n,s,o){var l,r={},c=i.nextSlide-i.currSlide,a=i.carouselVertical,d=i.speed;if(i.allowWrap===!1){s=c>0;var u=i._currSlide,p=i.slideCount-i.carouselVisible;c>0&&i.nextSlide>p&&u==p?c=0:c>0&&i.nextSlide>p?c=i.nextSlide-u-(i.nextSlide-p):0>c&&i.currSlide>p&&i.nextSlide>p?c=0:0>c&&i.currSlide>p?c+=i.currSlide-p:u=i.currSlide,l=this.getScroll(i,a,u,c),i.API.opts()._currSlide=i.nextSlide>p?p:i.nextSlide}else s&&0===i.nextSlide?(l=this.getDim(i,i.currSlide,a),o=this.genCallback(i,s,a,o)):s||i.nextSlide!=i.slideCount-1?l=this.getScroll(i,a,i.currSlide,c):(l=this.getDim(i,i.currSlide,a),o=this.genCallback(i,s,a,o));r[a?"top":"left"]=s?"-="+l:"+="+l,i.throttleSpeed&&(d=l/e(i.slides[0])[a?"height":"width"]()*i.speed),i._carouselWrap.animate(r,d,i.easing,o)},getDim:function(i,t,n){var s=e(i.slides[t]);return s[n?"outerHeight":"outerWidth"](!0)},getScroll:function(e,i,t,n){var s,o=0;if(n>0)for(s=t;t+n>s;s++)o+=this.getDim(e,s,i);else for(s=t;s>t+n;s--)o+=this.getDim(e,s,i);return o},genCallback:function(i,t,n,s){return function(){var t=e(i.slides[i.nextSlide]).position(),o=0-t[n?"top":"left"]+(i.carouselOffset||0);i._carouselWrap.css(i.carouselVertical?"top":"left",o),s()}},stopTransition:function(){var e=this.opts();e.slides.stop(!1,!0),e._carouselWrap.stop(!1,!0)},onDestroy:function(){var i=this.opts();i._carouselResizeThrottle&&e(window).off("resize",i._carouselResizeThrottle),i.slides.prependTo(i.container),i._carouselWrap.remove()}}})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright  2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def : "easeOutQuad",
    swing : function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad : function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad : function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad : function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic : function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic : function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic : function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart : function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart : function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart : function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint : function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint : function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint : function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine : function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine : function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine : function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo : function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo : function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo : function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc : function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc : function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc : function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic : function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i)
                * (2 * Math.PI) / j))
                + e
    },
    easeOutElastic : function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h)
                * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic : function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5
                    * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i)
                            * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1))
                * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack : function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack : function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack : function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce : function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce : function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375)
                            + a
                }
            }
        }
    },
    easeInOutBounce : function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h
                * 0.5 + a
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer. Redistributions in binary
 * form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided
 * with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to
 * endorse or promote products derived from this software without specific prior
 * written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 */


function scrollToTop(){
    $( "html, body" ).animate({ scrollTop: 0 }, "slow" );
}

$(document).ready(function() {
    // Select
    /*$(".fwd_page select").each(function() {
        if($(this).parent(".select_dropdown").length < 1){
            // $(this).wrap( "<span class='select_dropdown'></span>" );
            $('<span></span>').insertAfter(this);
        }
    });*/

    // Main Navigation - Current State Functionality
    $('.main_navigation ul li .sub_menu').mouseover(function() {
        $(this).parent().find('a:eq(0)').addClass('current-menu-item');
    });
    $('.main_navigation ul li .sub_menu').mouseout(function() {
        $(this).parent().find('a:eq(0)').removeClass('current-menu-item');
    });

    $('.fwd_home_rotation .slide_content, .fwd_home_rotation .cycle_nextprev, .fwd_home_rotation .cycle-pager').fadeIn(600, 'easeInOutExpo', function() {
        // Animation complete.
    });
    $('.fwd_home_feature').delay(200).fadeIn(700, 'easeInOutExpo');

    // Visual Search Click Functionality
    $( '#visual_search.top .input_wrap' ).css({
        width: 0
    });
    var isNavSearchOpen = false;
    $( '#visual_search.top .icon_search' ).click(function() {
        var $inputWrap = $('#visual_search.top .input_wrap');
        if(!$("#search_term_new").val()) {
            var searchWidth = (isNavSearchOpen) ? 0 : 260;
            $inputWrap.css({display:"inline-block"});

            $inputWrap.stop().animate({
                width: searchWidth
            }, 600, function() {
                if(!isNavSearchOpen) {
                  $inputWrap.hide();
                  //console.log('search closed');
                } else {
                  $("#search_term_new").focus();
                  //console.log('search opened');
                }
            });

            if(isNavSearchOpen) {
              isNavSearchOpen = false;
            } else {
              isNavSearchOpen = true;
            }

            $('.fwd_header #visual_search.top .input_wrap').css('float', 'right');
            $(this).toggleClass("active");
            //return false;
        } else {
            $("#frmSearch").submit();
        }
    });

    // Visual Search Placement Functionality
    //var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
    var isiPad = navigator.userAgent.indexOf('iPad') != -1;
    var winWidth = $(window).width();
    var headerUtility = $("#js-header__utility");
    var headerMainContent = $("#js-header__main-content");
    var siteSearch = $( "#visual_search" );
    if(winWidth <= 768) {
        siteSearch.prependTo(headerMainContent);
        //console.log("tab");
    }

    $('html').addClass( (isiPad ? 'ipad' : 'notIpad') );

    $(window).resize(function() {
        winWidth = $(window).width();
        if(winWidth <= 768) {
            siteSearch.prependTo(headerMainContent);
            //console.log("tab");
        } else {
            siteSearch.appendTo(headerUtility);
            //console.log("desk");
        }
    });


// --------------------------------
// Selection Toggle
// --------------------------------
$(function(){
  $(".js-toggle-select").on("click", function(){
    var $this = $(this);
    var $showElements = $($this.attr("data-toggle-select-show"));
    var $hideElements = $($this.attr("data-toggle-select-hide"));
    $showElements.slideDown();
    $hideElements.slideUp();
  });
});


    // --------------------------------
    // Popup Slide
    // --------------------------------
    $.fn.popSlide = function( options ) {
        return this.each(function() {
            setCookie("SeenSurveyPopup", "true", 365);

            var elem = $( this ),
                elemHeight = elem.outerHeight(),
                elemCloseBtn = elem.find('.popslide_close');

            elem.css({bottom: -elemHeight}).show().animate({bottom: 0});
            elemCloseBtn.on("click",function(){
                elem.animate({bottom: -elemHeight});
            });
        });
    };

    setTimeout(function(){$(".popslide").popSlide();}, 3000);

    // --------------------------------
    // Back to Top
    // --------------------------------
    (function backToTop() {
        var bttButton = $("#backtotop");
        var deviceAgent = navigator.userAgent.toLowerCase();
        var isIpad = deviceAgent.match(/(iphone|ipod|ipad)/);
        var winWidth = $(window).width();
        var contentWidth = 1000;
        var desktopBtnPosition = getDesktopBtnPos();
        var scrollWindow = $(window).scrollTop();

        // Back to Top button height scroll functionality.
        $(window).scroll(function() {
            scrollWindow = $(window).scrollTop();
            winWidth = $(window).width();

            if (scrollWindow <= 250) // button disappears when at the top of page
            {
                bttButton.fadeOut(400, 'easeInOutExpo');
            }
            else // show up on scroll down default
            {
                showButton();
            }
        });

        // Back to Top button width resize functionality.
        $(window).resize(function() {
            winWidth = $(window).width();
            desktopBtnPosition = getDesktopBtnPos();
            if(scrollWindow > 250){
                showButton();
            }
        });

        function showButton() {
            if (isIpad || winWidth <= 768 ) {  // iPad
                bttButton.fadeIn(800, 'easeInOutExpo').css({
                    'right' : 10
                });
            }
            else
            {
                bttButton.fadeIn(800, 'easeInOutExpo').css({ // default
                    'right' : desktopBtnPosition
                });
            }
        }
        function getDesktopBtnPos() {
            return (winWidth - contentWidth) / 2 - 95;
        }
    })();
});

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function pushAddProductToGA(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnGAHelper('addToCart', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushRemoveProductFromGA(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnGAHelper('removeFromCart', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushProductOnGAHelper(action, productName, productCode, price, brand, category, color, currencyCode, count) {
    // Measure adding a product to a shopping cart by using an 'add' actionFieldObject and a list of productFieldObjects.
    if(typeof(count) == 'undefined') {
        count = 1;
    }

    // console.log("pushed to dataLayer event[" + action + "], productCode[" + productCode + "], name[" + productName + "] price[" + price + "], brand[" + brand + "], color[" + color + "], count[" + count + "]");
    // console.dir(dataLayer);

    try {
        dataLayer.push({
                'event': action,
                'ecommerce': {
                    'currencyCode': currencyCode,
                    'add': { // 'add' actionFieldObject measures.
                        'products': [
                            { // adding a product to a shopping cart.
                                'name': productName,
                                'id': productCode,
                                'price': price,
                                'brand': brand,
                                'category': category,
                                'variant': color,
                                'quantity': count
                            }
                        ]
                    }
                }
            }
        );
    } catch(err) {
        console.log(err.message);
    }
}

window.get_cordial_cID = function(accountKey, getCookie){
    getCookie = function(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }
    if(typeof accountKey === 'undefined'){
        try{
            accountKey = document.querySelectorAll('script[data-cordial-track-key]')[0].getAttribute('data-cordial-track-key');
        }catch(e){}
    }
    return getCookie('crdl_'+(accountKey || '')+'cID');
}

function pushAddProductToCordial(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnCordialHelper('add', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushRemoveProductFromCordial(productName, productCode, price, brand, category, color, currencyCode, count) {
    pushProductOnCordialHelper('remove', productName, productCode, price, brand, category, color, currencyCode, count);
}

function pushProductOnCordialHelper(action, productName, productCode, price, brand, category, color, currencyCode, count) {
    // Measure adding a product to a shopping cart by using an 'add' actionFieldObject and a list of productFieldObjects.
    if(typeof(count) == 'undefined') {
        count = 1;
    }

    if(typeof(cordial) == 'undefined' || cordial == null) {
        return;
    }
    try {
        if(get_cordial_cID()) {
            cordial.cartitem(action, {
                    'productID': productCode,
                    'sku': productCode,
                    'category': category,
                    'name': productName,
                    'images': [],
                    'description': '',
                    'qty': count,
                    'itemPrice': price,
                    'url': '',
                    'attr': {
                        'manufacturer': brand,
                        'size': null
                    }
                }
            );
        }
        cordial.event('cartitem',{
            'action': action,
            'productID': productCode,
            'qty' : count
        });


    } catch(err) {
        console.log(err.message);
    }
    // console.log("pushed to dataLayer event[" + action + "], productCode[" + productCode + "], name[" + productName + "] price[" + price + "], brand[" + brand + "], color[" + color + "], currencyCode[" + currencyCode + "], count[" + count + "]");
    // console.dir(dataLayer);
}


(function(){
    var counter = 0;
    var filterDDSize = $(".plp_filter_size_dd");

    if(filterDDSize.hasClass("size")){counter++}
    if(filterDDSize.hasClass("bottoms")){counter++}
    if(filterDDSize.hasClass("shoes")){counter++}

    if(counter < 2) {
        filterDDSize.closest(".dd_hover").addClass("filter_rel");
    };
})();


// js-toggle-display
// ============


;(function($) {

    // Settings
    var pluginName = "toggleDisplay",
    defaults = { };

    // Ctor
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    //Init
    Plugin.prototype.init = function () {
        var e = $( this.element );
        var opts = this.options;
        var targetContent = e.data("toggle-display-selector");

        e.on( "click", function() {
            var target = $(targetContent);


            if( target.css('display') == 'none' ) {
                target.slideDown("slow");
                e.addClass("is-active");
            } else {
                target.slideUp("slow");
                e.removeClass("is-active");
            }
        });

    };

    // Plugin wrapped ctor
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }

}(jQuery));

$(function() {
    $( ".js-toggle-display" ).toggleDisplay();
});

function nameInputRestrict(event) {
	  var key = event.keyCode || event.charCode || 0;
	  //return ((key >= 65 && key <= 90) || key == 8 || key == 32 || key == 37 || key == 39 || key == 46 || key == 9);
	  return true;
};

function jpZipInputRestrict(event) {
	  var key = event.keyCode || event.charCode || 0;
	  $zipcode = $(event.target);

		// Auto-format- do not expose the mask as the user begins to type
		if (key !== 8 && key !== 9) {
			if ($zipcode.val().length === 3) {
				$zipcode.val($zipcode.val() + '-');
			}
		}

		// Allow numeric (and tab, backspace, delete) keys only
		return (key == 8 ||
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
				(key >= 96 && key <= 105));

};

function addToRecentViewed(code){
    var data  = $.param({
        code : code,
        fw : true
    });
    $.get("/r/ajax/RecentViewedTrack.jsp", data, function(msg){
        //do nothing
    });
}


// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

///////////////// Text Area Word Counter/////////

$(function(){
$.fn.textareaCounter = function( options ) {
    return this.each(function(){
        //sets the limit
        var $this = $(this);
        var limit = $this.attr('maxlength');
        var $maxlimit =  $($this.attr("data-count-total"));
        $maxlimit.text(limit);
        //keeps track current length
        $(this).ready(function(){
          var $count =  $($this.attr("data-count"));
          var currentCount = $this.val().length;
          $count.text(currentCount);
        });
        $(this).on('keyup', function() {
          var $count =  $($this.attr("data-count"));
          var currentCount = $this.val().length;
          $count.text(currentCount);
       });
    });
};

$('.js-textarea-counter').textareaCounter();
});

///////////////// Display Selection/////////

$.fn.displayChecked = function() {
  function updateValue(input, getValue) {
    var containerClass = input.data('display-container');
    console.log(containerClass);
    var $updateConatiner = $(containerClass);
    var getValue = input.parent().find('label').html();
    $updateConatiner.html(getValue);
  }
  function checkState(input) {
    input.on('click', function() {
      updateValue(input);
    });
  }
    return this.each(function() {
      checkState($(this));
    });
};

$('.js-get-value').displayChecked();

///////////////// Column Change Ipad/////////


$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var $pane = $('#pane1');


    function checkWidth() {
      var windowWidth = $window.width();
      var deviceWidth = $('.js-column').attr('data-product-width');
      var currentColumn = $('.js-column').attr('data-current');
      var newColumn = $('.js-column').attr('data-new');
        if( windowWidth <= deviceWidth ) {
            $('.js-column').removeClass(currentColumn).addClass(newColumn);;
          } else {
            $('.js-column').removeClass(newColumn).addClass(currentColumn);
          }
     }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});



// https://stackoverflow.com/a/5298684
function removeHash (url) {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history) {
        var urlWithoutHash = url ? url.replace('#', '') : loc.pathname + loc.search; // Last ditch effort to remove hash
        history.pushState("", document.title, urlWithoutHash);
    } else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

/**
 * Create a new WishlistCountUpdater.
 *
 * @constructor
 */
function WishlistCountUpdater() {
}

/**
 * Update the wishlist items count.
 * @param onUpdate the callback function executed on successful count update. The count value is passed as the first
 *  argument to the callback function.
 */
WishlistCountUpdater.prototype.updateCount = function(onUpdate) {

    var self = this;

    $.ajax({
        type: 'POST',
        url: "/fw/ajax/GetWishlistItemsCount.jsp",
        success: function(ajaxResponse) {
            var responseObject = JSON.parse(ajaxResponse);
            if(responseObject.success) {
                var count = responseObject.data;
                if(count < 100) {
                    $("#wishlist_item_count").text(count);
                } else {
                    $("#wishlist_item_count").text("99+");
                }
                console.log(count);
                if(typeof onUpdate === 'function') {
                    onUpdate(count);
                }
            }
        }
    });
}
/*
 Original Plugin by Osvaldas Valutis, www.osvaldas.info
 http://osvaldas.info/drop-down-navigation-responsive-and-touch-friendly
 Available for use under the MIT License
 */
/**
 * jquery-doubleTapToGo plugin
 * Copyright 2017 DACHCOM.DIGITAL AG
 * @author Marco Rieser
 * @author Volker Andres
 * @author Stefan Hagspiel
 * @version 3.0.2
 * @see https://github.com/dachcom-digital/jquery-doubletaptogo
 */
!function(t,e,s,i){"use strict";function n(e,s){this.element=e,this.settings=t.extend({},a,s),this._defaults=a,this._name=o,this.init()}var o="doubleTapToGo",a={automatic:!0,selectorClass:"doubletap",selectorChain:"li:has(ul)"};t.extend(n.prototype,{preventClick:!1,currentTap:t(),init:function(){t(this.element).on("touchstart","."+this.settings.selectorClass,this._tap.bind(this)).on("click","."+this.settings.selectorClass,this._click.bind(this)).on("remove",this._destroy.bind(this)),this._addSelectors()},_addSelectors:function(){this.settings.automatic===!0&&t(this.element).find(this.settings.selectorChain).addClass(this.settings.selectorClass)},_click:function(e){this.preventClick?e.preventDefault():this.currentTap=t()},_tap:function(e){var s=t(e.target).closest("li");return s.hasClass(this.settings.selectorClass)?s.get(0)===this.currentTap.get(0)?void(this.preventClick=!1):(this.preventClick=!0,this.currentTap=s,void e.stopPropagation()):void(this.preventClick=!1)},_destroy:function(){t(this.element).off()},reset:function(){this.currentTap=t()}}),t.fn[o]=function(e){var s,a=arguments;return e===i||"object"==typeof e?this.each(function(){t.data(this,o)||t.data(this,o,new n(this,e))}):"string"==typeof e&&"_"!==e[0]&&"init"!==e?(this.each(function(){var i=t.data(this,o),r="destroy"===e?"_destroy":e;i instanceof n&&"function"==typeof i[r]&&(s=i[r].apply(i,Array.prototype.slice.call(a,1))),"destroy"===e&&t.data(this,o,null)}),s!==i?s:this):void 0}}(jQuery,window,document);
$(function () {
    $('.main_navigation').doubleTapToGo();
});
