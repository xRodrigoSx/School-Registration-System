const leitor = require("readline-sync")

const professores = []
const disciplinas = []
const alunos = []

function menu() {
    console.log("\n")
    console.log("1 - Cadastrar professores")
    console.log("2 - Cadastrar disciplinas")
    console.log("3 - Cadastrar alunos")
    console.log("4 - Listar disciplinas")
    console.log("5 - Listar professores")
    console.log("6 - Listar alunos")
    console.log("7 - Listar alunos por disciplina")
    console.log("8 - Listar disciplinas por professores")
    console.log("9 - Listar alunos por professores")
    console.log("0 - Sair")
    console.log("\n")

    let opcao = leitor.questionInt("Digite a opção desejada: ")

    switch (opcao) {
        case 1:
            cadastrarProfessor()
            break;
        case 2:
            cadastrarDisciplina()
            break;
        case 3:
            cadastrarAluno()
            break;
        case 4:
            listarDisciplinas()
            break;
        case 5:
            listarProfessores()
            break;
        case 6:
            listarAlunos()
            break;
        case 7:
            listarAlunosPorDisciplina()
            break;
        case 8:
            listarDisciplinaPorProfessor()
            break;
        case 9:
            listarAlunosPorProfessor()
            break;
        case 0:
            console.log("Saindo...")
            break;
        default:
            console.log("Opção inválida")
            setTimeout(() => {
                menu()
            }, 500)
    }

}

