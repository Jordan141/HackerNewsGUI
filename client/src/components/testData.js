import React, {Component} from 'react'

class TestData extends Component {
    render() {
        return (
            <div>
            <h2 className="data-title"> Title: {this.props.data.title} </h2>
            <h5 className="data-author">  Author: {this.props.data.by} </h5>
            <h6 className="data-job"> Type: {this.props.data.type} Date: {this.props.data.time} </h6>
            </div>
        )
    }
}

export default TestData