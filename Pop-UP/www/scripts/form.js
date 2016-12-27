function formsubmit(name, id) {
    console.log('submit form');
    // Initiate Variables With Form Content
    //property data
    var property = name;
    var propertyId = id;       

    $("#send-req-btn").click(function () {
        console.log("send-requset-btn-clicked");
        if ($("#datetimepicker6").val() == "") {
            alert("Please select the start date");
        } else if($("#datetimepicker7").val()== ""){
            alert("Please select the end date")
        } else if($("#client-name").val()==""){
            alert("Please fill in your name");
        } else if ($("#company-name").val() == "") {
            alert("Please state your company name");
        } else if ($("#business-type").val() == "") {
            alert("Please select your business type");
        } else if ($("#job-title").val() == "") {
            alert("Please state your job title");
        } else if ($("#client-tel").val() == "") {
            alert("Please enter your phone number");
        } else if ($("#client-email").val() == "") {
            alert("Please enter your email");
        } else {
            formSend(property, propertyId);
        }

    });
    
}

function formSend(property, propertyId) {

    var dateFrom = $("#datetimepicker6").val();
    var dateTo = $("#datetimepicker7").val();

    //user data
    var cname = $("#client-name").val();
    var comp = $("#company-name").val();
    var business = $("#business-type").val();
    var job = $("#job-title").val();
    var tel = $("#client-tel").val();
    var mail = $("#client-email").val();

    var msgBody = 'You receive this e-mail because you have made a request from our Pop-UP application.<br/><br/><br/>'
               + 'Details of Request:<br/>'
               + '==============================<br/><br/>'
               + 'Property: ' + property + '<br/>'
               + 'ID: ' + propertyId + '<br/>'
               + 'Date: ' + dateFrom + '&nbsp; - ' + dateTo + '<br/><br/>'
               + 'Name: ' + cname
               + '<br/>Company: ' + comp
               + '<br/>Business Type: ' + business
               + '<br/>Job Title: ' + job
               + '<br/>E-mail: ' + mail
               + '<br/>Phone: ' + tel + '<br/><br/>'
               + 'If you require any assistance, please contact us at +603-7885 0606 or e-mail to our Customer Relations Division at support@JustSimple.com.my.<br/>'
               + 'Our friendly and dedicated staff will provide all the technical support you need to have an effective web presence.<br/><br/>'
               + 'Thank you and best regards.';

    $.ajax({
        type: "POST",
        url: "http://purple.com.my/popupapp/mail/process.php",
        data: "msgBody=" + encodeURIComponent(msgBody) + "&name=" + cname + "&email=" + encodeURIComponent(mail),
        success: function (text) {
            if (text == "success") {
                formSuccess();
            } else {
                alert("error-> " + text);
            }
        }
    });
   
}

function formSuccess(){
    alert("message been sent");
    document.location.href = "index.html#init-page";
}