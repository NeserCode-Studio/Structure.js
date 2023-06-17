export interface Pointer {
	type: "Stack" | "Queue"
}

export interface StackPointer extends Pointer {
	top: number
	bottom: number
}

export interface QueuePointer extends Pointer {
	front: number
	rear: number
}
