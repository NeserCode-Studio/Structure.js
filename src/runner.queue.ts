import { Queue } from "./class/queue"
import { getRuntime } from "./utils"

const queue = new Queue(
	{ number: 1 },
	{ number: 3 },
	{ number: 42 },
	{ number: 33 }
)
// queue.MaxSize = 1000004

// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		queue.push({ number: i })
// 	}
// }, "Structure.js Queue Push 1,000,000: ")

// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		queue.pop()
// 	}
// }, "Structure.js Queue Pop 1,000,000: ")

// let arr: { number: number }[] = []
// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		arr.push({ number: i })
// 	}
// }, "JavaScript Array Push 1,000,000: ")

// getRuntime(() => {
// 	for (let i = 0; i < 1000000; i++) {
// 		arr.pop()
// 	}
// }, "JavaScript Array Pop 1,000,000: ")

console.log(queue)
