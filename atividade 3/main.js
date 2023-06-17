
const area = prompt("Você deseja seguir em qual área da programação, Front-End ou Back-End?"); 
    if (area === "Front-End") {
        linguagem = prompt("Você quer aprender React ou Vue?");
    }
    else if  (area === "Back-End") {
        linguagem = prompt("Você quer aprender C# ou Java?");
    }
    else {
        alert("Digite os nome exatamente como aparecem.");
    }

    const especialização = prompt("Você quer seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? Digite: Seguir se especializando ou Fullstack.");     

const msg = `Então você deseja se especializar em ${area}, na linguagem ${linguagem} e então ${especialização}. Boa sorte em sua caminhada!!!`;
    alert(msg);


var perguntaTec;

while (perguntaTec !== "não") {    
    perguntaTec = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Ex: JavaScript, Python ou PHP");

    if (perguntaTec === "JavaScript") {
        alert("Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias atuais relacionadas ao Front-End.");
    }
    if (perguntaTec === "Python") {
        alert("O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes.");
    }
    if (perguntaTec === "PHP") {
        alert("PHP é uma linguagem de script do tipo server-side com diversos propósitos. Porém, ela é principalmente utilizada para gerar conteúdos dinâmicos num site. Trata-se de uma linguagem altamente popular devido à sua natureza de código aberto e suas funcionalidades versáteis.");
    }
}
