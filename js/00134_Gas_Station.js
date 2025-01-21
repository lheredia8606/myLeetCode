/**
There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station 
to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

Given two integer arrays gas and cost, return the starting gas station's index if you can travel around 
the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

var canCompleteCircuit = function (gas, cost) {
  let difference = cost.map((element, index) => gas[index] - element);
  for (let i = 0; i < difference.length; i++) {
    if (difference[i] === 0 && difference.length > 1) {
      continue;
    }
    let gasInTank = 0;
    for (let j = 0; j < difference.length; j++) {
      gasInTank += difference[(i + j) % difference.length];
      if (gasInTank < 0) {
        break;
      }
      if (j === difference.length - 1) {
        return i;
      }
    }
  }
  return -1;
};
