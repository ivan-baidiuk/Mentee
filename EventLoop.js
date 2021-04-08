let i = 0;
const Interval = setInterval(() => {
  i++
  console.log(i)
  i === 20 ? clearInterval(Interval) : Interval
}, 100)

let j = 0;
const Timeout = setTimeout( function t() {
  j++;
  console.log(j);
  j === 20 ? clearTimeout(Timeout) : setTimeout(t, 100)
}, 100)