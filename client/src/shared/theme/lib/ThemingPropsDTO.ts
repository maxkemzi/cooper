import {ThemingProps} from "../types";

class ThemingPropsDTO implements ThemingProps {
	m;
	mt;
	mb;
	ml;
	mr;

	p;
	pt;
	pb;
	pl;
	pr;

	constructor(props: any) {
		const {m, mt, mb, ml, mr, p, pt, pb, pl, pr} = props || {};

		this.m = m;
		this.mt = mt;
		this.mb = mb;
		this.ml = ml;
		this.mr = mr;

		this.p = p;
		this.pt = pt;
		this.pb = pb;
		this.pl = pl;
		this.pr = pr;
	}
}

export default ThemingPropsDTO;
