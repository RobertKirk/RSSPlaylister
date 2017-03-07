import * as React from "react";

interface IFeedInputProps {
    onInput: (s: string) => void
}

interface IFeedInputState {
    input: string
}

export class FeedInput extends React.Component<IFeedInputProps, IFeedInputState> {
    constructor(props: IFeedInputProps) {
        super(props);

        this.state = {
            input: ""
        }
        this.inputChange = this.inputChange.bind(this)
    }

    public render() {
        return <div className="forinput">
                <input value={this.state.input} onChange={this.inputChange}/>
                <button onClick={() => this.handleSubmit()}>submit</button>
            </div>
    }

    private inputChange(evt: any) {
        this.setState({
            input: evt.target.value
        })
    }

    private handleSubmit(): void {
        this.props.onInput(this.state.input)
        this.setState({
            input: ""
        })
    }
}