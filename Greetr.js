// IIFE to wrap code within a secure context
(function(global, $) {
    var Greetr = function(firstName, lastName, language) {
        //we return a new object to avoid user to create using new every time;
        return new Greetr.init(firstName, lastName, language);
    };

    Greetr.prototype = {};

    Greetr.init = function(firstName, lastName, language){
        // set default for variables if not sent by parameter
        var self = this;
        self.firstName = firstName || "John";
        self.lastName = lastName || "Doe";
        self.language = language || "pt";
    };

    // we set te prototype of all objects created by our init function to our default object prototype
    Greetr.init.prototype = Greetr.prototype;

    //we attach our object to the global object so we can use it anywhere
    global.Greetr = global.G$ = Greetr;

})(window, jQuery);