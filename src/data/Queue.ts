/**
 * Queue representation
 *
 * @export
 * @class Queue
 * @template T
 */
export class Queue<T> {
  private _store: T[] = [];

  /**
   * Creates an instance of Queue.
   * @param {...T[]} defaultValues
   * @memberof Queue
   */
  constructor(...defaultValues: T[]) {
    this._store.push(...defaultValues);
  }

  /**
   * Adds a value to the queue
   *
   * @param {...T[]} val
   * @memberof Queue
   */
  public enqueue(...val: T[]) {
    this._store.push(...val);
  }

  /**
   * Removes the first element from the queue and returns it
   *
   * @return {*}  {(T | undefined)}
   * @memberof Queue
   */
  public dequeue(): T | undefined {
    return this._store.shift();
  }

  /**
   * Checks if the queue is empty
   *
   * @readonly
   * @type {boolean}
   * @memberof Queue
   */
  public get empty(): boolean {
    return this._store.length === 0;
  }
}
