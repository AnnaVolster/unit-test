const {solution} = require('./intro')

describe( ' Solution: function must return the sum of numbers less than the given multiple of 3 and/or 5 ', () => {

    describe("Positive tests", function () {
        test('10 to 23', () => {
            expect(solution(10)).toBe(23)
        })

        test('20 to 78', () => {
            expect(solution(20)).toBe(78)
        })

        test('200 to 9168', () => {
            expect(solution(200)).toBe(9168)
        })

        test('2 to 0', () => {
            expect(solution(2)).toBe(0)
        })
        test('3 to 0', () => {
            expect(solution(3)).toBe(0)
        })
        test('4 to 0', () => {
            expect(solution(4)).toBe(3)
        })
    })

    describe("Negative cases", function () {
        test('-5 to ValueError', () => {
            expect(solution(-5)).toBe('ValueError')
        })
        test('gghh to ValueError', () => {
            expect(solution('gghh')).toBe('ValueError')
        })
    })

    describe("LimitBounds cases", function () {
        test('-1 to ValueError', () => {
            expect(solution(-1)).toBe('ValueError')
        })
        test('0 to ValueError  ', () => {
            expect(solution(0)).toBe('ValueError')
        })
        test('2000000098 to 933333425650058500', () => {
            expect(solution(2000000098)).toBe(933333425650058500)
        })
        test('2000000099 to RangeError', () => {
            expect(solution(2000000099)).toBe('RangeError')
        })
    })
})

/*
    describe("random cases", function() {

        function randint(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function _solution(number){
            let sum = 0;

            for(let i = 1; i< number; i++){
                if(i % 3 == 0 || i % 5 == 0){
                    sum += i
                }
            }
            return sum;
        }

        for(let i = 0; i < 100; i++) {
            let rand = randint(0, 10**randint(1, 5)) - 100
            test('${i}', () => {
                expect(solution(rand)).toBe(_solution(rand))
            })
        }
    })

})
*/
