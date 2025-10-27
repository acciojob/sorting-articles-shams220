//your JS code here. If required.
const ar = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog']
const sortedBands = ar.sort((a, b) => {
 
  const strip = (name) => name.replace(/^(a |an |the )/i, '').trim();
  return strip(a) > strip(b) ? 1 : -1;
});
const ul = document.querySelector('#bands');
sortedBands.map((i)=>{ 
    let li = document.createElement('li')
    li.textContent = i;
    ul.appendChild(li)
}
)
document.querySelector('body').appendChild(ul)