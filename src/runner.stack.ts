import { Stack } from "./class/stack"
import { getRuntime } from "./utils"

const stack = new Stack(1, 3, 42, 33)

// stack.MaxSize = 1000004

// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		stack.push(i)
// 	}
// }, "Structure.js Stack Push 1,000,000: ")

// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		stack.pop()
// 	}
// }, "Structure.js Stack Pop 1,000,000: ")

// let arr: number[] = []
// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		arr.push(i)
// 	}
// }, "JavaScript Array Push 1,000,000: ")

// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		arr.pop()
// 	}
// }, "JavaScript Array Pop 1,000,000: ")

// stack.top = 4

console.log(stack, stack.roundSet, stack.peek())
