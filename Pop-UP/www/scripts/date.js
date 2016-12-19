function datePicker() {

    //bootstrap date time piceker v3

    console.log("date-picker function trigger");

    $('#datetimepicker6').datetimepicker({
        useCurrent: true,
        format: 'ddd, DD MMM YY'
    });
    $('#datetimepicker7').datetimepicker({
        useCurrent: false,
        format: 'ddd, DD MMM YY'
    });


    $("#datetimepicker6").on("dp.change", function (e) {
        $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
    });
    $("#datetimepicker7").on("dp.change", function (e) {
        $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
    });
}