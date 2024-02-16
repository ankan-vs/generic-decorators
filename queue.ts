class Queue<T> {
    //properties
    private elements: T[] = [];
    private size: number;

    //constructor that takes the size of the queue
    constructor(size: number) {
        this.size = size;
    }

    //this method check is the queue is empty or not
    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    //this method check if the queue is full or not
    isFull(): boolean {
        return this.elements.length === this.size;
    }

    //this method push a new element to the queue if it's not full and throw error in case of full
    enqueue(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error("Queue is overflow!!");
        }
        this.elements.push(element);
    }

    //this method pop out the front element from the queue if it's not empty and throw error if empty
    dequeue(): T | undefined {
        if (this.elements.length === 0) {
            throw new Error("Queue is underflow!!");
        }
        return this.elements.shift();
    }

    //this method returns the front element of the queue
    front(): T {
        if (this.elements.length === 0) {
            throw new Error("Queue is empty!!");
        }
        return this.elements[0];
    }
}
