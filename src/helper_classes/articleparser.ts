import { SongInfo } from "./songinfo"

export function parser(s: string): SongInfo {
    var song = new SongInfo
    var tester: RegExp = /iframe/i
    var searcher1: RegExp = /src=/
    var searcher2: RegExp = /\s/
    if (tester.test(s)) {
        var cut: string = s.substr(s.search(tester))
        cut = cut.substr(cut.search(searcher1) + 4)
        cut = cut.substr(0, cut.search(searcher2))
        console.log(cut)
    } else {
        song = null
    }
    return song
}