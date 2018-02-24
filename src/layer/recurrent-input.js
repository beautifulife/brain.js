import zeros2D from '../utilities/zeros-2d';
import Base from './base';

export default class RecurrentInput extends Base {
  setDimensions(width, height) {
    this.width = width;
    this.height = height;
    this.weights = new zeros2D(width, height);
    this.deltas = new zeros2D(width, height);
  }
  setRecurrentInput(recurrentInput) {
    this.recurrentInput = recurrentInput;
  }
  predict() {
    this.weights = this.recurrentInput.weights;
  }
  compare() {}
}