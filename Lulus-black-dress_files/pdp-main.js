
$(function(){
    //bind events here

    $("#size_and_fit_link").click(function(event)
    {
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
        //var url = $("#size_and_fit_link").data("url");
        //var measurements = $("#size_and_fit_link").data("measurements");

        showSizeGuidePopup();
    });

    $(".toggle").click(function(event){
    	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
        var target = "#" + $(this).attr("toggle-target");
        $(target).toggle();
    });

    //only for items with multiple sizes
	$("#size-select").change(function(event){
		//(event.preventDefault) ? event.preventDefault() : event.returnValue = false;
        var option = $(this).find("option:selected");
        //reset all the msg
        $(".preorder-msg").hide();
        $("#one-left-div").hide();
        $("#select-size-error").hide();
        $("#est-span").html($("#est-span").data("date"));
        setBtnText();
        halfWidthBtn();

        var findYourSizeLink = $('#find-your-size');

        function showBackInStockAndSpecialOrderLink(){
            if(findYourSizeLink.data("isVisible")){
                findYourSizeLink.show();
            }else{
                findYourSizeLink.hide();
            }
        }

        if (option.data("isOos"))
        {
            if (option.data("isOnSale"))
            {
                setBtnText("notifyMe");
                halfWidthBtn();
            }
            else{
                setBtnText("notifyMeSpecialOrder");
                fullWidthBtn();
            }
        }
        else if(option.data("isPreorder")){
            //pre order
            setBtnText("preorder");
            halfWidthBtn();
            $(".preorder-msg").show();
            $("#est-span").html(option.data("preorderDate"));
        }else{
            if(option.data("isOneLeft")){
                $("#one-left-div").show();
            }
            //regular quantity item.
            setBtnText();
        }

        if($("#est-span").html() == ''){
        	$('#est-p').hide();
        }else{
        	$('#est-p').show();
        }

        showSelectedSizeDisclaimerInfo();
	});

    $("#color-select").change(function(){
        var option = $(this).find(":selected");
        var url;
        if(option){
            url = option.data("dpUrl");
        }
        if(url){
            window.location.href = url;
        }
    });

    $("#add-to-bag-btn").click(function(){
        var btn = $(this);
        if(btn.hasClass("oos")) return; //sold out, do nothing
        if(btn.hasClass("notifyme") || btn.hasClass("notifymespecialorder")){
            //do special-order
            $("#cant-find-size-link").click();
        }else{
            //do add to bag
        	addToBag();
        }
    });

    $("#cant-find-size-link").click(showNotifyMePopup);
    $("#special-order-link").click(showSpecialOrderPopup);

    $("#add-to-wishlist-link").on("click", addToWishList);

    $(".close-popup").click(closePopup);

    $("#item-added-btn").click(function (){
        if($(this).hasClass("wishlist")){
            window.location.href="/fw/account/WishList.jsp";
        }else{
            window.location.href = "/fw/ShoppingCart.jsp";
        }
    });

    $(".toggle-fullsize-zoom").click(toogleZoomImage);

    //setBtnText();

    //$("#size-select").change();

    initPdpTabs();

  //  $(window).resize(initPdpTabs);
    showPreNext();

    $(".sizeguide_measurement").click(
        convertSize
    );

    showSelectedSizeDisclaimerInfo();
});

function showSelectedSizeDisclaimerInfo() {

    var disclaimerMessage;

    if($("#size-select").length != 0) {
        // this item has multiple sizes
        disclaimerMessage = $("#size-select").find("option:selected").data("inventoryDisclaimer");
    } else if ($("#one-size-div").length != 0) {
        // this is one size item
        disclaimerMessage = $("#one-size-div").data("inventoryDisclaimer");
    }

    if(disclaimerMessage) {
        $("#disclaimer-div").hide();

        $("#size-disclaimer-p-message").html(disclaimerMessage.replace(/\|/g, " ").replace("<br/>", " "));
        $("#size-disclaimer-div").show();
    } else {
        $("#disclaimer-div").show();

        $("#size-disclaimer-p-message").empty();
        $("#size-disclaimer-div").hide();
    }
}

