import * as React from "react";
import * as request from "request";
import * as rssparser from "rss-parser"

import { parser } from "../helper_classes/articleparser"
import { FeedInfo } from "../helper_classes/feedinfo"
import { SongInfo } from "../helper_classes/songinfo"

import { SongItem } from "./songitem"

interface IPlaylisterProps {
    feeds: FeedInfo[],
    lastAccess: Date
}

interface IPlaylisterState {
    sounds: SongInfo[],
    currentSong: number
}

export class Playlister extends React.Component<IPlaylisterProps, IPlaylisterState> {
    constructor(props: IPlaylisterProps) {
        super(props);

        this.state = {
            sounds: [],
            currentSong: 0
        }
    }

    public componentWillMount() {
        this.generateXML()
    }

    public render() {
        return <div>
                { this.state.sounds.length>0 && this.props.feeds.length>0 ?
                <SongItem song={this.state.sounds[this.state.currentSong]} onEnd={() => this.nextSong()}/> : <p>not ready yet</p> }
                <button onClick={this.nextSong.bind(this)} >next Song</button>
                <button onClick={this.prevSong.bind(this)} >prev Song</button>
            </div>
    }

    private nextSong() {
        this.setState((s: IPlaylisterState) => {
            s.currentSong = Math.max(s.currentSong + 1, s.sounds.length -1)
        })
    }

    private prevSong() {
        this.setState((s: IPlaylisterState) => {
            s.currentSong = Math.max(s.currentSong -1, 0)
        })
    }

    private generateXML() {
        request(
            this.props.feeds[0].feedUrl,
            {   
                headers: {"Access-Control-Allow-Origin": "*"}
            },
            function(err: any, response: any, body: any) {
                rssparser.parseString(body, function(err?: any, res?: any) {
                    this.setState((s: IPlaylisterState) => {
                        var sounds: SongInfo[] = res.feed.entries.map((entry: any) => {
                            return parser(entry.content)
                        })
                        s.sounds = sounds.filter((val: SongInfo, i: number, list: SongInfo[]) => {
                            if (val != null) {
                                return true
                            } else {
                                return false
                            }
                        })
                    })
                }.bind(this))
            }.bind(this));
    }

}