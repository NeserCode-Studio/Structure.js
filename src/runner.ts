import { Stack } from "./class/stack"

const stack = new Stack(1, 3, 42, 33)

stack.MaxSize = 10

for (let i = 0; i < stack.length; i++) {
	stack.top = i
	console.log(stack.nextNode, stack.prevNode)
}
