import * as React from "react";
import * as request from "request"

import { FeedInfo } from "../helper_classes/feedinfo"

interface IPlaylisterProps {
    feeds: FeedInfo[]
}

export class Playlister extends React.Component<IPlaylisterProps, {}> {
    public render() {
        this.generateXML()
        return <div/>
    }

    private generateXML(): string {
        request(
            "http://earmilk.com/feed/,",
            {   
                headers: {"Access-Control-Allow-Origin": "*"}
            },
            function(err, response, body) {
            console.log(body);
        });
        return ""
    }

}