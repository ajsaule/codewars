// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

// first try
function DNAStrand(dna) {
  let finalDna = [];
  dna.forEach((helix) => {
    helix === "A"
      ? finalDna.push("T")
      : helix === "C"
      ? finalDna.push("G")
      : null;
  });
  return finalDna;
}
// using ternaries
const DNAStrand = (dna) =>
  dna
    .split("")
    .map((helix) => (helix === "A" ? "T" : helix === "C" ? "G" : null))
    .filter(Boolean)
    .join("");

// final solve, hashmap
const DNAStrand = (dna) => {
  let hashmap = {A: "T", C: "G", T: "A", G: "C"};
  return dna
    .split("")
    .map((e) => hashmap[e])
    .filter((e) => e)
    .join("");
};
