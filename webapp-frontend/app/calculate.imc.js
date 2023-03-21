import { debounce } from './debounce.js';

import { ImcDataController } from './controllers/imc.data.controller.js';
import { ImcDataViewComponent } from './views/imc.data.view.component.js';
import { ImcTableViewComponent } from './views/imc.table.view.component.js';

export function calculate(view) {
    let heightEl = document.querySelector('#altura');
    let weightEl = document.querySelector('#peso');
    let ctr = new ImcDataController(view);
    
    return function () {
        let height = 0;
        let weight = 0;
        if (heightEl) height = heightEl.value;
        if (weightEl) weight = weightEl.value;
        ctr.execute(height, weight);
    }
}

export function initialize() {
    const button = document.querySelector("button.action");
    button.addEventListener("click", debounce(calculate(new ImcDataViewComponent())));
    var view = new ImcTableViewComponent();
    view.update({data: {
        'magreza': 0.00,
        'normal': 18.50,
        'sobrepeso': 24.9,
        'obesidade': 29.9
      }});
}