function showSizeGuidePopup()
{
    var data = $.param({
        "measurements" : $("#size_and_fit_link").data("measurements"),
        "measuretable" : $("#size_and_fit_link").data("measuretable"),
        "international" : $("#size_and_fit_link").data("international"),
        "bullets" : $("#size_and_fit_link").data("bullets")
    });
    $.colorbox({
        href : $("#size_and_fit_link").data("url"),
        data : data,
        onComplete : function(){
            $("#cboxOverlay, #colorbox").css("z-index", "1000");
            $(".close-popup").click(
                closePopup
            );
            $(".sizeguide_measurement").click(
                convertSize
            );
        }
    });
}

function convertSize()
{
    $(".sizeguide_measurement").removeClass("active");
    $(this).addClass("active");

    //console.log($(this).text());
    if ($(this).text()=="IN")
    {
        $(".sizeToConvertInch").show();
        $(".sizeToConvertCM").hide();
    }
    else{
        $(".sizeToConvertCM").show();
        $(".sizeToConvertInch").hide();
    }
}

function initPdpTabs(){


    $("#tab-ul").find("a").click(function(event){
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
        var currentHash = this.hash;
        var tabs = $("#tab-ul").find("a");
        $.each(tabs, function(){
            $(this).removeClass("active");
            var hash = this.hash;
            if(hash){
                $(hash).hide();
            }
        });
        $(this).addClass("active");
        $(".accordion_title a").removeClass('active').filter(function(){
        	if(this.hash == currentHash){
        		$(this).addClass('active');
        	}
        });

        $(this.hash).show();
        if(this.hash=='#styled'){
        	$('#style-with-slideshow').cycle('reinit');
        }

    });

    $(".accordion_title").find("a").click(function(event){
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
        //if($(this).hasClass("active")) return;
        var currentHash = this.hash;
        var tabs = $(".accordion_title").find("a");
        $.each(tabs, function(){
            $(this).removeClass("active");
            var hash = this.hash;
            if(hash && hash != currentHash){
                $(hash).slideUp();
            }
        });
        $(this).addClass("active");
        $("#tab-ul a").removeClass('active').filter(function(){
        	if(this.hash == currentHash){
        		$(this).addClass('active');
        	}
        });
        $(this.hash).slideDown();
        if(this.hash=='#styled'){
        	$('#style-with-slideshow').cycle('reinit');
        }
    });
   var activeTab;
    if($("#tab-ul, .accordion_title").find("a.active:visible").length > 0) {
        activeTab = $("#tab-ul, .accordion_title").find("a.active:visible").eq(0);
    }else{
        activeTab = $("#tab-ul, .accordion_title").find("a:visible").eq(0);
    }

    if(activeTab) activeTab.click();
}


function showSpecialOrderPopup(event){
    if(event){
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    }

    var data = $.param({
        code : $(this).data("code"),
        dept : $(this).data("dept"),
        sectionURL : $(this).data("sectionurl"),
        sessionID : $(this).data("sessionid"),
        size : getSelectedSize(false)
    });

    var initSpecialOrderPopup = function(){
        //bind events here
        $("#special-order-sizes a").click(clickSpecialOrderSize);

        $("#special-order-btn").click(submitSpecialOrderOrNotifyMe);
        //$("#special-order-btn").click(submitSpecialOrder);

        $(".close-popup").click(closePopup);

        $('.radio_icheck input').iCheck({
          checkboxClass: 'icheckbox_square',
          radioClass: 'iradio_square',
          increaseArea: '20%' // optional
        });
        $.colorbox.resize();
    };

    $.modal({
        url : "/fw/dialog/SpecialOrder.jsp",
        data : data,
        scrolling : false,
        triggerOpen:true,
        type: 'small',
        onComplete : function(){
            $("#cboxOverlay, #colorbox").css("z-index", "1000");
                if(typeof initSpecialOrderPopup === 'function'){
                initSpecialOrderPopup();
            }
        }
    });
}

