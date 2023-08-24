class RegexEscaper {
	static escape(str: string): string {
		return str.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
	}
}

export default RegexEscaper;
