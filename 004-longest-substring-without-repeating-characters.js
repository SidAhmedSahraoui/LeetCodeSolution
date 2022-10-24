/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let al = [];
  let m,
    l = 0;
  for (i = 0; i < s.length; i++) {
    al = [];

    for (j = i; j < s.length; j++) {
      if (!al.includes(s[j])) {
        al.push(s[j]);
        m = al.length;
        if (m > l) {
          l = m;
        }
      } else {
        break;
      }
    }
  }
  return l;
};
