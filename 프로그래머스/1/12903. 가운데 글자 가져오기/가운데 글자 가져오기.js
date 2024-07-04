function solution(s) {
    var answer = '';
    return answer;
}
function solution(s) {
  var answer = '';
  const mid = s.length / 2;
  if (s.length % 2 !== 0) {
    answer = s[Math.floor(mid)];
  } else {
    answer = s[mid - 1] + s[mid];
  }
  return answer;
}