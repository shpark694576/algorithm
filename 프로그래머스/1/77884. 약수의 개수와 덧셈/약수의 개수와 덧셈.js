function solution(left, right) {
    var answer = 0;
    return answer;
}

 
 	
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (yaksu(i) % 2 == 0) answer += i;
        else answer -= i;
    }

    return answer;
}

function yaksu(num) {
    let temp = [];
    for (let i = 0; i <= num / 2; i++) {
        if (num % i == 0) temp.push(i);
    }
    temp.push(num);
    return temp.length;
}