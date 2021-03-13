jQuery(document).ready(function(){
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        var product_id = parseInt($(this).attr("data-product_id"));
        var qty_avail = parseInt($(this).attr("data-qty_avail"));

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($("#" + fieldName).text());

        // If is not undefined
        if (!isNaN(currentVal)) {
            if(currentVal < qty_avail){
                // Increment
                currentVal = currentVal + 1;
                $("#" + fieldName).text(currentVal);
                cartManage(product_id, currentVal);
                $(this).attr("disabled", false);
                $("#minus-btn-"+product_id).attr("disabled", false)
            }
            if(currentVal >= qty_avail){
                $(this).attr("disabled", true);
            }
        } else {
            // Otherwise put a 1 there
            $("#" + fieldName).text('1');
            cartManage(product_id, currentVal);
            $(this).attr("disabled", true);
            $("#minus-btn-"+product_id).attr("disabled", true)
        }
    });
    // This button will decrement the value till 1
    $('[data-quantity="minus"]').click(function(e) {
        var product_id = parseInt($(this).attr("data-product_id"));
        var qty_avail = parseInt($(this).attr("data-qty_avail"));

        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($("#" + fieldName).text());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal)) {
            if(currentVal > 1){
                // Decrement one
                currentVal = currentVal - 1;
                $("#" + fieldName).text(currentVal);
                cartManage(product_id, currentVal);
                $(this).attr("disabled", false);
                $("#plus-btn-"+product_id).attr("disabled", false)
            }
            if(currentVal <= 1){
                $(this).attr("disabled", true);
            }
        } else {
            // Otherwise put a 1 there
            $("#" + fieldName).text('1');
            cartManage(product_id, 1);
        }
    });
});


/* for cart management --- starts here */
function cartManage(product_id, qty){
    if (product_id != "" && product_id != undefined && qty != "" && qty != undefined){
        $.ajax({
            type: "GET",
            url: "/update_cart_ajax",
            data: { action: "update", data: JSON.stringify({"product_id": product_id, "quantity": qty}) },
            dataType: 'json',
            success: function(data, status){
                if(status == "success"){
                    /* price calculation */
                    var updatedItemPrice = "BDT " + Number(parseInt(data.ilyn_cart[product_id]['quantity']) * data.ilyn_cart[product_id]['price']).toLocaleString('en');
                    var updatedSubTotalPrice = 0;
                    var totalItemQty = 0;
                    $.each(data.ilyn_cart, function (index, item) {
                        updatedSubTotalPrice += parseInt(item['quantity']) * parseInt(item['price']);
                        totalItemQty += parseInt(item['quantity']);
                    });
                    updatedSubTotalPrice = "BDT " + Number(updatedSubTotalPrice).toLocaleString('en');

                    /* updating cart prices */
                    updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice);
                    /* update menu cart items count */
                    $("#shopping_cart_btn span, #shopping_cart_btn_mobile span").text(totalItemQty);

                }
            },
            error: function (xhr, desc, err){
                console.log(err);
            }
        });
    }

    /*
    if($.cookie('ilynBYSLCrt') != undefined && $.cookie('ilynBYSLCrt') != "") {
        var ilyn_cart = JSON.parse($.cookie('ilynBYSLCrt'));
        ilyn_cart[product_id]['quantity'] = parseInt(qty);
        $.cookie('ilynBYSLCrt', JSON.stringify(ilyn_cart), { expires: 2, path: '/' });

        var updatedItemPrice = "BDT " + Number(parseInt(ilyn_cart[product_id]['quantity']) * ilyn_cart[product_id]['price']).toLocaleString('en');
        var updatedSubTotalPrice = 0;
        var totalItemQty = 0;
        $.each(ilyn_cart, function (index, item) {
            updatedSubTotalPrice += parseInt(item['quantity']) * parseInt(item['price']);
            totalItemQty += parseInt(item['quantity']);
        });
        updatedSubTotalPrice = "BDT " + Number(updatedSubTotalPrice).toLocaleString('en');

        updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice);
        $("#shopping_cart_btn span, #shopping_cart_btn_mobile span").text(totalItemQty);
    }
    else{
        console.log("no product found");
    }
    */
}

function updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice){
    if($("#item_price_"+product_id) != undefined)
        $("#item_price_"+product_id).html(updatedItemPrice);

    $("#sub_total_price").html(updatedSubTotalPrice);
    $("#total_price").html(updatedSubTotalPrice);
}

