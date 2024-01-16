function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement={
    type:'a',
    children:'Click me to visit google',
    props:{
        href:'https://www.google.com/',
        target:'_blank'
    }
}

const root = document.querySelector('#root');


customRender(reactElement,root);