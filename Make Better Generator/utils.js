'use strict';

module.exports = class Utils {
    static forEach(array, f) {
        let l = array.length;
        for (let i = 0; i < l; i++) {
            f(array[i], i);
        }
    };

    static mapEach(array, f) {
        let l = array.length;
        for (let i = 0; i < l; i++) {
            array[i] = f([array[i]], i);
        };
        return array;
    };

    static forKey(obj, f) {
        let keys = Object.keys(obj);
        this.forEach(keys, (item, index) => {
            f(obj[item], index);
        });
    };

    static matrix2csv(headers, matrix) {
        let delimiter = ',';
        let csv = [];
        csv.push(headers);
        csv = csv.concat(matrix);
        let out = '';
        this.forEach(csv, (item, index) => {
            let tmp = '';
            let l = item.length;
            let i = 0;
            for (i; i < l - 1; i++) {
                tmp += item[i] + delimiter;
            }
            tmp += `${item[i++]}\n`;
            out += tmp;
        });
        return out;
    };
};