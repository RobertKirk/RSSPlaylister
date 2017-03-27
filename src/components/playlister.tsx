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
    sounds: SongInfo[]
}

export class Playlister extends React.Component<IPlaylisterProps, IPlaylisterState> {
    public render() {
        var song = new SongInfo
        song.type = 0
        song.urlId = "YcRQ23VOarc"
        parser(this.generateXML())
        return <div>
                <SongItem song={song} onEnd={() => console.log("hello")}/>
            </div>
    }

    private generateXML(): string {
        request(
            "http://adhoc.fm/feed/",
            {   
                headers: {"Access-Control-Allow-Origin": "*"}
            },
            function(err, response, body) {
                rssparser.parseString(body, function(err?: any, res?: any) {
                    if(res) {console.log(res)}
            })
        });
        return ""
    }

}