function cadastrarProfessor() {
    let nome = leitor.question("Digite o nome do professor: ")
    let existe = false

    for (let i = 0; i < professores.length; i++) {
        if (professores[i].nome == nome) {
            existe = true
            break
        }
    }

    if (existe) {
        console.log("Professor já cadastrado")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let professor = {
            nome: nome
        }

        professores.push(professor)

        console.log("Professor cadastrado com sucesso")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}
// Cadastrar disciplinas
function cadastrarDisciplina() {

    // Verificar se existe professores
    if (professores.length == 0) {
        console.log("Não existe professores cadastrados. Cadastre um professor primeiro.")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let nome = leitor.question("Digite o nome da disciplina: ")
        // Verificar se a disciplina já existe
        let existe = false

        for (let i = 0; i < disciplinas.length; i++) {
            if (disciplinas[i].nome == nome) {
                existe = true
                break
            }
        }

        if (existe) {
            console.log("Disciplina já cadastrada")
            setTimeout(() => {
                menu()
            }, 1000)
        } else {
            let idProfessor = leitor.question("Digite o código do professor: ")
            // verifica se existe professor com esse índice

            if (professores[idProfessor] == undefined) {
                console.log("Professor não cadastrado")
                setTimeout(() => {
                    menu()
                }, 1000)
            }
            else {
                let disciplina = {
                    nome: nome,
                    professor: idProfessor
                }

                disciplinas.push(disciplina)
                console.log("Disciplina cadastrada com sucesso")
                setTimeout(() => {
                    menu()
                }, 1000)
            }
        }
    }
}
function cadastrarAluno() {
    // Verificar se existe disciplina
    let idDisciplina = []
    if (disciplinas.length == 0) {
        console.log("Não existe disciplinas cadastradas. Cadastre umm disciplina primeiro.")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let nome = leitor.question("Qual o nome do aluno?")
        // Verificar se o aluno já existe
        let existe = false

        for (let i = 0; i < alunos.length; i++) {
            if (alunos[i].nome == nome) {
                existe = true
                break
            }
        }

        if (existe) {
            console.log("Aluno já cadastrado")
            setTimeout(() => {
                menu()
            }, 1000)
        } else {
            let quantDisciplina = leitor.questionInt("Quantas disciplinas irá cursar?")

            matricula = getRandomInt(1, 10000)

            for (let i = 0; i < quantDisciplina; i++) {
                res = leitor.questionInt("Digite o código da disciplina:")
                // verifica se existe disciplina com esse índice

                if (disciplinas[res] == undefined) {
                    console.log("Disciplina não cadastrada")
                    setTimeout(() => {
                        menu()
                    }, 1000)
                } else {
                    idDisciplina[i] = res
                }
            }
            let aluno = {
                nome: nome,
                disciplinas: idDisciplina,
                matriculas: matricula
            }

            alunos.push(aluno)
            console.log("Aluno cadastrado com sucesso")
            setTimeout(() => {
                menu()
            }, 1000)
        }
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function listarAlunos() {
    if (alunos.length == 0) {
        console.log("Não existe alunos cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Alunos cadastrados:\n")
        for (let i = 0; i < alunos.length; i++) {
            console.log(`Matricula: ${alunos[i].matriculas}\nNome: ${alunos[i].nome}`)
            //disciplinas
            console.log("Disciplinas:")
            for (let j = 0; j < alunos[i].disciplinas.length; j++) {

                console.log(`- ${disciplinas[alunos[i].disciplinas[j]].nome}`)
            }
            console.log("\n")
        }
        console.log("\n")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}

function listarDisciplinas() {
    if (disciplinas.length == 0) {
        console.log("Não existe disciplinas cadastradas")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Disciplinas cadastradas:")
        for (let i = 0; i < disciplinas.length; i++) {
            console.log(`${i} - ${disciplinas[i].nome} - ${professores[disciplinas[i].professor].nome}`)
        }
        console.log("\n")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}

function listarProfessores() {
    if (professores.length == 0) {
        console.log("Não existe professores cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Professores cadastrados")
        for (let i = 0; i < professores.length; i++) {
            console.log(`Código: ${i} \nNome: ${professores[i].nome}`)
            // disciplinas
            console.log("Disciplinas:")
            for (let j = 0; j < disciplinas.length; j++) {
                if (disciplinas[j].professor == i) {
                    console.log(`- ${disciplinas[j].nome}`)
                }
            }
        }
        console.log("\n")
        setTimeout(() => {
            menu()
        }, 3000)
    }
}

function listarAlunos() {
    if (alunos.length == 0) {
        console.log("Não existe alunos cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        console.log("\n")
        console.log("Alunos cadastrados:\n")
        for (let i = 0; i < alunos.length; i++) {
            console.log(`Matricula: ${alunos[i].matriculas}\nNome: ${alunos[i].nome}`)
            //disciplinas
            console.log("Disciplinas:")
            for (let j = 0; j < alunos[i].disciplinas.length; j++) {

                console.log(`- ${disciplinas[alunos[i].disciplinas[j]].nome}`)
            }
            console.log("\n")
        }
        console.log("\n")
        setTimeout(() => {
            menu()
        }, 1000)
    }
}

function listarAlunosPorDisciplina() {
    if (alunos.length == 0) {
        console.log("Não existe alunos cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let codigo = leitor.question("Qual disciplina você quer a lista de alunos?\n")
        if (codigo >= disciplinas.length) {
            console.log("Não possui nenhuma disciplina cadastradoa com esse código")
        } else {
            console.log("Alunos matriculados em " + codigo + " = " + disciplinas[codigo].nome)
            for (let a = 0; a < alunos.length; a++) {
                for (let d = 0; d < alunos[a].disciplinas.length; d++) {
                    if (alunos[a].disciplinas[d] == codigo) {
                        console.log("Matricula: " + alunos[a].matriculas)
                        console.log("Nome: " + alunos[a].nome)
                        for (let i = 0; i < alunos[a].disciplinas.length; i++) {
                            console.log(`- ${disciplinas[alunos[a].disciplinas[i]].nome}`)
                        }
                    }
                }
            }
        }
        setTimeout(() => {
            menu()
        }, 1000)
    }
}

function listarDisciplinaPorProfessor() {
    if (disciplinas.length == 0) {
        console.log("Não existe disciplinas cadastradas")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let codigo = leitor.question("Informe o código do professor que você quer ver as disciplinas: ")
        if (codigo >= professores.length) {
            console.log("Não possui nenhum professor cadastrado com esse código")
        } else {
            console.log("Disciplinas do Prof " + professores[codigo].nome)
            for (let i = 0; i < disciplinas.length; i++) {
                if (disciplinas[i].professor == codigo) {
                    console.log(disciplinas[i].nome)

                }
            }
        }
        setTimeout(() => {
            menu()
        }, 1000)
    }
}
function listarAlunosPorProfessor() {
    if (alunos.length == 0) {
        console.log("Não existe alunos cadastrados")
        setTimeout(() => {
            menu()
        }, 1000)
    } else {
        let codigo = leitor.question("Qual professor você quer?\n")
        if (codigo >= professores.length) {
            console.log("Não possui nenhum professor cadastrado com esse código")
        } else {
            for (let i = 0; i < disciplinas.length; i++) {
                if (disciplinas[i].professor == codigo) {
                    console.log("Alunos de " + disciplinas[i].nome)
                    for (let a = 0; a < alunos.length; a++) {
                        if (alunos[a].disciplinas.includes(i)) {
                            console.log(alunos[a].matriculas + " - " + alunos[a].nome)
                        }
                    }
                }
            }
        }
        setTimeout(() => {
            menu()
        }, 1000)
    }
}
menu()