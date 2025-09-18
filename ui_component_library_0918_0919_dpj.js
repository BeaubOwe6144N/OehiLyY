// 代码生成时间: 2025-09-18 09:19:02
// Importing D3.js
const d3 = require("d3");

/**
 * Base UI Component Class
 * @class UIComponent
 * @classdesc Abstract class for all UI components
 */
class UIComponent {
  constructor(options) {
    this.options = options;
  }

  /**
   * Render the UI Component
   * @abstract
   * @returns {void}
   */
  render() {
    throw new Error("render method must be implemented");
  }
}

/**
 * Button Component
 * @class Button
 * @extends UIComponent
 * @classdesc A button UI component
 */
class Button extends UIComponent {
  constructor(options) {
    super(options);
  }

  /**
   * Render the button
   * @override
   * @returns {void}
   */
  render() {
    if(!this.options.text) {
      throw new Error("Button text is required");
    }

    const button = d3.select("#" + this.options.parentElement)
      .append("button")
      .text(this.options.text)
      .on("click", () => {
        if(this.options.onClick) {
          this.options.onClick();
        }
      });

    // Apply additional styles if provided
    if(this.options.styles) {
      button.style(this.options.styles);
    }
  }
}

/**
 * Text Component
 * @class Text
 * @extends UIComponent
 * @classdesc A text UI component
 */
class Text extends UIComponent {
  constructor(options) {
    super(options);
  }

  /**
   * Render the text
   * @override
   * @returns {void}
   */
  render() {
    if(!this.options.content) {
      throw new Error("Text content is required");
    }

    const text = d3.select("#" + this.options.parentElement)
      .append("p")
      .text(this.options.content);

    // Apply additional styles if provided
    if(this.options.styles) {
      text.style(this.options.styles);
    }
  }
}

// Export the UI Component Library
module.exports = {
  Button,
  Text
};