'use strict';

module.exports = class Utils {
    static matrix2csv(headers, rowHeads, rows, options) {
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
            for (let i = 0; i < item.length; i++) {
                tmp += item[i] + delimiter;    
            }
            out += tmp + '\n';
        });
        return out;
    }
}