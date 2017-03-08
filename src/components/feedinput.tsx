import * as React from "react";

interface IFeedInputProps {
    onInput: (name: string, url: string) => void
}

interface IFeedInputState {
    name: string,
    url: string
}

export class FeedInput extends React.Component<IFeedInputProps, IFeedInputState> {
    constructor(props: IFeedInputProps) {
        super(props);

        this.state = {
            name: "",
            url: ""
        }
        this.inputNameChange = this.inputNameChange.bind(this)
        this.inputUrlChange = this.inputUrlChange.bind(this)
    }

    public render() {
        return <div className="forinput">
                <p>name the feed</p>
                <input value={this.state.name} onChange={this.inputNameChange}/>
                <p> provide url </p>
                <input value={this.state.url} onChange={this.inputUrlChange}/>
                <button onClick={() => this.handleSubmit()}>submit</button>
            </div>
    }

    private inputNameChange(evt: any) {
        evt.persist();
        this.setState(((s: IFeedInputState, p: IFeedInputProps) =>
            s.name = evt.target.value
        ));
    }

    private inputUrlChange(evt: any) {
        evt.persist();
        this.setState(((s: IFeedInputState, p: IFeedInputProps) =>
            s.url = evt.target.value
        ));
    }

    private handleSubmit(): void {
        this.props.onInput(this.state.name, this.state.url)
        this.setState({
            name: "",
            url: ""
        })
    }
}