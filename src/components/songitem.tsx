import * as React from "react"
import YouTube from "react-youtube"

import { SongInfo } from "../helper_classes/songinfo"

interface ISongItemProps {
    song: SongInfo,
    onEnd: () => void
}

export class SongItem extends React.Component<ISongItemProps, {}> {
    public render() {
        if (this.props.song.type === 0) {
            const opts = {
                height: '390',
                width: '640',
                playerVars: { // https://developers.google.com/youtube/player_parameters 
                    autoplay: 1
                }
            };
            return <div>
                <YouTube 
                    videoId={this.props.song.urlId} 
                    opts = {opts}
                    onReady={this.ytOnReady}
                    onEnd={this.props.onEnd}/>
                </div>
        } else {
            return <div>wrong type</div>
        }
    }

    private ytOnReady(event: any) {
        event.target.playVideo();
    }
}