import * as React from "react"
import { FeedInfo } from "../helper_classes/feedinfo"

interface IFeedListItemProps {
    feed: FeedInfo,
    onChange: (s:string) => void,
    onDelete: () => void
}

interface IFeedListItemState {
    editing: boolean
    editUrl: string
}

export class FeedListItem extends React.Component<IFeedListItemProps, IFeedListItemState> {
    constructor(props: IFeedListItemProps) {
        super(props)
        this.state = {
            editing: false,
            editUrl: this.props.feed.feedUrl
        }
    }

    public render() {
        return <div>
            <p> feed name: {this.props.feed.feedName}</p><button onClick={() => this.props.onDelete()}>delete feed?</button>
            {!this.state.editing ? <div><p> feed url: {this.props.feed.feedUrl}</p><button onClick={() => this.handleEditClick()}>edit url?</button></div>
                : <div><input value={this.state.editUrl} onChange={this.editUrlChange.bind(this)}/>}<button onClick={() => this.handleEditSave()}>save</button></div> }       
            </div>
    }

    private handleEditClick(): void {
        this.setState((s: IFeedListItemState) => {
            s.editing = true
        });
    }

    private editUrlChange(evt: any): void {
        evt.persist()
        this.setState((s:IFeedListItemState) => {
            s.editUrl = evt.target.value
        })
    }

    private handleEditSave(): void {
        this.props.onChange(this.state.editUrl);
        this.setState((s: IFeedListItemState) => {
            s.editing = false
        });
    }

}