describe('The transportFee function', function(){

    it('if the time of day is morning it should give the amount R20', function(){
        assert.equal(transportFee('morning'),'R20')
    });
    it('if the the time of day is at night the it should display free', function(){
        assert.equal(transportFee('nightshift'), 'free')
    });
    it('if the the time of day is at night the it should display free', function(){
        assert.equal(transportFee(''), 'insert correct time of day')
    });

});
