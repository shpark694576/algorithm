function solution(numbers) {
    var answer = -1;
    return answer;
}
 
 	
function solution(numbers) {
    let anwser = 0;
    let full = Array.from({ length:9}, (_, i) => i + 1);
    let nunarr = full.filter(num => !numbers.includes(num));
    for (let x=0; x<nunarr.length; x++){
        anwser += nunarr[x]
    }
    return anwser
}