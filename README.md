# backup-stream-playback

*Keyword(s):* backup-stream-playback, error-handling<br>
*[Since](https://learn.akamai.com/en-us/webhelp/edgeworkers/edgeworkers-user-guide/GUID-14077BCA-0D9F-422C-8273-2F3E37339D5B.html):* 1.0

Whenever a media server publishing a HLS stream has not started publishing an event  or if it fails with an error such as 404, the client/player does not get a valid manifest and the client/player needs to have a logic in place to show a graceful error message to the viewer or call a backup url.
With this Akamai edgeworker script, no clientside/player changes needed, the CDN will automatically provide a backup playback manifest which plays backup content such as Ads, trailers, countdown, retry message etc.


## Usage Examples

http://sharao.yaott.com/live/master.m3u8
(Run on Akamai staging network)


## Resources
See the repo [README](https://github.com/akamai/edgeworkers-examples#Resources) for additional guidance.
