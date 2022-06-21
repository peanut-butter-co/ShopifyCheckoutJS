class NotValidFieldException extends Error {
    constructor(value) {
        let message = `${value} does not have a valid Shopify field element as parent.`;
        super(message);

        this.name = 'NotValidFieldException';
    }
}

class NotImplementedError extends Error {
    constructor(message) {
        const sender = (new Error)
            .stack
            .split('\n')[2]
            .replace(' at ', '')
            ;

        let error = `The method ${sender} isn't implemented.`;
        if (message) error += ` Message: "${message}".`;

        super(error);
    }
}

class SelectionMethod extends HTMLDivElement{

    constructor(element){
        if(!(element instanceof HTMLDivElement)
            || !element.classList.contains('radio-wrapper')){
            throw TypeError('Not a radio-wrapper');
        }

        Object.setPrototypeOf(element, SelectionMethod.prototype);
        return Object.assign(element, {
            type: 'generic'
        });
    }

    // eslint-disable-next-line no-unused-vars
    addDescription(text){
        throw new NotImplementedError();
    }

    get input(){
        let input = this.querySelector('input');
        if(!input) return Error(`No input found for the ${this.type} method`);
        return input;
    }

    get methodData(){
        return this.input.dataset;
    }

    get methodId(){
        return this.input.id;
    }

    get checked(){
        return this.input.checked;
    }

    set checked(boolean){
        this.input.checked = boolean;
    }
}

class ShippingMethod extends SelectionMethod{
    constructor(element){
        super(element);
        Object.setPrototypeOf(this, ShippingMethod.prototype);

        this.type = 'shipping';
        this.addEventListener('change', () => {
            let event = new CustomEvent(`checkout:shippingmethod:changed`, { detail: this });
            document.dispatchEvent(event);
        });
    }

    addDescription(text){
        let span = this.querySelector('.radio__label__primary');
        let desc = document.createElement('span');
        desc.classList.add('small-text');
        desc.innerHTML = text;

        span.appendChild(document.createElement('br'));
        span.appendChild(desc);
    }

    get shippingRate(){
        return this.methodData.checkoutTotalShippingCents/100;
    }

    get subtotalPrice(){
        return this.methodData.checkoutSubtotalPriceCents/100;
    }
}

class PaymentMethod extends SelectionMethod{
    constructor(element){
        if(!element.dataset.selectGateway) 
            throw new NotValidFieldException();

        super(element);
        Object.setPrototypeOf(this, PaymentMethod.prototype);

        this.type = 'payment';
        this.addEventListener('change', () => {
            let event = new CustomEvent(`checkout:paymentmethod:changed`, { detail: this });
            document.dispatchEvent(event);
        });
    }

    addDescription(text){
        let desc = this.nextElementSibling.querySelector('.blank-slate');
        desc.innerHTML = text;
    }

    get methodData(){
        return this.dataset;
    }

    get gatewayId(){
        return this.dataset.selectGateway;
    }

    get gatewayName(){
        return this.dataset.gatewayName;
    }
}

/* eslint-disable constructor-super */

class FieldRetriever {
    retrieve(inputElement){
        let possibleParentsClasses = [
            '.field',
            '.checkbox-wrapper'
        ];

        let element = null;
        let found = possibleParentsClasses.some( className => {
            element = inputElement.closest(className);
            if(element != null) return true;
        });

        if(found){ 
            let field = {};
            if(!element.classList.contains('field')) {
                field = document.createElement('div');
                let parent = element.parentElement;

                field.classList.add('field');
                field.appendChild(element);
                parent.appendChild(field);
            }else {
                field = element;
            }
            this._setFieldPropierties(field);
            return field;
        }
        else throw new NotValidFieldException();
    }

    _setFieldPropierties(field){
        if(!field.children) return;
        field.wrapperClass = field.children[0].classList[0];
    }
}

