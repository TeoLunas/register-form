const labels = document.querySelectorAll('.form-control label');

labels.forEach( label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letra, indice) => `<span style="transition-delay:${indice * 50}ms">${letra}</span>`)
        .join('')
        
})