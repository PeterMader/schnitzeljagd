const getParams = query => {
  if (!query) {
    return { };
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, { });
};

const display = (elem, n) => {
    elem.style.display = 'block';
    const [ prevButton, nextButton ] = elem.querySelectorAll("a");
    prevButton.href = `index.html?action=${encodeURIComponent(btoa('test' + (n - 1)))}`;
    nextButton.href = `index.html?action=${encodeURIComponent(btoa('test' + (n + 1)))}`;
};

document.addEventListener('DOMContentLoaded', () => {
    const { action } = getParams(document.location.search);
    let a;
    try {
        a = atob(action);
    } catch (e) {
        a = '0';
    }
    const n = parseInt(a.slice(-1) || 0, 10);
    const id = 'raetsel-' + n;
    const elem = document.getElementById(id);
    if (!elem) {
        display(document.getElementById('raetsel-0'), 0);
        console.log("Could not find raetsel " + n);
    } else {
        display(elem, n);
    }
});
