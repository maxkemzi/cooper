class RegexEscaper {
	static escape(string) {
		return string.replace(/[-[\]{}()*+?.,\\/^$|#\s]/g, "\\$&");
	}
}

module.exports = RegexEscaper;
