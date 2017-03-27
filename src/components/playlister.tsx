import * as React from "react";
import * as request from "request";
import * as rssparser from "rss-parser"

import { FeedInfo } from "../helper_classes/feedinfo"

import { SongItem } from "./songitem"

interface IPlaylisterProps {
    feeds: FeedInfo[],
    lastAccess: Date
}

interface IPlaylisterState {
    sounds: any
}

export class Playlister extends React.Component<IPlaylisterProps, IPlaylisterState> {
    public render() {
        return <div>
                <SongItem type={0} url="https://www.youtube.com/embed/XGSy3_Czz8k" />
            </div>
    }

    private generateXML(): string {
        request(
            "http://earmilk.com/feed/",
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