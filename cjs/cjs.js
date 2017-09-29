var loadedResultsSelector = '.result-row';
var buttonSelector = '.table-footer.load-more-results-wrap a.load-more-results:not(.hidden)';
var nbResults = 0;
var autoScrollInterval;
var isFetching;

function fetchResults(nbTotalResultsToFetch) {
    nbResults = $(loadedResultsSelector).length + nbTotalResultsToFetch;
    isFetching = true;

    registerAutoScroll();
    loadMoreResults();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function registerAutoScroll()
{
    autoScrollInterval = setInterval(scrollToBottom, 250);
}

function unregisterAutoScroll()
{
    console.log('unregisterAutoScroll');
    clearInterval(autoScrollInterval);
}

function registerTimeout() {
    setTimeout(loadMoreResults, 500);
}

function scrollToBottom() {
    console.log('autoscrolling');

    window.scrollTo(0,document.body.scrollHeight);
}

function loadMoreResults() {
    var loadedResults = $(loadedResultsSelector).length;

    var $buttonResults = $(buttonSelector);

    if ($buttonResults.length == 0) {
        console.log('Could not find "Load More" button, stopping.');

        return;
    }

    var $button = $($buttonResults.get(0));

    if ($button.hasClass('disabled')) {
        console.log(' -> still loading, retrying in a bit...');

        registerTimeout();

        return;
    }

    console.log('loading results from ' + numberWithCommas(parseInt(loadedResults+1)) + ' to ' + numberWithCommas(parseInt(loadedResults+50)) + ' (out of ' + numberWithCommas(nbResults) + ')');

    $($('.table-footer.load-more-results-wrap a.load-more-results').get(0)).click();

    loadedResults += 50;

    if (loadedResults < nbResults) {
        registerTimeout();
    } else {
        isFetching = false;
        setTimeout(unregisterAutoScroll, 2000);
        console.log('Finished');
    }
}
