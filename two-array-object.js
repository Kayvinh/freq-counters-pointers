"use strict";
// add whatever parameters you deem necessary & write docstring
/**
 * Accepts 2 params keys, and values, and sets keys to value
 * if values length is greater than keys length, set keys value to null
 * @param {*} keys is array
 * @param {*} values is array
 * @returns object with keys and value pair
 */

function twoArrayObject(keys, values) {
    let twoObject = {};

    for (let i = 0; i < keys.length; i++) {
        if (values[i] === undefined) {
            console.log('check if ran');
            twoObject[keys[i]] = null;
        } else {
            twoObject[keys[i]] = values[i];
        }
    }

    return twoObject;
}
