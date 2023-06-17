import type { StackPointer } from "../types"

export class Stack<T> {
	readonly ID: number
	private nodes: T[] = []
	private maxSize: number = 42
	private pointer: StackPointer = {
		type: "Stack",
		top: 0,
		bottom: 0,
	}
	private lastNotEmptyIndex: number = -1

	constructor(...args: T[]) {
		this.pointer.top = -1
		this.pointer.bottom = -1

		if (args.length) {
			this.intoStack(...args)
			this.MaxSize = args.length
		}

		// last not empty index
		let index = this.nodes.length - 1
		while (index >= 0 && this.nodes[index] === undefined) index--
		this.lastNotEmptyIndex = index

		this.ID = Math.floor(Math.random() * 1000000000)
	}

	get length(): number {
		return this.nodes.length
	}

	get nodeLength(): number {
		// last not empty index + 1
		return this.lastNotEmptyIndex + 1
	}

	get isEmpty(): boolean {
		return this.nodes.length === 0 || this.lastNotEmptyIndex === -1
	}

	set MaxSize(size: number) {
		if (size < this.nodes.length) {
			this.nodes.length = size
			console.warn(
				"/SET_MAXSIZE: Stack size is smaller than the current stack length, stack will be truncated."
			)
		} else this.nodes.length = size

		this.maxSize = size
	}

	get MaxSize(): number {
		return this.maxSize
	}

	public initialize(...args: T[]): void {
		this.nodes = args
	}

	public intoStack(...args: T[]): void {
		if (args.length === 0) throw new Error("Nothing was push into stack.")
		args.forEach((arg) => this.push(arg))
		console.log("/INTO_STACK: ", this.nodes)
	}

	public clear(): void {
		this.nodes = []
	}

	public push(Node: T): number {
		if (this.nodeLength === this.MaxSize)
			throw new Error(
				`Stack is full, you cannot push anything. Pushing ${Node.toString()} failed.`
			)

		this.top++

		if (this.nodeLength === this.length) {
			this.lastNotEmptyIndex++
			return this.nodes.push(Node)
		} else {
			this.nodes[this.lastNotEmptyIndex + 1] = Node
			this.lastNotEmptyIndex++
			return this.nodeLength
		}
	}

	public pop(): T {
		if (this.isEmpty)
			throw new Error("You cannot pop anything, Stack is empty now.")

		this.top--
		return this.nodes.pop()
	}

	public peek(): T {
		if (this.isEmpty)
			throw new Error("You cannot peek anything, Stack is empty now.")

		return this.nodes[this.nodes.length - 1]
	}

	get top(): number {
		return this.pointer.top
	}

	get bottom(): number {
		return this.pointer.bottom
	}

	set top(index: number) {
		this.pointer.top = index
	}

	set bottom(index: number) {
		this.pointer.bottom = index
	}

	private get next(): number {
		return this.pointer.top + 1
	}

	private get prev(): number {
		return this.pointer.top - 1
	}

	get nextNode(): T {
		if (this.next === this.nodes.length)
			console.warn("/GET_NEXT_NODE: This is the last node.")
		return this.nodes[this.next]
	}

	get prevNode(): T {
		if (this.prev === -1)
			console.warn("/GET_PREV_NODE: This is the first node.")
		return this.nodes[this.prev]
	}

	get roundSet(): T[] {
		return [this.prevNode, this.nodes[this.pointer.top], this.nextNode]
	}
}
