describe('The fromWhere function', function(){

    it('should compare the regestration number to the correct city it belongs too', function(){
        assert.equal(fromWhere('CY'),'Bellville')
    });
    it('should display some other place if the registration number not found', function(){
        assert.equal(fromWhere('CC'),'Some other place!')
    });
});