$(document).ready(function (e) {
    $(document).on("click", "[id^='item_remove_']", function(e){
        var elemId = $(this).attr('id');
        var product_id = elemId.replace("item_remove_", "");

        if (product_id != "" && product_id != undefined){
            $.ajax({
                type: "GET",
                url: "/update_cart_ajax",
                data: { action: "remove", data: JSON.stringify({"product_id": product_id}) },
                dataType: 'json',
                success: function(data, status){
                    if(status == "success"){
                        $("#cart_item_"+product_id).remove();

                        /* price calculation */
                        var updatedItemPrice = 0;
                        var updatedSubTotalPrice = 0;
                        var itemCount = 0;
                        var totalItemQty = 0;
                        $.each(data.ilyn_cart, function (index, item) {
                            updatedSubTotalPrice += parseInt(item['quantity']) * parseInt(item['price']);
                            totalItemQty += parseInt(item['quantity']);
                            itemCount++;
                        });
                        updatedSubTotalPrice = "BDT " + Number(updatedSubTotalPrice).toLocaleString('en');

                        /* updating cart prices */
                        updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice);
                        /* update menu cart items count */
                        $("#shopping_cart_btn span, #shopping_cart_btn_mobile span").text(totalItemQty);

                        if(itemCount < 1){
                            $("#cart_checkout_btn_link").css("display", "none");
                            $("#cart_details_items_header").css("display", "none");
                            $("#cart_details_items").css("display", "none");
                            $("#cart_details_no_product_msg").css("display", "block");
                        }
                    }
                },
                error: function (xhr, desc, err){
                    console.log(err);
                }
            });
        }

        /*
        if($.cookie('ilynBYSLCrt') != undefined && $.cookie('ilynBYSLCrt') != "") {
            var ilyn_cart = JSON.parse($.cookie('ilynBYSLCrt'));
            delete ilyn_cart[product_id];
            $.cookie('ilynBYSLCrt', JSON.stringify(ilyn_cart), { expires: 2, path: '/' });

            $("#cart_item_"+product_id).remove();

            var updatedItemPrice = 0;
            var updatedSubTotalPrice = 0;
            var itemCount = 0;
            var totalItemQty = 0;
            $.each(ilyn_cart, function (index, item) {
                updatedSubTotalPrice += parseInt(item['quantity']) * parseInt(item['price']);
                totalItemQty += parseInt(item['quantity']);
                itemCount++;
            });
            updatedSubTotalPrice = "BDT " + Number(updatedSubTotalPrice).toLocaleString('en');

            updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice);
            $("#shopping_cart_btn span, #shopping_cart_btn_mobile span").text(totalItemQty);

            if(itemCount < 1){
                $("#cart_details_items_header").css("display", "none");
                $("#cart_details_items").css("display", "none");
                $("#cart_details_no_product_msg").css("display", "block");
            }
        }
        else{
            console.log("no product found");
        }
         */
    });

    $(document).on("click", "[id^='item_remove_mobile_']", function(e){
        var elemId = $(this).attr('id');
        var product_id = elemId.replace("item_remove_mobile_", "");

        if (product_id != "" && product_id != undefined){
            $.ajax({
                type: "GET",
                url: "/update_cart_ajax",
                data: { action: "remove", data: JSON.stringify({"product_id": product_id}) },
                dataType: 'json',
                success: function(data, status){
                    if(status == "success"){
                        $("#cart_item_"+product_id).remove();

                        /* price calculation */
                        var updatedItemPrice = 0;
                        var updatedSubTotalPrice = 0;
                        var itemCount = 0;
                        var totalItemQty = 0;
                        $.each(data.ilyn_cart, function (index, item) {
                            updatedSubTotalPrice += parseInt(item['quantity']) * parseInt(item['price']);
                            totalItemQty += parseInt(item['quantity']);
                            itemCount++;
                        });
                        updatedSubTotalPrice = "BDT " + Number(updatedSubTotalPrice).toLocaleString('en');

                        /* updating cart prices */
                        updateCartPrices(product_id, updatedItemPrice, updatedSubTotalPrice);
                        /* update menu cart items count */
                        $("#shopping_cart_btn span, #shopping_cart_btn_mobile span").text(totalItemQty);

                        if(itemCount < 1){
                            $("#cart_checkout_btn_link").css("display", "none");
                            $("#cart_details_items_header").css("display", "none");
                            $("#cart_details_items").css("display", "none");
                            $("#cart_details_no_product_msg").css("display", "block");
                        }
                    }
                },
                error: function (xhr, desc, err){
                    console.log(err);
                }
            });
        }
    });
});
/* for cart management --- ends here */
