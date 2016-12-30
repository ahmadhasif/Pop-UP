function downloadxml() {
    console.log('function checked');
    //XML Parsing
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            populate(this);
        } 
    };
    xhttp.open("POST", "", true);
    xhttp.send();
}

function populate(xml) {

    var xmlDoc = xml.responseXML;

    //location list xml
    var i;    
    var pList = "";    
    var show = xmlDoc.getElementsByTagName("show");

    var llocation = [];

    var showList = xmlDoc.getElementsByTagName("show");

    for (i = 0; i < show.length; i++) {
        pList = showList[i].childNodes[0].nodeValue;
        var text = '<option>'+ pList +'</option>';
        llocation.push(text);
    }   
    console.log(llocation);


    //property list xml
    var l;
    var pid, pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8, pimg9, pimg10,
        pname, pcat, plocation, pregion, pstate, ptype, pcapacity,
        pideal1, pideal2, pideal3, pideal4, pideal5, pideal6, pideal7, pideal8, pideal9, pideal10, 
        psize, pmin, pday, pweek, pmonth, prdesc, //descide new var name for pricing descriptions.
        pfeat1, pfeat2, pfeat3, pfeat4, pfeat5, pfeat6, pfeat7, pfeat8, pfeat9, pfeat10, pfeat11, pfeat12, pfeat13, pfeat14, pfeat15, pfeat16, pfeat17, pfeat18,
        pdesc, pp1, pp2, pp3, pmap = "";

    var property = xmlDoc.getElementsByTagName("property");

    var properties = [];

    var id = xmlDoc.getElementsByTagName("id");
    var img1 = xmlDoc.getElementsByTagName("img1");
    var img2 = xmlDoc.getElementsByTagName("img2");
    var img3 = xmlDoc.getElementsByTagName("img3");
    var img4 = xmlDoc.getElementsByTagName("img4");
    var img5 = xmlDoc.getElementsByTagName("img5");
    var img6 = xmlDoc.getElementsByTagName("img6");
    var img7 = xmlDoc.getElementsByTagName("img7");
    var img8 = xmlDoc.getElementsByTagName("img8");
    var img9 = xmlDoc.getElementsByTagName("img9");
    var img10 = xmlDoc.getElementsByTagName("img10");

    var name = xmlDoc.getElementsByTagName("name");
    var cat = xmlDoc.getElementsByTagName("cat");
    var location = xmlDoc.getElementsByTagName("location");
    var region = xmlDoc.getElementsByTagName("region");
    var state = xmlDoc.getElementsByTagName("state");
    var type = xmlDoc.getElementsByTagName("type");
    var capacity = xmlDoc.getElementsByTagName("capacity");

    var ideal1 = xmlDoc.getElementsByTagName("ideal1");
    var ideal2 = xmlDoc.getElementsByTagName("ideal2");
    var ideal3 = xmlDoc.getElementsByTagName("ideal3");
    var ideal4 = xmlDoc.getElementsByTagName("ideal4");
    var ideal5 = xmlDoc.getElementsByTagName("ideal5");
    var ideal6 = xmlDoc.getElementsByTagName("ideal6");
    var ideal7 = xmlDoc.getElementsByTagName("ideal7");
    var ideal8 = xmlDoc.getElementsByTagName("ideal8");
    var ideal9 = xmlDoc.getElementsByTagName("ideal9");
    var ideal10 = xmlDoc.getElementsByTagName("ideal10");
    
    //add ideal++

    var size = xmlDoc.getElementsByTagName("size");
    var min = xmlDoc.getElementsByTagName("min");
    var day = xmlDoc.getElementsByTagName("day");
    var week = xmlDoc.getElementsByTagName("week");
    var month = xmlDoc.getElementsByTagName("month");
   //add pricing desc 

    //add features++
    var feat1 = xmlDoc.getElementsByTagName("feat1");
    var feat2 = xmlDoc.getElementsByTagName("feat2");
    var feat3 = xmlDoc.getElementsByTagName("feat3");
    var feat4 = xmlDoc.getElementsByTagName("feat4");
    var feat5 = xmlDoc.getElementsByTagName("feat5");
    var feat6 = xmlDoc.getElementsByTagName("feat6");
    var feat7 = xmlDoc.getElementsByTagName("feat7");
    var feat8 = xmlDoc.getElementsByTagName("feat8");
    var feat9 = xmlDoc.getElementsByTagName("feat9");
    var feat10 = xmlDoc.getElementsByTagName("feat10");
    var feat11 = xmlDoc.getElementsByTagName("feat11");
    var feat12 = xmlDoc.getElementsByTagName("feat12");
    var feat13 = xmlDoc.getElementsByTagName("feat13");
    var feat14 = xmlDoc.getElementsByTagName("feat14");
    var feat15 = xmlDoc.getElementsByTagName("feat15");
    var feat16 = xmlDoc.getElementsByTagName("feat16");
    var feat17 = xmlDoc.getElementsByTagName("feat17");
    var feat18 = xmlDoc.getElementsByTagName("feat18");

    var desc = xmlDoc.getElementsByTagName("desc");
    var p1 = xmlDoc.getElementsByTagName("p1");
    var p2 = xmlDoc.getElementsByTagName("p2");
    var p3 = xmlDoc.getElementsByTagName("p3");
    var map = xmlDoc.getElementsByTagName("map");

    for (i = 0; i < property.length; i++) {
        pid = id[i].childNodes[0].nodeValue;
        pimg1 = img1[i].childNodes[0].nodeValue;
        pimg2 = img2[i].childNodes[0].nodeValue;
        pimg3 = img3[i].childNodes[0].nodeValue;
        pimg4 = img4[i].childNodes[0].nodeValue;
        pimg5 = img5[i].childNodes[0].nodeValue;
        pimg6 = img6[i].childNodes[0].nodeValue;
        pimg7 = img7[i].childNodes[0].nodeValue;
        pimg8 = img8[i].childNodes[0].nodeValue;
        pimg9 = img9[i].childNodes[0].nodeValue;
        pimg10 = img10[i].childNodes[0].nodeValue;

        pname = name[i].childNodes[0].nodeValue;
        pcat = cat[i].childNodes[0].nodeValue;
        plocation = location[i].childNodes[0].nodeValue;
        pregion = region[i].childNodes[0].nodeValue;
        pstate = state[i].childNodes[0].nodeValue;
        ptype = type[i].childNodes[0].nodeValue;
        pcapacity = capacity[i].childNodes[0].nodeValue;

        //add ideal++
        pideal1 = ideal1[i].childNodes[0].nodeValue;
        pideal2 = ideal2[i].childNodes[0].nodeValue;
        pideal3 = ideal3[i].childNodes[0].nodeValue;
        pideal4 = ideal4[i].childNodes[0].nodeValue;
        pideal5 = ideal5[i].childNodes[0].nodeValue;
        pideal6 = ideal6[i].childNodes[0].nodeValue;
        pideal7 = ideal7[i].childNodes[0].nodeValue;
        pideal8 = ideal8[i].childNodes[0].nodeValue;
        pideal9 = ideal9[i].childNodes[0].nodeValue;
        pideal10 = ideal10[i].childNodes[0].nodeValue;        

        psize = size[i].childNodes[0].nodeValue;
        pmin = min[i].childNodes[0].nodeValue;
        pday = day[i].childNodes[0].nodeValue;
        pweek = week[i].childNodes[0].nodeValue;
        pmonth = month[i].childNodes[0].nodeValue;
        //add pricing desc

        //add features++
        pfeat1 = feat1[i].childNodes[0].nodeValue;
        pfeat2 = feat2[i].childNodes[0].nodeValue;
        pfeat3 = feat3[i].childNodes[0].nodeValue;
        pfeat4 = feat4[i].childNodes[0].nodeValue;
        pfeat5 = feat5[i].childNodes[0].nodeValue;
        pfeat6 = feat6[i].childNodes[0].nodeValue;
        pfeat7 = feat7[i].childNodes[0].nodeValue;
        pfeat8 = feat8[i].childNodes[0].nodeValue;
        pfeat9 = feat9[i].childNodes[0].nodeValue;
        pfeat10 = feat10[i].childNodes[0].nodeValue;
        pfeat11 = feat11[i].childNodes[0].nodeValue;
        pfeat12 = feat12[i].childNodes[0].nodeValue;
        pfeat13 = feat13[i].childNodes[0].nodeValue;
        pfeat14 = feat14[i].childNodes[0].nodeValue;
        pfeat15 = feat15[i].childNodes[0].nodeValue;
        pfeat16 = feat16[i].childNodes[0].nodeValue;
        pfeat17 = feat17[i].childNodes[0].nodeValue;
        pfeat18 = feat18[i].childNodes[0].nodeValue;

        pdesc = desc[i].childNodes[0].nodeValue;
        pp1 = p1[i].childNodes[0].nodeValue;
        pp2 = p2[i].childNodes[0].nodeValue;
        pp3 = p3[i].childNodes[0].nodeValue;
        pmap = map[i].childNodes[0].nodeValue;


        var text = '{ ' +
        '"id":"' + pid +
        '" ,"img1":"' + pimg1 +
        '" ,"img2":"' + pimg2 +
        '" ,"img3":"' + pimg3 +
        '" ,"img4":"' + pimg4 +
        '" ,"img5":"' + pimg5 +
        '" ,"img6":"' + pimg6 +
        '" ,"img7":"' + pimg7 +
        '" ,"img8":"' + pimg8 +
        '" ,"img9":"' + pimg9 +
        '" ,"img10":"' + pimg10 +
        '" ,"name":"' + pname +
        '" ,"cat":"' + pcat +
        '" ,"location":"' + plocation +
        '" ,"region":"' + pregion +
        '" ,"state":"' + pstate +
        '" ,"type":"' + ptype +
        '" ,"capacity":"' + pcapacity +

        //add ideal++
        '" ,"ideal1":"' + pideal1 +
        '" ,"ideal2":"' + pideal2 +
        '" ,"ideal3":"' + pideal3 +
        '" ,"ideal4":"' + pideal4 +
        '" ,"ideal5":"' + pideal5 +
        '" ,"ideal6":"' + pideal6 +
        '" ,"ideal7":"' + pideal7 +
        '" ,"ideal8":"' + pideal8 +
        '" ,"ideal9":"' + pideal9 +
        '" ,"ideal10":"' + pideal10 +
        

        '" ,"size":"' + psize +
        '" ,"min":"' + pmin +
        '" ,"day":"' + pday +
        '" ,"week":"' + pweek +
        '" ,"month":"' + pmonth +

        //add pricingdesc & feat++
        '" ,"feat1":"' + pfeat1 +
        '" ,"feat2":"' + pfeat2 +
        '" ,"feat3":"' + pfeat3 +
        '" ,"feat4":"' + pfeat4 +
        '" ,"feat5":"' + pfeat5 +
        '" ,"feat6":"' + pfeat6 +
        '" ,"feat7":"' + pfeat7 +
        '" ,"feat8":"' + pfeat8 +
        '" ,"feat9":"' + pfeat9 +
        '" ,"feat10":"' + pfeat10 +
        '" ,"feat11":"' + pfeat11 +
        '" ,"feat12":"' + pfeat12 +
        '" ,"feat13":"' + pfeat13 +
        '" ,"feat14":"' + pfeat14 +
        '" ,"feat15":"' + pfeat15 +
        '" ,"feat16":"' + pfeat16 +
        '" ,"feat17":"' + pfeat17 +
        '" ,"feat18":"' + pfeat18 +

        '" ,"desc":"' + pdesc +
        '" ,"p1":"' + pp1 +
        '" ,"p2":"' + pp2 +
        '" ,"p3":"' + pp3 +
        '" ,"map":"' + pmap +
            '" }';

        properties.push(text);
    }
    console.log(properties);

    populateLocation(llocation);
    populateProperties(properties);
}

