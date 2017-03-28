import { SongInfo } from "./songinfo"

export function parser(s: string): SongInfo {
    var song = new SongInfo
    var tester: RegExp = /iframe/i
    var searcher1: RegExp = /src=/
    var searcher2: RegExp = /"/
    var ytsearcher: RegExp = /youtube/i
    var scsearcher: RegExp = /soundcloud/i
    var bcsearcher: RegExp = /bandcamp/i
    if (tester.test(s)) {
        var cut: string = s.substr(s.search(tester))
        cut = cut.substr(cut.search(searcher1) + 5)
        cut = cut.substr(0, cut.search(searcher2))
        song.urlId= cut
        if (ytsearcher.test(cut)) {
            song.type = 0
            song.urlId = song.urlId.substr(30)
        } else if (scsearcher.test(cut)) {
            song.type = 1
        } else if (bcsearcher.test(cut)) {
            song.type = 2
        } else {
            song.type = 3
        }
    } else {
        song = null
    }
    return song
}