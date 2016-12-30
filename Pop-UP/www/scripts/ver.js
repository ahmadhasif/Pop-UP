function checkUpdate() {
    var ver = "1216"; //version of the app, if any modification is been made,
    //change the value of ver to new one, and
    //also change the $update value of update.php equal to ver.

    $.ajax({
        type: "POST",
        url: "http://purple.com.my/popupapp/update.php",
        data: "ver=" + ver,
        success: function (text) {
            if (text == "updated") {
                document.location.href = "index.html#init-page";
                downloadxml();
            } else {                
                var c = confirm('Your Pop-Up version is outdated!\nPlease update to new version.');
                if (c == true) {
                    console.log("ok");
                    window.location.href = "";
                } else {
                    console.log("cancel");
                    window.close();
                }
                
            }
        }
    });
}