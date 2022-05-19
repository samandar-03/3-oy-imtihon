var elcontainer = document.querySelector('.container')
var elH2,  elrow,  elcol, elbox, elimg, elBox1,elH3, ellink, elH3_text, elP_text, elA_link;

function createElement(tagName,className){
    var el = document.createElement(tagName);
    el.className = className;
    return el;
}

function name () {
    elrow = createElement('div','row');
    for (let i = 0; i < posts.length; i++) {
        elcol = createElement('div','col');
        elbox = createElement('div','box');
        elimg = createElement('img','img');
        elBox1 = createElement('div','box-1');
        elH3 = createElement('h3','box1_title');
        ellink = createElement('a','box1_link');
        elH3_text = createElement('h3','box_title');
        elP_text = createElement('p','box_text');
        elA_link = createElement('a','btn');
        
        elA_link.textContent = 'Comments';
        elA_link.setAttribute("onclick",`comment(${i})`)
        elP_text.textContent = posts[i].body;
        elH3_text.textContent = posts[i].title;
        ellink.href = '#';
        elH3.textContent = posts[i].user.name;
        ellink.textContent = posts[i].user.email;
        elimg.src = 'https://picsum.photos/100/100';
        elimg.alt = 'rasm';
        elcontainer.appendChild(elrow);
        elrow.appendChild(elcol);
        elcol.appendChild(elbox);
        elcol.appendChild(elH3_text);
        elcol.appendChild(elP_text);
        elcol.appendChild(elA_link);
        elbox.appendChild(elimg);
        elbox.appendChild(elBox1);
        elBox1.appendChild(elH3);
        elBox1.appendChild(ellink);

        var obj = posts[i]
        var elUl = createElement('ul','ul');
        for(let j = 0; j < obj.comments.length; j++){
            var elLi = createElement('li','item_li')
            var elLi_h3 = createElement('h3','li_title');
            var elLi_p = createElement('p','');
            elLi_h3.textContent = obj.comments[j].name;
            elLi_p.textContent = obj.comments[j].body;
            elLi.appendChild(elLi_h3);
            elLi.appendChild(elLi_p);
            elUl.appendChild(elLi)
        }
        elcol.appendChild(elUl);  
        elUl.style.display = "none"              
    }  
}
name()  
var Ul = document.querySelectorAll(".ul")
function comment(num) {
    if(Ul[num].style.display == "none") {
        for(let el of Ul){
            el.style.display = "none"
            Ul[num].style.display = "block"  
        }
    }
     else if(Ul[num].style.display = "block") Ul[num].style.display = "none"
}         

