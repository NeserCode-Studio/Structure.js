import type { Pointer } from "../types"

export class Stack<T> {
	private nodes: T[] = []
	private maxSize: number = 42
	private pointer: Pointer = {
		top: 0,
		bottom: 0,
	}

	constructor(...args: T[]) {
		if (args.length) {
			this.intoStack(...args)
			this.MaxSize = args.length
		}

		this.pointer.top = -1
		this.pointer.bottom = -1
	}

	get length(): number {
		return this.nodes.length
	}

	get nodeLength(): number {
		return this.nodes.filter((node) => node !== undefined).length
	}

	get isEmpty(): boolean {
		return this.nodes.length === 0
	}

	set MaxSize(size: number) {
		if (size < this.nodes.length) {
			this.nodes.length = size
			console.warn(
				"Stack size is smaller than the current stack length, stack will be truncated."
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
	}

	public clear(): void {
		this.nodes = []
	}

	public push(Node: T): number {
		if (this.nodes.length === this.maxSize)
			throw new Error(
				`Stack is full, you cannot push anything. Pushing ${Node.toString()} failed.`
			)

		// find the first empty index
		const index = this.nodes.findIndex((node) => node === undefined)

		if (index !== -1) {
			this.nodes[index] = Node
			return index
		}

		return this.nodes.push(Node)
	}

	public pop(): T {
		if (this.isEmpty)
			throw new Error("You cannot pop anything, Stack is empty now.")

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
			console.warn("This is the last node.")
		return this.nodes[this.next]
	}

	get prevNode(): T {
		if (this.prev === -1) console.warn("This is the first node.")
		return this.nodes[this.prev]
	}
}
