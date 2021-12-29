// This is a simple example of a function that is called from a
handlers.handlePlayStreamEventAndProfile = function (args, context) {

    // The event that triggered the action.
    // For a list of event types, see our PlayFab API documentation.
    var psEvent = context.playStreamEvent;

    // The profile data of the player associated with the event
    var profile = context.playerProfile;

    // Post data about the event to an external API
    var content = JSON.stringify({user: profile.PlayerId, event: psEvent.EventName});
    var response = http.request('https://httpbin.org/status/200', 'post', content, 'application/json', null, true);

    return { externalAPIResponse: response };
}
