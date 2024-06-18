function solution(n) {
    var answer = 0;
    return answer;
}

function solution(n) {
  let answer = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return Number(answer);
}