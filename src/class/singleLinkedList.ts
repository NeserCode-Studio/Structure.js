import { SLListNode } from "../types"

export class SLList<T> {
	readonly ID: number
	private nodes: SLListNode[] = []

	constructor(...args: T[]) {
		if (args.length) {
			this.intoSLList(...args)
		}

		this.ID = Math.floor(Math.random() * 1000000000)
	}

	intoSLList(...args: T[]): void {
		args.forEach((element, index) => {
			this.nodes[index] = {
				type: "LinkedList",
				element,
				next: index + 1,
			}
		})

		this.nodes[this.nodes.length - 1].next = -1
	}

	get length(): number {
		return this.nodes.length
	}

	getSequenceList(): T[] {
		const sequenceList: T[] = []
		let pointer = 0

		while (pointer !== -1) {
			sequenceList.push(this.nodes[pointer].element)
			pointer = this.nodes[pointer].next
		}

		return sequenceList
	}

	setElement(index: number, element: T): void {
		this.nodes[index].element = element
	}

	getElement(index: number): T {
		return this.nodes[index].element
	}

	setNext(index: number, next: number): void {
		this.nodes[index].next = next
	}
}
