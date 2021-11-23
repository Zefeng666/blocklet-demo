import moment from 'moment';

export const handleBTC = (num) => {
  return (num / 100000000).toFixed(8) + ' BTC';
};

export const setUrl = (searchKey) => {
  var url = location.pathname + '?searchKey=' + searchKey;
  history.pushState({ url: url, title: document.title }, document.title, url);
};
export const getQueryVariable = (variable) => {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return '';
};

export const handleTime = (time) => {
  return moment(parseInt(time + '000')).format('YYYY-MM-DD hh:mm');
};
