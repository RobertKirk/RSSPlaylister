import * as React from "react";
import * as request from "request"

import { FeedInfo } from "../helper_classes/feedinfo"

import { Playlister } from "./playlister"
import { FeedList } from "./feedlist"

interface IMainState {
    switch: boolean
}

export class Main extends React.Component<{}, IMainState> {
    render() {
        return <div>
            <FeedList 
                feeds={this.getFeeds()} 
                onDelete={this.deleteFeed.bind(this)} 
                onChange={this.changeFeed.bind(this)} 
                onFeedAdd={this.saveInputedFeed.bind(this)}/>
            <Playlister feeds={[]} lastAccess={this.getLastAccess()}/>
            </div>
    }

    private saveInputedFeed(f: FeedInfo): void {
        localStorage.setItem(f.feedName, f.feedUrl)
        this.setState((s:IMainState) => {
            s.switch = !s.switch
        })
    }

    private changeFeed(f: FeedInfo, s: string) : void {
        localStorage.setItem(f.feedName, s)
        this.setState((s:IMainState) => {
            s.switch = !s.switch
        })
    }

    private deleteFeed(f: FeedInfo): void {
        localStorage.removeItem(f.feedName)
        this.setState((s:IMainState) => {
            s.switch = !s.switch
        })
    }

    private getFeeds(): FeedInfo[] {
        var feeds: FeedInfo[] = []
        for(var i=0; i<localStorage.length; i++) {
            feeds.push({
                feedName: localStorage.key(i),
                feedUrl: localStorage.getItem(localStorage.key(i))
            })
        }
        return feeds
    }

    private getLastAccess(): Date {
        var lastAccess = new Date()
        lastAccess.setDate(lastAccess.getDate() - 1)
        return lastAccess
    }
}