class Field extends HTMLDivElement{
    constructor(args){
        let selectors = {
            input: '[id^="checkout_"]',
            errorMessage: '.field__message--error',
            wrapper: '.field__input-wrapper',
        };

        let classes = {
            wrapper: ['field__input-wrapper'],
            field: ['field'],
            fieldInput: ['field__input'],
            label: ['field__label', 'field__label--visible'],
            fieldError: ['field--error'],
            fieldErrorMessage: ['field__message', 'field__message--error'],
        };

        if(typeof args == 'string'){       
            let input = document.querySelector(`#${args}`);
            let element = new FieldRetriever().retrieve(input);
            Object.setPrototypeOf(element, Field.prototype);

            let field = Object.assign(element, {
                fieldName: element.name,
                fieldId: element.id,
                selectors,
                classes,
            });

            return field;
        }else if (typeof args == 'object'){
            const { name, label = name } = args;

            let fieldId = `checkout_attributes_${name}`;
            let fieldName = `checkout[attributes][${name}]`;

            let element = document.createElement('div');
            element.classList.add(classes.field);

            let wrapperElement = document.createElement('div');
            wrapperElement.classList.add(classes.wrapper);

            let labelElement = document.createElement('label');
            labelElement.classList.add(...classes.label);
            labelElement.innerText = label;
            labelElement.htmlFor = fieldId;

            wrapperElement.appendChild(labelElement);
            element.appendChild(wrapperElement);

            Object.setPrototypeOf(element, Field.prototype);
            let field = Object.assign(element, {
                fieldName: fieldName,
                fieldId: fieldId,
                selectors,
                classes,
            });
            
            return field;
        }
    }

    created(){
        let event = new CustomEvent(`checkout:field:created`, { detail: this });
        document.dispatchEvent(event);
    }

    // eslint-disable-next-line no-unused-vars
    addField(args){
        throw new NotImplementedError();
    }

    showError(message){
        this.removeError();
        this.classList.add(...this.classes.fieldError);

        if(message && message.length > 0){
            let errorElement = document.createElement('p');
            errorElement.classList.add(...this.classes.fieldErrorMessage);
            errorElement.innerHTML = message;

            this.appendChild(errorElement);
        }
    }

    removeError(){
        this.classList.remove(...this.classes.fieldError);

        let errorElements = this.querySelectorAll(this.selectors.errorMessage);
        errorElements.forEach( (element) => {
            element.remove();
        });
    }

    remove(){
        let event = new CustomEvent(`checkout:field:removed`, { detail: this });
        document.dispatchEvent(event);
        super.remove();
    }

    get value(){
        return this.querySelector(this.selectors.input).value;
    }

    set value(val){
        let input = this.querySelector(this.selectors.input);
        input.value = val;
    }

    insertAfter(field){
        if(!field || !(field instanceof Field)) throw TypeError('Object trying to add is not a Field element');
        this.insertAdjacentElement('afterend', field);
    }

    insertBefore(field){
        if(!field || !(field instanceof Field)) throw TypeError('Object trying to add is not a Field element');
        this.insertAdjacentElement('beforebegin', field);
    }

}

class Tooltip extends HTMLDivElement{
    constructor(text, fieldId, icon = '#question'){
        let classes = {
            wrapper: ['field__icon', 'has-tooltip'],
            tooltip: ['tooltip'],
            svgWrapper: ['field__icon-svg'],
            svgIcon: ['icon-svg', 'icon-svg--color-adaptive-lighter','icon-svg--size-16', 'icon-svg--block'],
        };

        let tooltipDiv = document.createElement('div');
        tooltipDiv.setAttribute('role', 'tooltip');
        tooltipDiv.classList.add(...classes.wrapper);

        let tooltipSpan = document.createElement('span');
        tooltipSpan.id = `tooltip-for-${fieldId}`;
        tooltipSpan.classList.add(...classes.tooltip);
        tooltipSpan.innerText = text;

        let iconDiv = document.createElement('div');
        iconDiv.classList.add(...classes.svgWrapper);

        let iconSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
        iconSVG.classList.add(...classes.svgIcon);
        iconSVG.setAttribute('role', 'presentation');
        iconSVG.focusable = 'false';
        
        let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', icon);
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', icon);
        
        iconSVG.appendChild(use);
        iconDiv.appendChild(iconSVG);
        tooltipDiv.appendChild(tooltipSpan);
        tooltipDiv.appendChild(iconDiv);

        return tooltipDiv;
    }
}

