var pageEnroll = (function () {
    var self = this; this.Name = "pageEnroll";
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

    function tackPicture() {
        try {
            navigator.customCamera.getPicture(filename, function success(fileUri) {
                alert("File location: " + fileUri);
            }, function failure(error) {
                alert(error);
            }, {
                quality: 80,
                targetWidth: 120,
                targetHeight: 120
            });
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
        console.info("Enroll ViewModel - Initializing");

        this.click1 = function () { tackPicture() };
        this.click2 = function () { alert("ToDo: Scan Front of ID"); };
        this.click3 = function () { alert("ToDO: Scan back of ID"); };
        this.HomePage = function () { window.location = 'index.html'; return false; };

        console.info("EnrollViewModel - Initialized");
    }

    /*** Reveals the Public Properties & Methods ***/
    return {
        onBackKeyDown: onBackKeyDown,
        onDeviceReady: onDeviceReady
    };
}());

$(function () {
    document.addEventListener("deviceready", pageEnroll.onDeviceReady(), false);
    document.addEventListener("backbutton", pageEnroll.onBackKeyDown, false);
});
