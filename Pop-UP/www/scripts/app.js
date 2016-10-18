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

function apps() {
    console.log("apps method trigger");

    $content = $(".demo"); //li
    $content.remove();

    $("#search-page-btn").click(function () {
        loadXml();
        document.addEventListener('backbutton', onBackKeyDown, false);
        //$("#init-page").remove();
    })
}

function detail(jArr) {
    
    var index;
    var obj = JSON.parse(jArr);
    var cont = $("#");
    var id, img1, img2, img3, img4, img5, name, location, region, state, type, capacity, idf, ids, idt,
        size, min, day, week, reqW, reqM, fon, ftw, fth, ffr, ffv, fsx,
        fsv, fei, fnn, ftn, desc, p1, p2, p3, map = "";
    
    $(".demo").click(function () {
        index = $(this).index();
        console.log(obj.property[index]);

        id = obj.property[index].id;
        img1 = obj.property[index].img1;
        img2 = obj.property[index].img2;
        img3 = obj.property[index].img3;
        img4 = obj.property[index].img4;
        img5 = obj.property[index].img5;
        img6 = obj.property[index].img6;
        img7 = obj.property[index].img7;
        img8 = obj.property[index].img8;
        img9 = obj.property[index].img9;
        img10 = obj.property[index].img10;
        name = obj.property[index].name;
        location = obj.property[index].location;
        region = obj.property[index].region;
        state = obj.property[index].state;
        type = obj.property[index].type;
        capacity = obj.property[index].capacity;
        idf = obj.property[index].idf;
        ids = obj.property[index].ids;
        idt = obj.property[index].idt;
        size = obj.property[index].size;
        min = obj.property[index].min;
        day = obj.property[index].day;
        week = obj.property[index].week;
        reqW = obj.property[index].reqW;
        reqM = obj.property[index].reqM;
        fon = obj.property[index].fon;
        ftw = obj.property[index].ftw;
        fth = obj.property[index].fth;
        ffr = obj.property[index].ffr;
        ffv = obj.property[index].ffv;
        fsx = obj.property[index].fsx;
        fsv = obj.property[index].fsv;
        fei = obj.property[index].fei;
        fnn = obj.property[index].ffn;
        ftn = obj.property[index].ftn;
        desc = obj.property[index].desc;
        p1 = obj.property[index].p1;
        p2 = obj.property[index].p2;
        p3 = obj.property[index].p3;
        map = obj.property[index].map;

        showDetail(id, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, name, location, region, state, type, capacity, idf, ids, idt, size, min, day, week,
            reqW, reqM, fon, ftw, fth, ffr, ffv, fsx, fsv, fei, fnn, ftn, desc, p1, p2, p3, map);
    })
}


