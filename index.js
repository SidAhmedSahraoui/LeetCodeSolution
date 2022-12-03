
// closures
function z() {
    var b = 90;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b)
        }
        y();
    }
    x();
}

z();