// 2018-04-22 «What are requirejs-config.js `mixins`?» https://mage2.pro/t/5297
define([
	'jquery'
	,'Magento_Checkout/js/model/cart/cache'
	,'Magento_Checkout/js/model/cart/totals-processor/default'
	,'Magento_Checkout/js/model/quote'
], function($, cache, totals, q) {'use strict'; return function(sb) {
	var toggle = function(on) {
		$('#cart-totals, #block-shipping', $('.block-minicart')).toggleClass('df-hidden', !on);
	};
	q.getTotals().subscribe(function(v) {toggle(v.items_qty);});
	// 2018-04-27 https://magento.stackexchange.com/a/218888
	var update = function() {
		cache.clear('totals');
		totals.estimateTotals(q.shippingAddress());
	};
	$(document).bind('ajax:addToCart', update);
	return $.widget('mage.sidebar', $.mage.sidebar, {
		_removeItemAfter: function(elem) {this._super(elem); update();},
		_updateItemQtyAfter: function(elem) {this._super(elem); update();},
	});
};});