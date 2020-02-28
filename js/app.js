'use strict';

var hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
var shops = [];
function Locations(name, minCustmer, maxCustmer, avgCookie) {
  this.name = name;
  this.minCustmer = minCustmer;
  this.maxCustmer = maxCustmer;
  this.avgCookie = avgCookie;
  this.cookiesPerHourArr = [];
  this.total = 0;
  console.log(this);
  shops.push(this);
  this.getNumCokies();

}


Locations.prototype.getNumCokies = function () {
  for (var i = 0; i < hours.length; i++) {
    var cookiesPerHour = Math.floor(getRandomcust(this.minCustmer, this.maxCustmer));

    // eslint-disable-next-line no-undef
    var final =Math.floor( cookiesPerHour * this.avgCookie);
    this.cookiesPerHourArr.push(final);
    this.total = this.total + this.cookiesPerHourArr[i];

  }

};/////;
var LocationsContainer = document.getElementById('container');
var tableEl = document.createElement('table');
LocationsContainer.appendChild(tableEl);

Locations.prototype.render = function () {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);
  for (var index = 0; index < hours.length; index++) {
    // eslint-disable-next-line no-redeclare
    var tdEl = document.createElement('td');//edit 1
    tdEl.textContent = this.cookiesPerHourArr[index];
    trEl.appendChild(tdEl);

  }

  var tdTotal = document.createElement('td');
  trEl.appendChild(tdTotal);
  tdTotal.textContent = this.total;
};
//objects
new Locations('seattle', 23, 65, 6.3);
new Locations('Tokyo', 3, 24, 1.2);
new Locations('Dubai', 11, 38, 3.7);
new Locations('Paris', 20, 38, 2.3);
new Locations('Lima', 2, 16, 4.6);
//table/header
function renderHeader() {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var thElEmpty = document.createElement('th');
  thElEmpty.textContent = '   ';
  trEl.appendChild(thElEmpty);

  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Daily Location Total';
  trEl.appendChild(thElTotal);
}
//footer
function renderFooter() {
  var trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = 'total';
  trEl.appendChild(tdEl);
  var hourTotal;
  var totalOfTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    hourTotal = 0;
    for (var shop = 0; shop < shops.length; shop++) {
      hourTotal += shops[shop].cookiesPerHourArr[i];
    }
    var tdElTotalHr = document.createElement('td');
    tdElTotalHr.textContent = hourTotal;
    totalOfTotal += hourTotal;
    trEl.appendChild(tdElTotalHr);

  }
  var tdTotalOfTotal = document.createElement('td');
  tdTotalOfTotal.textContent = totalOfTotal;
  trEl.appendChild(tdTotalOfTotal);
}

renderHeader();
renderFooter();





for (var i = 0; i < shops.length; i++) {
  shops[i].render();
}






//helper function
function getRandomcust(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min )) + min; //The maximum is exclusive and the minimum is inclusive
}
