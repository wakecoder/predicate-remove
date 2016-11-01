let remove = function (array, predicate, removeAll) {
    const removed = { values: [], indices: [] };
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            removed.indices.push(i);
            removed.values.push(array[i]);
            if (!removeAll) { break; }
        }
    }
    while (removed.indices.length > 0) { 
        array.splice(removed.indices.pop(), 1); } // start from the last match and remove from the array
    return removed.values;
}
module.exports = {
    monkeyPatch: function () {
        Array.prototype.remove = function (predicate, removeAll) {
            return remove(this, predicate, removeAll);
        }
    },
    remove: remove
};