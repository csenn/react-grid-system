/* global window */

import React from 'react';
import throttle from 'lodash/throttle';
import { getScreenClass } from '../../utils';
import RenderAny from '../../support/RenderAny';

export default class ScreenClassRender extends React.Component {
  static propTypes = {
    /**
     * Content of the component
     */
    children: React.PropTypes.element.isRequired,
    /**
     * A function returning the style for the children.
     * This function gets the screen class as a parameter.
     */
    style: React.PropTypes.func,
    render: React.PropTypes.func,
  };

  static defaultProps = {
    style: null,
    render: null,
  }

  static contextTypes = {
    phone: React.PropTypes.bool,
    tablet: React.PropTypes.bool,
    serverSideScreenClass: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    breakpoints: React.PropTypes.arrayOf(React.PropTypes.number),
  };

  componentWillMount = () => {
    this.setScreenClass();
  }

  componentDidMount = () => {
    this.eventListener = throttle(this.setScreenClass, 100);
    window.addEventListener('resize', this.eventListener);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.eventListener);
  }

  setScreenClass = () => {
    this.setState({ screenClass: getScreenClass(this.context) });
  }

  getStyle = () => this.props.style(this.state.screenClass);

  render = () => {
    if (this.props.render) {
      return <RenderAny>{this.props.render(this.state.screenClass)}</RenderAny>;
    }
    if (this.props.style) {
      const clonedElement = React.cloneElement(this.props.children, { style: this.getStyle() });
      return clonedElement;
    }
    return false;
  }
}
