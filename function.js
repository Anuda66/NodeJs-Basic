const math = (number1, number2, number3, number4) => {
  let a = number1 + number2 * 2; // 2 + 3*2 =8
  if (number3) {
    a = a + number3 - 5; // 8 + 4 = 12, 12 - 5 = 7
  } else if (number4) {
    a = a * number4; // 8 * 5 = 40
  }
  return a;
};
export { math };
