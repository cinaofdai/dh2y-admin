/*common function*/
var maxDays = 31;
var maxMonths = 12;


function isMaxlength(obj, maxlength) {
    return obj.value.length + 1 <= maxlength;
}

function openWindow(url) {
    window.open(url);
}

function isTextEmpty(obj, txtErrorMessage) {
    if (obj.value.length == 0)
        errorMessage.innerText = "Can not be empty";
}

function ctrlvStop(evt) {
    if (!window.event) {
        var keyCode = evt.keyCode;
        var key = String.fromCharCode(keyCode).toLowerCase();
        if (evt.ctrlKey && key == "v") {
            evt.preventDefault();
            evt.stopPropagation();
        }
    }
}

function getToday() {
    var today = new Date();
    var year = today.getFullYear() + "";
    var month = (today.getMonth() + 1) + "";
    var day = today.getDay() + "";
    if (month.length == 1) month = "0" + month;
    if (day.length == 1) day = "0" + day;
    var todayDate = year + "-" + month + "-" + day;
    return todayDate;
}

function validateDaysUnit(startDate, endDate) {
    var re = /-/g;
    var fstartDate = startDate.replace(re, "/");
    var fendDate = endDate.replace(re, "/");
    var n1 = new Date(fstartDate).getTime();
    var n2 = new Date(fendDate).getTime();
    var n3 = new Date().getTime();
    var days = (n2 - n1) / (24 * 60 * 60 * 1000);
    if (days < 0) {
        alert("The End Date selected is prior to the Start Date.");
        return false;
    }
    if (n1 > n3) {
        alert("The Start Date selected is in the future.");
        return false;
    }
    if (days + 1 > maxDays) {
        alert("Select an end date no more than " + maxDays + " days after the start date.");
        return false;
    }
    return true;
}

function validateMonthsUnit(startYear, startMonth, endYear, endMonth) {
    var now = new Date();
    if (endYear * 12 + Number(endMonth) - startYear * 12 - Number(startMonth) < 0) {
        alert("The End Date selected is prior to the Start Date.");
        return false;
    }
    if (startYear * 12 + Number(startMonth) - now.getFullYear() * 12 - now.getMonth() - 1 > 0) {
        alert("The Start Date selected is in the future.");
        return false;
    }
    if (endYear * 12 + Number(endMonth) - startYear * 12 - Number(startMonth) + 1 > maxMonths) {
        alert("Select an end date no more than " + maxMonths + " months after the start date.");
        return false;
    }
    return true;
}


function changeBtnEnableByCheckBox(cbxId, btnId) {
    //debugger;
    var cbxObj = document.getElementById(cbxId);
    var btnObj = document.getElementById(btnId);
    if (!cbxObj.checked) btnObj.disabled = true;
    else btnObj.disabled = false;
}

//使用dropdownlist控件控制div显示
function changeDivStyleBySelect(selObj, divIdarray) {
    if (selObj != null && selObj.tagName == "SELECT") {
        for (var i = 0; i < divIdarray.length; i++) {
            var objdiv = document.getElementById(divIdarray[i]);
            if (objdiv == null || objdiv.tagName != "DIV")
                continue;
            else
                objdiv.style.display = "none";
        }
        var currdiv = document.getElementById(divIdarray[selObj.selectedIndex]);
        if (currdiv != null)
            currdiv.style.display = "block";
    }
}

//使用radiobuttonlist控件控制div显示
function changeDivStyleByRadio(radObj, divIdarray) {
    //debugger;
    if (radObj != null && radObj.tagName == "INPUT" && radObj.type == "radio") {
        var radObjarray = document.getElementsByName(radObj.name);
        for (var i = 0; i < radObjarray.length; i++) {
            var objdiv = document.getElementById(divIdarray[i]);
            if (radObjarray[i].checked) {
                if (objdiv == null || objdiv.tagName != "DIV")
                    continue;
                else
                    objdiv.style.display = "block";
            }
            else {
                if (objdiv == null || objdiv.tagName != "DIV")
                    continue;
                else
                    objdiv.style.display = "none";
            }
        }
    }
}

//使用checkbox控制div显示
function changeDivStyleByCheckBox(cbxObj, divId) {
    if (cbxObj != null && cbxObj.tagName == "INPUT" && cbxObj.type == "checkbox") {
        var divObj = document.getElementById(divId);
        if (divId != null && cbxObj.checked)
            divObj.style.display = "block";
        else if (divId != null && !cbxObj.checked)
            divObj.style.display = "none";
    }
}

