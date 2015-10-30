'use strict';

//  Parse the "20140412" string to date object
function parseDate(string) {
    var y = string.substring(0, 4);
    var m = string.substring(4, 6);
    var d = string.substring(6, 8);
    return new Date(y, m, d);
}


exports.lines = function(data, past_n_days, col, isCumulative) {
    if (past_n_days !== '') {
        var past_n_date = new Date();
        past_n_date.setDate(past_n_date.getDate() - past_n_days);
    }
    var result = [];
    data.forEach(function(tSmry, index) {
        if (!past_n_date || parseDate(tSmry[0]) >= past_n_date) {
            col.forEach(function(val, index) {
                var obj = {
                    date: parseDate(tSmry[0]),
                };
                obj.value = (isCumulative && result[index - 1]) ? tSmry[val] + result[index - 1][result[index - 1].length - 1].value : tSmry[val];
                obj.total_trans = tSmry[8];
                result[index] = result[index] || [];
                result[index].push(obj);
            });
        }
    });
    return result;
};