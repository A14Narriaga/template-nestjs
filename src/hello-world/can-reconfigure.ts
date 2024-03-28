export function canReconfigure(from: string, to: string): boolean {
	if (from.length !== to.length) return false
	if (new Set(from).size !== new Set(to).size) return false
	const transformations: { [key: string]: string } = {}
	for (const [index, fromLetter] of [...from].entries()) {
		const toLetter = to[index]
		const storedLetter = transformations[fromLetter]
		if (storedLetter && storedLetter !== toLetter) return false
		transformations[fromLetter] = toLetter
	}
	return true
}
