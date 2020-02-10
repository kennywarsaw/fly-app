import React from 'react';

class MyComponent extends React.Component {
    state = {
        text: 'test state',
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value});
    }

    render() {
        return (
            <>
                <input
                    placeholder="your text"
                    onChange={this.handleChange} 
                    value={this.state.text}
                />
                <h1>{this.state.text}</h1>
            </>
        )
    }
}

export default MyComponent;