function solution(arr1, arr2) {
    var answer = [[]];
    return answer;
}
function solution(arr1, arr2) {
    var answer = [];
    let width = arr1.length;
    let height=arr1[0].length;
    for(let i=0;i<width;i++){
        let temp=[];
        for(let j=0;j<height;j++){
            let plus = arr1[i][j]+arr2[i][j];
            temp.push(plus);
        }
        
        answer.push(temp);
    }
    return answer;
}