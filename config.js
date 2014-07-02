var config = {
    hosts: {
        domain: 'fb10-mp1.hpi.uni-potsdam.de',
        muc: 'conference.fb10-mp1.hpi.uni-potsdam.de',
        bridge: 'jitsi-videobridge.fb10-mp1.hpi.uni-potsdam.de'
    },
//  getroomnode: function (path) { return 'someprefixpossiblybasedonpath'; },
//  useStunTurn: true, // use XEP-0215 to fetch STUN and TURN server
//  useIPv6: true, // ipv6 support. use at your own risk
    useNicks: false,
    bosh: '//fb10-mp1.hpi.uni-potsdam.de/http-bind' // FIXME: use xep-0156 for that
    desktopSharing: 'ext', // Desktop sharing method. Can be set to 'ext', 'webrtc' or false to disable.
    chromeExtensionId: 'diibjkoicjeejcmhdnailmkgecihlobk', // Id of desktop streamer Chrome extension
    minChromeExtVersion: '0.1', // Required version of Chrome extension
    enableRtpStats: false, // Enables RTP stats processing
    openSctp: true, //Toggle to enable/disable SCTP channels
    enableRecording: false
};