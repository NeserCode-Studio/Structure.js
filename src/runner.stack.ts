import { Stack } from "./class/stack"
import { getRuntime } from "./utils"

const stack = new Stack(
	{ number: 1 },
	{ number: 3 },
	{ number: 42 },
	{ number: 33 }
)

stack.MaxSize = 1000004

getRuntime(() => {
	for (let i = 0; i < 1000000; i++) {
		stack.push({ number: i })
	}
}, "Structure.js Stack Push 1,000,000: ")

getRuntime(() => {
	for (let i = 0; i < 1000000; i++) {
		stack.pop()
	}
}, "Structure.js Stack Pop 1,000,000: ")

let arr: { number: number }[] = []
getRuntime(() => {
	for (let i = 0; i < 1000000; i++) {
		arr.push({ number: i })
	}
}, "JavaScript Array Push 1,000,000: ")

getRuntime(() => {
	for (let i = 0; i < 1000000; i++) {
		arr.pop()
	}
}, "JavaScript Array Pop 1,000,000: ")

console.log(stack, stack.roundSet, stack.peek())
