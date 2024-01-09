const init = () => {
    let blocks = document.querySelectorAll('main');
    blocks.forEach(block => interpret(block));
}
  
const interpret = (block) => {
    let fns = block.querySelectorAll('function');
    fns.forEach(fn => interpretFn(fn));
  
    let body = Array.from(block.children).filter(child => child.tagName.toLowerCase() !== 'function').map(child => interpretTag(child)).join("\n");
  
    let fn = new Function(body);
    fn();
}
  
const interpretFn = (fn) => {
    let name = fn.getAttribute('name');
    let args = Array.from(fn.attributes).filter(attr => attr.name !== 'name').map(attr => attr.name);
    let body = interpretBlock(fn.children);
   
    window[name] = new Function(...args, body);
}   
  
const interpretTag = (node) => {
    let tag = node.tagName.toLowerCase();
   
    switch(tag) {
        case 'var':
            let value = node.getAttribute('value');
            return `let ${node.getAttribute('name')} = ${value ? value : ''};`;
        case 'if':
            return interpretIf(node);
        case 'return':
            return `return ${node.getAttribute('value')};`;
        case 'print':
            return `console.log(${node.getAttribute('value')});`;
        }
}
  
const interpretBlock = (children) => {
    return Array.from(children).map(child => interpretTag(child)).join("\n");
}
  
const interpretIf = (node) => {
    let condition = node.getAttribute('condition');
    let body = interpretBlock(node.children);
  
    return `if (${condition}) {\n${body}\n}`;
}
  
document.addEventListener('DOMContentLoaded', init);
  