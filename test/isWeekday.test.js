describe('The isWeekday function', function(){

    it('should test false if week day starts with S', function(){
        assert.equal(isWeekday('Saterday'),false)
    });
    it('should test true if week day doesnt starts with S', function(){
        assert.equal(isWeekday('Monday'),true)
    });

});
