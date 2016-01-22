## Information
In this challenge we want a few basic unit tests to be made in the Jasmine test framework.

In [calculator.js](./public/src/calculator.js) we provided a simple calculator with a few functions;

 - `calculator.add(x, y)` which adds y to x (x + y)
 - `calculator.substract(x, y)` which substracts y from x (x - y)
 - `calculator.square(x)` which squares x (x^2)
 - `calculator.collatz(x)` which gets the longest collatz sequence starting from below x or x (1 < n <= x)
 - `calculator.isEven` which checks if x is an even number

You can see the Jasmine test results in the [index.html](./public/index.html).

## Step 1, basic equality
When we open [index.html](./public/index.html) we can see the following text `10 specs, 4 failures`, this means out of 10 specs, 4 failed. Under this text you can see `Spec List` please click on it.

Under the `Spec List` we should be able to see the following;

- Add
    - SPEC HAS NO EXPECTATIONS 1 + 1 does equal 2
    - SPEC HAS NO EXPECTATIONS 1 + -1 does not equal 2
- Substract
    - SPEC HAS NO EXPECTATIONS 1 - 1 does equal 0
    - SPEC HAS NO EXPECTATIONS 1 - -1 does not equal 0
- Square
    - 4 squared is the square of 4
    - -4 squared is the square of 4
    - -4 squared is the square of -4
    - -4 squared is not -16
- Collatz
    - collatz(1e5) must equal 77031
    - must be called

As you can see, under `App` it is saying `SPEC HAS NO EXPECTATIONS`, we will be adding the expectations for it.

Open [calculator.spec.js](./public/spec/calculator.spec.js) and find `"1 + 1 does equal 2"`. Currently it should look like this;
```JavaScript
it("1 + 1 does equal 2", function () {
        
});
```

In the empty function we will be adding the following code.
```JavaScript
expect(calculator.add(1, 1)).toBe(2);
```

This code means, that we expect something to be something else, for example.
```JavaScript
expect(0).toBe(1);
```
Would mean that we expect 0 to be 1, which will fail as 0 is not 1. (you can try this out yourself!)

Now we will do the same for `"1 + -1 does not equal 2"` but this time the code should be;
```JavaScript
expect(calculator.add(1, -1)).not.toBe(2);
```

As you can see, this time we added `.not`, which means we expect it not to be true, thus false. For example,
```JavaScript
expect(0).not.toBe(1);
```
Will be true, as 0 is not 1.

Now if you did everything correct, the end result should look like this;
```JavaScript
it("1 + 1 does equal 2", function () {
    expect(calculator.add(1, 1)).toBe(2);
});

it("1 + -1 does not equal 2", function () {
    expect(calculator.add(1, -1)).not.toBe(2);
});
```

And if we look at the spec list ([index.html](./public/index.html)) again under `Add` we should now see this;

- 1 + 1 does equal 2
- 1 + -1 does not equal 2

## Step 2, do it yourself
Now, just like in Step 1, we also have `Substract` which has the `"1 - 1 does equal 0"` spec and `"1 - -1 does not equal 0"` spec.

For this step, please write your own code in the same way as we did for Step 1. 
If everything went correctly, you will now see the following under `Substract` in the spec list.

- 1 - 1 does equal 0
- 1 - -1 does not equal 0

Also, the 10 specs, and 4 failures should still be unchanged.

## Step 3, custom matcher
We have already use the toBe matcher and more existing matchers exist and can be found in the documentation.

But in this step we will make own matcher, which will test if a number is the square of another number.

First, under `describe("Square", function () {` we will add the following code.
```JavaScript
beforeEach(function () {
});
```

This will run anything inside the function before every test. Inside the function we will call the following code.
```JavaScript
jasmine.addMatchers({
});
```
This will assign new matchers to the Jasmine framework, but as it is currently empty, it wont do anything.

Therefore will add the following code, inside the addMatchers function, which is the actual custom matcher;
```JavaScript
toBeSquareOf: function () {
    return {
        compare: function (actual, expected) {
            return {
                pass: expected * expected == actual
            };
        }
    };
}
``` 

After finishing this step, Jasmine should now say the following `10 specs, 1 failure`. So we lost 3 failures! way to go!

## Step 4, spying
Now in this last step we will follow the footsteps of James Bond and start spying on certain functions.

By 'spying' a function we can tell how many times it has been called and with what parameters. 
In this case, we are only interested in the amount of times the `calculator.isEven` function is called.

Creating a spy to monitor or function is actually quite simple and can be done with the following code;
```JavaScript
spyOn(calculator, "isEven");
```

This will create a spy on the `calculator` object on the `isEven` function.

But when we look at the output Jasmine creates, we can still see that there is one failure left;
```
Expected spy isEven to have been called 12 times. It was called 30 times.
```

This is because of the fact that the spy removes the original code of isEven, rendering it useless.
To prevent it, we can change the code to the following;
```JavaScript
spyOn(calculator, "isEven").and.callThrough()
```

This will make the spy function also execute the original function, so it wont break any code.

## Congratulations
If everything went correctly, all failures should now be gone, meaning you passed this challenge!

If you still want to read more about Jasmine, then you can always read the [Jasmine Documentation](http://jasmine.github.io/2.4/introduction.html).