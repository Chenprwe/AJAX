//用AJAX加载CSS
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    };
    request.send();
  };
  
  //用AJAX加载main.js
  getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onload = () => {
      const script = document.createElement("script");
      script.innerHTML = request.response;
      document.body.appendChild(script);
    };
    request.onerror = () => {};
    request.send();
  };
  
  //用AJAX加载HTML
  getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onload = () => {
      const div = document.createElement("div");
      div.innerHTML = request.response;
      document.body.appendChild(div);
    };
    request.onerror = () => {};
    request.send();
  };
  
  //用AJAX加载XML
  getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    };
    request.send();
  };
  
  //用AJAX加载json
  getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/5.json");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const bool = JSON.parse(request.response); 
        console.log(typeof bool);
        console.log(bool);
      }
    };
    request.send();
  };
  
  //分页
  let n = 1;
  getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${n + 1}`);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    };
    request.send();
  };
  