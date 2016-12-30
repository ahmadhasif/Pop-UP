function pObj(jArr) {

    console.log("object function triggered");
    
    var index;
    var obj = JSON.parse(jArr);
    var cont = $("#");
    //add var to hold ideal++, features++, pricing desc
    var id, img1, img2, img3, img4, img5, name, cat, location, region, state, type, capacity,
        ideal1, ideal2, ideal3, ideal4, ideal5, ideal6, ideal7, ideal8, ideal9, ideal10,
        size, min, day, week, month,
        feat1, feat2, feat3, feat4, feat5, feat6, feat7, feat8, feat9, feat10, feat11, feat12, feat13, feat14, feat15, feat16, feat17, feat18,
        desc, p1, p2, p3, map = "";

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
        cat = obj.property[index].cat;
        location = obj.property[index].location;
        region = obj.property[index].region;
        state = obj.property[index].state;
        type = obj.property[index].type;
        capacity = obj.property[index].capacity;

        //add ideal++
        ideal1 = obj.property[index].ideal1;
        ideal2 = obj.property[index].ideal2;
        ideal3 = obj.property[index].ideal3;
        ideal4 = obj.property[index].ideal4;
        ideal5 = obj.property[index].ideal5;
        ideal6 = obj.property[index].ideal6;
        ideal7 = obj.property[index].ideal7;
        ideal8 = obj.property[index].ideal8;
        ideal9 = obj.property[index].ideal9;
        ideal10 = obj.property[index].ideal10;        

        size = obj.property[index].size;
        min = obj.property[index].min;
        day = obj.property[index].day;
        week = obj.property[index].week;
        month = obj.property[index].month;
        //add pricing desc

        //add feat++
        feat1 = obj.property[index].feat1;
        feat2 = obj.property[index].feat2;
        feat3 = obj.property[index].feat3;
        feat4 = obj.property[index].feat4;
        feat5 = obj.property[index].feat5;
        feat6 = obj.property[index].feat6;
        feat7 = obj.property[index].feat7;
        feat8 = obj.property[index].feat8;
        feat9 = obj.property[index].feat9;
        feat10 = obj.property[index].feat10;
        feat11 = obj.property[index].feat11;
        feat12 = obj.property[index].feat12;
        feat13 = obj.property[index].feat13;
        feat14 = obj.property[index].feat14;
        feat15 = obj.property[index].feat15;
        feat16 = obj.property[index].feat16;
        feat17 = obj.property[index].feat17;
        feat18 = obj.property[index].feat18;

        desc = obj.property[index].desc;
        p1 = obj.property[index].p1;
        p2 = obj.property[index].p2;
        p3 = obj.property[index].p3;
        map = obj.property[index].map;

        $('#clear-content').remove();

        //showDetail(....) -> add ideal++, feat++, pricing desc
        showDetail(id, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, name, cat, location, region, state, type, capacity,
            ideal1, ideal2, ideal3, ideal4, ideal5, ideal6, ideal7, ideal8, ideal9, ideal10,
            size, min, day, week, month,
            feat1, feat2, feat3, feat4, feat5, feat6, feat7, feat8, feat9, feat10, feat11, feat12, feat13, feat14, feat15, feat16, feat17, feat18,
            desc, p1, p2, p3, map);
    })
}

