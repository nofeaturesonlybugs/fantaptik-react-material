import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { merge } from '../../common';

import './SlideMenu.css';
import SlideMenuItem from './SlideMenuItem';

class SlideMenu extends Component {
    static Item = SlideMenuItem;

    constructor( props ) {
        super( props );
        const { selected } = props;
        this.state = {
            selected : selected || 0,
        };
        this.ref = React.createRef();
        //
        this.left = -1;
        this.width = -1;
    }

    componentDidMount() {
        this.updateIndicator();
    }

    componendDidUpdate() {
        this.updateIndicator();
    }

    updateIndicator = () => {
        if( this.ref && this.ref.current ) {
            let selected = this.ref.current.querySelector( ".slide-menu-item.selected" );
            let indicator = this.ref.current.querySelector( ".slide-menu-indicator" );
            if( selected && indicator ) {
                const noanimate = () => {
                    indicator.style.width = selected.offsetWidth.toString() + "px";
                    indicator.style.left = selected.offsetLeft.toString() + "px";
                }
                const duration = 100;
                if( indicator.animate && typeof indicator.animate == "function" ) {
                    try {
                        indicator.animate( [
                            {
                                left : indicator.offsetLeft + "px",
                                width : indicator.offsetWidth + "px",
                            },
                            {
                                left : selected.offsetLeft + "px",
                                width : selected.offsetWidth + "px",
                            },
                        ], {
                            duration : duration,
                            easing : "ease-in-out",
                            fill : "forwards",
                        } );
                    } catch( e ) {
                        console.log("SlideMenu.element.animate: ", e);
                        noanimate();
                    }
                } else {
                    noanimate();
                }
                //
                // We try endless until dimensions stop changing.
                if( this.left !== selected.offsetLeft && this.width !== selected.offsetWidth ) {
                    setTimeout( this.updateIndicator, duration * 3 );
                }
                this.left = selected.offsetLeft;
                this.width = selected.offsetWidth;
            }
        }
    }

    selectedStateUpdated = () => {
        this.updateIndicator();
        const { onChange } = this.props;
        const { selected } = this.state;
        onChange && onChange( selected );
    }

    render() {
        const handlers = {
            click : selected => this.setState( { selected }, this.selectedStateUpdated ),
        }
        let { children, className, ...props } = this.props;
        const { selected } = this.state;
        //
        children = React.Children.map( children, ( child ) => {
            const newProps = {
                onClick : handlers.click,
                selected : child.props.value === selected,
            };
            return React.cloneElement( child, newProps );
        } );
        //
        className = merge`slide-menu ${className}`;
        //
        return (
            <div ref={this.ref} className={className} {...props}>
                {children}
                <div className="slide-menu-indicator" />
            </div>
        );
    }
}

SlideMenu.propTypes = {
    /** The selected item. */
    selected : PropTypes.string,

    /** Event handler for when the selected item changes; `item => console.log( item + ' is selected.' )`
     */
    onChange : PropTypes.func,
}


export default SlideMenu;