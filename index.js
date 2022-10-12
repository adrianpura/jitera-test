const arr = ["B$u$i$ld", "$t$$h$e", "N$e$x$t", "E$$ra", "$$o$f$", "S$$of$t$wa$r$e", "De$$ve$l$op$me$n$t"]

function arrToString(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].replaceAll('$', '').toUpperCase();
    }
    return arr.join(" ")
}
console.log(arrToString(arr)); //BUILD THE NEXT ERA OF SOFTWARE DEVELOPMENT
