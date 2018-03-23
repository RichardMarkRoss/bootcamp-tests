describe('The yearsAgo function', function(){

    it('return how many years ago 1918 was to the current year', function(){
        assert.equal(yearsAgo('1918'),100)
    });
    it('parameter changed to 1900 and should display the amount of years between to the current year', function(){
        assert.equal(yearsAgo('1900'),118)
    });
    it('if you put in no value it will display the current date, it compares the current date to 0', function(){
        assert.equal(yearsAgo(''),2018)
    });

});
