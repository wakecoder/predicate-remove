let remove = function (array, predicate, removeAll) {
    const removed = [];
    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate(array[i])) {
            removed.push(array.splice(i, 1)[0]);
            if (!removeAll) { return removed; }
        }
    }
    return removed;
}
module.exports = {
    monkeyPatch: function () {
        Array.prototype.remove = function (predicate, removeAll) {
           return  remove(this, predicate, removeAll);
        }
    },
    remove: remove
};