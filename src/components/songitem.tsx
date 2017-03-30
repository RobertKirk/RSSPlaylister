import * as React from "react"
import YouTube from "react-youtube"
import ReactPlayer from "react-player"

import { SongInfo } from "../helper_classes/songinfo"

interface ISongItemProps {
    song: SongInfo,
    onEnd: () => void
}

export class SongItem extends React.Component<ISongItemProps, {}> {
    private scplayer: HTMLIFrameElement = null

    public render() {
        if (this.props.song.type == 0) {
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
        } else if (this.props.song.type == 1) {
            return <div>
                    <iframe ref={(input) => {this.scplayer = input}} onLoad={() => this.scOnReady()} height="390" width="640" src={this.props.song.urlId} onEnded={() => this.props.onEnd()}></iframe>
                </div>
        } else {
            return <div>wrong type</div>
        }
    }

    // public componentDidMount() {
    //     if(this.props.song.type==1) {
    //         this.scOnReady()
    //     }
    // }

    private ytOnReady(event: any) {
        event.target.playVideo();
    }

    private scOnReady() {
        setTimeout(() => {
            var initialWidth = this.scplayer.contentDocument.getElementsByClassName("thinProgressbar__played")[0].style.width
            console.log(initialWidth)
            setTimeout(() => {
                console.log("should be after 5 seconds")
                var newwidth = this.scplayer.contentDocument.getElementsByClassName("thinProgressbar__played")[0].style.width
                console.log(newwidth)
                console.log(Number(newwidth.substr(0, newwidth.length - 1)) - Number(initialWidth.substr(0, initialWidth.length -1)))
                var myTimeout = setTimeout(
                    () => {
                        console.log("should be end of song")
                        this.props.onEnd()
                    }, -3000 + (500000/(Number(newwidth.substr(0, newwidth.length - 1)) - Number(initialWidth.substr(0, initialWidth.length -1)))))
            }, 5000)
        }, 2000)
        // <div class="thinProgressbar__layer thinProgressbar__played" style="width: 92.2518%;"></div>
    }

}