function changeCheckBoxStyleByCheckBox(cbxObj, cbxId) {
    if (cbxObj != null && cbxObj.tagName == "INPUT" && cbxObj.type == "checkbox") {
        var cbx1 = document.getElementById(cbxId);
        if (cbxId != null && cbxObj.checked) {
            cbx1.disabled = false;
            cbx1.parentElement.disabled = false;
        }
        else if (cbxId != null && !cbxObj.checked) {
            cbx1.checked = false;
            cbx1.disabled = true;
        }
    }
}

function previewTrimImageUrl(inputUrl) {
    var tempUrl = inputUrl.toString().replace(/(^\s*)|(\s*$)/g, '');

    if (tempUrl.substring(0, 7) == "http://") {
        tempUrl = tempUrl.substring(7);
    }
    else if (tempUrl.substring(0, 8) == "https://") {
        tempUrl = tempUrl.substring(8);
    }
    else if (tempUrl.substring(0, 10) == "http(s)://") {
        tempUrl = tempUrl.substring(10);
    }
    return tempUrl;
}

function previewImageByTextBox(txtObj) {
    var obj0 = document.getElementById(txtObj);
    var obj1 = previewTrimImageUrl(obj0.value);
    var td = "<div style='float:left;'><div style='text-align:right;'><img src='" + "http://" + obj1 + "' /><br />" + "</div></div>";
    var nw = window.open("about:blank", "", "left=150,top=150,height=350,width=500,toolbar=no,location=no,menubar=no,status=no");
    //debugger;
    nw.document.write("<title>Preview Image</title>");
    nw.document.write(td);
    nw.document.bgColor = "silver";
    nw.document.close();
}

function preview2ImageByTextBox(txtObj1, txtObj2) {
    var obj0 = document.getElementById(txtObj1);
    var obj1 = previewTrimImageUrl(obj0.value);
    var obj2 = document.getElementById(txtObj2);
    var obj3 = previewTrimImageUrl(obj2.value);

    var td = "<div style='float:left;position:relative; width:400px;'>"
            + "<div style='float:right; position:absolute; top:20px;right:20px;'><img src='" + "http://" + obj1 + "' /></div>"
            + "<div style='float:right; position:absolute; top:20px;right:20px;'><img src='" + "http://" + obj3 + "' /></div>"
            + "</div>";
    var nw = window.open("about:blank", "", "left=150,top=150,height=350,width=500,toolbar=no,location=no,menubar=no,status=no");
    //debugger;
    nw.document.write("<title>Preview Image</title>");
    nw.document.write(td);
    nw.document.bgColor = "silver";
    nw.document.close();
}

function preview2ImageByURL(urlObj1, urlObj2) {
    var td = "<div style='float:left;position:relative; width:400px;'>"
            + "<div style='float:right; position:absolute; top:20px;right:20px;'><img src='" + urlObj1 + "' /></div>"
            + "<div style='float:right; position:absolute; top:20px;right:20px;'><img src='" + urlObj2 + "' /></div>"
            + "</div>";
    var nw = window.open("about:blank", "", "left=150,top=150,height=350,width=500,toolbar=no,location=no,menubar=no,status=no");
    //debugger;
    nw.document.write("<title>Preview Image</title>");
    nw.document.write(td);
    nw.document.bgColor = "silver";
    nw.document.close();
}


function CopyAll(objName) {
    //debugger;
    var obj = document.getElementById(objName);
    obj.focus();
    obj.select();
    if (document.all) {
        var therange = obj.createTextRange();
        therange.execCommand("Copy");
    }
}

//标签
function nTabs(TabId, Num) {
    //debugger;
    var thisTab = document.getElementById(TabId);
    if (thisTab.className == "liactive") return;
    var tabsName = thisTab.parentNode.id;
    var tabList = document.getElementById(tabsName).getElementsByTagName("li");
    for (i = 1; i < tabList.length; i++) {
        if (i - 1 == Num) {
            thisTab.className = "liactive";
            var pans = thisTab.getElementsByTagName("SPAN");
            pans[0].className = "spanactive";
            document.getElementById(tabsName + "_Content" + (i - 1)).style.display = "block";
        } else {
            tabList[i].className = "linormal";
            var pans = tabList[i].getElementsByTagName("SPAN");
            pans[0].className = "spannormal";
            document.getElementById(tabsName + "_Content" + (i - 1)).style.display = "none";
        }
    }
    location.href = "#Top";
    //debugger;
}

