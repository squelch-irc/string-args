# string-args [![Build Status](https://travis-ci.org/rahatarmanahmed/string-args.svg?branch=master)](https://travis-ci.org/rahatarmanahmed/string-args)
Simple parser for space delimited arguments, like the arguments of an [IRC command](https://github.com/squelch-irc/squelch).

## Installing
`npm install string-args`

## Example usage
```js
var parse = require('string-args');

// 1st parameter is a list of names
// 2nd parameter is the actual string of arguments
// string-args will attempt to map the names to their corresponding arguments
parse('one two three', 'uno dos tres')
parse('one two three', 'uno dos tres quatro') // extra args ignored
/* These both output:
{
    one: 'uno',
    two: 'dos',
    three: 'tres'
}
*/


// Missing arguments will be undefined
parse('one two three', 'uno dos')
/* Output:
{
    one: 'uno',
    two: 'dos'
}
*/


// Use '...' at the end of the last name to get the rest of the arguments
parse('one two three...', 'uno dos tres quatro cinco')
/* Output:
{
    one: 'uno',
    two: 'dos',
    three: 'tres quatro cinco'
}
*/
```
