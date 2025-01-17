import { ViewComponent } from "../framework/view.component.js";


export class ImcTableViewComponent extends ViewComponent {
    render() {
        let templateStr = `
            <table>
                <tr>
                    <td>Valor inicial</td>
                    <td>Classificacao</td>
                </tr>
                ${
                    this.state.data && 
                    Object
                        .keys(this.state.data)
                        .map(k => `
                            <tr>
                                <td>${this.state.data[k]}</td>
                                <td>${k}</td>
                            </tr>
                        `)
                        .join('')
                }
            </table>
        `;
        if (!this.state.person) return templateStr;

        return `Seu IMC &eacute; <span id='imc'>${this.state.person.imc}, ${this.state.person.imcDescription}</span>`;
    }
}