//在repeater中绑定radiobutton
function setUniqueRadioButton(nameregex, current) {
    var re = new RegExp(nameregex);
    var objArray = document.getElementsByTagName("INPUT");
    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i].type == "radio") {
            if (re.test(objArray[i].name))
                objArray[i].checked = false;
        }
    }
    current.checked = true;

}

//checkbox选择所有
function selectAll(cbxObj) {
    //debugger;
    var tabObj = cbxObj.parentNode.parentNode.parentNode.parentNode;
    if (tabObj != null && tabObj.tagName == "TABLE") {
        var objArray = tabObj.getElementsByTagName("INPUT");
        for (var i = 0; i < objArray.length; i++) {
            if (objArray[i] != null && objArray[i].type == "checkbox" && objArray[i].disabled == false)
                objArray[i].checked = cbxObj.checked;
        }
    }
}

function GetCheckedItemIds(checkBoxName, hiddenId) {
    //debugger;
    var ids = "";

    var objArray = document.getElementsByName(checkBoxName);

    for (var i = 0; i < objArray.length; i++) {
        if (objArray[i] && objArray[i].checked == true) {
            if (ids.length > 0) {
                ids += "," + objArray[i].id;
            } else {
                ids += objArray[i].id;
            }
        }
    }


    if (document.getElementById(hiddenId))
        document.getElementById(hiddenId).value = ids;
}

//隔行变色
function initTabletrColor(tabId, style1, style2) {
    var tabObj = document.getElementById(tabId);
    if (tabObj == null) return;
    var trArray = tabObj.getElementsByTagName("TR");
    for (var i = 1; i < trArray.length; i++) {
        if (trArray[i] != null && i % 2 == 0) trArray[i].className = style1;
        else if (trArray[i] != null && i % 2 != 0) trArray[i].className = style2;
    }
}

//选中行高亮
var curRow;
var curRowclassName;
var className = "sp_tr_list_hover";
function highLightRow(rowObj) {

    if (curRow) {
        curRow.className = curRowclassName;
        curRowclassName = rowObj.className;
        rowObj.className = className;
    }
    else {
        curRowclassName = rowObj.className;
        rowObj.className = className;
    }
    curRow = rowObj;
}


function isKeyTrigger(e, keyCode) {
    var argv = isKeyTrigger.arguments;
    var argc = isKeyTrigger.arguments.length;
    var bCtrl = false;
    if (argc > 2) bCtrl = argv[2];
    var bAlt = false;
    if (argc > 3) bAlt = argv[3];
    var nav4 = window.Event ? true : false;
    if (typeof e == 'undefinded') e = event;
    if (bCtrl && !((typeof e.ctrlKey != 'undefinded') ? e.ctrlKey : e.modifiers & Event.CONTROL_MASK > 0)) return false;
    if (bAlt && !((typeof e.altKey != 'undefinded') ? e.altKey : e.modifiers & Event.ALT_MASK > 0)) return false;
    var whichcode = 0;
    if (nav4) whichcode = e.which;
    else if (e.type == "keypress" || e.type == "keydown") whichcode = e.keyCode;
    else whichcode = e.button;

    return (whichcode == keyCode);
}

function Enter(e, objId) {
    debugger;
    var ie = navigator.appName == "Microsoft Internet Explorer" ? true : false;
    if (ie) {
        if (event.keyCode == 13) document.getElementById(objId).click();
    }
    else {
        if (isKeyTrigger(e, 13, false)) document.getElementById(objId).click();
    }
}

