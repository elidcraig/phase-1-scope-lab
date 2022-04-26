var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = 'BOB';
    return customerName;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'Pat';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Dave';
    return leastFavoriteCustomer;
}