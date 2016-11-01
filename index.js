let remove = function (array, predicate, removeAll) {
    const removed = [];
    const getIndex = removeAll ? i=>i : i=>array.length - i -1; //Loop backwards if removing all matches. 
    for (let i = array.length - 1; i >= 0; i--) {
        let index = getIndex (i);
        if (predicate(array[index])) {
            removed.push(array.splice(index, 1)[0]);
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