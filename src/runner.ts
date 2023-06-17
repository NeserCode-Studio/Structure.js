import { Stack } from "./class/stack"
import { Queue } from "./class/queue"

// 模拟一个队列，队列中的成员是栈，按顺序完成一些待完成的工作
const queue = new Queue()
const stack1 = new Stack(
	{ todo: "eat", done: false },
	{ todo: "sleep", done: false },
	{ todo: "code", done: false }
)
const stack2 = new Stack(
	{ month: "Jan", day: 1 },
	{ month: "Feb", day: 2 },
	{ month: "Mar", day: 3 }
)

queue.MaxSize = 3
queue.push(stack1)
queue.push(stack2)

stack1.MaxSize = 5
stack1.push({ todo: "play", done: false })

console.log(queue.pop(), queue)