var backInStockUtils = (function(){
    function submitNotifyMe(object, notifyMeFeatureFromSpecialOrderPage){
        var data = {};
        var thankyouDivToShow='';
        var email='';
        //if notifyme feature is being submitted from special order page, skip validation and
        //fetch size and email from different elements
        if (notifyMeFeatureFromSpecialOrderPage==false) {
            email=$("#special-order-email").val();
            data = $.param({
                size : $("#special-order-sizes").find(".js-size-button.push-button--active").data("size"),
                email : email,
                code : object.data("code"),
                fw : true
            });
            thankyouDivToShow='#thank-you-div-notifyme';
        }
        else{
            if (!validateInput())
                return;
            email = $("#email-input").val();
            data = $.param({
                size : $("#cant-find-size-ul").find(".js-size-button.push-button--active").data("size"),
                email : email,
                code : $(this).data("code"),
                fw : true
            });
            thankyouDivToShow='#thank-you-div';
        }

        $.post("/r/ajax/SubmitFindSizeInquiry.jsp", data, function(msg){
            var result = $.parseJSON(msg);
            if(result.success){
                $("#thank-you-email").html(email);
                $("#main-div").hide();
                $(thankyouDivToShow).show();
                $.colorbox.resize({width : 600});
            }else{
                //show error message
            }
        });

    }

    function validateInput(){
        var valid = true;
        if($("#instock-msg").is(":visible")){
            valid = false;
        }
        if(!$("#cant-find-size-ul").find(".js-size-button.push-button--active").length) {
            //$("#selectsize-msg").slideDown(600, $.colorbox.resize);
            valid = false;
        }else{
            $("#selectsize-msg").hide();
        }
        if(!validateEmail($("#email-input").val())){
            $("#email-input").addClass("errortextbox");
            valid = false;
        }else{
            $("#email-input").removeClass("errortextbox");
        }
        return valid;
    }

    function clickSize(event){
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
        // $("#notify-me-btn").removeClass("disable").prop("disabled", false);
        $(this).closest("#cant-find-size-ul").find(".push-button--active").removeClass("push-button--active");
        $(this).addClass("push-button--active");
        $("#selectsize-msg").slideUp();

        if($(this).data("instock") && !$(this).data("preorder")){
            //instock, not preorder
            $("#instock-msg").slideDown(600);
            // $("#notify-me-btn").addClass("disable").prop("disabled", true);
            $(".regular").hide();
            $(".preorder").hide();
            <!-- Code for adding add-to-bag in modal START -->
            $("#email-input").hide();
            $("#add-to-bag-btn-modal").text('ADD TO BAG');
            $("#add-to-bag-btn-modal").show();
            $("#notify-me-btn").hide();
            var clickedSize = $(this).attr("data-size");
            $('#size-select option[value='+clickedSize+']').prop('selected', true);
            <!-- Code for adding add-to-bag in modal END -->
        }else if($(this).data("preorder")){
            //preorder
            $(".preorder").show();
            $(".regular").hide();
            $("#instock-msg").slideUp();
            <!-- Code for adding add-to-bag in modal START -->
            $("#email-input").hide();
            $("#add-to-bag-btn-modal").text('PREORDER');
            $("#add-to-bag-btn-modal").show();
            $("#notify-me-btn").hide();
            var clickedSize = $(this).attr("data-size");
            $('#size-select option[value='+clickedSize+']').prop('selected', true);
            <!-- Code for adding add-to-bag in modal END -->
        }
        else
        {
            //not pre order not in stock =(out of stock)
            $(".regular").show();
            $(".preorder").hide();
            $("#instock-msg").slideUp();
            <!-- Code for adding add-to-bag in modal START -->
            $("#email-input").show();
            $("#add-to-bag-btn-modal").hide();
            $("#notify-me-btn").show();
            <!-- Code for adding add-to-bag in modal END -->
        }
    }

    function emailInputKeyup(){
        var valid = false;
        if(validateEmail($(this).val())){
            $(this).removeClass("errortextbox");
        }
    }

    function validateEmail(emailStr) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(emailStr);
    }
    return {
        submitNotifyMe : submitNotifyMe,
        clickSize : clickSize,
        emailInputKeyup : emailInputKeyup
    };

})();


