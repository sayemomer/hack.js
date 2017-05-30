function findLongestWord(str) {
  var newarry=[];
  newarry=str.split(" ").map((x)=>x.length);
  return Math.max(...newarry);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
