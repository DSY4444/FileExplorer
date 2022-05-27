
var path=prompt("Enter full path");
var home_path=path;
var response_object;

function fetch()
{
  document.getElementById("demo").innerHTML="";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response_object=JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML= html_for_browser(response_object);
        document.getElementById("path").innerHTML= "Current Path = "+path;
        }
        };
        xhttp.open("PUT", "http://192.168.0.109:3001/", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send(JSON.stringify({"url":path}));
        //xhttp.send();        
}

var str_for_html="";
var name_;
var icon;
function html_for_browser(res)
{
    str_for_html="";
    name_=Object.keys(res);
    icon=Object.values(res);
    for(var i=0;i<name_.length; i++)
    {

        console.log(name_[i]);
    str_for_html=str_for_html+"<div id=\"demo\" ><figure id=\"hov\" ><img id="+name_[i]+" src=\""+icon[i]+"\" height=\"20\" width=\"20\"><figcaption>"+name_[i]+"</figcaption></figure></div>";
    }
    return str_for_html;
}

window.addEventListener('dblclick', function(event){
    console.log(event.target);
    //alert(event.target.id); 
    if(event.target.id.includes(".")){}
    else{
    path=path+"/"+event.target.id;
    fetch();
    }
  });

  function back()
  {
      path=path.substring(0,path.lastIndexOf("/"));
      if(path.includes(home_path)){}
    else
    path=home_path;

      fetch();
  }
  function reload()
  {
    path=home_path;
    fetch(); 
  }