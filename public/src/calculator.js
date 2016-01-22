var calculator = {
    add: function (x, y) {
        return x + y;
    },
    substract: function (x, y) {
        return x - y;
    },
    square: function (x) {
        return x * x;
    },
    collatz: function (x) {
        var i,
            maxStart = 0,
            max = 0,
            copy = 0,
            cache = new Array(x - 1);

        for (var start = 2; start <= x; start++) {
            if (cache[start - 2] > 0)
                continue;

            i = 0;
            copy = start;
            while (copy > 1 && i < x) {
                if (copy <= x && cache[copy - 2] > 0) {
                    i += cache[copy - 2];
                    break;
                }

                if (this.isEven(copy))
                    copy /= 2;
                else
                    copy = copy * 3 + 1;
                i++;
            }
            if (i > max) {
                maxStart = start;
                max = i;
            }
            cache[start - 2] = i;
        }
        return maxStart;
    },
    isEven: function (x) {
        return (x & 1) == 0;
    }
};