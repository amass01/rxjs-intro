const rx = require('rx');

const Observable = rx.Observable;

// Example1: Array sum

const source = Observable.interval(400).take(9)
    .map( i => ['1', '1', 'foo', '2', '3', '5', 'bar', '8', '13'][i]);

const result = source
    .map(x => parseInt(x))
    .filter(x => !isNaN(x))
    .reduce((x,y) => x + y);

result.subscribe(x => console.log(x));
