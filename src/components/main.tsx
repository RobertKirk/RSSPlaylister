import * as React from "react";
import * as RSSParser from "parse-rss"

import { FeedInput } from "./feedinput"

export class Main extends React.Component<{}, {}> {
    render() {
        return <div>
            <h1>Hello Worlds</h1>
            <FeedInput onInput={(s1:string, s2:string) => this.saveInputedFeed(s1, s2)} /> 
            </div>
    }

    private saveInputedFeed(s1: string, s2: string): void {
        if (!localStorage.getItem(s1)) {
            localStorage.setItem(s1, s2)
        } else {
            alert("that feed name is already used")
        }
    }
}
