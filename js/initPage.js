(function($){
$(document).ready(function() {
	$(function() {
		$("#js_bbx_floor").lavaLamp({
			fx: "easeInOutBack",
			speed: 700,
			click: function(event, menuItem) {
				return false;
			}
		});
	});
	/*
	 * left sidebar
	 */
	$('#lefsidebar-list li').each(function(index, li) {
		if ($(this).hasClass('has-sub')) {
			$(this).click(function(e) {
				$(this).find('.nav').slideToggle();
			});
			$(this).find('.nav li').click(function(e) {
				$(this).parent().find('li').removeClass('sidebar-selected');
				$(this).addClass('sidebar-selected');
			}).hover(function() {
				//TODO
			});
		} else {
			$(this).find('.nav').slideDown();
		}
	});
	/*$(".leftsidebar_box dt").click(function(){
		
		$(this).parent().find('dd').removeClass("menu_chioce");
		$(".leftsidebar_box dt img").attr("src","images/select_xl01.jpg");
		$(this).parent().find('img').attr("src","images/select_xl.jpg");
		$(".menu_chioce").slideUp(); 
		$(this).parent().find('dd').slideToggle();
		$(this).parent().find('dd').addClass("menu_chioce");
	});*/

	/*
 	* tab切换代码
 	*/
	var shopManagementTab = $('#shop_management_tab');
	var shopManagementTabNav = $('#shop_management_tab').find('.tab-nav ul li');
	var shopManagementTabPanel = shopManagementTab.find('.tab-panel');
	shopManagementTabNav.each(function(index, element) {
		var currentTabId = index;
		$(this).bind('click', function() {
			shopManagementTabNav.each(function(index, element) {
				if (currentTabId == index) {
					$(element).addClass('tab-nav-selected');
				} else {
					$(element).removeClass('tab-nav-selected');
				}
			});
			shopManagementTabPanel.each(function(index, element) {
				if (currentTabId == index) {
					$(element).show();
				} else {
					$(element).hide();
				}
			});
		});
	});
});
	//省市级联菜单
/*	$('.select-main').CfySelect();*/
})(jQuery);