export interface Pointer {
	type: "Stack" | "Queue" | "LinkedList"
}

export interface StackPointer extends Pointer {
	top: number
	bottom: number
}

export interface QueuePointer extends Pointer {
	front: number
	rear: number
}

export interface SLListPointer extends Pointer {
	next: number
}

export interface DLListPointer extends SLListPointer {
	prev: number
}

export interface SLListNode extends SLListPointer {
	element: any
}
