var isSidebarOpened=false;function illiyeen_filter(){if(isSidebarOpened){isSidebarOpened=false;var product_item_container=$("#product-item-container");if(product_item_container){product_item_container.removeClass('medium-8',{duration:500}).addClass('medium-12',{duration:500});product_item_container.find(".medium-6.single-item").removeClass("medium-6").addClass("medium-4");}
$('#filter-bar').hide();}
else{$('#filter-bar').fadeIn(500);isSidebarOpened=true;var product_item_container=$("#product-item-container");if(product_item_container){product_item_container.removeClass('medium-12').addClass('medium-8');product_item_container.find(".medium-4.single-item").removeClass("medium-4").addClass("medium-6");}}}
jQuery(document).ready(function(){$(document).on("click",".filters-btn-container",function(e){if($(".filters-and-sort-menu").hasClass("open")){$(".filters-icon").removeClass("open");$(".filters-and-sort-menu").removeClass("open");$("body").removeClass("hide-overflow-for-small");$(".filters-btn-container.hover").removeClass("hidden");}
else{$(".filters-icon").addClass("open");$(".filters-and-sort-menu").addClass("open");$("body").addClass("hide-overflow-for-small");$(".filters-btn-container.hover").addClass("hidden");}});$(document).on("click","#close-filters-btn",function(e){$(".filters-btn").click();});$(document).on("click","[id^=icon-category-filter]",function(e){if($(this).parents("li").children(".vertical-second-nav").css("display")=="none"){$(this).removeClass("closed");$(this).parents("li").children(".vertical-second-nav").show(300);}else{$(this).addClass("closed");$(this).parents("li").children(".vertical-second-nav").hide(300);}});});;