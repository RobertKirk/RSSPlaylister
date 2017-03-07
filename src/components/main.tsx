import * as React from "react";

import { FeedInput } from "./feedinput"

export class Main extends React.Component<{}, {}> {
    render() {
        return <div>
            <h1>Hello Worlds</h1>
            <FeedInput onInput={(s:string) => console.log(s)} /> 
            </div>
    }
}
