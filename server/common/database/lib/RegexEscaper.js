class RegexEscaper {
	static escape(string) {
		return string.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
	}
}

export default RegexEscaper;
