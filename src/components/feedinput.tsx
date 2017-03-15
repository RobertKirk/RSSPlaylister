import * as React from "react";

import { FeedInfo } from "../helper_classes/feedinfo"

interface IFeedInputProps {
    onInput: (f: FeedInfo) => void
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
        this.setState(((s: IFeedInputState) =>
            s.name = evt.target.value
        ));
    }

    private inputUrlChange(evt: any) {
        evt.persist();
        this.setState(((s: IFeedInputState) =>
            s.url = evt.target.value
        ));
    }

    private handleSubmit(): void {
        var f = new FeedInfo()
        f.feedName = this.state.name
        f.feedUrl = this.state.url
        this.props.onInput(f)
        this.setState({
            name: "",
            url: ""
        })
    }
}