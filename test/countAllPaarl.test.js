describe('The countAllPaarl function', function(){

    it('count the amount of cars with the number plate that starts with CJ', function(){
        assert.equal(countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'),2)
    });

    it('should count all the cars the starts with CJ', function(){
        assert.equal(countAllPaarl('CJ 900, CJ 678 543, CJ 34567, CJ 67890, CJ 7864'),5)
    });
    it('should count 0 if the string has no values in it', function(){
        assert.equal(countAllPaarl(''),0)
    });
});
