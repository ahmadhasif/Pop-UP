// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        //cordova.plugins.email.isAvailable(
        //    urischeme, function (isAvailable, withScheme) {
        //        // alert('Service is not available') unless isAvailable;
        //    });
        
        
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        datePicker();
        apps();
        //window.plugins.toast.show('This application is still in development state, use with cautious', 'short', 'center', function (a) { console.log('toast success: ' + a) }, function (b) { alert('toast error: ' + b) });
        
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    function onBackKeyDown(e) {
        e.preventDefault();
    }
} )();