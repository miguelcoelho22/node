
const alunos = ["miguel", "leo", "maia"]
const notas = [10.0, 5.0, 7.0];

const reprovados = alunos.filter((_, nota) => {
    return notas[nota] < 7
})

console.log(reprovados);