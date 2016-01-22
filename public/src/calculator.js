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
    collatzCache: [],
    collatz: function (x) {
        var i,
            maxStart = 0,
            max = 0,
            copy = 0;

        collatzCache = new Array(x - 1);

        for (var start = 2; start <= x; start++) {
            if (collatzCache[start - 2] > 0)
                continue;

            i = 0;
            copy = start;
            while (copy > 1 && i < x) {
                if (copy <= x && collatzCache[copy - 2] > 0) {
                    i += collatzCache[copy - 2];
                    break;
                }

                if (isEven(copy))
                    copy /= 2;
                else
                    copy = copy * 3 + 1;
                i++;
            }
            if (i > max) {
                maxStart = start;
                max = i;
            }
            collatzCache[start - 2] = i;
        }
        return maxStart;
    }
};

function isEven(x) {
    return (x & 1) == 0;
}