class TextField extends Field{
    constructor(args){
        super(args);
        Object.setPrototypeOf(this, TextField.prototype);

        if (typeof args == 'object'){
            this.addField(args);    
        }

        this.created();    
    }

    addField(args){
        let input = document.createElement('input');
        input.classList.add(...this.classes.fieldInput);
        input.placeholder = (args.placeholder) ? args.placeholder : '';
        input.size = (args.size) ? args.size : 30;
        input.type = (args.type) ? args.type : 'text';
        input.value = (args.defaultValue) ? args.defaultValue : '';

        input.name = this.fieldName;
        input.id = this.fieldId;
        
        this.querySelector(this.selectors.wrapper).appendChild(input);

        if(typeof args.tooltip == 'string'){
            this.addTooltip(args.tooltip);
        }
    }

    addTooltip(text = '', icon = '#question'){
        this.removeTooltip();

        const wrapper = this.querySelector(this.selectors.wrapper);
        wrapper.classList.add('field__input-wrapper--icon-right');

        let tooltip = new Tooltip(text, this.fieldId, icon);
        wrapper.appendChild(tooltip);
    }

    removeTooltip(){
        const wrapper = this.querySelector(this.selectors.wrapper);
        const tooltips = wrapper.querySelectorAll('.field__icon');

        wrapper.classList.remove('field__input-wrapper--icon-right');
        tooltips.forEach(element => {
            element.remove();
        });
    }
}

class CheckboxField extends Field{
    constructor(args){
        let selectors = {
            input: 'input[type="checkbox"]',
            wrapper: '.checkbox-wrapper',
        };

        let classes = {
            label: ['checkbox__label'],
            fieldInputWrapper: ['checkbox__input'],
            fieldInput: ['input-checkbox'],
            wrapper: ['checkbox-wrapper'],
        };

        if (typeof args == 'object'){
            args.type = 'checkbox';

            super(args);
            let wrapper = this.querySelector(this.selectors.wrapper);
            wrapper.classList.remove(...wrapper.classList);
            wrapper.classList.add(...classes.wrapper);

            Object.setPrototypeOf(this, CheckboxField.prototype);
            Object.assign(this.classes, classes);
            Object.assign(this.selectors, selectors);

            let checked = (typeof args.checked == 'boolean') ? args.checked : false;
            this.addField(checked);
        }else{
            super(args);
            Object.setPrototypeOf(this, CheckboxField.prototype);
            Object.assign(this.classes, classes);
            Object.assign(this.selectors, selectors);
        }
        
        this.created();
    }

    addField(checked){
        let wrapper = this.querySelector(this.selectors.wrapper);

        let label = wrapper.querySelector('label');
        label.classList.remove(...label.classList);
        label.classList.add(...this.classes.label);

        let div = document.createElement('div');
        div.classList.add(...this.classes.fieldInputWrapper);

        let input = document.createElement('input');
        input.classList.add(...this.classes.fieldInput);
        input.type = 'checkbox';
        input.checked = checked;

        input.name = this.fieldName;
        input.id = this.fieldId;

        div.appendChild(input);
        wrapper.insertBefore(div, label);
    }

    get checked(){
        let checkbox = this.querySelector(this.selectors.input);
        return checkbox.checked;
    }

    set checked(checked){
        let checkbox = this.querySelector(this.selectors.input);
        checkbox.checked = checked;
    }
}

