describe('The yearsAgo function', function(){

    it('return how many years ago 1918 was to the current year', function(){
        assert.equal(yearsAgo('1918'),100)
    });
    it('parameter changed to 1900 and should display the amount of years between to the current year', function(){
        assert.equal(yearsAgo('1900'),118)
    });

});