//handles all notify me requests. can't find your size and special order inquiry both.
//depending on the item quantity type(preorder, out of stock, instock, or combination), price type(sale/regular),
//and number of item sizes(mutlsize, one size)
function showNotifyMePopup(event){
    if(event){
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    }

    var data = $.param({
        code : $(this).data("code"),
        dept : $(this).data("dept"),
        sectionURL : $(this).data("sectionurl"),
        sessionID : $(this).data("sessionid"),
        showSpecialOrder : $(this).data("showSpecialOrder"),
        showBackInStock: $(this).data("showBackInStock"),
        size : getSelectedSize(false)
    });

    //determine which page to call.
    var showSpecialOrderOnly = false;

    //console.log("$(this).data(showSpecialOrder) " + typeof $(this).data("showSpecialOrder") + " $(this).data(showBackInStock) " + typeof $(this).data("showBackInStock"));

    if ($(this).data("showSpecialOrder")===true && $(this).data("showBackInStock")===false) {
        showSpecialOrderOnly = true;
    }

    if (showSpecialOrderOnly==true){

        var data = $.param({
            code : $(this).data("code"),
            dept : $(this).data("dept"),
            sectionURL : $(this).data("sectionurl"),
            sessionID : $(this).data("sessionid"),
            size : getSelectedSize(false)
        });

        var initSpecialOrderPopup = function(){
            //bind events here
            $("#special-order-sizes a").click(clickSpecialOrderSize);

            $("#special-order-btn").click(submitSpecialOrderOrNotifyMe);
            //$("#special-order-btn").click(submitSpecialOrder);

            $(".close-popup").click(closePopup);

            $('.radio_icheck input').iCheck({
                checkboxClass: 'icheckbox_square',
                radioClass: 'iradio_square',
                increaseArea: '20%' // optional
            });
            $.colorbox.resize();
        };

        $.modal({
            url : "/fw/dialog/SpecialOrder.jsp",
            data : data,
            triggerOpen:true,
            scrolling : false,
            type: 'small',
            onComplete : function(){
                $("#cboxOverlay, #colorbox").css("z-index", "1000");
                if(typeof initSpecialOrderPopup === 'function'){
                    initSpecialOrderPopup();
                }
            }
        });
    }
    else
    {
        function initPopup(){
            //bind events here
            $("#cant-find-size-ul a").click(backInStockUtils.clickSize);

            $("#notify-me-btn").click(backInStockUtils.submitNotifyMe);

            $(".close-popup").click(closePopup);

            $("#email-input").keyup(backInStockUtils.emailInputKeyup);

            $("#popup-show-special-order").click(showSpecialOrderPopup);

            $('.radio_icheck input').iCheck({
                checkboxClass: 'icheckbox_square',
                radioClass: 'iradio_square',
                increaseArea: '20%' // optional
            });

            $.colorbox.resize();
        }

        $.modal({
            url : "/fw/dialog/CantFindYourSize.jsp",
            data : data,
            triggerOpen:true,
            scrolling : false,
            type: 'small',
            onComplete : function(){
                $("#cboxOverlay, #colorbox").css("z-index", "1000");
                initPopup();
                $("ul#cant-find-size-ul .push-button--active").click();
            }
        });
    }


}

