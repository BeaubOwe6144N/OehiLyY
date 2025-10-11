// 代码生成时间: 2025-10-12 02:54:25
 * User Interface Components Library using D3.js
 * This library provides basic UI components that can be reused across different applications.
 */

/**
 * Utility function to check if a value is a function.
 * @param {any} value - The value to check.
 * @returns {boolean} - True if the value is a function, false otherwise.
 */
function isFunction(value) {
    return typeof value === 'function';
}

/**
 * Base UI Component class.
 * @class
 */
class UIComponent {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
        this.element = d3.select(selector);
        this.init();
    }

    /**
     * Initialize the component.
     * This method should be overridden by subclasses.
     */
    init() {
        throw new Error('init() must be implemented by subclasses.');
    }
}

/**
 * Button component.
 * @extends UIComponent
 */
class Button extends UIComponent {
    constructor(selector, options = {}) {
        super(selector, options);
        this.type = options.type || 'button';
        this.label = options.label || 'Click me';
    }

    init() {
        this.element.append('button')
            .attr('type', this.type)
            .text(this.label);
    }
}

/**
 * Text input component.
 * @extends UIComponent
 */
class TextInput extends UIComponent {
    constructor(selector, options = {}) {
        super(selector, options);
        this.placeholder = options.placeholder || '';
    }

    init() {
        this.element.append('input')
            .attr('type', 'text')
            .attr('placeholder', this.placeholder);
    }
}

/**
 * Register a component by creating an instance and attaching it to the DOM.
 * @param {string} componentType - The type of component to register (e.g., 'button', 'text-input').
 * @param {string} selector - The CSS selector where the component will be attached.
 * @param {object} [options] - Options to pass to the component.
 */
function registerComponent(componentType, selector, options = {}) {
    let component;
    switch (componentType.toLowerCase()) {
        case 'button':
            component = new Button(selector, options);
            break;
        case 'text-input':
            component = new TextInput(selector, options);
            break;
        default:
            throw new Error('Unsupported component type.');
    }
}

// Example usage:
// registerComponent('button', '#button-container', { label: 'Submit' });
// registerComponent('text-input', '#input-container', { placeholder: 'Enter your name' });

module.exports = {
    UIComponent,
    Button,
    TextInput,
    registerComponent
};
