var comm100_server = "kf.miss.163.com/livechatserver";

if (typeof comm100_userId == 'undefined') {    comm100_userId = null;}
function comm100_livechat(server, console) {
    var $ = window.document;var $$ = function(id) { return $.getElementById(id); };
    var ifDebug = window.location.href.indexOf("comm100_console") > 0;
    if (!window.comm100) {
        var comm100 = {
            buttonType: {
                image: 0,
                text: 1,
                float: 3,
                monitor: 2
            },
            actionType: {
                buildButton: 0,
                pageVisit: 1,
                heartbeat: 2,
                refuseInvitation: 3,
                showAutoInvite: 4,
                manualInvitationShowed: 5,
                findOldButton: 6
            },
            id: 0,
            getId: function() {
                return ++comm100.id;
            },
            getRandom: function() {
                return Math.round(Math.random() * 10);
            },
            getQueryStringParams: function(url) {
                var i = url.indexOf('?');
                var params = {};
                if (i > 0) {
                    var v = url.substring(i + 1, url.length).split('&');
                    for (var i = 0; i < v.length; i++) {
                        var item = v[i].split('=');
                        if (item.length == 2)
                            params[item[0]] = item[1];
                    }
                }
                return params;
            },
            getCurrentScriptObj: function(url) {
                var tgs = $.getElementsByTagName("script");
                for (var i = tgs.length - 1; i >= 0; i--) {
                    var src = tgs[i].src.toLowerCase();
                    if (src.indexOf(url) >= 0) {
                        return tgs[i];
                    }
                }
                return null;
            },
            getUrlProtocal: function(url) {
                var i = url.indexOf("//");
                return url.substring(0, i + 2);
            },
            getCookie: function(k) {
                var cookie = $.cookie;
                var arr = cookie.split("; ");
                for (var i = 0; i < arr.length; i++) {
                    var v = arr[i].split("=");
                    if (v != null && v.length == 2 && k == v[0]) {
                        console.trace(k + ": " + v[1], "get cookie");
                        return v[1];
                    }
                }
            },
            getTruncatedTitle: function(){
                return ($.title > 256) ? $.title.substring(0, 256) : $.title;
            },
            delCookie: function(k) {
                console.trace(k, "delete cookie");
                $.cookie = k + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            },
            getScrResolution: function() {
                return screen.width + 'x' + screen.height;
            },
            getTimezoneOffset: function() {
                return new Date().getTimezoneOffset();
            },
            getFlashVersion: function() {
                var v = "0.0.0";
                if (navigator.plugins && navigator.mimeTypes.length) {
                    var x = navigator.plugins["Shockwave Flash"];
                    if (x && x.description) {
                        v = x.description.replace(/([a-z]|[A-Z]|\s)+/, "").replace(/(\s+r|\s+b[0-9]+)/, ".");
                    }
                } else {
                    try {
                        var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                        for (var i = 3; axo != null; i++) {
                            axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
                            v = i + ".0.0";
                        }
                    }
                    catch (e) { }

                    try { v = axo.GetVariable("$version").split(" ")[1].split(",").join("."); }
                    catch (e) { }
                }

                return v;
            },
            preventDefault: function(e) {
                e = e || window.event;
                if (e) {
                    if (e.preventDefault) {
                        e.preventDefault();
                    }
                    else {
                        e.returnValue = false;
                    }
                }
            },
            stopPropagation: function(e) {
                e = e || window.event;
                if (e.stopPropagation) {
                    e.stopPropagation();
                }
                else {
                    e.cancelBubble = true;
                }
            },
            popupWindow: function(url, name, w, h) {
                try {
                    return window.open(comm100.appendDebugParam(url),
                        name, "height=" + h + ",width=" + w + ",left=200,top=150,status=yes,toolbar=no,menubar=no,resizable=yes,location=no,titlebar=no");
                }
                catch (e) {
                }

            },

            sendRequest: function(id, src) {
                console.trace({id:id,src:src},"send request", "blue");
                var headObj = $.getElementsByTagName("head").item(0);
                var scriptObj = $.createElement("script");
                scriptObj.setAttribute("type", "text/javascript");
                scriptObj.setAttribute("src", comm100.appendDebugParam(src));
                scriptObj.setAttribute("id", id);
                headObj.appendChild(scriptObj);
                return scriptObj;
            },
            removeRequest: function(id) {
                var obj = $$(id);
                if (obj && obj.parentNode) {
                    obj.parentNode.removeChild(obj);
                }
            },
            px2int: function(px) {
                if (px == "") {
                    return 0;
                }
                return parseInt(px.replace(/^(\d+).*?$/, "$1"));
            },
            createIframe: function(z, w, h) {
                console.assert(comm100.ie == "6.0", "only ie6 need iframe to corver ddl.");
                z = z || 0;
                w = w || "0px";
                h = h || "0px";
                var ifr = $.createElement("IFRAME");
                ifr.src = "javascript:false";
                ifr.style.cssText = "display:none;left:0px;top:0px;width:" + w + ";height:" + h + ";position:absolute;z-index:" + z + ";filter:alpha(opacity=0,style=0);";
                ifr.frameborder = 0;
                $.body.insertBefore(ifr, $.body.firstChild);
                return ifr;
            },
            float: {
                supportFixed: function() {
                    var f = comm100.float;
                    if (f.fixed != null) {
                        return f.fixed;
                    }
                    if ($.createElement) {
                        try {
                            var b = $.body;
                            var e = $.createElement('div');
                            if (e.getBoundingClientRect) {
                                e.innerHTML = 'x';
                                e.style.cssText = 'position:fixed;top:100px;';
                                b.insertBefore(e, b.firstChild);
                                var originalHeight = b.style.height,
                                originalScrollTop = b.scrollTop;
                                b.style.height = '3000px';
                                b.scrollTop = 500;
                                var elementTop = e.getBoundingClientRect().top;
                                b.style.height = originalHeight;
                                var isSupported = (elementTop === 100);
                                b.removeChild(e);
                                b.scrollTop = originalScrollTop;

                                f.fixed = isSupported;
                                return isSupported;
                            }
                        } catch (e) {
                            f.fixed = false;
                            return false;
                        }
                    }
                    f.fixed = false;
                    return false;
                },
                clientSize: function() {
                    var b = $.compatMode && $.compatMode === "CSS1Compat";
                    var w = $.documentElement.clientWidth;
                    var h = $.documentElement.clientHeight;

                    return {
                        w: b && w || $.body.clientWidth || w,
                        h: b && h || $.body.clientHeight || h
                    }
                },
                scrollPos: function() {
                    var b = $.body, d = $.documentElement;
                    return {
                        x: b.scrollLeft || d.scrollLeft,
                        y: b.scrollTop || d.scrollTop
                    }
                },
                calcPos: function(sz, option) {
                    var f = comm100.float;
                    var cs = f.clientSize();
                    var x, y;
                    if (option.l) {
                        x = option.l
                    }
                    else {
                        var ws = cs.w - sz.w;
                        x = (option.r != null) ? ws - option.r :
                            (option.pl != null) ? ws * option.pl * 0.01 :
                            (option.pr != null) ? ws - ws * option.pr * 0.01 : 0;
                    }
                    if (option.t) {
                        y = option.t
                    }
                    else {
                        var hs = cs.h - sz.h;
                        y = (option.b != null) ? hs - option.b :
                            (option.pt != null) ? hs * option.pt * 0.01 :
                            (option.pb != null) ? hs - hs * option.pb * 0.01 : 0;
                    }
                    if (x > 0) {
                        x = Math.ceil(x)
                    }
                    if (y > 0) {
                        y = Math.ceil(y)
                    }
                    return { x: x, y: y };
                },
                getFloat: function(div) {
                    var a = comm100.float.floatDivs;
                    for (var i = 0; i < a.length; i++) {
                        if (div === a[i].div) {
                            return a[i];
                        }
                    }
                },
                smoothMove: function(s, e) {
                    var d = e - s;
                    if (Math.abs(d) <= 2) {
                        return e;
                    }
                    else {
                        return s + d * 0.2;
                    }
                },

                doFloat: function() {
                    var f = comm100.float;
                    console.assert(f.fixed != null, "must call [comm100.float.supportFixed] first.");
                    var arr = f.floatDivs;
                    for (var i = 0; i < arr.length; i++) {
                        var div = arr[i].div;
                        var pos = f.calcPos(arr[i].sz, arr[i].option);

                        if (f.fixed) {
                            div.style.position = "fixed";
                            div.style.left = pos.x + "px";
                            div.style.top = pos.y + "px";
                        }
                        else {
                            var sp = f.scrollPos();
                            div.style.position = "absolute";
                            var x = sp.x + pos.x;
                            var y = sp.y + pos.y;
                            if (div.floated) {
                                div.style.left = f.smoothMove(comm100.px2int(div.style.left), x) + "px";
                                div.style.top = f.smoothMove(comm100.px2int(div.style.top), y) + "px";
                            }
                            else {
                                div.style.left = x + "px";
                                div.style.top = y + "px";
                                div.floated = true;
                            }
                            var ifr = arr[i].ifr;
                            if (ifr) {
                                ifr.style.left = div.style.left;
                                ifr.style.top = div.style.top;
                            }
                        }

                    }
                    if (f.timer != null) {
                        clearTimeout(f.timer);
                    }

                    f.timer = setTimeout(f.doFloat, f.fixed ? 500 : 30);
                },
                floatDivs: [], 
                floatIt: function(div, sz, option) {//sz: size of the div, option: float position
                    console.trace([div.id, sz, option], "float", "purple");
                    if (!div || !option) {
                        return;
                    }
                    var f = comm100.float;
                    f.supportFixed(); //set f.fixed


                    var o = f.getFloat(div);
                    if (o) {
                        o.option = option;
                        if (!o.sz || o.sz.w != sz.w || o.sz.h != sz.h) {
                            o.sz = sz;
                            o.div.floated = false;
                        }
                    }
                    else {
                        var ifr = null;
                        if (comm100.ie == "6.0") {
                            ifr = comm100.createIframe(div.style.zIndex - 1, div.style.width, div.style.height);
                            ifr.style.display = "";
                        }
                        f.floatDivs.push({ div: div, sz: sz, option: option, ifr: ifr });
                    }

                    f.doFloat();
                },
                stopFloat: function(div) {
                    var f = comm100.float;
                    var arr = f.floatDivs;
                    if (arr && arr.length > 0) {
                        for (var i = 0; i < arr.length; i++) {
                            if (div === arr[i].div) {
                                var ifr = arr[i].ifr;
                                if (ifr) {
                                    $.body.removeChild(ifr);
                                }
                                arr.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            },
            overlay: {
                pageSize: function() {
                    var b = $.body, h = $.documentElement;
                    return {
                        w: Math.max(b.scrollWidth, b.offsetWidth, h.clientWidth, h.scrollWidth, h.offsetWidth),
                        h: Math.max(b.scrollHeight, b.offsetHeight, h.clientHeight, h.scrollHeight, h.offsetHeight)
                    };
                },
                show: function(zIndex, divId) {
                    var ifrId = divId + "ifr";
                    var ifr = $$(ifrId);
                    var div = $$(divId);
                    if (!div) {
                        div = $.createElement("div");
                        div.id = divId;


                        var cssOpacity;
                        if (comm100.ie) {
                            cssOpacity = "filter:alpha(opacity=65);";
                        }
                        else {
                            cssOpacity = "opacity:0.65;-moz-opacity:0.65";
                        }
                        div.style.cssText = ("position:absolute;left:0px;top:0px;background-color:black;" + cssOpacity);
                        if (zIndex != null) {//can not set z-index in cssText, didn't work in firefox
                            div.style.zIndex = zIndex;
                        }

                        $.body.insertBefore(div, $.body.firstChild);

                    }
                    if (!ifr && comm100.ie == "6.0") {
                        ifr = comm100.createIframe(zIndex - 1);
                        ifr.id = ifrId;
                        ifr.style.display = "";
                    }

                    div.style.display = "";
                    comm100.overlay.timer = setInterval(function() {

                        var fixed = comm100.float.supportFixed();
                        if (fixed) {
                            div.style.position = "fixed";
                        }
                        var cs = comm100.float.clientSize();
                        div.style.width = cs.w + "px";
                        div.style.height = cs.h + "px";

                        if (!fixed) {
                            var ps = comm100.overlay.pageSize();
                            var offset = (ps.w <= cs.w + 21) ? -21 :    //offset for hor scroll bar
                                     (ps.w <= cs.w + 17) ? -17 : 0;
                            if (comm100.ie == "7.0" &&
                                $.compatMode != "BackCompat") {
                                offset = 0;
                            }

                            var offsetY = 0;
                            if (comm100.ie && $.compatMode == "BackCompat") {
                                offsetY = (ps.h <= cs.h + 4) ? -4 : 0;    //offset for hor scroll bar
                            }

                            div.style.width = ps.w + offset + "px";
                            div.style.height = ps.h + offsetY + "px";
                            if (ifr) {
                                ifr.style.width = div.style.width;
                                ifr.style.height = div.style.height;
                            }
                        }

                    }, 500);
                },
                hide: function(divId) {
                    var ifrId = divId + "ifr";
                    var o = comm100.overlay;
                    var div = $$(divId);
                    if (div) {
                        $.body.removeChild(div);
                    }
                    var ifr = $$(ifrId);
                    if (ifr) {
                        $.body.removeChild(ifr);
                    }
                    if (o.timer != null) {
                        clearInterval(o.timer);
                    }
                }
            },
            imageComplete: function(img, f) {
                var div;
                if (!comm100.ie && img.parentNode == null) {
                    div = $.createElement("DIV");
                    div.style.display = 'none';
                    div.innerHTML = "<img src='" + img.src + "'></img>";
                    $.body.insertBefore(div, $.body.firstChild);
                    img = div.firstChild;
                }
                console.trace(f.toString(),"load image");

                function checkLoaded(img) {
                    console.trace({readyState: img.readyState, complete: img.complete},"check image loaded");
                    return img.readyState == "complete" || img.readyState == "loaded" || img.complete == true;
                }
                function onload() {
                    setTimeout(function() { //make sure the img.width & img.height is valid.
                        console.trace(f.toString(),"on image loaded");
                        if (div)
                            $.body.removeChild(div);
                        f({ w: img.width, h: img.height });
                    }, 100);
                }


                if (!checkLoaded(img) && img.onload == null) {
                    img.onreadystatechange = img.onload = function() {
                        if (checkLoaded(img)) {
                            img.onreadystatechange = img.onload = null;
                            onload();
                        }
                    }
                }
                else {
                    console.trace(f.toString(),"load image from cache");
                    onload();
                }
            },
            setTimeout: function(code, delay) {
                console.assert(delay != null, "setTimeout delay can't be null");

                if (delay <= 0) {
                    return window.setTimeout(code, 30);
                }
                else if (delay != Number.POSITIVE_INFINITY) {
                    return window.setTimeout(code, delay);
                }
            },
            playSound: function(url) {
                function getMimeType() {

                    var mimeType = "application/x-mplayer2"; //default
                    var agt = navigator.userAgent.toLowerCase();

                    if (navigator.mimeTypes) {
                        if (agt.indexOf("windows") == -1) {
                            //non-IE, no-Windows
                            var plugin = navigator.mimeTypes["audio/mpeg"].enabledPlugin;
                            if (plugin) mimeType = "audio/mpeg" //Mac/Safari & Linux/FFox
                        }
                        if (agt.indexOf("opera") > -1) {
                            mimeType = null;
                        }
                    } //end no-Windows

                    return mimeType
                }
                try {
                    var e = $.createElement("embed");
                    e.src = url;
                    e.hidden = true;
                    e.width = 1;
                    e.height = 1;
                    e.autostart = true;
                    e.loop = 0;

                    var type = getMimeType();
                    if (type) e.type = type;

                    $.body.insertBefore(e, $.body.firstChild);
                }
                catch (e) { }
            },
            buttonId_v2: "LiveChatDiv",
            imageId_v5: "comm100_ButtonImage",
            imageButtonId_v5: "comm100_ChatButton",
            textButtonId_v5: "comm100_TextLink",
            floatButtonId_v5: "comm100_FloatImageButton",
            invitationIframeId: "comm100_ifrInvitation",
            invitationDivId: "comm100_invitationDiv",
            overlayId: "comm100_overlayId",
            cookieKey_v5: "comm100_",
            cookieKey_v6: "Comm100_CC_Identity_",
            sessionCookieKey: "comm100_session_",

            createFloatDiv: function() {
                var divId = comm100.floatButtonId_v5 + comm100.getId();
                div = $.createElement("DIV");
                div.id = divId;
                div.style.cssText = 'visibility:hidden;position:absolute;cursor:pointer;z-index:9996;left:0px;top:0px;';
                $.body.insertBefore(div, $.body.firstChild);
                return div;
            },

            appendDebugParam: function(url) {
                return url += ifDebug ? (url.indexOf("?") >= 0 ? "&comm100_console=1" : "?comm100_console=1") : "";
            },
            writeScript: function(src) {
                $.write("<script type='text/javascript' src='" + comm100.appendDebugParam(src) + "'></script>");
            },
            backgroundImage: function(img) {
                return "url('" + img + "') no-repeat scroll 0% 0% transparent";
            },
            getAdDiv: function() {
                return $$("comm100_track");
            },
            setAdDisplay: function(display) {
                function doSetAdDisplay() {
                    var ad = comm100.getAdDiv();
                    if (ad) {
                        if (ad.style.setProperty) {
                            ad.style.setProperty("display", display, "important");
                        }
                        else {
                            ad.style.display = display;
                        }
                        return true;
                    }
                    return false;
                }
                
                if (!doSetAdDisplay()) {
                    setTimeout(doSetAdDisplay, 200);
                }
            },
            removeAd: function() {
                function doRemoveAd() {
                    var ad = comm100.getAdDiv();
                    if (ad && ad.parentNode) {
                        ad.parentNode.removeChild(ad);
                        return true;
                    }
                    return false;
                }
                
                if (!doRemoveAd()) {
                    setTimeout(doRemoveAd, 200);
                }
            }
        };
        var ua = navigator.userAgent.toLowerCase();
        var s;
        (s = ua.match(/msie ([\d.]+)/)) ? comm100.ie = s[1] :
             (s = ua.match(/se 2.x/)) ? comm100.sougou = true : 0;

        window['comm100'] = comm100;
    }
    else {
        comm100 = window.comm100;
    }

    var jsObj = comm100.getCurrentScriptObj(server + "/js/livechat.js");
    if (jsObj == null)
        return;
    server = comm100.getUrlProtocal(jsObj.src) + server;

    var params = comm100.getQueryStringParams(jsObj.src);
    var siteId = params["siteId"] || "";
    var planId = params["planId"];
    var partnerId = params["partnerId"];


    console.info("server: " + server + "; siteId: " + (siteId || "see domain") + "; main planId: " + planId + ";");

    var inv = window['comm100inv_' + siteId];
    if (!inv) {
        inv = {
            siteId: siteId,

            init: function() {
                if (!inv.div) {
                    inv.div = $.createElement("DIV");
                    inv.div.style.cssText = 'visibility:hidden;position:absolute;z-index:10001;width:auto;height:auto;left:0px;top:0px;overflow:hidden;';
                    $.body.insertBefore(inv.div, $.body.firstChild);
                }
                return inv.div;
            },

            show: function(html, pos, overlay, isMove, sound) {
                console.trace({ pos: pos, content: html }, "show invitation", "black", true);

                if (!inv.isShowing) {
                    var div = inv.init();
                    div.innerHTML = html;
                    div.style.display = "";
                    div.style.left = div.style.top = "0px";
                    div.style.width = div.style.height = "auto";


                    inv.isShowing = true;

                    if (sound) {
                        comm100.playSound(sound);
                    }
                    if (isMove && !comm100.sougou) { //does not move hor in sougou browser for avoid block
                        div.onmouseover = inv.pauseMove;
                        div.onmouseout = inv.continueMove;
                        inv.isStopMove = false;

                        console.assert(pos.l, "left offset unexist");
                        console.assert(pos.t, "top offset unexist");

                        div.style.left = pos.l + "px";
                        div.style.top = pos.t + "px";
                        inv.dir = 1;
                        inv.lastY = 0;

                        comm100.imageComplete($$("invitationAcceptImg" + siteId), function(sz) {
                            console.trace(sz, "Accept Image Complete.");
                            div.style.width = sz.w + "px";
                            div.style.height = sz.h + "px";
                            div.style.visibility = "visible";

                            var ifr;
                            if (comm100.ie == "6.0" && !inv.ifr) {
                                ifr = inv.ifr = comm100.createIframe(10000);
                            }
                            if (ifr) {
                                ifr.style.display = "";
                                ifr.style.width = div.style.width;
                                ifr.style.height = div.style.height;
                            }
                            inv.move();
                        });
                    }
                    else {
                        div.onmouseover = null;
                        div.onmouseout = null;
                        comm100.imageComplete($$("invitationAcceptImg" + siteId), function(sz) {
                            console.trace(sz, "Accept Image Complete.1");

                            comm100.float.floatIt(div, sz, pos);
                            div.style.width = sz.w + "px";
                            div.style.height = sz.h + "px";
                            div.style.visibility = "visible";

                            if (overlay) {
                                comm100.overlay.show(9998, comm100.overlayId + siteId); //may be have iframe so -2
                            }
                        });
                    }
                }
            },
            pauseMove: function() {
                inv.isStopMove = true;
            },
            continueMove: function() {
                inv.isStopMove = false;
                inv.move();
            },
            move: function() {
                var div = inv.div;
                var ifr = inv.ifr;
                if (!div)
                    return;
                inv.lastY = inv.lastY || 0;

                function doMove() {
                    if (inv.isShowing && !inv.isStopMove) {
                        var l = 0;
                        var r = comm100.float.clientSize().w - div.offsetWidth;
                        var x = comm100.px2int(div.style.left);
                        if (x <= l) { inv.dir = 1; }
                        else if (x >= r) { inv.dir = -1; }
                        div.style.left = x + inv.dir + "px";

                        var currentTop = comm100.float.scrollPos().y;
                        var percent = 0.3 * (currentTop - inv.lastY);
                        percent = percent > 0 ? Math.ceil(percent) : Math.floor(percent);
                        inv.lastY += percent;
                        div.style.top = comm100.px2int(div.style.top) + percent + "px";

                        if (ifr) {
                            ifr.style.left = div.style.left;
                            ifr.style.top = div.style.top;
                        }
                        inv.moveTimer = setTimeout(doMove, 20);
                    }
                }
                doMove();
            },
            hide: function() {
                console.trace("hide invitation");
                if (inv.moveTimer) {
                    clearTimeout(inv.moveTimer);
                    inv.moveTimer = null;
                }

                var div = inv.div;
                comm100.float.stopFloat(div);

                if (div) {
                    inv.div = null;
                    $.body.removeChild(div);
                }
                var ifr = inv.ifr;
                if (ifr) {
                    inv.ifr = null;
                    $.body.removeChild(ifr);
                }

                comm100.overlay.hide(comm100.overlayId + siteId);

                //delay set flag when hide, there may be a heartbeat send before hide and not back
                setTimeout(function() {
                    inv.isShowing = false;
                }, 2000);
            },
            accept: function(source, sourceId) {
                console.trace("source: " + source + "source Id: " + sourceId, "accept invitation");
                if (typeof inv.acceptHandler == 'function') {
                    inv.acceptHandler();
                }
                var site = window["comm100_" + siteId];
                if (site) {
                    site.openChatWindow(null, null, null, source, sourceId);
                }
                inv.hide();
            },
            refuse: function(event) {
                console.trace("", "refuse invitation");

                comm100.stopPropagation(event);

                var site = window["comm100_" + siteId];
                if (site) {
                    site.sendRefuseInvitation();
                }
                inv.hide();

            }
        };
        //inv.init();
        window["comm100inv_" + siteId] = inv;
    }
    else {
        inv = window["comm100inv_" + siteId];
    }

    var s = window["comm100_" + siteId];
    if (!s || !s.inited) {
        var site = {
            siteId: siteId,
            mainPlanId: planId,
            visitorId: null,
            partnerId: partnerId,
            ifBanned: false,
            chatButtons: (s && s.chatButtons) ? s.chatButtons : [],
            eachButton: function(fn) {
                for (var i = 0; i < site.chatButtons.length; i++) {
                    var r = fn(i, site.chatButtons[i]);
                    if (r) return r;
                }
            },
            //constant addresses
            chatButtonUrl: server + "/chatbutton.aspx",
            chatWindowUrl: server + "/chatwindow.aspx", //should be chatwindow.aspx
            chatWindowMobileUrl: server + "/Mobile/chatwindow.aspx",
            getChatButton: function(planId) {
                return site.eachButton(function(i, b) {
                    if (b.planId == planId && b.partnerId == partnerId) {
                        return b;
                    }
                });
            },
            getPlanIds: function() {
                var len = site.chatButtons.length;
                if (len > 0) {
                    var planIds = "";
                    var dicSended = {};
                    site.eachButton(function(i, b) {
                        if (!dicSended[b.planId]) {
                            planIds += b.planId;
                            dicSended[b.planId] = true;
                            planIds += "_";
                        }
                    });
                    return planIds;
                }
            },
            hasOnline: false, //has any chat button online
            heartbeatDurtion: 3000, //in ms
            doHeartbeat: function() {
                if (!site.ifBanned) {
                    var planIds = site.getPlanIds();
                    if (planIds && planIds.length > 0) {
                        site.sendHeartBeat(planIds);
                    }
                    else {
                        site.sendHeartBeat(site.mainPlanId.toString());
                    }
                }
            },
            heartbeat: function(heartbeatDurConfig) {

                function _setDur(heartbeatDurConfig) {
                    console.trace(heartbeatDurConfig, "set heartbeat durtion", "green");
                    var c = heartbeatDurConfig.shift();
                    if (c) {
                        site.heartbeatDurtion = c.d * 1000;
                        site.heartbeatDurTimer = comm100.setTimeout(function() {
                            _setDur(heartbeatDurConfig);
                        }, c.t * 1000);
                    }
                }
                _setDur(heartbeatDurConfig);

                function _heartbeat() {
                    site.doHeartbeat();
                    _setHeartbeat();
                }
                function _setHeartbeat() {
                    site.heartbeatTimer = comm100.setTimeout(_heartbeat, site.heartbeatDurtion * (site.hasOnline ? 1 : 2));
                }
                _setHeartbeat();
            },
            getLocalVisitorId: function() {
                var oldvId = comm100.getCookie(siteId);
                var oldvId2 = comm100.getCookie(comm100.cookieKey_v5 + site.siteId);
                var vId = comm100.getCookie(comm100.cookieKey_v6 + site.siteId);
                return vId ? vId : (oldvId2 ? oldvId2 : oldvId);
            },
            stopHeartbeat: function() {
                site.heartbeatDurtion = Number.POSITIVE_INFINITY;
                if (site.heartbeatTimer) {
                    clearTimeout(site.heartbeatTimer);
                }
                if (site.heartbeatDurTimer) {
                    clearTimeout(site.heartbeatDurTimer);
                }
                if (site.stopHeartbeatTimer) {
                    clearTimeout(site.stopHeartbeatTimer);
                }
                if (site.autoInvitationTimer) {
                    clearTimeout(site.autoInvitationTimer);
                }
            },
            //call by server
            onPageVisited: function(visitorId, sessionId, heartbeatDurConfig, stopHeartbeatDur, autoInvites) {
                console.trace([{ visitorId: visitorId, sessionId: sessionId }, site.chatButtons, heartbeatDurConfig, autoInvites], "onPageVisited", "#ff9d1c", true);

                site.visitorId = visitorId;
                console.info("visitorId: " + visitorId + ";");

                site.stopHeartbeat();
                site.stopHeartbeatTimer = comm100.setTimeout(function() {
                    site.stopHeartbeat();
                }, stopHeartbeatDur * 1000);

                heartbeatDurConfig = heartbeatDurConfig || [];
                if (heartbeatDurConfig.length == 0) {
                    heartbeatDurConfig = [{ t: Number.POSITIVE_INFINITY, d: 30}];
                }

                site.heartbeat(heartbeatDurConfig);
                site.initAutoInvite(autoInvites);
            },
            onBanned: function() {
                console.trace("Ban visitor exception occur.", "Ban");
                site.ifBanned = true;
                site.stopHeartbeat();
            },
            initAutoInvite: function(autoInvites) {
                if (autoInvites) {
                    for (var i = 0; i < autoInvites.length; i++) {
                        var ai = autoInvites[i];

                        console.assert(typeof ai.a == "number", "Auto invitation id must be a number");
                        console.assert(typeof ai.b == "number", "Auto invitation delay must be a number");

                        console.trace(ai, "start timeout auto invitation", "green");

                        site.autoInvitationTimer = comm100.setTimeout("comm100_" + siteId + ".sendShowAutoInvitation(" + ai.a + ");", ai.b * 1000);
                    }
                }
            },
            openChatWindow: function(e, planId, parterId, source, sourceId) {

                comm100.preventDefault(e);

                planId = planId || site.mainPlanId;
                partnerId = parterId || site.partnerId || -1;
                var params = "?planId=" + planId + "&partnerId=" + partnerId;
                if (siteId) {
                    params += "&siteId=" + siteId;
                }
                if (site.visitorId)
                    params += "&visitorId=" + site.visitorId;
                if (source) {
                    params += "&source=" + source;

                    if (source == 1)
                        params += "&autoInvId=" + sourceId;
                }

                params += "&pageTitle=" + encodeURIComponent(comm100.getTruncatedTitle()) + "&pageUrl=" + encodeURIComponent($.location);
                if (comm100_userId) {
                    params += "&userId=" + encodeURIComponent(comm100_userId);
                }

                var btn = site.getChatButton(planId, parterId);
                console.assert(btn, "chat button width planId:" + planId + " doesn't exist");

                if (typeof btn != undefined && btn != null && !btn.isOnline && !btn.offlineMessageIfEnable && btn.offlineMessageUrl) {
                    if (btn.offlineMessageIfOpenInNewWindow) {
                        window.open(btn.offlineMessageUrl);
                    }
                    else {
                        window.location.href = btn.offlineMessageUrl;
                    }
                }
                else {
                    if (/mobile|android|ipad/i.test(navigator.userAgent.toLowerCase())) {
                        comm100.popupWindow(site.chatWindowMobileUrl + params + "&r=" + comm100.getRandom(), "comm100_" + siteId, w, h);                        
                    } else {
                        var w = btn ? (btn.w || 540) : 540;
                        var h = btn ? (btn.h || 560) : 560;
                        comm100.popupWindow(site.chatWindowUrl + params + "&r=" + comm100.getRandom(), "comm100_" + siteId, w, h);
                    }
                }


                inv.hide();

                site.doHeartbeat();

                return;
            },
            sendHeartBeat: function(planIds) {
                site.sendRequest("action=" + comm100.actionType.heartbeat + "&planIds=" + planIds);
            },
            sendRefuseInvitation: function() {
                site.sendRequest("action=" + comm100.actionType.refuseInvitation);
            },
            sendShowAutoInvitation: function(invId) {
                site.sendRequest("action=" + comm100.actionType.showAutoInvite + "&invId=" + invId);
            },
            sendManualInvitationShowed: function() {
                site.sendRequest("action=" + comm100.actionType.manualInvitationShowed);
            },
            sendFindOldButton: function(siteId, planId) {
                var callId = comm100.getId();
                var params = "?planId=" + planId + "&callId=" + callId + "&action=" + comm100.actionType.findOldButton;
                if (siteId) {
                    params += "&siteId=" + siteId;
                }
                comm100.sendRequest("comm100_" + callId, site.chatButtonUrl + params);
            },
            sendPageVisit: function() {
                var params = "action=" + comm100.actionType.pageVisit;

                site.visitorId = site.visitorId || site.getLocalVisitorId();

                params += "&flash=" + encodeURIComponent(comm100.getFlashVersion());
                params += "&res=" + encodeURIComponent(comm100.getScrResolution());
                params += "&timezone=" + encodeURIComponent(comm100.getTimezoneOffset());

                var planIds = site.getPlanIds();
                if (planIds) {
                    params += "&planIds=" + planIds;
                }

                var sessionId = comm100.getCookie(comm100.sessionCookieKey + siteId);
                if (sessionId) {
                    params += "&sessionId=" + sessionId;
                }
                if (comm100_userId) {
                    params += "&userId=" + encodeURIComponent(comm100_userId);
                }
                params += "&title=" + encodeURIComponent(comm100.getTruncatedTitle());
                params += "&url=" + encodeURIComponent($.location);
                params += "&referer=" + encodeURIComponent($.referrer);
                site.sendRequest(params);
            },
            sendRequest: function(params) {
                var callId = comm100.getId();
                params = "?planId=" + site.mainPlanId
                + "&callId=" + callId
                + (siteId ? ("&siteId=" + siteId) : "")
                + (site.visitorId ? ("&visitorId=" + site.visitorId) : "")
                + (site.partnerId ? ("&partnerId=" + site.partnerId) : "")
                + (params ? ("&" + params) : "");

                comm100.sendRequest("comm100_" + callId, site.chatButtonUrl + params);
            },
            onResponse: function(callId) {
                site.removeRequest(callId);
            },
            removeRequest: function(callId) {
                var id = "comm100_" + callId;
                console.trace({ id: id, url: $$(id).src }, "on response", "red");
                comm100.removeRequest(id);
            },
            findOldButton: function(btn, siteId) {
                console.trace(btn, "find old button");
                var planId = btn.planId || null;
                var partnerId = btn.partnerId;
                var find = false;
                if (btn.type == comm100.buttonType.image) {
                    var r = site.getOldImageButton(planId);
                    if (r) {
                        if (r.img) {
                            btn.imgId = r.img.id = comm100.imageId_v5 + comm100.getId();
                            console.trace(btn, "add static chat button");
                            site.chatButtons.push(btn);
                            find = true;
                        }
                    }
                }
                else if (btn.type == comm100.buttonType.text) {
                    var a = site.getOldTextButton(planId);
                    if (a) {
                        a.innerHTML = btn.text;
                        btn.id = a.id = comm100.textButtonId_v5 + comm100.getId();
                        console.trace(btn, "add text chat button");
                        site.chatButtons.push(btn);
                        find = true;
                    }
                }
                else if (btn.type == comm100.buttonType.float) {
                    var ele = $$(comm100.floatButtonId_v5) || $$(comm100.imageId_v5) || $$(comm100.buttonId_v2);
                    if (ele) {
                        ele.id = "comm100_imageAbandon";
                        ele.style.display = "none";
                        var div = comm100.createFloatDiv();
                        btn.divId = div.id;
                        div.onclick = function(event) {
                            window["comm100_" + siteId].openChatWindow(event, planId, partnerId);
                        };
                        console.trace(btn, "add float chat button");
                        site.chatButtons.push(btn);
                        find = true;
                    }
                    comm100.removeAd();
                }
                else if (btn.type == comm100.buttonType.monitor) {
                    site.chatButtons.push(btn);
                }

                if (find) {
                    site.updateChatButtonWithoutCheckChange(btn, btn.isOnline);
                }
            },
            getOldImageButton: function(planId) {
                var img = $$(comm100.imageId_v5);
                if (img && img.tagName.toLowerCase() == "img") {
                    return { img: img, a: img.parentNode };
                }
                else if ($$(comm100.buttonId_v2)) {
                    var div = $$(comm100.buttonId_v2);
                    div.innerHTML = "<a href='javascript:void(0)'><img style='border:none' onclick='comm100_Chat();return false;'/></a>";
                    div.id = comm100.buttonId_v2 + comm100.getId();
                    return { img: div.firstChild.firstChild, a: div.firstChild };
                }
                return null;
            },
            getOldTextButton: function(planId) {
                var a = $$(comm100.textButtonId_v5);
                if (a) {
                    return a;
                }
                else if ($$(comm100.buttonId_v2)) {
                    a = $$(comm100.buttonId_v2);
                    a.innerHTML = "<a href='javascript:void(0)' onclick='comm100_Chat();return false;'></a>";
                    return a.firstChild;
                }
                return null;
            },
            updateChatButtonWithoutCheckChange: function(b, isOnline) {
                b.isOnline = isOnline;
                console.trace(b, "update chat button", "green");
                if (b.type == comm100.buttonType.image) {
                    var img = $$(b.imgId);
                    site.hideChatButtonWhenOffline(img, isOnline, b.hideOfflineBtn);

                    if (img.style.display != 'none') {
                        img.style.visibility = 'visible';
                        var imgSrc = isOnline ? b.onlineImg : b.offlineImg;
                        if (imgSrc != img.src) {
                            console.trace(imgSrc, "change static image", "blue");
                            img.src = imgSrc;
                        }
                    }
                }
                else if (b.type == comm100.buttonType.float) {
                    var div = $$(b.divId);
                    site.hideChatButtonWhenOffline(div, isOnline, b.hideOfflineBtn);

                    if (div.style.display != 'none') {
                        var imgSrc = isOnline ? b.onlineImg : b.offlineImg;
                        div.style.background = comm100.backgroundImage(imgSrc);
                        console.trace(imgSrc, "change float image", "blue");
                        var img = $.createElement("IMG");
                        img.src = imgSrc;
                        comm100.imageComplete(img, function(sz) {
                            div.style.visibility = 'visible';
                            div.style.width = sz.w + "px";
                            div.style.height = sz.h + "px";
                            comm100.float.floatIt(div, sz, b.pos);
                        });
                    }
                }
                else if (b.type == comm100.buttonType.text) {
                    var a = $$(b.id);
                    site.hideChatButtonWhenOffline(a, isOnline, b.hideOfflineBtn);
                }
            },
            updateChatButton: function(b, isOnline) {
                if (b.isOnline !== isOnline) {
                    site.updateChatButtonWithoutCheckChange(b, isOnline);
                } //if
            },
            //call from server
            updateChatButtons: function(arr) {
                console.trace(arr, "updateChatButtons", "green");

                site.hasOnline = false;
                for (var i = 0; i < arr.length; i++) {
                    var x = arr[i];
                    if (x.b) {
                        site.hasOnline = true;
                        break;
                    }
                }

                site.eachButton(function(i, b) {
                    var r = null;
                    for (var i = 0; i < arr.length; i++) {
                        var x = arr[i];
                        if (x.a == b.planId) {
                            r = x;
                            break;
                        }
                    }

                    if (r) {
                        site.updateChatButton(b, r.b);
                        if (b.type == comm100.buttonType.image && b.planId == site.mainPlanId) {
                            comm100.setAdDisplay(((!r.b) && b.hideOfflineBtn) ? 'none' : '');
                        }
                    }

                });
            },
            hideChatButtonWhenOffline: function(btnObj, isOnline, hideOfflineBtn) {
                btnObj.style.display = ((!isOnline) && hideOfflineBtn) ? 'none' : '';
            },
            inited: true
        };

        window['comm100_' + siteId] = site;
        
        window.comm100_Chat = function(event) {
            site.openChatWindow(event, site.mainPlanId, site.partnerId);
        };

    }
    s = window['comm100_' + siteId];
    if (s && s.inited) {
        s.mainPlanId = planId;
        s.sendPageVisit();
    }
}
(function() {
    if (!document.body) {
        document.write("<body></body>");
    }
    function checkIfEnableConsole() {
        var b = (!window.comm100_console) && window.location.href.indexOf("comm100_console") >= 0;
        return b;
    }
    if (checkIfEnableConsole()) {
        if (typeof window.comm100_console_loaded != 'function') {
            window.document.write("<script type='text/javascript' src='http://" + window.comm100_server + "/js/console.js'></script>");
            window.comm100_console_loaded = function() {
                window.comm100_livechat(window.comm100_server, window.comm100_console);
                window.comm100_exception = function(url, msg, stack) {
                    window.comm100_console.traceHtml(url + "<br/>" + stack, msg, "red");
                    window.comm100_console.show();
                }
            }
        }
    }
    else {
        var console = window.comm100_console || {
            trace: function() { },
            info: function() { },
            assert: function() { },
            htmlEncode: function() { }
        };
        window.comm100_livechat(window.comm100_server, console);
    }
})();