function addToBag(size){
    if(size == null){
        size = getSelectedSize(true);
    }
    var code = $("#add-to-bag-btn").data("code");
    var sectionURL = $("#add-to-bag-btn").data("sectionurl");
    var sessionID = $("#add-to-bag-btn").data("sessionid");
    var isPopup = $("#add-to-bag-btn").data("ispopup");
    var retailPrice = $("#add-to-bag-btn").data("retailPrice");

    var cartItems = new Array();
    var cartItem = {};

    cartItem.productCode = code;
    cartItem.productCategory = $("#add-to-bag-btn").data("category");
    cartItem.productName = $("#add-to-bag-btn").data("name");
    cartItem.images = [];
    cartItem.description = $("#add-to-bag-btn").data("description");
    cartItem.price = $("#add-to-bag-btn").data("price");
    cartItem.url = $("#add-to-bag-btn").data("url");
    cartItem.brandName = $("#add-to-bag-btn").data("brandName");
    cartItem.size = size;
    cartItems.push(cartItem);


    if(!size || !code) return;
    //addProduct(code, size, sectionURL, sessionID, 1, function(){
    //    updateBagCount();
    //    $.colorbox({
    //        href: "#item-added-popup",
    //        inline : true,
    //        onComplete : function(){
    //            var popupDiv = $("#item-added-popup");
    //            popupDiv.find(".title_reg").html(popupDiv.find("#item-added-to-bag-popup-title").html());
    //            if(size == 'all') size = $("#one-size-div").html();
    //            popupDiv.find("#item-added-size").html(size);
    //            $("#cboxOverlay, #colorbox").css("z-index", "1000");
    //            var popupBtn = popupDiv.find("#item-added-btn");
    //            //attach color box close behavior
    //            $('.pop_cancel, .close-popup').click(
    //                closePopup
    //            );
    //
    //            $("#item-added-btn").click(function (){
    //                if($(this).hasClass("wishlist")){
    //                    window.location.href="/fw/account/WishList.jsp";
    //                }else{
    //                    window.location.href = "/fw/ShoppingCart.jsp";
    //                }
    //            });
    //
    //            if (typeof insertGoogleRemarketingAddToCart === 'function') {
    //                insertGoogleRemarketingAddToCart();
    //            }
    //
    //            if (typeof insertNanigansAddToCart === 'function') {
    //                insertNanigansAddToCart();
    //            }
    //
    //            if (typeof insertFacebookAddToCart === 'function') {
    //                insertFacebookAddToCart(code, retailPrice);
    //            }
    //        }
    //
    //    });
    //}, isPopup);

    console.log(code);
    console.log(size);
    console.log(sectionURL);
    console.log(sessionID);

    addProduct(code, size, sectionURL, sessionID, 1, function(){

        var data = $.param({
            code : code,
            size : size
        });

        $.modal({
            url: "/fw/ajax/AddToBagPopup.jsp",
            data: data,
            type: 'top',

            triggerOpen: true,
            onComplete : function(){
                //$.colorbox.resize();
                updateBagCount();
                $("#cboxContent").find(".close-popup").click(closePopup);
                // Added
                var popupDiv = $("#item-added-popup");
                popupDiv.find(".title_reg").html(popupDiv.find("#item-added-to-bag-popup-title").html());
                if(size == 'all') size = $("#one-size-div").html();
                popupDiv.find("#item-added-size").html(size);
                $("#cboxOverlay, #colorbox").css("z-index", "1000");
                var popupBtn = popupDiv.find("#item-added-btn");
                popupBtn.removeClass("wishlist").val(popupBtn.data("bagText"));
                //attach color box close behavior
                $('.pop_cancel, .close-popup').click(
                    closePopup
                );

                $("#item-added-btn").click(function (){
                    if($(this).hasClass("wishlist")){
                        window.location.href="/fw/account/WishList.jsp";
                    }else{
                        window.location.href = "/fw/ShoppingCart.jsp";
                    }
                });

                if (typeof gaAddToCartActionWithAjax === 'function'){
                    gaAddToCartActionWithAjax('add',code,size,1);
                }

                if (typeof insertGoogleRemarketingAddToCart === 'function') {
                    insertGoogleRemarketingAddToCart();
                }

                if (typeof insertFacebookAddToCart === 'function') {
                    insertFacebookAddToCart(code, retailPrice);
                }

                if (typeof insertCordialAddToCart === 'function') {
                    insertCordialAddToCart(cartItems);
                }

            }
        });
    });
}
// new markups start
function addToWishList(event){
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;


    var code = $("#add-to-bag-btn").data("code");
    var email = $("#add-to-wishlist-link").data("email");
    var sectionURL = $("#add-to-bag-btn").data("sectionurl");
    var sessionID = $("#add-to-bag-btn").data("sessionid");
    var size = getWishListSelectedSize();

    if (!email){
        // var signInCreateAccountPage = '/fw/addToWishList.jsp?code=' + code + '&size=' + size + '&sectionURL=' + encodeURIComponent(sectionURL) + '&sessionID=' + sessionID + '&redirect=true';
        // var signInCreateAccount = '/fw/Login.jsp?page=' + encodeURIComponent(signInCreateAccountPage);
        // $("#wishlistLogin_a").attr("href", signInCreateAccount);

      $.modal({
        type: "top",
        triggerOpen: true,
        open: "wishlistLogin"
      });
        // var redirectPage = '/fw/addToWishList.jsp?code=' + code + '&size=' + size + '&sectionURL=' + encodeURIComponent(sectionURL) + '&sessionID=' + sessionID + '&redirect=true';
        // window.location = '/fw/Login.jsp?page=' + encodeURIComponent(redirectPage);
        return;
    }


    var data = $.param({
        code : code,
        sectionURL : sectionURL,
        sessionID : sessionID,
        "size" : size,
        email : email
    });

    var postUrl = "/fw/addToWishList.jsp";
    if($(".wishListBlock__text").text() === "Wishlist Item") {
        postUrl = "/fw/EditWishlist.jsp";
        data = $.param({
            code : code,
            size : size,
            email : email
        });
    }

    $.post(postUrl, data, function(){
      // wishlist button in pdp
      var wishlistNotifyText = $("#wishlistNotifyText");
      var wishListText = $(".wishListBlock__text").text();
      $(".wishListBlock__text").text(wishListText === "Add to Wishlist" ? "Wishlist Item" : "Add to Wishlist");
      if ($(".favorite-button-pdp").hasClass("favorite-button--active")) {
        wishlistNotifyText.text(wishlistNotifyText.data("wishlistremoved"));
        $(".favorite-button-pdp").removeClass("favorite-button--active");
      } else {
        wishlistNotifyText.text(wishlistNotifyText.data("wishlistadded"));
        $(".favorite-button-pdp").addClass("favorite-button--active");
      }

        if (typeof insertFacebookWishList === 'function') {
            insertFacebookWishList();
        }

        if($(".favorite-button-pdp").hasClass("favorite-button--active")){
            if(typeof gaUpdateWishList === 'function'){
                gaUpdateWishList('add',code);
            }
            if (typeof insertCordialUpdateWishList === 'function') {
                insertCordialUpdateWishList('add', code);
            }
        } else {
            if(typeof gaUpdateWishList === 'function'){
                gaUpdateWishList('remove',code);
            }
            if (typeof insertCordialUpdateWishList === 'function') {
                insertCordialUpdateWishList('remove', code);
            }
        }

        var wishlistCountUpdater = new WishlistCountUpdater();
        wishlistCountUpdater.updateCount();

    });

}
// new markups end

