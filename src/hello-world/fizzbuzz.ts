export function fizzbuzz(num: number): string | number {
	let output = ""
	const multiplies = { 3: "fizz", 5: "buzz" }
	for (const [multiplier, word] of Object.entries(multiplies)) {
		if (num % +multiplier === 0) output += word
	}
	return output === "" ? num : output
}
