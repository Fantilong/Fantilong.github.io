/*
 * @Author: your name
 * @Date: 2020-06-19 19:19:38
 * @LastEditTime: 2020-06-19 21:30:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /coding_practice/codewar/myFuc.js
 */
(function(w) {
    /**
     * @description: 求数字的位数和，指导位数为1 ex: 1234 --> 10 --> 1
     * @param {Number} 
     * @return: {Number}
     */
    function digital_root1(n) {
        // 123345 --> 18 --> 9
        var plus = 0;

        for (var i = 0, len = (n + '').length; i < len; i++) {
            plus += n % 10;
            n = parseInt(n / 10);
        }

        if (plus < 10) {
            return plus
        } else {
            return digital_root1(plus);
        }
    }

    /**
     * @description: 求数字的位数和，指导位数为1 ex: 1234 --> 10 --> 1
     * @param {Number} 
     * @return: {Number}
     */
    function digital_root2(n) {
        // 123345 --> 18 --> 9
        var plus = 0;

        if (plus % 10 == plus) {
            return plus;
        } else {
            plus += f1(n);
        }

        var f1 = function(n1) {
            return n1 % 10;
        }
    }

    w.digital_root1 = digital_root1;
    w.digital_root2 = digital_root2;
}(window));