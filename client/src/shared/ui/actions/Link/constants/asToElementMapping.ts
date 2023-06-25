import {ElementType} from "react";
import {NavLink} from "react-router-dom";
import {As} from "../types";

const asToElementMapping: {[key in As]: ElementType} = {
	button: "button",
	externalLink: "a",
	routeLink: NavLink
};

export default asToElementMapping;
