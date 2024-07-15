function solution(price, money, count) {
    var answer = -1;

    return answer;
}
function solution(price, money, count) {
    var totalFee = 0;

    for (var i = 1; i <= count; i++) {
        totalFee += price * i;
    }

    var insufficientMoney = totalFee - money;

    return Math.max(0, insufficientMoney);
}