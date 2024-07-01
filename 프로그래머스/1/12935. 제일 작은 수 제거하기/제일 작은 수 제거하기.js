function solution(arr) {
    var answer = [];
    return answer;
}
function solution(arr) {
    var answer = [];
    var min = Math.min.apply(null, arr);
    
    answer = arr.filter((element) => element !== min);
    
    if(arr.length == 1) {
        answer = [-1];
    }

    return answer;
}