function fullWidthBtn() {
  $('#ctaMainBtn').removeClass("n-1-of-2");
  $('#wishListBlock').removeClass("n-1-of-2").addClass("u-padding-l--none");
}
function halfWidthBtn() {
  if(!$('#ctaMainBtn').hasClass('n-1-of-2')){
    $('#ctaMainBtn').addClass("n-1-of-2");
    $('#wishListBlock').addClass("n-1-of-2").removeClass("u-padding-l--none");
  }
}


function setBtnText(buttonType){
    var btn = $("#add-to-bag-btn");
    btn.removeClass("special-order").removeClass("preorder").removeClass("oos").removeClass("notifymespecialorder").removeClass("notifyme");

    if(buttonType == "preorder"){
      btn.addClass("preorder");
    }
    if(buttonType == "oos"){
      btn.addClass("oos");
    }
    if (buttonType=="notifyMe")
    {
        btn.addClass("notifyme");
    }
    if (buttonType=="notifyMeSpecialOrder")
    {
        btn.addClass("notifymespecialorder");
    }

    if(btn.hasClass("preorder")){
        btn.html(btn.data("preorderText"));
    }else if(btn.hasClass("oos")){
        btn.html(btn.data("oosText"));
    }else if(btn.hasClass("notifyme"))
    {
        btn.html(btn.data("specialOrderText"));
    }
    else if (btn.hasClass("notifymespecialorder"))
    {
        btn.html(btn.data("notifyMeSpecialOrderText"));
    }
    else{
        btn.html(btn.data("addToBagText"));
    }

}