//function showDetail(....) -> add ideal++, feat++, pricing desc
function showDetail(id, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, name, cat, location, region, state, type, capacity,
            ideal1, ideal2, ideal3, ideal4, ideal5, ideal6, ideal7, ideal8, ideal9, ideal10,
            size, min, day, week, month,
            feat1, feat2, feat3, feat4, feat5, feat6, feat7, feat8, feat9, feat10, feat11, feat12, feat13, feat14, feat15, feat16, feat17, feat18,
            desc, p1, p2, p3, map) {


    /* property image */
    var imgTxt = "";

    if(img2 != "unset"){
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
    } else {
        imgTxt = '<div class="carousel slide article-slide" id="article-photo-carousel">'
                                + ' <!-- Wrapper for slides -->'
                                + '<div class="carousel-inner cont-slider" id="img-slider" style="height:200px; overflow:hidden">'
                                    + '<div class="item active">'
                                        + '<img alt="" title="" src="' + img1 + '">'
                                    + '</div>'                                 
                                + '</div>'

                                + '<!-- Indicators -->'
                                + '<ol class="carousel-indicators">'
                                    + '<li class="active" data-slide-to="0" data-target="#article-photo-carousel"></li>'
                                + '</ol>';
    }
    


    //change ideal
    var ideal = "";
    if (ideal2 != 'unset') {
        if (ideal3 != 'unset') {
            if (ideal4 != 'unset') {
                if (ideal5 != 'unset') {
                    if (ideal6 != 'unset') {
                        if (ideal7 != 'unset') {
                            if (ideal8 != 'unset') {
                                if (ideal9 != 'unset') {
                                    if (ideal10 != 'unset') {
                                        ideal = '<li>' + ideal1 + '</li>'
                                        + '<li>' + ideal2 + '</li>'
                                        + '<li>' + ideal3 + '</li>'
                                        + '<li>' + ideal4 + '</li>'
                                        + '<li>' + ideal5 + '</li>'
                                        + '<li>' + ideal6 + '</li>'
                                        + '<li>' + ideal7 + '</li>'
                                        + '<li>' + ideal8 + '</li>'
                                        + '<li>' + ideal9 + '</li>'
                                        + '<li>' + ideal10 + '</li>';
                                    } else {
                                        ideal = '<li>' + ideal1 + '</li>'
                                        + '<li>' + ideal2 + '</li>'
                                        + '<li>' + ideal3 + '</li>'
                                        + '<li>' + ideal4 + '</li>'
                                        + '<li>' + ideal5 + '</li>'
                                        + '<li>' + ideal6 + '</li>'
                                        + '<li>' + ideal7 + '</li>'
                                        + '<li>' + ideal8 + '</li>'
                                        + '<li>' + ideal9 + '</li>';                                        
                                    }
                                } else {
                                    ideal = '<li>' + ideal1 + '</li>'
                                    + '<li>' + ideal2 + '</li>'
                                    + '<li>' + ideal3 + '</li>'
                                    + '<li>' + ideal4 + '</li>'
                                    + '<li>' + ideal5 + '</li>'
                                    + '<li>' + ideal6 + '</li>'
                                    + '<li>' + ideal7 + '</li>'
                                    + '<li>' + ideal8 + '</li>';
                                }
                            } else {
                                ideal = '<li>' + ideal1 + '</li>'
                                + '<li>' + ideal2 + '</li>'
                                + '<li>' + ideal3 + '</li>'
                                + '<li>' + ideal4 + '</li>'
                                + '<li>' + ideal5 + '</li>'
                                + '<li>' + ideal6 + '</li>'
                                + '<li>' + ideal7 + '</li>'
                            }
                        } else {
                            ideal = '<li>' + ideal1 + '</li>'
                                + '<li>' + ideal2 + '</li>'
                                + '<li>' + ideal3 + '</li>'
                                + '<li>' + ideal4 + '</li>'
                                + '<li>' + ideal5 + '</li>'
                                + '<li>' + ideal6 + '</li>';
                        }
                    } else {
                        ideal = '<li>' + ideal1 + '</li>'
                             + '<li>' + ideal2 + '</li>'
                             + '<li>' + ideal3 + '</li>'
                             + '<li>' + ideal4 + '</li>'
                             + '<li>' + ideal5 + '</li>';
                    }
                } else {
                    ideal = '<li>' + ideal1 + '</li>'
                          + '<li>' + ideal2 + '</li>'
                          + '<li>' + ideal3 + '</li>'
                          + '<li>' + ideal4 + '</li>';
                }
            } else {
                ideal = '<li>' + ideal1 + '</li>'
                      + '<li>' + ideal2 + '</li>'
                      + '<li>' + ideal3 + '</li>';
            }
        } else {
            ideal = '<li>' + ideal1 + '</li>'
                  + '<li>' + ideal2 + '</li>';
        }
    } else {
        ideal = '<li>' + ideal1 + '</li>';
    }



    $('#main-content').append('<div class="panel panel-default" id="clear-content">'
                                    + '<div class="panel-heading"><h3>' + name + '</h3></div>'
                                    + '<div class="panel-body" style="padding:5px">'
                                        + '<div class="col-xs-8" style="padding-left:5px; padding-right:5px">'
                                            + '<p>' + location + ', ' + region + '</p>'
                                            + '<p>' + type + '</p>'
                                            + '<strong>Ideal for:</strong>'
                                            + '<ul style="padding-left:20px">'
                                                + ideal //append using li
                                            + '</ul>'
                                        + '</div>'
                                        + '<div  class="col-xs-4" style="padding-left:0px; padding-right:0px">'
                                            + '<p href="" class="dummy" style="background-color:#27f335; color:#fff; text-shadow:0 1px 0 #27f335">RM ' + day + ' / day</p>'
                                            + '<a href="#detail-page" id="detailed-info">Full Details</a>'
                                        + '</div>'
                                    + '</div>'
                                + '</div>');




    document.getElementById("title-content").innerHTML = name; //header

    document.getElementById("img-property-slider").innerHTML = imgTxt; //imgText; // img slider

    

    autoSlider();
    //$("#img-property-slider").click(function () {
    //    window.plugins.toast.show('Under construction.', 'short', 'bottom', function (a) { console.log('toast success: ' + a) }, function (b) { alert('toast error: ' + b) });
    //})


    $("#detailed-info").click(function () {
        console.log("detailed-info-clicked");
        var contM = document.getElementById("map-container");
        var contDC = document.getElementById("desc-panel");
        var contD = document.getElementById("detailed-panel");
        var contO = document.getElementById("other-panel");


        //ideal change ************************************!!!!!!
        var ideal = "";
        if (ideal2 != 'unset') {
            if (ideal3 != 'unset') {
                if (ideal4 != 'unset') {
                    if (ideal5 != 'unset') {
                        if (ideal6 != 'unset') {
                            if (ideal7 != 'unset') {
                                if (ideal8 != 'unset') {
                                    if (ideal9 != 'unset') {
                                        if (ideal10 != 'unset') {
                                            ideal = '<li>' + ideal1 + '</li>'
                                            + '<li>' + ideal2 + '</li>'
                                            + '<li>' + ideal3 + '</li>'
                                            + '<li>' + ideal4 + '</li>'
                                            + '<li>' + ideal5 + '</li>'
                                            + '<li>' + ideal6 + '</li>'
                                            + '<li>' + ideal7 + '</li>'
                                            + '<li>' + ideal8 + '</li>'
                                            + '<li>' + ideal9 + '</li>'
                                            + '<li>' + ideal10 + '</li>';
                                        } else {
                                            ideal = '<li>' + ideal1 + '</li>'
                                            + '<li>' + ideal2 + '</li>'
                                            + '<li>' + ideal3 + '</li>'
                                            + '<li>' + ideal4 + '</li>'
                                            + '<li>' + ideal5 + '</li>'
                                            + '<li>' + ideal6 + '</li>'
                                            + '<li>' + ideal7 + '</li>'
                                            + '<li>' + ideal8 + '</li>'
                                            + '<li>' + ideal9 + '</li>';
                                        }
                                    } else {
                                        ideal = '<li>' + ideal1 + '</li>'
                                        + '<li>' + ideal2 + '</li>'
                                        + '<li>' + ideal3 + '</li>'
                                        + '<li>' + ideal4 + '</li>'
                                        + '<li>' + ideal5 + '</li>'
                                        + '<li>' + ideal6 + '</li>'
                                        + '<li>' + ideal7 + '</li>'
                                        + '<li>' + ideal8 + '</li>';
                                    }
                                } else {
                                    ideal = '<li>' + ideal1 + '</li>'
                                    + '<li>' + ideal2 + '</li>'
                                    + '<li>' + ideal3 + '</li>'
                                    + '<li>' + ideal4 + '</li>'
                                    + '<li>' + ideal5 + '</li>'
                                    + '<li>' + ideal6 + '</li>'
                                    + '<li>' + ideal7 + '</li>'
                                }
                            } else {
                                ideal = '<li>' + ideal1 + '</li>'
                                    + '<li>' + ideal2 + '</li>'
                                    + '<li>' + ideal3 + '</li>'
                                    + '<li>' + ideal4 + '</li>'
                                    + '<li>' + ideal5 + '</li>'
                                    + '<li>' + ideal6 + '</li>';
                            }
                        } else {
                            ideal = '<li>' + ideal1 + '</li>'
                                 + '<li>' + ideal2 + '</li>'
                                 + '<li>' + ideal3 + '</li>'
                                 + '<li>' + ideal4 + '</li>'
                                 + '<li>' + ideal5 + '</li>';
                        }
                    } else {
                        ideal = '<li>' + ideal1 + '</li>'
                              + '<li>' + ideal2 + '</li>'
                              + '<li>' + ideal3 + '</li>'
                              + '<li>' + ideal4 + '</li>';
                    }
                } else {
                    ideal = '<li>' + ideal1 + '</li>'
                          + '<li>' + ideal2 + '</li>'
                          + '<li>' + ideal3 + '</li>';
                }
            } else {
                ideal = '<li>' + ideal1 + '</li>'
                      + '<li>' + ideal2 + '</li>';
            }
        } else {
            ideal = '<li>' + ideal1 + '</li>';
        }


        //feautures change ************************************!!!!!!
        var features = "";
        if (feat3 != "unset") {
            if (feat4 != "unset") {
                if (feat5 != "unset") {
                    if (feat6 != "unset") {
                        if (feat7 != "unset") {
                            if (feat8 != "unset") {
                                if (feat9 != "unset") {
                                    if (feat10 != "unset") {
                                        if (feat11 != "unset") {
                                            if (feat12 != "unset") {
                                                if (feat13 != "unset") {
                                                    if (feat14 != "unset") {
                                                        if (feat15 != "unset") {
                                                            if (feat16 != "unset") {
                                                                if (feat17 != "unset") {
                                                                    if (feat18 != "unset") {
                                                                        features = '<li>' + feat1 + '</li>'
                                                                                   + '<li>' + feat2 + '</li>'
                                                                                   + '<li>' + feat3 + '</li>'
                                                                                   + '<li>' + feat4 + '</li>'
                                                                                   + '<li>' + feat5 + '</li>'
                                                                                   + '<li>' + feat6 + '</li>'
                                                                                   + '<li>' + feat7 + '</li>'
                                                                                   + '<li>' + feat8 + '</li>'
                                                                                   + '<li>' + feat9 + '</li>'
                                                                                   + '<li>' + feat10 + '</li>'
                                                                                   + '<li>' + feat11 + '</li>'
                                                                                   + '<li>' + feat12 + '</li>'
                                                                                   + '<li>' + feat13 + '</li>'
                                                                                   + '<li>' + feat14 + '</li>'
                                                                                   + '<li>' + feat15 + '</li>'
                                                                                   + '<li>' + feat16 + '</li>'
                                                                                   + '<li>' + feat17 + '</li>'
                                                                                   + '<li>' + feat18 + '</li>';
                                                                    } else {
                                                                        features = '<li>' + feat1 + '</li>'
                                                                                   + '<li>' + feat2 + '</li>'
                                                                                   + '<li>' + feat3 + '</li>'
                                                                                   + '<li>' + feat4 + '</li>'
                                                                                   + '<li>' + feat5 + '</li>'
                                                                                   + '<li>' + feat6 + '</li>'
                                                                                   + '<li>' + feat7 + '</li>'
                                                                                   + '<li>' + feat8 + '</li>'
                                                                                   + '<li>' + feat9 + '</li>'
                                                                                   + '<li>' + feat10 + '</li>'
                                                                                   + '<li>' + feat11 + '</li>'
                                                                                   + '<li>' + feat12 + '</li>'
                                                                                   + '<li>' + feat13 + '</li>'
                                                                                   + '<li>' + feat14 + '</li>'
                                                                                   + '<li>' + feat15 + '</li>'
                                                                                   + '<li>' + feat16 + '</li>'
                                                                                   + '<li>' + feat17 + '</li>';
                                                                    }
                                                                } else {
                                                                    features = '<li>' + feat1 + '</li>'
                                                                                + '<li>' + feat2 + '</li>'
                                                                                + '<li>' + feat3 + '</li>'
                                                                                + '<li>' + feat4 + '</li>'
                                                                                + '<li>' + feat5 + '</li>'
                                                                                + '<li>' + feat6 + '</li>'
                                                                                + '<li>' + feat7 + '</li>'
                                                                                + '<li>' + feat8 + '</li>'
                                                                                + '<li>' + feat9 + '</li>'
                                                                                + '<li>' + feat10 + '</li>'
                                                                                + '<li>' + feat11 + '</li>'
                                                                                + '<li>' + feat12 + '</li>'
                                                                                + '<li>' + feat13 + '</li>'
                                                                                + '<li>' + feat14 + '</li>'
                                                                                + '<li>' + feat15 + '</li>'
                                                                                + '<li>' + feat16 + '</li>';
                                                                }
                                                            } else {
                                                                features = '<li>' + feat1 + '</li>'
                                                                            + '<li>' + feat2 + '</li>'
                                                                            + '<li>' + feat3 + '</li>'
                                                                            + '<li>' + feat4 + '</li>'
                                                                            + '<li>' + feat5 + '</li>'
                                                                            + '<li>' + feat6 + '</li>'
                                                                            + '<li>' + feat7 + '</li>'
                                                                            + '<li>' + feat8 + '</li>'
                                                                            + '<li>' + feat9 + '</li>'
                                                                            + '<li>' + feat10 + '</li>'
                                                                            + '<li>' + feat11 + '</li>'
                                                                            + '<li>' + feat12 + '</li>'
                                                                            + '<li>' + feat13 + '</li>'
                                                                            + '<li>' + feat14 + '</li>'
                                                                            + '<li>' + feat15 + '</li>';
                                                            }
                                                        } else {
                                                            features = '<li>' + feat1 + '</li>'
                                                                        + '<li>' + feat2 + '</li>'
                                                                        + '<li>' + feat3 + '</li>'
                                                                        + '<li>' + feat4 + '</li>'
                                                                        + '<li>' + feat5 + '</li>'
                                                                        + '<li>' + feat6 + '</li>'
                                                                        + '<li>' + feat7 + '</li>'
                                                                        + '<li>' + feat8 + '</li>'
                                                                        + '<li>' + feat9 + '</li>'
                                                                        + '<li>' + feat10 + '</li>'
                                                                        + '<li>' + feat11 + '</li>'
                                                                        + '<li>' + feat12 + '</li>'
                                                                        + '<li>' + feat13 + '</li>'
                                                                        + '<li>' + feat14 + '</li>';
                                                        }
                                                    } else {
                                                        features = '<li>' + feat1 + '</li>'
                                                                    + '<li>' + feat2 + '</li>'
                                                                    + '<li>' + feat3 + '</li>'
                                                                    + '<li>' + feat4 + '</li>'
                                                                    + '<li>' + feat5 + '</li>'
                                                                    + '<li>' + feat6 + '</li>'
                                                                    + '<li>' + feat7 + '</li>'
                                                                    + '<li>' + feat8 + '</li>'
                                                                    + '<li>' + feat9 + '</li>'
                                                                    + '<li>' + feat10 + '</li>'
                                                                    + '<li>' + feat11 + '</li>'
                                                                    + '<li>' + feat12 + '</li>'
                                                                    + '<li>' + feat13 + '</li>';
                                                    }
                                                } else {
                                                    features = '<li>' + feat1 + '</li>'
                                                                + '<li>' + feat2 + '</li>'
                                                                + '<li>' + feat3 + '</li>'
                                                                + '<li>' + feat4 + '</li>'
                                                                + '<li>' + feat5 + '</li>'
                                                                + '<li>' + feat6 + '</li>'
                                                                + '<li>' + feat7 + '</li>'
                                                                + '<li>' + feat8 + '</li>'
                                                                + '<li>' + feat9 + '</li>'
                                                                + '<li>' + feat10 + '</li>'
                                                                + '<li>' + feat11 + '</li>'
                                                                + '<li>' + feat12 + '</li>';
                                                }
                                            } else {
                                                features = '<li>' + feat1 + '</li>'
                                                            + '<li>' + feat2 + '</li>'
                                                            + '<li>' + feat3 + '</li>'
                                                            + '<li>' + feat4 + '</li>'
                                                            + '<li>' + feat5 + '</li>'
                                                            + '<li>' + feat6 + '</li>'
                                                            + '<li>' + feat7 + '</li>'
                                                            + '<li>' + feat8 + '</li>'
                                                            + '<li>' + feat9 + '</li>'
                                                            + '<li>' + feat10 + '</li>'
                                                            + '<li>' + feat11 + '</li>';
                                            }
                                        } else {
                                            features = '<li>' + feat1 + '</li>'
                                                        + '<li>' + feat2 + '</li>'
                                                        + '<li>' + feat3 + '</li>'
                                                        + '<li>' + feat4 + '</li>'
                                                        + '<li>' + feat5 + '</li>'
                                                        + '<li>' + feat6 + '</li>'
                                                        + '<li>' + feat7 + '</li>'
                                                        + '<li>' + feat8 + '</li>'
                                                        + '<li>' + feat9 + '</li>'
                                                        + '<li>' + feat10 + '</li>';
                                        }
                                    } else {
                                        features = '<li>' + feat1 + '</li>'
                                                    + '<li>' + feat2 + '</li>'
                                                    + '<li>' + feat3 + '</li>'
                                                    + '<li>' + feat4 + '</li>'
                                                    + '<li>' + feat5 + '</li>'
                                                    + '<li>' + feat6 + '</li>'
                                                    + '<li>' + feat7 + '</li>'
                                                    + '<li>' + feat8 + '</li>'
                                                    + '<li>' + feat9 + '</li>';
                                    }
                                } else {
                                    features = '<li>' + feat1 + '</li>'
                                                + '<li>' + feat2 + '</li>'
                                                + '<li>' + feat3 + '</li>'
                                                + '<li>' + feat4 + '</li>'
                                                + '<li>' + feat5 + '</li>'
                                                + '<li>' + feat6 + '</li>'
                                                + '<li>' + feat7 + '</li>'
                                                + '<li>' + feat8 + '</li>';
                                }
                            } else {
                                features = '<li>' + feat1 + '</li>'
                                            + '<li>' + feat2 + '</li>'
                                            + '<li>' + feat3 + '</li>'
                                            + '<li>' + feat4 + '</li>'
                                            + '<li>' + feat5 + '</li>'
                                            + '<li>' + feat6 + '</li>'
                                            + '<li>' + feat7 + '</li>';
                            }
                        } else {
                            features = '<li>' + feat1 + '</li>'
                                        + '<li>' + feat2 + '</li>'
                                        + '<li>' + feat3 + '</li>'
                                        + '<li>' + feat4 + '</li>'
                                        + '<li>' + feat5 + '</li>'
                                        + '<li>' + feat6 + '</li>';
                        }
                    } else {
                        features = '<li>' + feat1 + '</li>'
                                    + '<li>' + feat2 + '</li>'
                                    + '<li>' + feat3 + '</li>'
                                    + '<li>' + feat4 + '</li>'
                                    + '<li>' + feat5 + '</li>';
                    }
                } else {
                    features = '<li>' + feat1 + '</li>'
                                + '<li>' + feat2 + '</li>'
                                + '<li>' + feat3 + '</li>'
                                + '<li>' + feat4 + '</li>';
                }
            } else {
                features = '<li>' + feat1 + '</li>'
                            + '<li>' + feat2 + '</li>'
                            + '<li>' + feat3 + '</li>';
            }
        } else {
            features = '<li>' + feat1 + '</li>'
                        + '<li>' + feat2 + '</li>';
        }

        


        contM.innerHTML = '<iframe width="100%" height="250" frameborder="0" style="border:0" src="' + map + '" allowfullscreen></iframe>'
        contDC.innerHTML = '<p>' + desc + '</p>'
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
                                + '<li>' + min + ' day</li>'
                            + '</ul>'
                            + '<p><strong>Pricing</strong></p>'
                            + '<ul>'
                                + '<li>RM ' + day + ' / day</li>'
                                //add pricing desc
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

        contO.innerHTML = otherInfo;//filter others information
    })


    $("#request-main-btn").click(function () {
        console.log("requset-main-btn-clicked");
        var content = document.getElementById("info-request");
        content.innerHTML = '<div class="media-left">'
                            + '<img src="' + img1 + '" class="img-rounded" width="80" height="80" />'
                        + '</div>'
                        + '<div class="media-body">'
                            + '<h4 class="media-heading">' + name + ',</h4>'
                            + '<p><strong>( ' + id + ')</strong></p>'
                            + '<p>' + location + ', ' + state
                            + '<br />RM ' + day + ' / day'
                        + '</div>';

        datePicker();
        formsubmit(name, id);
                

    })

    $("#request-info-btn").click(function () {
        console.log("requset-info-btn-clicked");
        var content = document.getElementById("info-request");
        content.innerHTML = '<div class="media-left">'
                            + '<img src="' + img1 + '" class="img-rounded" width="80" height="80" />'
                        + '</div>'
                        + '<div class="media-body">'
                            + '<h4 id="req-property" class="media-heading">' + name + ',</h4>'
                            + '<p id="req-id"><strong>( ' + id + ')</strong></p>'
                            + '<p>' + location + ', ' + state
                            + '<br />RM ' + day + ' / day'
                        + '</div>';
        
        datePicker();
        formsubmit(name, id);
    })
}

function autoSlider() {

    $('.carousel').carousel({
        interval: 3000
    })

}