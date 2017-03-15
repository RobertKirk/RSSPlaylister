import * as React from "react"

import { FeedListItem } from "./feedlistitem"
import { FeedInput } from "./feedinput"

import { FeedInfo } from "../helper_classes/feedinfo"

interface IFeedListProps {
    feeds: FeedInfo[],
    onFeedAdd: (f: FeedInfo) => void,
    onDelete: (f:FeedInfo) => void,
    onChange: (f:FeedInfo, s: string) => void
}

export class FeedList extends React.Component<IFeedListProps, {}> {
    public render() {
        return <div>
            <FeedInput onInput={this.props.onFeedAdd}/>
            {this.props.feeds.map((f: FeedInfo, i: number) => {
                return <FeedListItem key={i} feed={f} onChange={(s: string) => this.props.onChange(f, s)} onDelete={() => this.props.onDelete(f)}/>
            })}
            </div>
    }
}