class DropdownField extends Field{
    constructor(args){
        let classes = {
            field: ['field', 'field--show-floating-label'],
            fieldInput: ['field__input', 'field__input--select'],
            fieldInputWrapper: ['field__input-wrapper', 'field__input-wrapper--select'],
            arrow: ['field__caret', 'shown-if-js'],
            svgIcon: ['icon-svg', 'icon-svg--color-adaptive-lighter','icon-svg--size-10', 'field__caret-svg'],
        };

        super(args);
        Object.setPrototypeOf(this, DropdownField.prototype);
        Object.assign(this.classes, classes);

        if (typeof args == 'object'){
            this.addField(args);
        }

        this.created();
    }

    addField(args){
        if(!args.options) throw new ReferenceError('No options defined for DropdownField');

        this.classList.add(...this.classes.field);
        const wrapper = this.querySelector(this.selectors.wrapper);
        wrapper.classList.add(...this.classes.fieldInputWrapper);

        let input = document.createElement('select');
        input.classList.add(...this.classes.fieldInput);
        input.placeholder = (args.placeholder) ? args.placeholder : '';
        input.name = this.fieldName;
        input.id = this.fieldId;

        if(args.defaultValue){
            const defaultOption = document.createElement("option");
            defaultOption.disabled = true;
            defaultOption.selected = true;
            defaultOption.innerText = args.defaultValue;
            
            input.add(defaultOption);
            input.placeholder = (args.placeholder) ? args.placeholder : args.defaultValue;
        }

        args.options.forEach(option => {
            let o = document.createElement("option");
            o.innerText = option.text;
            o.value = option.value;
            input.add(o);
        });

        let arrow = document.createElement('div');
        arrow.classList.add(...this.classes.arrow);
        
        let iconSVG = document.createElementNS('http://www.w3.org/2000/svg','svg');
        iconSVG.classList.add(...this.classes.svgIcon);
        iconSVG.setAttribute('role', 'presentation');
        iconSVG.focusable = 'false';
        
        let use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#caret-down');
        use.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#caret-down');
        
        iconSVG.appendChild(use);
        arrow.appendChild(iconSVG);
        
        wrapper.appendChild(input);
        wrapper.appendChild(arrow);
    }
}

class FieldFactory {
    constructor(){ }

    createFieldByElement(element){
        switch (element.type) {
            case 'text':
                return new TextField(element.id);
            case 'email':
                return new TextField(element.id);
            case 'tel':
                return new TextField(element.id);
            case 'checkbox':
                return new CheckboxField(element.id);
            case 'select-one':
                return new DropdownField(element.id);
            case 'hidden':
                return null;
            default:
                try{
                    return new Field(element.id);
                }catch(e){
                    if(e instanceof NotValidFieldException) return null;
                    else throw e;
                }
        }
    }
}

/* eslint-disable no-undef */

class Checkout {
    constructor(){
        this.Steps = {
            INFORMATION: 'contact_information',
            SHIPPING: 'shipping_method',
            PAYMENT: 'payment_method',
            PROCESSING: 'processing',
            THANKYOU: 'thank_you',
            ORDERSTATUS: 'order_status',
            STOCK_PROBLEMS: 'stock_problems',
        };

        this.selectors ={
            inputs: 'input[id], select[id]',
            selectionMethods: '.section--{TYPE}-method .radio-wrapper',
            fields: '[id^="checkout_"]',
            stockProblem: {
                list: '.stock-problem-table .product__description',
                name: '.product__description__name',
                description: '.product__description__variant',
            },
        };

        document.addEventListener('page:load', this._onLoad.bind(this), false);
        document.addEventListener('page:change', this._onLoad.bind(this), false);
        document.addEventListener('checkout:field:created', this._fieldCreated.bind(this), false);
        document.addEventListener('checkout:field:removed', this._fieldRemoved.bind(this), false);

        this.lastStep = this._getLastStep();
        this.currentStep = this._getCurrentStep();
        this.fields = [];
        this.fields = this._getFields();
    }

    _getFields(){
        let fields = [];

        const fieldNodes = document.querySelectorAll(this.selectors.inputs);
        const fieldFactory = new FieldFactory();
        fieldNodes.forEach(el => {
            let field = fieldFactory.createFieldByElement(el);
            if (field != null) fields[el.id] = field;
        });

        return fields;
    }

