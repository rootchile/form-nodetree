import React, { Component } from 'react';

const TreeNode = require('../../models/TreeNode');

let root = new TreeNode('formdia_pregunta1',
                           '¿Es un proyecto de desarrollo urbano o turístico en zona con Plan Territorial evaluado estratégicamente?');

////////////////////////////////////////////

let preg1 = new TreeNode('formdia_pregunta1',
                           '¿El Proyecto se ejecutará en zona declarada latente o saturada?');

let preg2 = new TreeNode('formdia_pregunta2',
                            '¿Es un Conjunto habitacional con cantidad igual o superior a 80 viviendas, o 160 viviendas sociales?');

////////////////////////////////////////////

let preg3 = new TreeNode('form_pregunta3',
                        '¿Requiere sistema propio de agua potable o agua servida en área urbanizable; Incorpora al uso público vías expresas, troncales, colectoras o de servicios; Superficie >= a 7 has o >= 300 viviendas o es Edificio de uso público con capacidad >= 5.000 personas o 1.000 estacionamientos?'
                        );
                        
let preg4 = new TreeNode('form_pregunta4',
                        '¿Se verá afectada algún área colocada bajo protección oficial?');

let preg5 = new TreeNode('form_pregunta5',
                        'Ingresar Pertinencia (analizar posible DIA)');


let preg6 = new TreeNode('form_pregunta6',
                          'Probablemente nada');
root.set_show(true);

root.set_right(preg1);
root.set_left(preg2);

preg1.set_right(preg3);
preg1.set_left(preg4);


preg4.set_right(preg5);
preg5.set_btn(false);

preg4.set_left(preg6);
preg6.set_btn(false);

preg3.set_right(preg5);
preg3.set_left(preg4);


preg2.set_right(preg5);
preg2.set_left(preg1);

class FormDIA extends Component {


    constructor() {
        super(); // hereda componente

        this.state = {
            name: '',
            company: '',
            role:'',
            mobile:'',
            email:'',
            backbutton:false,
            questions: [root]
        }
        this.submitForm = this.submitForm.bind(this);
        this.handleChange = this.handleChange.bind(this);


    }
   
    submitForm(e) {
        e.preventDefault();
        console.log(this.state);
    }

    nextQuestion(e,question,value) {
        e.preventDefault();
        
       if(question.left === null && question.right === null) {
           console.log('terminamos');
       }

        // NO - LEFT
        if (value === 0) {
            this.state.questions[this.state.questions.length-1].set_answer('NO');

            if(question.left != null) {
                question.left.set_show(true);
                this.setState({
                    questions: [...this.state.questions, question.left]
                }); 
            }
        }

         // SI - RIGHT
         if (value === 1) {
            this.state.questions[this.state.questions.length-1].set_answer('SI');

            if(question.right != null) {
                question.right.set_show(true);
                this.setState({
                    questions: [...this.state.questions, question.right]
                }); 
            }
        }

        
    }

    backQuestion(e) {
        e.preventDefault();
        this.setState({
            questions: this.state.questions.splice(0,this.state.questions.length-1)
        }); 


    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        let questions_number  = this.state.questions.length
        let question = this.state.questions[this.state.questions.length-1]

        const renderBackButton = () => {
            if (questions_number>1) {
              return <a className="waves-effect waves-light btn-small" onClick={(e)=>this.backQuestion(e)}><i className="material-icons left">arrow_back</i>Pregunta anterior</a>
            } 
          }
        const renderQuestion = () => {        
            
            if(question.btn) {
            return (
                    <div className="animate__animated animate__fadeInRight">
                        <p>{ question.question }</p>
                        <button className="btn btn-small green lighten-2" onClick={(e)=>this.nextQuestion(e, question, 1)}>Sí</button> 
                        <button className="btn btn-small red accent-2" onClick={(e)=>this.nextQuestion(e, question, 0)}>No</button>
                    </div>
                    )

            } else {

                return (
                    <div className="animate__animated animate__fadeInRight">
                        <p>{ question.question }</p>
                    </div>
                    )

            }

            
        }

        const renderSubmitButton = () => {
            if(question.left === null && question.right === null) {
                return <div><br /><a className="waves-effect waves-light btn-large col s12 m12" ><i className="material-icons right">send</i>Enviar solicitud</a></div>
            }
        }


        let questions = this.state.questions

        const renderList = () => {
            return (
            <ul className="collection">
                {   
                    questions.map(question => {
                        return <li className="collection-item">{question.question} : {question.answer}</li>
                    })
                }
             </ul>
             )
        }

        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                            <h5>Información de contacto</h5>
                            <form onSubmit={this.submitForm}>
                            <div className="row">
                                <div className="input-field col s12 m12">
                                    <label htmlFor="mobile">Nombre y Apellidos</label>
                                    <input name="name" onChange={this.handleChange} type="text" placeholder="" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6 m6">
                                    <label htmlFor="mobile">Empresa</label>
                                    <input type="text" name="company" onChange={this.handleChange} placeholder="Ej. Industrias SpA" />
                                </div>

                                <div className="input-field col s6 m6">
                                    <label htmlFor="mobile">Cargo</label>
                                    <input type="text" name="role" onChange={this.handleChange} placeholder="Ej. Gerente de Proyectos" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input placeholder="+569 1234 1234" onChange={this.handleChange} name="mobile" type="text" className="validate" />
                                    <label htmlFor="mobile">Teléfono</label>
                                </div>
                                <div className="input-field col s6">
                                    <input name="email" type="text" onChange={this.handleChange} className="validate" />
                                    <label htmlFor="email">E-mail</label>
                                </div>
                            </div>

                            <h5>Preguntas</h5>

                            {renderQuestion()}
                            
                            {renderBackButton()}
                            
                            {/* {renderList()} */}
                            {renderSubmitButton()}
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default FormDIA;