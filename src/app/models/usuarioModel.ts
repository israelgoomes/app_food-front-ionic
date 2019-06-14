/*
    nome: {type: String, required: true, trim: true, index: true},
    email: {type: String, required: true },
    senha: {type: String, required: true},
    foto: {type: String},
    ativo: {type: Boolean},*/

export class usuarioModel {
 nome: string;
 email: string;
 senha: string;
 senhaConfirmacao: string;
 foto: string;   
}