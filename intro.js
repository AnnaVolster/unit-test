
module.exports = {solution};

function solution(number){
    if(typeof(number)!='number') return 'ValueError'
    {
        if (Number.isInteger(number)) {
            if (number <= 2000000098) {
                if (number <= 0) {
                    return 'ValueError';
                } else {
                    var sum = 0;
                    for (var i = 3; i < number; i++) {
                        if (i % 3 == 0 || i % 5 == 0) {
                            sum += i;
                        }
                    }
                    return sum;
                }
            }
            return 'RangeError';
        }
    }
}

//console.log(solution('ыыыы'))