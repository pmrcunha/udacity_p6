# Udacity FEND - P6: Feed Reader Testing

This project consisted in completing the test suite for a web-based application that reads RSS feeds.
The testing framework used is Jasmine.

### Running the app

To run the app and the test suite, you simply need to open index.html with your browser.

### Test Suite

The test suite can be found under jasmine/spec/feedreader.js

I wrote the following tests:

*   RSS Feeds has a defined URL
*   RSS Feeds has a defined name

*   The menu should be hidden by default
*   The menu changes visibility when the menu icon is clicked

*   Initial Entries - There is at least one .entry in the .feed container, when loadFeed returns (runs asynchronously)

*   New Feed Selection - The content changes when a new feed is loaded by loadFeed (also runs asynchronously)