function showDetail(id, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, name, location, region, state, type, capacity, idf, ids, idt, size, min, day, week,
            reqW, reqM, fon, ftw, fth, ffr, ffv, fsx, fsv, fei, fnn, ftn, desc, p1, p2, p3, map) {    


    /* property image */
    //var imgText = "";
    //if (img3 == "unset") {
    var imgText = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                        + ' <!-- Wrapper for slides -->'
                        + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                            + '<div class="item active">'
                                + '<img alt="" title="" src="' + img1 + '">'
                            + '</div>'
                            + '<div class="item">'
                                + '<img alt="" title="" src="' + img2 + '">'
                            + '</div>'
                        + '</div>'

                        + '<!-- Indicators -->'
                        + '<ol class="carousel-indicators">'
                            + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                            + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                        + '</ol>';
    //}

    //if (img5 == "unset") {
    //    imgText = ' <!-- Wrapper for slides -->'
    //                    + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
    //                        + '<div class="item active">'
    //                            + '<img alt="" title="" src="http://www.pop-up.my/item/901003-1-28-B.jpg">'
    //                        + '</div>'
    //                        + '<div class="item">'
    //                            + '<img alt="" title="" src="http://www.pop-up.my/item/901003-1-29-B.jpg">'
    //                        + '</div>'
    //                    + '</div>'

    //                    + '<!-- Indicators -->'
    //                    + '<ol class="carousel-indicators">'
    //                        + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
    //                        + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
    //                    + '</ol>';
    //}

    //if (img7 == "unset") {
    //    imgText = ' <!-- Wrapper for slides -->'
    //                    + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
    //                        + '<div class="item active">'
    //                            + '<img alt="" title="" src="http://www.pop-up.my/item/901003-1-28-B.jpg">'
    //                        + '</div>'
    //                        + '<div class="item">'
    //                            + '<img alt="" title="" src="http://www.pop-up.my/item/901003-1-29-B.jpg">'
    //                        + '</div>'
    //                    + '</div>'

    //                    + '<!-- Indicators -->'
    //                    + '<ol class="carousel-indicators">'
    //                        + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
    //                        + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
    //                    + '</ol>';
    //}


    document.getElementById("title-content").innerHTML = name; //header

    document.getElementById("img-property-slider").innerHTML = imgText; // img slider

    document.getElementById("main-content").innerHTML = '<h4>'+ name +'</h4>'  //main content
                            + '<p>'+ location +', '+ region +'.</p>'
                            + '<p>RM '+ day +' / day</p>'
                            + '<p>'+idf +' / '+ ids +'</p>'
                            + '<a href="#detailed-page" style="float:right" id="detailed-info">More info</a>';

    autoSlider();



    $("#detailed-info").click(function () {
        console.log("detailed-info-clicked");
        var contM = document.getElementById("map-container");
        var contD = document.getElementById("detailed-panel");
        var contO = document.getElementById("other-panel");

        contM.innerHTML = '<iframe width="100%" height="250" frameborder="0" style="border:0" src="'+ map +'" allowfullscreen></iframe>'
        contD.innerHTML = '<p><strong>Type</strong></p>'
                            + '<ul>'
                               + '<li>' + type + '</li>'
                            + '</ul>'
                            + '<p><strong>Rental Capacity</strong></p>'
                            + '<ul>'
                                + '<li>' + capacity + '</li>'
                            + '</ul>'
                            + '<p><strong>Ideal for</strong></p>'
                            + '<ul>'
                                + '<li> ' + idf + '</li>'
                                + '<li> ' + ids + '</li>'
                            + '</ul>'
                            + '<p><strong>Size</strong></p>'
                            + '<ul>'
                                + '<li>' + size + '</li>'
                            + '</ul>'
                            + '<p><strong>Minimun Rental</strong></p>'
                            + '<ul>'
                                + '<li>' + min + '</li>'
                            + '</ul>'
                            + '<p><strong>Pricing</strong></p>'
                            + '<ul>'
                                + '<li>RM ' + day + ' / day</li>'
                                + '<li>RM ' + week + ' / week</li>'
                                + '<li>' + reqW + '</li>'
                                + '<li>' + reqM + '</li>'
                            + '</ul>'
                            + '<p><strong>Features</strong></p>'
                            + '<ul>'
                                + '<li>' + fon + '</li>'
                                + '<li>' + ftw + '</li>'
                                + '<li>' + fth + '</li>'
                                + '<li>' + ffr + '</li>'
                                + '<li>' + ffv + '</li>'
                                + '<li>' + fsx+ '</li>'
                                + '<li>' + fsv+ '</li>'
                                + '<li>' + fei + '</li>'
                            + '</ul>';
        contO.innerHTML = '<p><strong>Others information</strong></p>'
                           + '<p>' + p1 + '</p>'
                           + '<p>' + p2 + '</p>'
                           + '<p>' + p3 + '</p>';
    })


    $("#request-main-btn").click(function () {
        console.log("requset-main-btn-clicked");
        var content = document.getElementById("info-request");
        content.innerHTML = '<div class="media-left">'
                            + '<img src="'+ img1 +'" class="img-rounded" width="80" height="80" />'
                        + '</div>'
                        + '<div class="media-body">'
                            + '<h4 class="media-heading">'+ name + ',<br /> ('+ id +')</h4>'
                            + '<p>' + location + ', ' + state
                            + '<br />RM ' + day + ' / day'
                            + '<br />RM ' + week + ' / week</p>'
                        + '</div>';
    })

    $("#request-info-btn").click(function () {
        console.log("requset-info-btn-clicked");
        var content = document.getElementById("info-request");
        content.innerHTML = '<div class="media-left">'
                            + '<img src="' + img1 + '" class="img-rounded" width="80" height="80" />'
                        + '</div>'
                        + '<div class="media-body">'
                            + '<h4 class="media-heading">' + name + ',<br /> (' + id + ')</h4>'
                            + '<p>' + location + ', ' + state
                            + '<br />RM ' + day + ' / day'
                            + '<br />RM ' + week + ' / week</p>'
                        + '</div>';
    })
}

function autoSlider() {
   
        $('.carousel').carousel({
            interval: 3000
        })
    
}