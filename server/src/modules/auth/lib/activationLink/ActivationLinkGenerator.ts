import {v4 as uuidv4} from "uuid";

class ActivationLinkGenerator {
	static generate(): string {
		return uuidv4();
	}
}

export default ActivationLinkGenerator;
