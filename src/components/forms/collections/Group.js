import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '../../collections/Grid/Grid';
import GridItem from '../../collections/Grid/GridItem';

import Button from '../../inputs/Button/Button';
import Icon from '../../Icon';

const Add = ( { children, defaultItem, eventProp, itemProp, onAdd } ) => {
    defaultItem = defaultItem || null;
    const [ item, updateItem ] = React.useState( defaultItem );
    //
    const newProps = {
        [ eventProp ] : item => updateItem( item ),
        [ itemProp ] : item,
    };
    children = React.cloneElement( children, newProps );
    //
    const buttonHandler = () => {
        onAdd && onAdd( item );
        updateItem( defaultItem );
    };
    //
    return (
        <>
            <GridItem grid={[11]}>
                    {children}
            </GridItem>
            <GridItem grid={[1]}>
                <Button round onClick={buttonHandler}>
                    <Icon>add_circle</Icon>
                </Button>
            </GridItem>
        </>
    );
};

const Items = ( { data, render, onDelete, onDown, onUp } ) => {
    const lastIndex = data.length - 1;
    const wrap = ( item, index ) => {
        return (
            <>
                <GridItem grid={[10]}>{render( item )}</GridItem>
                <GridItem grid={[2]}>
                    <Button round onClick={() => onDelete( index )}>
                        <Icon>delete</Icon>
                    </Button>
                    <Button round disabled={index === lastIndex} onClick={() => onDown( index )}>
                        <Icon>arrow_downward</Icon>
                    </Button>
                    <Button round disabled={index === 0} onClick={() => onUp( index)}>
                        <Icon>arrow_upward</Icon>
                    </Button>
                </GridItem>
            </>
        );
    };
    //
    return data.map( wrap );
};

class Group extends Component {
    static Add = Add;
    static Items = Items;

    onDelete = ( index ) => {
        const { data, onChange } = this.props;
        if( onChange ) {
            let items = [];
            for( var k = 0; k < data.length; k++ ) {
                if( k !== index ) {
                    items.push( data[ k ] );
                }
            }
            onChange( items );
        }
    }

    onAdd = ( item ) => {
        const { data, onChange } = this.props;
        onChange && onChange( [ ...data, item ] );
    }

    onDown = ( index ) => {
        const { data, onChange } = this.props;
        const temp = data[ index ];
        data[ index ] = data[ index + 1 ];
        data[ index + 1 ] = temp;
        onChange && onChange( [ ...data ] );
    }

    onUp = ( index ) => {
        const { data, onChange } = this.props;
        const temp = data[ index ];
        data[ index ] = data[ index - 1 ];
        data[ index - 1 ] = temp;
        onChange && onChange( [ ...data ] );
    }

    render() {
        const { data, render } = this.props;
        const { onAdd, onDelete, onDown, onUp } = this;
        const children = [];
        React.Children.map( this.props.children, child => {
            if( child.type === Add ) {
                children.push( React.cloneElement( child, { onAdd } ) );
            }else if( child.type === Items ) {
                children.push( React.cloneElement( child, { data, render, onDelete, onDown, onUp } ) );
            }
        } );
        return (
            <Grid>
                {children}
            </Grid>
        );
    }
}

Group.propTypes = {
    /** Provides the list of data elements. */
    data : PropTypes.arrayOf( PropTypes.object ),

    /** Provides a render function called for each element. */
    render : PropTypes.func,

    /** An event handler for when the collection changes. */
    onChange : PropTypes.func,
};

export default Group;