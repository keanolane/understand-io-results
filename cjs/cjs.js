var loadedResultsSelector = '.result-row';
var buttonSelector = '.table-footer.load-more-results-wrap a.load-more-results:not(.hidden)';
var nbResults = 0;

function fetchResults(nbTotalResultsToFetch) {
    nbResults = $(loadedResultsSelector).length + nbTotalResultsToFetch;

    loadMoreResults();
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function registerTimeout() {
    setTimeout(loadMoreResults, 2000);
}

function loadMoreResults() {
    var loadedResults = $(loadedResultsSelector).length;

    var $buttonResults = $(buttonSelector);

    if ($buttonResults.length == 0) {
        console.log('Could not find "Load More" button, stopping.');

        return;
    }

    var $button = $($buttonResults.get(0));

    if ($button.html() == 'Loading...') {
        console.log(' -> still loading, retrying in a bit...');

        registerTimeout();

        return;
    }

    console.log('loading results from ' + numberWithCommas(parseInt(loadedResults+1)) + ' to ' + numberWithCommas(parseInt(loadedResults+50)) + ' (out of ' + numberWithCommas(nbResults) + ')');

    $($('.table-footer.load-more-results-wrap a.load-more-results').get(0)).click();

    loadedResults += 50;

    if (loadedResults < nbResults) {
        registerTimeout(nbResults);
    } else {
        console.log('Finished');
    }
}
