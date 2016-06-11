import test from 'ava';
import parse from '../lib/index';

test('should parse named args', t => {
    t.deepEqual(parse('one two three', 'uno dos tres'), {
        one: 'uno',
        two: 'dos',
        three: 'tres'
    });
});

test('should ignore extra args', t => {
    t.deepEqual(parse('one two three', 'uno dos tres quatro'), {
        one: 'uno',
        two: 'dos',
        three: 'tres'
    });
});

test('should set missing args to undefined', t => {
    t.deepEqual(parse('one two three', 'uno dos'), {
        one: 'uno',
        two: 'dos'
    });
});

test('should parse rest arg', t => {
    t.deepEqual(parse('one two three...', 'uno dos tres quatro cinco'), {
        one: 'uno',
        two: 'dos',
        three: 'tres quatro cinco'
    });
});

test('rest arg should not mess with whitespace', t => {
    t.deepEqual(parse('one two three...', 'uno dos  tres   quatro     cinco'), {
        one: 'uno',
        two: 'dos',
        three: 'tres   quatro     cinco'
    });
});

test('rest arg is undefined when missing', t => {
    t.deepEqual(parse('one two three...', 'uno dos'), {
        one: 'uno',
        two: 'dos'
    });
});

test('empty args should return empty obj', t => {
    t.deepEqual(parse('one two three...', ''), {});
});

test('empty pattern should return empty obj', t => {
    t.deepEqual(parse('', 'uno dos tres'), {});
});
