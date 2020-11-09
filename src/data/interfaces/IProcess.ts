import { Node } from '../Node';

export interface IProcess<T, V> {
  /**
   *
   *
   * @param {Node<T, V>} node
   * @return {*}  {boolean}
   * @memberof IProcess
   */
  process(node: Node<T, V>): boolean;
}
