"use strict";
var Methods;
(function (Methods) {
    Methods["Get"] = "get";
    Methods["Post"] = "post";
})(Methods || (Methods = {}));
function getData(url, methods) {
    return `${methods} - ${url}`;
}
console.log(getData('24', Methods.Get));
// npx tsc
