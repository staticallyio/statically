(function(doc) {
    "use strict";
    var TEMPLATES = [
        [/^(https?):\/\/((.*.)?[a-zA-Z0-9]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,}))\/(.+)/i, '$1://'+ app_domain +'/$2/$4']
    ];
    var prodEl = doc.getElementById('url-prod');
    var urlEl = doc.getElementById('url');
    new Clipboard('.url-copy-button');
    var prodCopyButton = doc.getElementById('url-prod-copy');
    if (doc.queryCommandSupported && doc.queryCommandSupported('copy')) {
        prodCopyButton.style.display = 'inline-block';
    }
    urlEl.addEventListener('input', formatURL, false);
    formatURL();

    function formatURL() {
        var url = urlEl.value = decodeURIComponent(urlEl.value.trim());
        urlEl.classList.remove('valid');
        urlEl.classList.toggle('invalid', url.length);
        prodEl.value = '';
        prodEl.classList.remove('valid');
        prodCopyButton.disabled = true;
        for (var i in TEMPLATES) {
            var pattern = TEMPLATES[i][0],
                template = TEMPLATES[i][1];
            if (pattern.test(url)) {
                urlEl.classList.remove('invalid');
                urlEl.classList.add('valid');
                prodEl.value = url.replace(pattern, template);
                prodEl.classList.add('valid');
                prodCopyButton.disabled = false;
                break;
            }
        }
    }
    prodEl.addEventListener('focus', onFocus);
    urlEl.addEventListener('focus', onFocus);

    function onFocus(e) {
        setTimeout(function() {
            e.target.select();
        }, 1);
    }
}(document));