function getSelectedSize(showWarning){
    var size;
    if($("#one-size-div:visible").length > 0 ||
        $("#product_info").data("onesize")) {
        size = 'all';
    }else{
        if($.trim($("#size-select option:selected").val()) ){
            size = $.trim($("#size-select option:selected").val());
        }
    }
    if(!size &&  showWarning){
        //no size selected
        $("#select-size-error").slideDown();
        return false;
    }else{
         $("#select-size-error").hide();
    }
    return size;
}

function getWishListSelectedSize(){
    var size = '';
    if($("#one-size-div:visible").length > 0 ||
        $("#product_info").data("onesize")) {
        size = 'all';
    }else{
        if($.trim($("#size-select option:selected").val()) ){
            size = $.trim($("#size-select option:selected").val());
        }
    }
    return size;
}

function toogleZoomImage(event){
    if(event){
      (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    }

    $("#pdp-main-div, #product-zoom-div, footer, #toggle-zoom-push").toggle();
    //$(".cycle-slideshow").cycle('reinit');
    var $count = $('.custom-caption');
    var $slickElement = $('.slideshow');
    var $slickZoom = $('.cycle-slideshow');

    $slickZoom.on('init afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $count.text(i + '/' + slick.slideCount);
    });

    $slickZoom.not('.slick-initialized').slick({
      lazyLoad: 'progressive',
      nextArrow: "#zoom-next",
      prevArrow: "#zoom-prev"
    });
}

function closePopup(event){
    if(event){
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    }
    $.colorbox.close();
}