function CheckSelectCountry() {
    var index1 = document.getElementById("selHowdidyouknowus").value;
    var index2 = document.getElementById("selCountry").value;
    if (index1 == "0" || index2 == "0") {
        if (index1 == "0") {
            document.getElementById("spanSelectMsg").innerHTML = "Please choose an answer";
        }
        else {
            document.getElementById("spanSelectMsg").innerHTML = "";
        }
        if (index2 == "0") {
            document.getElementById("spanCountry").innerHTML = "Please choose a country";

        }
        else {
            document.getElementById("spanCountry").innerHTML = "";
        }
        return false;
    }
    return true;

}
function CheckSelectCountry() {
    var index = document.getElementById("selCountry").value;
    if (index == "0") {
        document.getElementById("spanCountry").innerHTML = "Please choose a country";
        return false;
    }
    else {
        document.getElementById("spanCountry").innerHTML = "";
        return true;
    }
}
function CheckSelectWay() {
    var index = document.getElementById("selHowdidyouknowus").value;
    if (index == "0") {
        document.getElementById("spanSelectMsg").innerHTML = "Please choose a way you knew us";
        return false;
    }
    else {
        document.getElementById("spanSelectMsg").innerHTML = "";
        return true;
    }
}
function CheckSelectCountryAndWay() {
    var index1 = document.getElementById("selHowdidyouknowus").value;
    var index2 = document.getElementById("selCountry").value;
    if (index1 == "0" || index2 == "0") {
        if (index1 == "0") {
            document.getElementById("spanSelectMsg").innerHTML = "Please choose an answer";
        }
        else {
            document.getElementById("spanSelectMsg").innerHTML = "";
        }
        if (index2 == "0") {
            document.getElementById("spanCountry").innerHTML = "Please choose a country";

        }
        else {
            document.getElementById("spanCountry").innerHTML = "";
        }
        return false;
    }
    return true;
}

//load shadow
function setShadow() {
    setRightShadow();
    setBottomShadow();
    setConerShadow();
}

function setRightShadow() {
    if (document.getElementById("shadow").clientHeight < document.getElementById("main").clientHeight) {
        document.getElementById("shadow").style.display = "block";
        document.getElementById("shadow").style.height = document.getElementById("main").offsetHeight - 2 + "px";
    }
    else {
        document.getElementById("shadow").style.display = "block";
        document.getElementById("main").style.height = document.getElementById("shadow").offsetHeight - 2 + "px";
    }
}

function setBottomShadow() {
    document.getElementById("bottomMainShadow").style.display = "block";
    document.getElementById("bottomMainShadow").style.width = document.getElementById("main").offsetWidth - 6 + "px";
}

function setConerShadow() {
    document.getElementById("cornerShadow").style.display = "block";
}

//SetBtnByAppType
function setHomePageBtn() {
    document.getElementById("homepage").style.backgroundColor = '#ddd';
    document.getElementById("Header1_ahomepage").style.color = "#009999";
}

function setLiveChatBtn() {
    document.getElementById("introduction").style.backgroundColor = '#ddd';
    document.getElementById("Header1_aintroduction").style.color = "#009999";
}


function setForumBtn() {
    document.getElementById("forum").style.backgroundColor = '#ddd';
    document.getElementById("Header1_aforum").style.color = "#009999";
}

function setNewsletterBtn() {
    document.getElementById("newsletter").style.backgroundColor = '#ddd';
    document.getElementById("Header1_anewsletter").style.color = "#009999";
}

function setKnowledgebaseBtn() {
    document.getElementById("knowledgebase").style.backgroundColor = '#ddd';
    document.getElementById("Header1_aknowledgebase").style.color = "#009999";
}

function setTicketBtn() {
    document.getElementById("ticket").style.backgroundColor = '#ddd';
    document.getElementById("Header1_aticket").style.color = "#009999";
}

function setAboutUsBtn() {
    document.getElementById("aboutus").style.backgroundColor = '#ddd';
    document.getElementById("Header1_aaboutus").style.color = "#009999";
}

function getUrl() {
    var url = document.location.href;
    return url;
}

//get querystring value
function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}

function getAppType() {
//    var url = getUrl();
//    var pos = url.lastIndexOf("?appType=");
//    if (pos == -1) {
//        return null;
//    }
//    else {
//        var length = url.length;
//        var appType = url.substring(pos);
//        return appType;
    //    }
    return getQueryStringByName("appType");
}

function setBtnByAppType() {
    var appType = getAppType();
    if (appType == null) {
        setHomePageBtn();
    }
    else if (appType == 1) {
        setLiveChatBtn();
    }
    else if (appType ==2) {
        setForumBtn();
    }
    else if (appType == 4) {
        setNewsletterBtn();
    }
    else if (appType == 8) {
        setKnowledgebaseBtn();
    }
    else if (appType == 16) {
        setTicketBtn();
    }
}

function setBtnByAppTypeWithSession(appType) {
    if (appType == null || appType == "") {
        setHomePageBtn();
    }
    else if (appType == "1") {
        setLiveChatBtn();
    }
    else if (appType == "2") {
        setForumBtn();
    }
    else if (appType == "4") {
        setNewsletterBtn();
    }
    else if (appType == "8") {
        setKnowledgebaseBtn();
    }
    else if (appType == "16") {
        setTicketBtn();
    }
}