    _getLastStep(){
        let lastStep = sessionStorage.getItem('step');

        if(lastStep == null && document.referrer) {
            let url = new URL(document.referrer);
            lastStep = url.pathname;
        }

        return lastStep;
    }

    _getCurrentStep(){
        let step = Shopify.Checkout.step;
        if(Shopify.Checkout.page == 'stock_problems') { step = this.Steps.STOCK_PROBLEMS; }

        if(typeof Shopify.Checkout.OrderStatus != 'undefined'){
            if(Shopify.Checkout.page == 'thank_you') step = this.Steps.THANKYOU;
            else step = this.Steps.ORDERSTATUS;
        }

        sessionStorage.setItem('step', step);
        return step;
    }

    _triggerEvent(name, details = {}){
        let event = new CustomEvent(`checkout:${name}`, { detail: details });
        document.dispatchEvent(event);
    }

    _getSelectionMethods(type){
        let methods = document.querySelectorAll(this.selectors.selectionMethods.replace('{TYPE}',type));
        let methodsList = [];

        
        methods.forEach((method) => {
            try{
                if(type == 'shipping') {
                    methodsList.push(new ShippingMethod(method));
                } else if(type == 'payment') {
                    methodsList.push(new PaymentMethod(method));
                }
            }catch(ex){
                if (!(ex instanceof NotValidFieldException)) {
                    throw ex;
                }
            }
        });

        return methodsList;
    }

    _getStockProblemList(){
        let list = document.querySelectorAll(this.selectors.stockProblem.list);
        let stockProblemList = [];

        for (let item of list) {
            let name = item.querySelector(this.selectors.stockProblem.name).innerText;
            let variant = item.querySelector(this.selectors.stockProblem.description).innerText;
            stockProblemList.push({
                name: name,
                variant: variant,
            });
        }

        return stockProblemList;
    }

    _onLoad(event){
        try{
            this._triggerEvent('load');

            switch (this.currentStep) {
                case this.Steps.INFORMATION:
                    this._triggerEvent('load:information');
                    break;
                case this.Steps.SHIPPING: {
                    let shippingMethods = this._getSelectionMethods('shipping');
                    this._triggerEvent('load:shipping', { shippingMethods });
                    break;
                }
                case this.Steps.PAYMENT: {
                    let paymentMethods = this._getSelectionMethods('payment');
                    this._triggerEvent('load:payment', { paymentMethods });
                    break;
                }
                case this.Steps.PROCESSING:
                    this._triggerEvent('load:processing');
                    break;
                case this.Steps.THANKYOU:
                    this._triggerEvent('load:thankyou');
                    break;
                case this.Steps.ORDERSTATUS:
                    this._triggerEvent('load:orderstatus');
                    break;
                case this.Steps.STOCK_PROBLEMS: {
                    var stockProblemList = this._getStockProblemList();
                    this._triggerEvent('load:stockproblems', { stockProblemList });
                    break;
                }
                default:
                    break;
            }
        }catch(ex){
            this._triggerEvent('error', {
                step: this.currentStep,
                event: event,
                error: ex
            });
        }
    }

    _fieldCreated(event){        
        let field = event.detail;
        let input = field.querySelector(this.selectors.fields);
        let hasInputAlready = Object.prototype.hasOwnProperty.call(this.fields, input.id);

        if(this.fields && !hasInputAlready){
            this.fields[input.id] = field;
        }
    }

    _fieldRemoved(event){
        let field = event.detail;
        let input = field.querySelector(this.selectors.fields);
        let hasInputAlready = Object.prototype.hasOwnProperty.call(this.fields, input.id);

        if(this.fields && hasInputAlready){
            delete this.fields[input.id];
        }        
    }

    on(event, callback){
        document.addEventListener(`checkout:${event}`, callback, false);
    }
}

export default Checkout;
//# sourceMappingURL=checkout.js.map
