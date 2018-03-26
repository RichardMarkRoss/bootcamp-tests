describe('The fromWhere function', function(){

    it('should compare the registration number to the correct city it belongs too', function(){
        assert.equal(fromWhere('CY 321512'),'Bellville')
    });
    it('should display some other place if the registration number not found', function(){
        assert.equal(fromWhere('CC 654654'),'Some other place!')
    });
});
