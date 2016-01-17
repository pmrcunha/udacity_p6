/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has a defined URL', function() {
            for(i=0; i< allFeeds.length; i++) {
                var feed = allFeeds[i];
                expect(feed.url).toBeDefined();
                expect(feed.url).toBeTruthy();
            }
         });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has a defined name', function() {
            for(i=0; i< allFeeds.length; i++) {
                var feed = allFeeds[i];
                expect(feed.name).toBeDefined();
                expect(feed.name).toBeTruthy();
            }
         });
    });

    /* Test suite for the menu element */
    describe('The menu', function() {
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('should be hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('changes visibility when the menu icon is clicked', function() {
            var menuIcon = $('.menu-icon-link');
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous.
         */
        it('There is at least one .entry in the .feed container, when loadFeed returns', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        var valuesBefore, valuesAfter;
        beforeEach(function(done) {
            $('.feed').empty();
            loadFeed(0, function() {
                    valuesBefore = $('.feed');
                    done();
            });
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('The content changes when a new feed is loaded by loadFeed', function(done) {
            loadFeed(1, function() {
                valuesAfter = $('.feed');
            })
            expect(valuesAfter).not.toBe(valuesBefore);
            done();
         });
    });
}());
