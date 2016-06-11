function head(args) {
    return args.substr(0, args.search(/\s+|$/));
}

function tail(args) {
    return args.replace(/^.+?\b\s*/, '');
}

function parse(pattern, args) {
    pattern = pattern.split(/\s+/);
    args = args.trim();

    var i = 0;
    var parsed = {};

    while(pattern[i] && args) {
        // Rest argument
        if (pattern[i].substr(-3) === '...') {
            parsed[pattern[i].substr(0, pattern[i].length - 3)] = args;
            args = '';
        }
        // Single argument
        else {
            parsed[pattern[i]] = head(args);
            args = tail(args);
        }

        i++;
    }

    return parsed;
}

module.exports = parse;
