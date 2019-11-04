import React from "react";
import PropTypes from "prop-types";
// Compound components
import { Input } from "./Input";
import { FormItem } from "./FormItem";
import { Select } from "./Select";
import { TextArea } from "./TextArea";
import { CHILDREN_PROPTYPES } from "../constants";

const Form = React.forwardRef((props, ref) => {
	const { className, children, onSubmit, ...restProps } = props;

	return (
		<form className={className} ref={ref} onSubmit={onSubmit} {...restProps}>
			{children}
		</form>
	);
});

Form.propTypes = {
	className: PropTypes.string,
	children: PropTypes.oneOfType(CHILDREN_PROPTYPES).isRequired,
	onSubmit: PropTypes.func
};

Form.defaultProps = {
	className: "",
	onSubmit: Function.prototype
};

Form.Input = Input;
Form.FormItem = FormItem;
Form.Select = Select;
Form.TextArea = TextArea;

export { Form };