function populateLocation(loctlist) {

    console.log(loctlist.length);

    $("#select").append(loctlist);
   
    
    
}

function populateProperties(properties) {

    var jArr = '{"property" : [' + properties + ']}';
    var obj = JSON.parse(jArr);

    //console.log(obj.property); //test


    /* Setting up the list */
    $content = $("#plist"); // ul
    var l;
    for (l = 0; l < properties.length; l++) {
        var pCat = obj.property[l].cat;
        var pIcon = "";

        //setting up the icon
        if (pCat == "space") {
            pIcon = "images/app-ic-2.png";
        } else if (pCat == "shop") {
            pIcon = "images/app-ic-1.png";
        } else if (pCat == "special") {
            pIcon = "images/app-ic-3.png";
        } 


        $content.append('<li class="demo ui-first-child ui-last-child" style="margin-top:10px; margin-bottom:10px; box-shadow:5px 5px 5px #888888">'
                            + '<a href="#property-page" class="ui-btn" style="padding: 0; height:200px; background-color:white; border-color:#ddd">'
                                + '<div class="panel-default">'
                                   + '<div class="panel-heading demo-head-panel">'
                                        + '<img src="' + obj.property[l].img1 + '" style="width:100%; height:100%" />'
                                    + '</div>'
                                    + '<div class="panel-body demo-body-panel">'
                                        + '<div class="container p-info">'
                                            + '<img src="' + pIcon + '" style="width:50px; margin-top:-30px" />'
                                            + '<h2 style="padding-left:50px; margin-top:-25px">' + obj.property[l].name + '</h2>'
                                            + '<p style="padding-left:50px; margin-top:-5px">' + obj.property[l].location + ', ' + obj.property[l].region + '</p>'
                                        + '</div>'
                                        + '<div class="container p-price">'
                                            + '<p href="" class="ui-btn dummy" style="background-color:#27f335; color:#fff; text-shadow:0 1px 0 #27f335">RM ' + obj.property[l].day + ' / day</p>'
                                        + '</div>'
                                    + '</div>'
                                + '</div>'
                            + '</a>'
                        + '</li>');
    }

    pObj(jArr);
}