function loadXml() {

    console.log("xml parsing method")
    /* XML PARSING */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            populate(this);
        }
    };
    xhttp.open("POST", "http://purple.com.my/popup/popup.xml", true);
    xhttp.send();
}

function populate(xml) {

    /* XML populate method */
    var i;
    var listItem = "";
    var pid, pimg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8, pimg9, pimg10, pname, plocation, pregion, pstate, ptype, pcapacity, pidf, pids, pidt,
        psize, pmin, pday, pweek, preqW, preqM, pfon, pftw, pfth, pffr, pffv, pfsx,
        pfsv, pfei, pfnn, pftn, pdesc, pp1, pp2, pp3, pmap = "";

    var xmlDoc = xml.responseXML;
    var property = xmlDoc.getElementsByTagName("property"); //root tag of xml file

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
    var location = xmlDoc.getElementsByTagName("location");
    var region = xmlDoc.getElementsByTagName("region");
    var state = xmlDoc.getElementsByTagName("state");
    var type = xmlDoc.getElementsByTagName("type");
    var capacity = xmlDoc.getElementsByTagName("capacity");
    var idf = xmlDoc.getElementsByTagName("idf");
    var ids = xmlDoc.getElementsByTagName("ids");
    var idt = xmlDoc.getElementsByTagName("idt");
    var size = xmlDoc.getElementsByTagName("size");
    var min = xmlDoc.getElementsByTagName("min");
    var day = xmlDoc.getElementsByTagName("day");
    var week = xmlDoc.getElementsByTagName("week");
    var reqW = xmlDoc.getElementsByTagName("reqW");
    var reqM = xmlDoc.getElementsByTagName("reqM");
    var fon = xmlDoc.getElementsByTagName("fon");
    var ftw = xmlDoc.getElementsByTagName("ftw");
    var fth = xmlDoc.getElementsByTagName("fth");
    var ffr = xmlDoc.getElementsByTagName("ffr");
    var ffv = xmlDoc.getElementsByTagName("ffv");
    var fsx = xmlDoc.getElementsByTagName("fsx");
    var fsv = xmlDoc.getElementsByTagName("fsv");
    var fei = xmlDoc.getElementsByTagName("fei");
    var fnn = xmlDoc.getElementsByTagName("fnn");
    var ftn = xmlDoc.getElementsByTagName("ftn");
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
        plocation = location[i].childNodes[0].nodeValue;
        pregion = region[i].childNodes[0].nodeValue;
        pstate = state[i].childNodes[0].nodeValue;
        ptype = type[i].childNodes[0].nodeValue;
        pcapacity = capacity[i].childNodes[0].nodeValue;
        pidf = idf[i].childNodes[0].nodeValue;
        pids = ids[i].childNodes[0].nodeValue;
        pidt = idt[i].childNodes[0].nodeValue;
        psize = size[i].childNodes[0].nodeValue;
        pmin = min[i].childNodes[0].nodeValue;
        pday = day[i].childNodes[0].nodeValue;
        pweek = week[i].childNodes[0].nodeValue;
        preqW = reqW[i].childNodes[0].nodeValue;
        preqM = reqM[i].childNodes[0].nodeValue;
        pfon = fon[i].childNodes[0].nodeValue;
        pftw = ftw[i].childNodes[0].nodeValue;
        pfth = fth[i].childNodes[0].nodeValue;
        pffr = ffr[i].childNodes[0].nodeValue;
        pffv = ffv[i].childNodes[0].nodeValue;
        pfsx = fsx[i].childNodes[0].nodeValue;
        pfsv = fsv[i].childNodes[0].nodeValue;
        pfei = fei[i].childNodes[0].nodeValue;
        pfnn = fnn[i].childNodes[0].nodeValue;
        pftn = ftn[i].childNodes[0].nodeValue;
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
        '" ,"location":"' + plocation +
        '" ,"region":"' + pregion +
        '" ,"state":"' + pstate +
        '" ,"type":"' + ptype +
        '" ,"capacity":"' + pcapacity +
        '" ,"idf" :"' + pidf +
        '" ,"ids":"' + pids +
        '" ,"idt":"' + pidt +
        '" ,"size":"' + psize +
        '" ,"min":"' + pmin +
        '" ,"day":"' + pday +
        '" ,"week":"' + pweek +
        '" ,"reqW":"' + preqW +
        '" ,"reqM":"' + preqM +
        '" ,"fon":"' + pfon +
        '" ,"ftw":"' + pftw +
        '" ,"fth":"' + pfth +
        '" ,"ffr":"' + pffr +
        '" ,"ffv":"' + pffv +
        '" ,"fsx":"' + pfsx +
        '" ,"fsv":"' + pfsv +
        '" ,"fei":"' + pfei +
        '" ,"fnn":"' + pfnn +
        '" ,"ftn":"' + pftn +
        '" ,"desc":"' + pdesc +
        '" ,"p1":"' + pp1 +
        '" ,"p2":"' + pp2 +
        '" ,"p3":"' + pp3 +
        '" ,"map":"' + pmap +
            '" }';

        properties.push(text);
    }

    //console.log(properties.toString());
    showPopulate(properties);    
}

function showPopulate(properties) {

    var jArr = '{"property" : [' + properties + ']}';
    var obj = JSON.parse(jArr);

    //console.log(obj.property); //test


    /* Setting up the list */
    $content = $("#flist"); // ul
    var l;
    for (l = 0; l < properties.length; l++) {
        var pType = obj.property[l].type;
        var pIcon = "";

        //setting up the icon
        if (pType == "space") {
            pIcon = "images/app-ic-2.png";
        } else if (pType == "shop") {
            pIcon = "images/app-ic-1.png";
        } else if (pType == "special") {
            pIcon = "";
        }

        $content.append('<li class="demo ui-first-child ui-last-child" style="margin-top:10px; margin-bottom:10px; box-shadow:5px 5px 5px #888888">' +
                        '<a href="#info-page" class="ui-btn" style="height:200px; background-color:white; border-color:#ddd">' +
                            '<div id="property-img" style="margin-left: -20px; margin-top: -20px; width: 360px; height:150px; overflow:hidden">' +
                                '<img src="' + obj.property[l].img1 + '" style="width:100%; height:100%"/>' +
                            '</div>' +
                            '<div id="property-info" class="container" style="margin-left: -15px; height: 50px; width: 330px; color:black">' +
                                '<img src="' + pIcon + '" style="width:50px; height:50px; margin-top:-20px" />' +
                                '<h2 style="padding-left:50px; margin-top:-25px;">' + obj.property[l].name + '</h2>' +
                                '<p style="padding-left:50px; margin-top:-5px">' + obj.property[l].location + ', ' + obj.property[l].region + '</p>' +
                                '<p href="" class="ui-btn" style="margin-top:-40px; margin-left:235px; height:20px; width:90px; font-size:9px; color: #fff; background-color: #29cedc; border-color: #ddd; text-shadow: 0 1px 0 #29cedc; border-radius: 4px;">RM ' + obj.property[l].day + ' / day</p>' +
                                '<p href="" class="ui-btn" style="margin-top:0px; margin-left:235px; height:20px; width:90px; font-size:9px; color: #fff; background-color: #17a548; border-color: #ddd; text-shadow: 0 1px 0 #17a548; border-radius: 4px;">RM ' + obj.property[l].week + ' / week</p>' +
                            '</div>' +
                        '</a>' +
                    '</li>');

    }

    detail(jArr);
}