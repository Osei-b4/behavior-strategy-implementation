export {countUp} from './count-up.test'

function countUp(max = 0) {
    if (!Number.isInteger(max) || max < 0) {
      throw new Error('max must be a non-negative integer.');
    }
  
    const result = [];
    for (let i = 0; i <= max; i++) {
      result.push(i);
    }
    return result;
  }

