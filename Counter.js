
const para=document.querySelector('.Paragraph');
console.log(para)

const display= document.querySelector('.Display')
const addButton= document.querySelector('.Add')
const subButton= document.querySelector('.Sub')

addButton.addEventListener('click', ()=>{
    const value=display.innerText
    let intValue= Number(value)
    display.innerText=++intValue
})
subButton.addEventListener('click', ()=>{
    const value=display.innerText
    let minusVal= Number(value)
    display.innerText=--minusVal
})
