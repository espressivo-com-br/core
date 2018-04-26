// 2018-04-22 «What are requirejs-config.js `mixins`?» https://mage2.pro/t/5297
define([
	'jquery'
    ,'Magento_Checkout/js/model/cart/totals-processor/default'
    ,'Magento_Checkout/js/model/quote',
], function($, totals, quote) {'use strict'; return function(sb) {
	// 2018-04-27 https://magento.stackexchange.com/a/218888
	var updateTotals = function() {totals.estimateTotals(quote.shippingAddress());};
	$(document).bind('ajax:addToCart', updateTotals);
	return $.widget('mage.sidebar', $.mage.sidebar, {
		_removeItemAfter: function(elem) {this._super(elem); updateTotals();},
		_updateItemQtyAfter: function(elem) {this._super(elem); updateTotals();}
	});
};});