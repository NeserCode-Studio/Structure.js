import { QueuePointer } from "../types"

export class Queue<T> {
	readonly ID: number
	private members: T[] = []
	private maxSize
	private pointer: QueuePointer = {
		type: "Queue",
		front: -1,
		rear: -1,
	}

	constructor(...args: T[]) {
		this.pointer.front = 0
		this.pointer.rear = -1
		if (args.length) {
			this.maxSize = args.length
			this.intoQueue(...args)
		}

		this.ID = Math.floor(Math.random() * 1000000000)
	}

	private intoQueue(...args: T[]): void {
		if (this.pointer.rear === this.maxSize - 1) {
			console.warn(
				"/INTO_QUEUE: Queue is full, cannot add more members into queue."
			)
			return
		}

		args.forEach((arg) => {
			this.push(arg)
		})
	}

	get length(): number {
		return this.members.length
	}

	get isEmpty(): boolean {
		return this.members.length === 0
	}

	get isFull(): boolean {
		return this.members.length === this.maxSize
	}

	get front(): T {
		return this.members[this.pointer.front]
	}

	get rear(): T {
		return this.members[this.pointer.rear]
	}

	set MaxSize(size: number) {
		if (size < this.members.length) {
			this.members.length = size
			console.warn(
				"/SET_MAXSIZE: Queue size is smaller than the current queue length, queue will be truncated."
			)
		} else this.members.length = size

		this.maxSize = size
	}

	push(item: T): number {
		if (this.pointer.rear - this.pointer.front === this.maxSize - 1) {
			console.warn(
				`Can not push anything: Queue is full, pushing ${item} failed.`
			)
			return
		}
		this.pointer.rear++
		this.members[this.pointer.rear] = item
		return this.pointer.rear
	}

	pop(): T {
		if (this.isEmpty) throw new Error("Queue is empty.")
		const member = this.members[this.pointer.front]
		this.pointer.front++
		return member
	}

	clear(): void {
		this.members = []
		this.pointer.front = -1
		this.pointer.rear = -1
	}

	forEach(callback: (member: T, index: number) => void): void {
		this.members.forEach(callback)
	}
}
