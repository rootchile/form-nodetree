import React, { Component } from 'react';

class FormSEIA extends Component {

    getQuestion() {
        return ['preg1','preg2'];
    }

    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col s12 m12">
                            <h5>Información de contacto</h5>
                            <form>
                            <div className="row">
                                <div className="input-field col s12 m12">
                                    <label for="mobile">Nombre y Apellidos</label>
                                    <input type="text" placeholder="" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s6 m6">
                                    <label for="mobile">Empresa</label>
                                    <input type="text" id="company" placeholder="Ej. Industrias SpA" />
                                </div>

                                <div className="input-field col s6 m6">
                                    <label for="mobile">Cargo</label>
                                    <input type="text" id="role" placeholder="Ej. Gerente de Proyectos" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s6">
                                    <input placeholder="+569 1234 1234" id="mobile" type="text" class="validate" />
                                    <label for="mobile">Teléfono</label>
                                </div>
                                <div class="input-field col s6">
                                    <input id="email" type="text" class="validate" />
                                    <label for="email">E-mail</label>
                                </div>
                            </div>

                            <h5>Preguntas</h5>

                            {
                                this.getQuestion().map( question => {
                                    return (
                                        <div>
                                            <h1>{ question }</h1>
                                        </div>
                                        )
                                
                                })
                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default FormSEIA;