import React from 'react';

// Компоненты рендерятся либо когда меняется их state, либо когда меняются их props
export default class extends React.Component {
    // Состояние
    state = {
        current: 1
    }

    inc = () => {
        if (this.props.max > this.state.current ) {
            this.setState( { current: this.state.current + 1 })
        }

    }

    render() {
        return <div>
            <span>{ this.state.current }</span>
            {/*<button type="button" onClick={() => this.setState( { current: this.state.current + 1 })}>+</button>*/}
            <button type="button" onClick={ this.inc }>+</button>
        </div>
    }
}

// onClick
// onDoubleClick
// onChange -> input