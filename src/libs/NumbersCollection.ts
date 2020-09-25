import { ISortable } from '../types/sortable.types';
import { Sorter } from './Sorter';


export class NumbersCollection extends Sorter implements ISortable {

  constructor(public data: number[]) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  /**
   * Compares two elements
   * @param leftIndex left side of the pair
   * @param rightIndex right side of the pair
   * @returns boolean that tell us if the elements needs to be swapped
   */
  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  /**
   * Swap two elements in our this.data array, in place
   * @param leftIndex 
   * @param rightIndex 
   */
  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }


}