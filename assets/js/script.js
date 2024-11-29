document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById('changeTextButton');
    btn.addEventListener('click', function(){
        const introDiv = document.getElementById('intro');
        introDiv.innerHTML = `<p>Ahora el texto ha cambiado!!</p>`
    });
})