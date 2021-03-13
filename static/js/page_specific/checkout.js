$(function() {
  $('#existing-address-btn')
    .bind('click', function(event) {
    	$("#existing-address-btn").addClass("selected");
      	$("#existing-address").css('display', 'block');
      	if ($("#new-address-btn").hasClass("selected")) {
      		$("#shipping_address_form_div").css("display", "none");
      		$("#new-address-btn").removeClass("selected");
      	}
    })
});

$(function() {
  	$('#new-address-btn').bind('click', function(event) {
    	$("#new-address-btn").addClass("selected");
      	$("#shipping_address_form_div").css('display', 'block');
      	if ($("#existing-address-btn").hasClass("selected")) {
      		$("#existing-address").css("display", "none");
      		$("#existing-address-btn").removeClass("selected");
      	}
    });
});


$(function() {
  	/* delete item button click event */
    $(document).on("click", "[id^='item_remove_']", function(e){
        var elemId = $(this).attr('id');
        var product_id = elemId.replace("item_remove_", "");

        if($.cookie('ilynBYSLCrt') != undefined && $.cookie('ilynBYSLCrt') != "") {
            var ilyn_cart = JSON.parse($.cookie('ilynBYSLCrt'));
            delete ilyn_cart[product_id];
            $.cookie('ilynBYSLCrt', JSON.stringify(ilyn_cart), { expires: 2, path: '/' });

            $("#cart_item_"+product_id).remove();

            /* price calculation */
            var updatedItemPrice = 0;
            var updatedSubTotalPrice = 0;
            var itemCount = 0;
            $.each(ilyn_cart, function (index, item) {
                updatedSubTotalPrice += parseInt(item['quantity']) * parseInt(item['price']);
                itemCount++;
            });
            updatedSubTotalPrice = "BDT " + Number(updatedSubTotalPrice).toLocaleString('en');

            /* updating cart prices */
            updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice);

            if(itemCount < 1){
                $("#cart_details_items_header").css("display", "none");
                $("#cart_details_items").css("display", "none");
                $("#cart_details_no_product_msg").css("display", "block");
            }
        }
        else{
            console.log("no product found");
        }
    });

});

function updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice){
    if($("#item_price_"+product_id) != undefined)
        $("#item_price_"+product_id).html(updatedItemPrice);

    $("#sub_total_price").html(updatedSubTotalPrice);
    $("#total_price").html(updatedSubTotalPrice);
}
// create a custom phone number rule called 'intlTelNumber'
jQuery.validator.addMethod("itiValidNumberCheckout", function (value, element) {
    return this.optional(element) || ITI_LOGIN_CHECKOUT.isValidNumber();
}, "Please enter a valid  Phone Number");


$(function() {
    setTimeout(function () {
        var value = $('#login_checkout').val();
        if(value !== undefined && value.includes('-')) {
            $('#login_checkout').val(value.replace('-', ''));
        }
    }, 1500);

    $(document).on('change', '#login_checkout', function () {
        var value = $(this).val();
        if(value.includes('-')) {
            $(this).val(value.replace('-', ''));
        }
    });

    $("#checkout-login-form").validate({
        rules: {
            login: {
                required: true,
                // number: true,
                itiValidNumberCheckout: true,
                // minlength: 10,
                // maxlength: 14
            },
            passkey: {
                required: true,
                minlength : 8
            }
        },
        submitHandler: function (form) {
            var login = ITI_LOGIN_CHECKOUT.getNumber().replace('+', '');
            var passkey = $('#passkey').val();

            if(login && passkey){
                start_full_loader();
                $.ajax({
                    type: "POST",
                    url: $('#checkout-login-form').data('login-url'),
                    data: {
                        'phone_no': login,
                        'password': passkey,
                        'country_iso2_code': ITI_LOGIN_CHECKOUT.getSelectedCountryData().iso2,
                    },
                    dataType: 'json',
                    success: function (data, status) {
                        stop_full_loader();

                        if(data.status) {
                            $("#checkout-text-wrp h6").css("color", "green").html("You have successfully login!");
                            // location.replace(location.origin + profile_url);
                            window.location.href = window.location.href;
                        }
                        else {
                            var sign_up_url = $('#checkout-login-form').data('sign-up-url');
                            var forgot_password_url = $('#checkout-login-form').data('forgot-url');

                            if(data.errorType == "ivalid_login") {
                                $("#checkout-text-wrp h6").css("color", "red").html("Record not found. Please <a style='color: red;text-transform: none;font-weight: bold;' href=" + sign_up_url + "?ref=" + checkout_url + ">SIGN UP</a> first.");
                            }
                            else if(data.errorType == "ivalid_password") {
                                $("#checkout-text-wrp h6").css("color", "red").html("Password does not match. If you forgot your password please try <a style='color: red;text-transform: none;font-weight: bold;' href=" + forgot_password_url + ">Recover Password</a>");
                            }
                        }
                    },
                    error: function (xhr, desc, err){}
                });
            }
        },
        unhighlight: function (element, errorClass, validClass) {
            $(element).next('label.error').remove();
        },
        errorPlacement: function (error, element) {
            element.after(error);
        }
    });

    $(document).on('click', '.delivery_method_radio_input', function () {
        $(this).closest('div').find('i').removeClass('fas').addClass('far');
        $(this).closest('label').find('i').removeClass('far').addClass('fas');
    });
});
