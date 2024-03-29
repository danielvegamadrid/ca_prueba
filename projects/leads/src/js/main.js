'use strict';

requirejs.config({
	paths: {
		postmonger: 'postmonger'
	},
	shim: {
		'jquery-3.5.1.slim.min': {
			exports: '$'
		},
		'customActivity': {
			deps: ['jquery-3.5.1.slim.min', 'postmonger']
		}
	}
});
/*
requirejs(['../jquery-3.3.1.min', 'customActivity'], function ($, customEvent) {
});
*/
requirejs.onError = function (err) {
	if (err.requireType === 'timeout') {
		console.log('modules: ' + err.requireModules);
	}
	throw err;
};
