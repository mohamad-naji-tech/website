fetch('https://api22-gd18.onrender.com')
      .then(response => response.json())
      .then(json => {
        let div=document.getElementById('123');
       json.forEach(element => {
            let content=`<div class="col-md-6 icon-box position-relative">
                <i class="${element.icon}"></i>
                <h4><a href="" class="stretched-link">${element.title}</a></h4>
                <p>${element.text}</p>
              </div><!-- Icon-Box -->`
            let e=document.createElement('div');
            e.innerHTML=content;
            div.appendChild(e);

        });
      })