/*
(c) Copyright 2020 Akamai Technologies, Inc. Licensed under Apache 2 license.
Version: 0.1
Author: Sharath Rao (sharao@akamai.com)

Purpose:
Whenever a media server publishing a HLS stream has not started publishing an event  or if it fails with an error such as 404, the client/player does not get a valid manifest and the client/player needs to have a logic in place to show a graceful error message to the viewer or call a backup url.
With this Akamai edgeworker script, no clientside/player changes needed, the CDN will automatically provide a backup playback manifest which plays backup content such as Ads, trailers, countdown, retry message etc.

Repo: https://github.com/akamai/edgeworkers-examples/tree/master/origin-overload

onOriginResponse: This event happens as the origin response is created.
The event only happens if the response is not served from cache and not constructed on the edge.
Use this event if you want to modify the response before it is cached.
*/

export function onOriginResponse(request, response) {

  if(response.status==404){
    var backupManifest =
    `#EXTM3U
#EXT-X-TARGETDURATION:10
#EXT-X-ALLOW-CACHE:YES
#EXT-X-PLAYLIST-TYPE:VOD
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:1
#EXTINF:10.000,
https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/segment2_0_av.ts
#EXTINF:10.000,
https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/segment3_0_av.ts
#EXT-X-ENDLIST`;

    request.respondWith(200, {'Content-Type': ['application/vnd.apple.mpegurl']  }, backupManifest);
  }
}
