const Reactfunc = function(reactelement, mainContainer){
    const newchild = document.createElement(reactelement.name)
    newchild.innerHTML = reactelement.text
    for (const prop in reactelement.props) {
        if(prop==='text') continue;
        newchild.setAttribute(prop,reactelement.props.prop)
    }
    mainContainer.appendChild(newchild)
}

const reactelement = {
    name:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    text:'Click me to visit google'
}

const mainContainer = document.getElementById('root')

Reactfunc(reactelement, mainContainer)