const gerarButt = document.getElementById('gerar');
const senhaOutput = document.getElementById('password');
const tamanhoInput = document.getElementById('length');
const upperCheckbox = document.getElementById('uppercase')
const numberCheckbox = document.getElementById('numbers')
const symbolsCheckbox = document.getElementById('symbols')
const copiarButt = document.getElementById('copiar')


function gerarSenha(tamanho, usarUppercase, usarNumbers, usarSymbols) {
    const letrasMinus = 'abcdefghijklmnopqrstuvwxyz';
    const letrasMaius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '1234567890';
    const simbolos = '!@#$%^&*()_+-=[]{};:,.<>?';

    let caracteres = letrasMinus;

    if (usarUppercase) caracteres += letrasMaius;
    if (usarNumbers) caracteres += numeros;
    if (usarSymbols) caracteres+= simbolos;
    
    let senha = '';
    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }
    return senha;
}


gerarButt.addEventListener('click', () => {
    const tamanho = parseInt(tamanhoInput.value);
    const usarUppercase = upperCheckbox.checked;
    const usarNumbers = numberCheckbox.checked;
    const usarSymbols = symbolsCheckbox.checked;

    const senhaGerada = gerarSenha(tamanho, usarUppercase, usarNumbers, usarSymbols);
    senhaOutput.value = senhaGerada;
});

copiarButt.addEventListener('click', () => {
    senhaOutput.select();
    document.execCommand('copy');
    
    senhaOutput.classList.add('copy');
    alert('Copiado!!');

})

