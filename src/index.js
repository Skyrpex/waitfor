import { defaults, bind } from "lodash";
import $ from "jquery";
import tryUntil from "@skyrpex/tryuntil";

let defaultOptions = {
	parent: document
};

export default function waitFor(selector, options = {}) {
	options = defaults(options, defaultOptions);

	let parent = $(options.parent);

	if (!parent.length) {
		return $.Deferred.reject().promise();
	}

	return tryUntil(function(done) {
		let el = parent.find(selector);
		if (el.length) done(el);
	}, options);
};
