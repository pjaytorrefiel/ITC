function addListeners() {
    document.getElementById("CtoF").addEventListener("click", ComputeCtoF);
    document.getElementById("FtoC").addEventListener("click", ComputeFtoC);
    document.getElementById("MtoF").addEventListener("click", ComputeMtoF);
    document.getElementById("FtoM").addEventListener("click", ComputeFtoM);
}
    function ComputeCtoF() {
        let celsius1 = document.getElementById("tempInput").value*1;
        let result1;

        result1 = celsius1*(9/5) + 32;
        document.getElementById("tempResult").value = result1.toFixed(2);
    }

    function ComputeFtoC() {
        let fahrenheit1 = document.getElementById("tempInput").value*1;
        let result1;

        result1 = (fahrenheit1-32)*(5/9);
        document.getElementById("tempResult").value = result1.toFixed(2);
    }

    function ComputeMtoF() {
        let meters1 = document.getElementById("meaInput").value*1;
        let result1;

        result1 = meters1 * 3.28084;
        document.getElementById("meaResult").value = result1.toFixed(2);
    }

    function ComputeFtoM() {
        let feet1 = document.getElementById("meaInput").value*1;
        let result1;

        result1 = feet1 / 3.28084;
        document.getElementById("meaResult").value = result1.toFixed(2);
    }

    (() => {
        addListeners();
    })();