export function getRuntime(func: Function, alias?: string): void {
	const start = Date.now()
	try {
		func()
	} catch (e) {
		console.log(e)
	}
	const end = Date.now()
	console.log(`${alias + " "}Runtime: ${end - start}ms`)
}
