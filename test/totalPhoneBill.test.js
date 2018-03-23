describe('The totalPhoneBill function', function(){

    it('should test the total amount of call', function(){
        assert.equal(totalPhoneBill('call'),'R2.75')
    });
    it('should test the total amount of (call,sms) and add the amount', function(){
        assert.equal(totalPhoneBill('call, sms'),'R3.40')
    });
    it('should test the total amount of (call,sms,call) and give the total R6.15', function(){
        assert.equal(totalPhoneBill('call, sms, call'),'R6.15')
    });
    it('should test the total amount of the given funtion and display the amount R7.45', function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'),'R7.45')
    });
});
