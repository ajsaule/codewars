// https://www.codewars.com/kata/5890d8bc9f0f422cf200006b/train/javascript

function excludingVatPrice(price) {
  if (!price) return -1;
  let vat = price * 0.15;
  return Math.ceil(price - vat);
}
