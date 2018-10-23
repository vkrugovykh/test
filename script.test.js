const testing = require('./jest/script.js');
const getType = require('jest-get-type');

describe("Тест от Круговых В.А.", () => {

    it("Функция sum должна возвращать тип данных true", () => {
        const { sumTest: sum } = testing;

        expect(sum(7, 9)).toBe(true);
    });

    it("Переменная num должна быть равна 5", () => {
        const { numTest: num } = testing;

        expect(num).toEqual(5);
    });

    it("Функция each вернет тип данных array, хотя должна вернуть object", () => {
        const { eachTest: each } = testing;
        
        expect(getType(each)).toEqual('array');
    });

    it("Функция each length = 5", () => {
        const { eachTest: each } = testing;

        expect(each).toHaveLength(5);
    });
});