function clickSpecialOrderSize(event){
        (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

        $(this).closest("#special-order-sizes").find('.push-button--active').removeClass("push-button--active");
        $(this).addClass("push-button--active");
        $("#so-select-size-error").removeClass("u-error");
        var size = $(this).attr("data-size");
        var canSpecialOrder = $(this).attr("data-can-special-order");
        $("#regular_so_msg").show();

        if($(this).data("isInstock") || $(this).data("preorder")){
            $("#regular_so_msg").hide();
            //disable button
            if ($(this).data("preorder"))
            {
                $("#instock-msg").text("Currently available for preorder");
                $("#add-to-bag-btn-so-modal").text('PREORDER');
            }
            else{
                $("#instock-msg").text("Currently in stock");
                $("#add-to-bag-btn-so-modal").text('ADD TO BAG');
            }
            var clickedSize = $(this).attr("data-size");
            $('#size-select option[value='+clickedSize+']').prop('selected', true);
            $("#add-to-bag-btn-so-modal").show();
            $("#specialOrderForm").hide();

            $("#instock-msg").slideDown(600, function(){
        		$.colorbox.resize();
        	});
            disableSpecialOrder();
            disableNotifyMe();

        }else if (canSpecialOrder=="false")
        {
            $("#add-to-bag-btn-so-modal").hide();
            $("#specialOrderForm").show();
            enableSpecialOrder();
            enableNotifyMe();
            $("#instock-msg").hide();
        }
        else{
            $("#add-to-bag-btn-so-modal").hide();
            $("#specialOrderForm").show();
            //enable button
        	$("#instock-msg").slideUp(600, function(){
        		$.colorbox.resize();
        	});
            enableSpecialOrder();
            disableNotifyMe();
        }


    }
function enableSpecialOrder(){
    var btn = $("#special-order-btn");
    btn.prop("disabled", false).css("opacity","1");

}

function disableSpecialOrder(){
    var btn = $("#special-order-btn");
    btn.prop("disabled", true).css("opacity","0.5");
}

function enableNotifyMe(){
    $("#notEligibleForSpecialOrder").show();
    $("#is-place-order-div").hide();
    $("#special-order-comment").hide();
    $("#special-order-btn").val("Notify Me");
}

function disableNotifyMe(){
    $("#notEligibleForSpecialOrder").hide();
    $("#is-place-order-div").show();
    $("#special-order-comment").show();
    $("#special-order-btn").val("Submit Special Order");
}

function submitSpecialOrderOrNotifyMe()
{
    if ($("#special-order-btn").val()=="Submit Special Order")
        submitSpecialOrder.apply(this);
    else if($("#special-order-btn").val()=="Notify Me")
        backInStockUtils.submitNotifyMe($("#special-order-btn"),false);
}
function submitSpecialOrder(){
    var size = $("#special-order-sizes .js-size-button.push-button--active").attr("data-size");
    if(!size){
        //add pleace select size alert
    	$("#so-select-size-error").addClass("u-error");
        return ;
    }else{
        //remove select size alert
    	$("#so-select-size-error").removeClass("u-error");
    }
    var email = $("#special-order-email").val();
    if(!email) {
        $("#special-order-email").addClass("errortextbox");
        return;
    }else{
         $("#special-order-email").removeClass("errortextbox");
    }

    var data = $.param({
        SOProductCode: $(this).data("code"),
        SOSectionURL: $(this).data("sectionurl"),
        SOSessionID: $(this).data("sessionid"),
        SOSize: size,
        SOUserEmail: email,
        SOAutoOrder: $("#is-place-order-div").find("input:checked").val(),
        SOComment: $("#special-order-comment").val()
    });
    $.post("/fw/SubmitSpecialOrderInquiry.jsp", data, function(){
        showConfirmPopup();
    });
}

function showConfirmPopup(){
    $("#main-div").hide();
    $("#thank-you-div").show();
    $.colorbox.resize();
}

function showPreNext(){
    var prevNextDiv = $("#prev-next-div");
    if(window.localStorage && prevNextDiv.data("list") && prevNextDiv.data("code")){
        var currnetCode = prevNextDiv.data("code");
        var codeList = window.localStorage.getItem(prevNextDiv.data("list"));
        if(!codeList) return ;
        codeList = codeList.split(",");
        if(codeList.length < 2) return; //do not show pre next if list has only one item
        var current = codeList.indexOf(currnetCode);
        if(current == -1) return;
        var pre = (current - 1 + codeList.length) % codeList.length;
        var next = (current + 1 + codeList.length) % codeList.length;

        var preCode = codeList[pre];
        var nextCode = codeList[next];

        var preURL, nextURL;
        jQuery.ajaxSettings.traditional = true;
        var data = $.param({
            code : [preCode, nextCode],
            d : prevNextDiv.data('d')
        });

        $.get("/fw/ajax/GetPrettyURL.jsp", data, function(rtn){
            if(rtn[preCode]){
                preURL = rtn[preCode];
                if(preURL.indexOf('?') == -1) preURL += '?';
                preURL += '&list=' + prevNextDiv.data("list");
            }
            if(rtn[nextCode]){
                nextURL = rtn[nextCode];
                if(nextURL.indexOf('?') == -1) nextURL += '?';
                nextURL += '&list=' + prevNextDiv.data("list");
            }

        });

        $("#prev-next-div .prev").click(function(event){
            (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

            var url = preURL || window.location.href;
            url = url.replace(currnetCode, preCode);
            url = url.replace(/&pdpsrc=\w*/g, "");
            url += "&pdpsrc=prev";
            url = url.replace('\?&', '\?');
            window.location.href = url;

        });

         $("#prev-next-div .next").click(function(event){
            (event.preventDefault) ? event.preventDefault() : event.returnValue = false;

            var url = nextURL || window.location.href;
            url = url.replace(currnetCode, nextCode);
            url = url.replace(/&pdpsrc=\w*/g, "");
            url += "&pdpsrc=next";
            url = url.replace('\?&', '\?');
            window.location.href = url;
        });

        prevNextDiv.show();
    }


}

function updateBagCount(){
    $.ajax(
        {url:"/fw/ajax/CartItemCount.jsp",cache:false}
    ).done(function(msg){
            if(msg.bagCount){
                $("#cart_item_count").text(msg.bagCount);
                //console.log("cart bag count: " + msg.bagCount + " cartItemCount: " + msg.cartItemCount + " item count: " + msg.itemCount);
            }
            else{
                console.error("cart item message cannot be parsed");
            }
        });
}
