var pageHome = (function () {
    var self = this; this.Name = "pageHome";
    var vm; /* ViewModel for the Page */

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Name:        onBackKeyDown()
    // Scope:       Public
    // Description: The PhoneGap backbutton() event fires This is an event that fires when the user presses the back button. 
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function onBackKeyDown() {
        // Handle the back button
        console.info(self.Name + ".onBackKeyDown()");
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Name:        onDeviceReady()
    // Scope:       Public
    // Description: The PhoneGap deviceready() event fires once PhoneGap has fully loaded. 
    //              After the device has fired, you can safely make calls to PhoneGap function.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function onDeviceReady() {
        console.info(self.Name + ".onDeviceReady()");
        try {
            FastClick.attach(document.body);
            vm = new ViewModel();
            ko.applyBindings(vm);
        }
        catch (err) {
            ex.log(err, self.Name + ".initialize()");
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Name:        ViewModel()
    // Scope:       Private
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function ViewModel() {
        console.info("HomePage ViewModel - Initializing");

        this.click1 = function () { };
        this.click2 = function () { };
        console.info("HomePage ViewModel - Initialized");
    }

    /*** Reveals the Public Properties & Methods ***/
    return {
        onBackKeyDown: onBackKeyDown,
        onDeviceReady: onDeviceReady
    };
}());

$(function () {
    document.addEventListener("deviceready", pageHome.onDeviceReady(), false);
    document.addEventListener("backbutton", pageHome.onBackKeyDown, false);
});
