describe('demo calC test', function(){

    it('addition test',function(){

        browser.get('http://juliemr.github.io/protractor-demo/');
        browser.sleep(2000);
        
        element(by.model('first')).sendKeys('13');
        browser.sleep(2000);
        
        element(by.model('second')).sendKeys('13');
        browser.sleep(2000);

        element(by.css('[ng-click="doAddition()"]')).click();
        
        var result = element(by.cssContainingText('.ng-binding', '26'));
        
        expect(result.getText()).toEqual('26');

        browser.sleep(2000)


    })

})