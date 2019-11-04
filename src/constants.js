import PropTypes from "prop-types";

export const CHILDREN_PROPTYPES = [
	PropTypes.arrayOf(PropTypes.node),
	PropTypes.node
];

export const COLORS = ["first", "second", "accent", "third", "dark"];
export const POSSIBLE_BREAKPOINTS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const POSSIBLE_GAPS = [0, 1, 2, 3, 4];

export const POSSIBLE_ITEM_PERCENTAGES = [...new Array(100)].map(
	(_, index) => index + 1
);

export const POSSIBLE_ROLES = [
	"presentation",
	"button",
	"link",
	"checkbox",
	"menuitem",
	"menuitemcheckbox",
	"menuitemradio",
	"option",
	"radio",
	"searchbox",
	"switch",
	"textbox"
];
