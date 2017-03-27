import * as React from "react"

interface ISongItemProps {
    type: number,
    url: string
}

export class SongItem extends React.Component<ISongItemProps, {}> {
    public render() {
        if (this.props.type === 0) {
            return <div>
                <iframe width="420" height="315" src={this.props.url + "?autoplay=1&amp;npm installenablejsapi=1"}></iframe>
                </div>
        } else {
            return <div>wrong type</div>
        }
    }
}