import * as React from 'react'
import * as ReactDOM from 'react-dom'

export default class Example extends React.Component<{}, {}> {
    public render(): React.ReactElement<Example> {
        return (
            <div className="container">
                <div className="panel-heading">Example Component</div>
                <div className="panel-body">
                    Hello React!!
                </div>
            </div>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
