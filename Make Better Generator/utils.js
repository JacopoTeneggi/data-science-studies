'use strict';

module.exports = class Utils {
    static matrix2csv(headers, rowHeads, rows, _options) {
        let options = _options || {};
        let delimiter = options.delimiter || ',';
        let csv = [];
        csv.push(headers);
        for (let i = 0; i < rowHeads.length; i++) {
            let row = [rowHeads[i]].concat(rows[i]);
            csv.push(row);
        }
        let out = "";
        csv.map((item) => {
            let tmp = "";
            let i = 0
            for (i; i < item.length - 1; i++) {
                tmp += item[i] + delimiter;
            }
            tmp += item[i++] + '\n';
            out += tmp;
        });
        return out;
    }
};