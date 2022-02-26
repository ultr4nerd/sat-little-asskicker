const LIMITS = [
  [0.0, 0.0, 0.0, 0.0],
  [0.01, 644.58, 0.0, 1.92],
  [644.59, 5_470.92, 12.38, 6.40],
  [5_470.93, 9_614.66, 321.26, 10.88],
  [9_614.67, 11_176.62, 772.10, 16.00],
  [11_176.63, 13_381.47, 1_022.01, 17.92],
  [13_381.48, 26_988.50, 1_417.12, 21.36],
  [26_988.51, 42_537.58, 4_323.58, 23.52],
  [42_537.59, 81_211.25, 7_980.73, 30.00],
  [81_211.26, 108_281.67, 19_582.83, 32.00],
  [108_281.68, 324_845.01, 28_245.36, 34.00],
  [324_845.02, Number.POSITIVE_INFINITY, 101_876.90, 35.00],
]

export function calculateISR(totalRevenue) {
  for (const [lowerLimit, upperLimit, fixedFee, percentageOverExcess] of LIMITS) {
    if (totalRevenue >= lowerLimit && totalRevenue <= upperLimit) {
      const difference = totalRevenue - lowerLimit;
      const rate = (difference * percentageOverExcess) / 100;
      return rate + fixedFee;
    }
  }
}

export function calculateIVA(totalRevenue) {
  return totalRevenue * 0.16
}
