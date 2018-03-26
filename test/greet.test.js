describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal(greet('Andrew'),'Hello, Andrew')
    });
    it('should greet Karen correctly', function(){
        assert.equal(greet('Karen'), 'Hello, Karen')
    });
    it('should greet empty string as Hello, ', function(){
        assert.equal(greet(''), 'Hello, ')
    });
});
