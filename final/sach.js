let cstring = window.location.href
let c = new URL(cstring)
// console.log(c)
// console.log(c.id)
var d = c.searchParams.get("id");
console.log(d)