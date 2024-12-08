function addListeners() {
    document.getElementById("calculate").addEventListener("click", compute);
}
    function compute() {
        let input1 = document.getElementById("input").value*1;
        let factorialR;
        

        let x = 1;
        let result = 1;
        while (x <= input1) {
            result *= x;
            x++;
        }
        document.getElementById("factorial1").innerHTML = `The factorial of ${input1} is ${result}`;


        let y = 1;
        let result1 = 0;
        do {
            result1 += y;
            y++;
        } while (y <= input1)
        document.getElementById("sum2").innerHTML = `The sum of the first ${input1} numbers is ${result1}`;
        
        let temp = 0;
        for (let z = 1; z <= input1; z++) {
            temp += z;
        }
        let result2 = temp / input1;
        document.getElementById("average3").innerHTML = `The average of the first ${input1} numbers is ${result2.toFixed(2)}`;
    }

    (() => {
        addListeners();
    })();