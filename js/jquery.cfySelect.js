// JavaScript Document
	/*
 	* 仿select下拉列表---省市级联菜单
 	*/
;(function ($) {
	function CfySelect (ele, options) {
		this.$ele = $(ele);
		this.defaults = {
			selectWrapper: '.select-main',
			selectInput: '.select-input',
			selectArrow: '.select-arrow',
			optionList: '.option-list'
		};
		this.options = $.extend({}, this.defaults, options);
	};

	CfySelect.prototype.showList = function() {
		var _self = $(this);console.log(this);
		_self.find(_self.optionList).show();
	};
	CfySelect.prototype.hideList = function() {
		
	};
	CfySelect.prototype.blurList = function(index) {

	};
	CfySelect.prototype.clicked = function() {
		
	};
	CfySelect.prototype.onChange = function() {
		
	};
	$.fn.CfySelect = function (options) {		
		return this.each(function(index, ele) {
			var cfy_select = new CfySelect(ele, options);
			var wrapper = cfy_select.$ele;
			cfy_select.call(wrapper, function() {
				
			});
			wrapper.bind('click', cfy_select.showList);
			/*wrapper.each(function(index, element) {
					$(element).bind('click', cfy_select.openList);
				}).find(cfy_select.optionList).find('li').each(function(index, element) {
					$(element).click(cfy_select.clicked);
				});
				$(document).bind('click', function(e) {
					var targetClassName = e.target.className;
					if (targetClassName != 'select-set' && targetClassName != 'select-arrow') {
						cfy_select.blur();
					}
				});*/
		});
	}
})(jQuery);
	/*var cfy_select = {
			wrapper: $('.select-main'),
			input: '.select-set',
			arrow: '.select-arrow',
			optionList: '.option-list',
			openList: function() {
				$(this).find(cfy_select.optionList).show();
			},
			hideList: function(element) {
				$(element).find(cfy_select.optionList).hide();
			},
			blur: function() {
				cfy_select.wrapper.each(function(index, element) {
					cfy_select.hideList(element);
				});
			},
			clicked: function() {
				console.log($(this).text());
				cfy_select.onChange($(this).text());
			},
			onChange: function(value) {
				cfy_select.wrapper.find(cfy_select.input).text(value);
			},
			init: function() {
				cfy_select.wrapper.each(function(index, element) {
					$(element).bind('click', cfy_select.openList);
				}).find(cfy_select.optionList).find('li').each(function(index, element) {
					$(element).click(cfy_select.clicked);
				});
				$(document).bind('click', function(e) {
					var targetClassName = e.target.className;
					if (targetClassName != 'select-set' && targetClassName != 'select-arrow') {
						cfy_select.blur();
					}
				});
			}
		};
	cfy_select.init();	*/