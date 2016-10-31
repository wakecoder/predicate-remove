const expect = require('chai').expect;
const predicateRemove = require ('./index.js');
const remove = predicateRemove.remove;
const monkeyPatch = predicateRemove.monkeyPatch;

describe('remove', () => {
    it('should remove one item from the array by default', () => {
        const testArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        const removed = remove(testArray, e => e.id == 3);
        expect(removed[0].id).to.equal(3);
        expect(testArray.length).to.equal(3);
    });
    it('should remove all matches if removeAll is true', ()=> {
        const testArray = [{ id: 3 }, { id: 6 }, { id: 3 }, { id: 3 }];
        const removed = remove(testArray, e => e.id == 3, true);
        expect(removed.length).to.equal(3);
        expect(testArray.length).to.equal(1);
    });
    it('should not remove anything if there are no matches ', () => {
        const testArray = [{ id: 3 }, { id: 6 }, { id: 3 }, { id: 3 }];
        const removed = remove(testArray, e => e.id == 10);
        expect(removed.length).to.equal(0);
        expect(testArray.length).to.equal(4);
    });
})

describe ('monkeyPatch',()=> {
    it ('should add remove to the Array prototype',()=> {
        monkeyPatch();
        expect (Array.prototype.remove).to.not.equal(undefined);
        const testArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
        const removed = testArray.remove(e => e.id == 3);
        expect(removed[0].id).to.equal(3);
        expect(testArray.length).to.equal(3);
    })
})