describe('countRegNumber', function(){

    it('Should return the amount of registration numbers in the array', function(){
        assert.equal(countRegNumber('CA 52415,CY 786587, CJ 87248'),3)
    });

    it('add a registration number in the array and should count 4', function(){
        assert.equal(countRegNumber('CA 52415,CY 786587, CJ 87248,CY 45681'),4)
    });
});
