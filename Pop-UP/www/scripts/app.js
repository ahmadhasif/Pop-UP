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
        fnn = obj.property[index].fnn;
        ftn = obj.property[index].ftn;
        desc = obj.property[index].desc;
        p1 = obj.property[index].p1;
        p2 = obj.property[index].p2;
        p3 = obj.property[index].p3;
        map = obj.property[index].map;

        $('#clear-content').remove();

        showDetail(id, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, name, location, region, state, type, capacity, idf, ids, idt, size, min, day, week,
            reqW, reqM, fon, ftw, fth, ffr, ffv, fsx, fsv, fei, fnn, ftn, desc, p1, p2, p3, map);
    })
}


function showDetail(id, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, name, location, region, state, type, capacity, idf, ids, idt, size, min, day, week,
            reqW, reqM, fon, ftw, fth, ffr, ffv, fsx, fsv, fei, fnn, ftn, desc, p1, p2, p3, map) {    


    /* property image */
    var imgTxt = "";

    if (img3 != "unset") {
        if (img4 != "unset") {
            if (img5 != "unset") {
                if (img6 != "unset") {
                    if (img7 != "unset") {
                        if (img8 != "unset") {
                            if (img9 != "unset") {
                                if (img10 != "unset") {
                                    imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                                        + ' <!-- Wrapper for slides -->'
                                        + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                            + '<div class="item active">'
                                                + '<img alt="" title="" src="' + img1 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img2 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img3 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img4 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img5 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img6 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img7 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img8 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img9 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img10 + '">'
                                            + '</div>'
                                        + '</div>'

                                        + '<!-- Indicators -->'
                                        + '<ol class="carousel-indicators">'
                                            + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="4" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="5" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="6" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="7" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="8" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="9" data-target="#article-photo-carousel"></li>'
                                        + '</ol>';

                                } else {
                                    imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                                        + ' <!-- Wrapper for slides -->'
                                        + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                            + '<div class="item active">'
                                                + '<img alt="" title="" src="' + img1 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img2 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img3 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img4 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img5 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img6 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img7 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img8 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img9 + '">'
                                            + '</div>'
                                        + '</div>'

                                        + '<!-- Indicators -->'
                                        + '<ol class="carousel-indicators">'
                                            + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="4" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="5" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="6" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="7" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="8" data-target="#article-photo-carousel"></li>'
                                        + '</ol>';
                                }

                            } else {
                                imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                                        + ' <!-- Wrapper for slides -->'
                                        + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                            + '<div class="item active">'
                                                + '<img alt="" title="" src="' + img1 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img2 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img3 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img4 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img5 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img6 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img7 + '">'
                                            + '</div>'
                                            + '<div class="item">'
                                                + '<img alt="" title="" src="' + img8 + '">'
                                            + '</div>'
                                        + '</div>'

                                        + '<!-- Indicators -->'
                                        + '<ol class="carousel-indicators">'
                                            + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="4" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="5" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="6" data-target="#article-photo-carousel"></li>'
                                            + '<li class="" data-slide-to="7" data-target="#article-photo-carousel"></li>'
                                        + '</ol>';
                            }

                        } else {
                            imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                                    + ' <!-- Wrapper for slides -->'
                                    + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                        + '<div class="item active">'
                                            + '<img alt="" title="" src="' + img1 + '">'
                                        + '</div>'
                                        + '<div class="item">'
                                            + '<img alt="" title="" src="' + img2 + '">'
                                        + '</div>'
                                        + '<div class="item">'
                                            + '<img alt="" title="" src="' + img3 + '">'
                                        + '</div>'
                                        + '<div class="item">'
                                            + '<img alt="" title="" src="' + img4 + '">'
                                        + '</div>'
                                        + '<div class="item">'
                                            + '<img alt="" title="" src="' + img5 + '">'
                                        + '</div>'
                                        + '<div class="item">'
                                            + '<img alt="" title="" src="' + img6 + '">'
                                        + '</div>'
                                        + '<div class="item">'
                                            + '<img alt="" title="" src="' + img7 + '">'
                                        + '</div>'
                                    + '</div>'

                                    + '<!-- Indicators -->'
                                    + '<ol class="carousel-indicators">'
                                        + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                        + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                        + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                        + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                                        + '<li class="" data-slide-to="4" data-target="#article-photo-carousel"></li>'
                                        + '<li class="" data-slide-to="5" data-target="#article-photo-carousel"></li>'
                                        + '<li class="" data-slide-to="6" data-target="#article-photo-carousel"></li>'
                                    + '</ol>';
                        }

                    } else {
                        imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                            + ' <!-- Wrapper for slides -->'
                            + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                + '<div class="item active">'
                                    + '<img alt="" title="" src="' + img1 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img2 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img3 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img4 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img5 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img6 + '">'
                                + '</div>'
                            + '</div>'

                            + '<!-- Indicators -->'
                            + '<ol class="carousel-indicators">'
                                + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="4" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="5" data-target="#article-photo-carousel"></li>'
                            + '</ol>';
                    }

                } else {
                    imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                            + ' <!-- Wrapper for slides -->'
                            + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                + '<div class="item active">'
                                    + '<img alt="" title="" src="' + img1 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img2 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img3 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img4 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img5 + '">'
                                + '</div>'
                            + '</div>'

                            + '<!-- Indicators -->'
                            + '<ol class="carousel-indicators">'
                                + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="4" data-target="#article-photo-carousel"></li>'
                            + '</ol>';
                }

            } else {
                imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                            + ' <!-- Wrapper for slides -->'
                            + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                + '<div class="item active">'
                                    + '<img alt="" title="" src="' + img1 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img2 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img3 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img4 + '">'
                                + '</div>'
                            + '</div>'

                            + '<!-- Indicators -->'
                            + '<ol class="carousel-indicators">'
                                + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="3" data-target="#article-photo-carousel"></li>'
                            + '</ol>';
            }

        } else {
            imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                            + ' <!-- Wrapper for slides -->'
                            + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                + '<div class="item active">'
                                    + '<img alt="" title="" src="' + img1 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img2 + '">'
                                + '</div>'
                                + '<div class="item">'
                                    + '<img alt="" title="" src="' + img3 + '">'
                                + '</div>'
                            + '</div>'

                            + '<!-- Indicators -->'
                            + '<ol class="carousel-indicators">'
                                + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
                                + '<li class="" data-slide-to="2" data-target="#article-photo-carousel"></li>'
                            + '</ol>';
        }

    } else {
        imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
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
    }
    
    //var imgText = '<div class="carousel slide article-slide" id="article-photo-carousel">'
    //                    + ' <!-- Wrapper for slides -->'
    //                    + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
    //                        + '<div class="item active">'
    //                            + '<img alt="" title="" src="' + img1 + '">'
    //                        + '</div>'
    //                        + '<div class="item">'
    //                            + '<img alt="" title="" src="' + img2 + '">'
    //                        + '</div>'
    //                    + '</div>'

    //                    + '<!-- Indicators -->'
    //                    + '<ol class="carousel-indicators">'
    //                        + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
    //                        + '<li class="" data-slide-to="1" data-target="#article-photo-carousel"></li>'
    //                    + '</ol>';
   

    $('#main-content').append('<div class="panel panel-default" id="clear-content">'
                                    + '<div class="panel-heading"><h3>'+ name +'</h3></div>'
                                    + '<div class="panel-body" style="padding:5px">'
                                        + '<div class="col-xs-8" style="padding-left:5px; padding-right:5px">'
                                            + '<p>'+ location + ', '+ region +'</p>'
                                            + '<strong>Ideal for:</strong>'
                                            + '<ul style="padding-left:20px">'
                                                + '<li>'
                                                    + '' + idf + ''
                                                    + '<ul>'
                                                        + '<li>Showroom</li>'
                                                        + '<li>Ready-to-wear</li>'
                                                        + '<li>Accessories</li>'
                                                        + '<li>other</li>'
                                                    + '</ul>'
                                                + '</li>'                                    
                                                + '<li>'
                                                    + '' + ids + ''
                                                    + '<ul>'
                                                        + '<li>Exhibition</li>'
                                                        + '<li>Late nite event</li>'
                                                        + '<li>Private dinner</li>'
                                                    + '</ul>'
                                                + '</li>'
                                            + '</ul>'
                                        + '</div>'
                                        + '<div  class="col-xs-4" style="padding-left:0px; padding-right:0px">'
                                            + '<p href="" class="dummy" style="background-color:#27f335; color:#fff; text-shadow:0 1px 0 #27f335">RM '+ day +' / day</p>'
                                            + '<p href="" class="dummy" style="background-color:#24efec; color:#fff; text-shadow:0 1px 0 #24efec">RM '+ week +' / week</p>'
                                            + '<a href="#detailed-page" id="detailed-info">Full Details</a>'
                                        + '</div>'
                                    + '</div>'
                                + '</div>');




    document.getElementById("title-content").innerHTML = name; //header

    document.getElementById("img-property-slider").innerHTML = imgTxt; //imgText; // img slider

    //document.getElementById("main-content").innerHTML = '<h4>'+ name +'</h4>'  //main content
    //                        + '<p>'+ location +', '+ region +'.</p>'
    //                        + '<p>RM '+ day +' / day</p>'
    //                        + '<p>'+idf +' / '+ ids +'</p>'
    //                        + '<a href="#detailed-page" style="float:right" id="detailed-info">More info</a>';

    autoSlider();
    //$("#img-property-slider").click(function () {
    //    window.plugins.toast.show('Under construction.', 'short', 'bottom', function (a) { console.log('toast success: ' + a) }, function (b) { alert('toast error: ' + b) });
    //})


    $("#detailed-info").click(function () {
        console.log("detailed-info-clicked");
        var contM = document.getElementById("map-container");
        var contD = document.getElementById("detailed-panel");
        var contO = document.getElementById("other-panel");

        var ideal = "";
        if (idf != "unset") {
            if (ids != "unset") {
                if (idt != "unset") {
                    ideal = '<li>' + idf + '</li>' + '<li>' + ids + '</li>' + '<li>' + idt + '</li>';
                } else {
                    ideal = '<li>' + idf + '</li>' + '<li>' + ids + '</li>';
                }
            } else {
                ideal = '<li>' + idf + '</li>';
            }
        }

        var features = "";
        if (fon != "unset") {
            if (ftw != "unset") {
                if (fth != "unset") {
                    if (ffr != "unset") {
                        if (ffv != "unset") {
                            if (fsx != "unset") {
                                if (fsv != "unset") {
                                    if (fei != "unset") {
                                        if (fnn != "unset") {
                                            if (ftn != "unset") {
                                                features = '<li>' + fon + '</li>'
                                                        + '<li>' + ftw + '</li>'
                                                        + '<li>' + fth + '</li>'
                                                        + '<li>' + ffr + '</li>'
                                                        + '<li>' + ffv + '</li>'
                                                        + '<li>' + fsx + '</li>'
                                                        + '<li>' + fsv + '</li>'
                                                        + '<li>' + fei + '</li>'
                                                        + '<li>' + fnn + '</li>'
                                                        + '<li>' + ftn + '</li>';
                                            } else {
                                                features = '<li>' + fon + '</li>'
                                                        + '<li>' + ftw + '</li>'
                                                        + '<li>' + fth + '</li>'
                                                        + '<li>' + ffr + '</li>'
                                                        + '<li>' + ffv + '</li>'
                                                        + '<li>' + fsx + '</li>'
                                                        + '<li>' + fsv + '</li>'
                                                        + '<li>' + fei + '</li>'
                                                        + '<li>' + fnn + '</li>';
                                            }
                                        } else {
                                            features = '<li>' + fon + '</li>'
                                                    + '<li>' + ftw + '</li>'
                                                    + '<li>' + fth + '</li>'
                                                    + '<li>' + ffr + '</li>'
                                                    + '<li>' + ffv + '</li>'
                                                    + '<li>' + fsx + '</li>'
                                                    + '<li>' + fsv + '</li>'
                                                    + '<li>' + fei + '</li>';
                                        }
                                    } else {
                                        features = '<li>' + fon + '</li>'
                                                + '<li>' + ftw + '</li>'
                                                + '<li>' + fth + '</li>'
                                                + '<li>' + ffr + '</li>'
                                                + '<li>' + ffv + '</li>'
                                                + '<li>' + fsx + '</li>'
                                                + '<li>' + fsv + '</li>';
                                    }
                                } else {
                                    features = '<li>' + fon + '</li>'
                                            + '<li>' + ftw + '</li>'
                                            + '<li>' + fth + '</li>'
                                            + '<li>' + ffr + '</li>'
                                            + '<li>' + ffv + '</li>'
                                            + '<li>' + fsx + '</li>';
                                }
                            } else {
                                features = '<li>' + fon + '</li>'
                                        + '<li>' + ftw + '</li>'
                                        + '<li>' + fth + '</li>'
                                        + '<li>' + ffr + '</li>'
                                        + '<li>' + ffv + '</li>';
                            }
                        } else {
                            features = '<li>' + fon + '</li>'
                                    + '<li>' + ftw + '</li>'
                                    + '<li>' + fth + '</li>'
                                    + '<li>' + ffr + '</li>';
                        }
                    } else {
                        features = '<li>' + fon + '</li>'
                                + '<li>' + ftw + '</li>'
                                + '<li>' + fth + '</li>';
                    }
                } else {
                    features = '<li>' + fon + '</li>' + '<li>' + ftw + '</li>';
                }
            } else {
                features = '<li>' + fon + '</li>';
            }
        }


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
                                + ideal     //filter ideal                                
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
                                + features      //filter features
                            + '</ul>';


        var otherInfo = "";
        if (p1 != "unset") {
            if (p2 != "unset") {
                if (p3 != "unset") {
                    otherInfo = '<p>' + p1 + '</p>'
                            + '<p>' + p2 + '</p>'
                            + '<p>' + p3 + '</p>';
                } else {
                    otherInfo = '<p>' + p1 + '</p>'
                            + '<p>' + p2 + '</p>';
                }

            } else {
                otherInfo = '<p>' + p1 + '</p>';
            }
        } else {
            otherInfo = '<p>No additional info at the moment.</p>'
        }

        contO.innerHTML = otherInfo ;//filter others information
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

        $('#send-page-btn').click(function () {
            sendEmail();
        });
        
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

        $('#send-page-btn').click(function () {
            sendEmail();
        });
    })
}

function autoSlider() {
   
        $('.carousel').carousel({
            interval: 3000
        })
    
}

function sendEmail()
{
    console.log('email function excute');
     $.ajax({
           url: "mail.php",
           type: "POST",
           success: function(response) {
               if (!response) {
                    alert("Something went wrong. Please try again");
                    return;
               }

               var parsedJSON = eval('('+response+')');

               // If there's an error, display it.
               if(parsedJSON.Error) {
                  // Handle session timeout.
                  if (parsedJSON.Error == "Timeout") {
                       alert("Session timed out. Please login again.");
                       window.location.reload();
                   }
                }
               alert("Email Sent successfully");  
            }
     });
}