var sessionKey,qqNum=1205652841,host="http://81.70.62.113:66";
var xmlHttp; //define XMLHttpRequest object
function showMsg(msg){
    console.log(msg);
}
function CreateXMLHttpRequest()
{
    if(window.ActiveXObject){//if the browser support Active Xobject，than create ActiveXObject object
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (E) {
                xmlHttp = false;
            }
        }
    }
    else if(window.XMLHttpRequest){//if the browser support XMLHttp Request，than create XMLHttpRequest object
        xmlHttp = new XMLHttpRequest();
    }
}
function postObj(url,xmlobj){
    CreateXMLHttpRequest();
    xmlHttp.open("POST",url,false);
    xmlHttp.setRequestHeader("Content-Type","application/json");//json
    xmlHttp.send(JSON.stringify(xmlobj));
    console.log("post success");
    return xmlHttp.responseText;
}

function auth(authKey) {
    var t={"authKey":authKey};//temp object
    t=JSON.parse(postObj(host+"/auth",t));
    //show the error msg in the page(not realized)
    if (t.code!==0){
        showMsg(t.msg);
        sessionKey=false;
    }
    sessionKey=t.session?t.session:false;
}

function verify(ssK,qqNum){//ssk is sessionKey
    var t={"sessionKey":ssK,"qq":qqNum};
    t=JSON.parse(postObj(host+"/verify",t));
    if (t.code!==0){
        showMsg(t.msg);
        return;
    }
    console.log("verify success");
}

function release(ssK,qq){
    var t={"sessionKey":ssK,"qq":qqNum};
    t=JSON.parse(postObj(host+"/release",t));
    if (t.code!==0){
        showMsg(t.msg);
        return;
    }
    console.log("release success");
}

function msgT(s){
    return { "type": "Plain", "text": s }
}

function sendFriendMessage(ssK,qq,msgC,queto=false){
    if(typeof(msgC)=="object"){
        msgC=[msgC];
    }
    var t=queto?{"sessionKey": ssK,"qq": qq,"queto":queto,"messageChain": msgC}:{"sessionKey": ssK,"qq": qq,"messageChain": msgC};
    postObj(host+"/sendFriendMessage",t);
    if (t.code!==0){
        showMsg(t.msg);
        return;
    }
    console.log("send success")
}
