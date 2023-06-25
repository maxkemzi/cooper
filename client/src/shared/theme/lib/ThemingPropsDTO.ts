import {ThemingProps} from "../types";

class ThemingPropsDTO implements ThemingProps {
	m;
	mt;
	mb;
	ml;
	mr;

	constructor(props: any) {
		this.m = props.m;
		this.mt = props.mt;
		this.mb = props.mb;
		this.ml = props.ml;
		this.mr = props.mr;
	}
}

export default ThemingPropsDTO;
