export const truncateText = (text: string, maxLength: number): string => {
	if (text.length > maxLength) {
		return text.slice(0, maxLength) + '...'; // Append ... if text is truncated
	}
	return text;
};
