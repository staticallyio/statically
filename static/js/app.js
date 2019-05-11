/* global Clipboard, cdn_domain */
(function (doc) {
  'use strict';

  // -- Constants --------------------------------------------------------------
  const MARSBLE_API_URL = 'https://apis.marsble.com';
  const MARSBLE_API_KEY = '1fdba1ef633460c72972aaa993d61b';
  const GITHUB_API_URL = 'https://api.github.com';

  /**
   * Matches a Statically CDN URL
   */
  const REGEX_STATICALLY_URL = /^https?:\/\/cdn\.statical(?:y|ly)\.(?:com|io)\/(.+)/i;

  /**
   * Matches a Gist and Raw URL (GitHub)
   */
  const REGEX_GIST_URL     = /^https?:\/\/gist\.github\.com\/.+?\/([0-9a-f]+)(?:\/([0-9a-f]+))?/i;
  const REGEX_RAW_GIST_URL = /^https?:\/\/gist\.githubusercontent\.com\/(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+\..+)$/i;

  /**
   * Matches a GitHub raw URL.
   * Captures:
   * 1.  Username
   * 2.  Repo
   * 3.  Ref
   * 4.  File path
   */
  const REGEX_RAW_REPO_URL = /^https?:\/\/raw\.github(?:usercontent)?\.com\/(.+?)\/(.+?)\/(.+?)\/(.+)/i;

  /**
   * Matches a GitHub repo URL.
   * 
   * Captures:
   * 1.  Username
   * 2.  Repo
   * 3.  Ref
   * 4.  File path
   */
  const REGEX_REPO_URL = /^https?:\/\/github\.com\/(.+?)\/(.+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?)\/(.+)/i;

  /**
   * Matches a GitLab URL
   */
  const REGEX_GITLAB_REPO_URL = /^https?:\/\/gitlab\.com\/([^\/]+\/[^\/]+)\/(?:raw|blob)\/(.+\..+?)(?:\?.*)?$/i;

  /**
   * Matches a Bitbucket URL
   */
  const REGEX_BITBUCKET_REPO_URL = /^https?:\/\/bitbucket\.org\/([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+\..+?)(?:\?.*)?$/i;

  /**
   * Matches a RawGit URL
   */
  const REGEX_RAWGIT_URL = /^https?:\/\/(?:cdn.)?rawgit(?:hub)?\.com\/(.+)/i;

  /**
   * Matches a Instagram URL
   */
  const REGEX_INSTAGRAM_URL = /^https?:\/\/(?:www.)?instagram\.com\/(.+)/i;

  // -- Init -------------------------------------------------------------------
  let copyButtonProd = doc.getElementById('url-prod-copy');
  let inputProd      = doc.getElementById('url-prod');
  let inputUrl       = doc.getElementById('url');

  new Clipboard('.inp-copy-button');

  if (doc.queryCommandSupported && doc.queryCommandSupported('copy')) {
    copyButtonProd.style.display = 'inline-block';
  }

  inputProd.addEventListener('focus', onInputFocus);
  inputUrl.addEventListener('input', formatUrl);

  if (/(iPhone|iPad|iPod)/i.test(navigator.userAgent)) {
    // On iOS, it's quite difficult to copy the value of readonly input elements (see https://git.io/vpI8Z).
    // By making the inputs non-readonly and preventing keydown we can mimic the behaviour of readonly inputs while
    // improving the copy-input-value interaction.
    inputProd.removeAttribute('readonly')
    inputProd.addEventListener('keydown', function (e) {
      e.preventDefault();
    });
  }

  formatUrl();

  // -- Functions --------------------------------------------------------------
  function formatRawGistUrl(url) {
    inputProd.value = url.replace(REGEX_RAW_GIST_URL, `https://${cdn_domain}/gist/$1`);

    setValid();
  }

  function formatRawRepoUrl(url) {
    inputProd.value = url.replace(REGEX_RAW_REPO_URL, `https://${cdn_domain}/gh/$1/$2/$3/$4`);

    setValid();
  }

  function formatRepoUrl(url) {
    let matches = url.match(REGEX_REPO_URL);

    if (matches[3] !== 'master') {
      inputProd.value = url.replace(REGEX_REPO_URL, `https://${cdn_domain}/gh/$1/$2/$3/$4`);
      setValid();
      return;
    }

    let apiUrl = `${GITHUB_API_URL}/repos/${matches[1]}/${matches[2]}/commits/${matches[3]}`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          console.error('Failed to fetch latest repo commit from GitHub API');
          return;
        }

        return res.json();
      })

      .then(data => {
        let ref = data && data.sha
          ? data.sha.slice(0, 8)
          : matches[3];

        inputProd.value = url.replace(REGEX_REPO_URL, `https://${cdn_domain}/gh/$1/$2/${ref}/$4`);
        setValid();
      });
  }

  function formatGitLabRepoUrl(url) {
    inputProd.value = url.replace(REGEX_GITLAB_REPO_URL, `https://${cdn_domain}/gl/$1/$2`);

    setValid();
  }

  function formatBitbucketRepoUrl(url) {
    inputProd.value = url.replace(REGEX_BITBUCKET_REPO_URL, `https://${cdn_domain}/bb/$1/$2`);

    setValid();
  }

  function formatRawGitUrl(url) {
    inputProd.value = url.replace(REGEX_RAWGIT_URL, `https://${cdn_domain}/gh/$1`);

    setValid();
  }

  function debugStaticallyCDNUrl(url) {
    let matches = url.match(REGEX_STATICALLY_URL);

    let apiUrl = `${MARSBLE_API_URL}/http2/v1/check?api_key=${MARSBLE_API_KEY}&url=https://${cdn_domain}/${matches[1]}`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          console.error('Failed to fetch data from Marsble API');
          return;
        }

        return res.json();
      })

      .then(data => {
        let http2 = data.http2;
        let result = data.raw;
        let headers = '';

        for (var key in result) {
          headers += `<strong>${key}</strong>. ${result[key]}<br>`;
        }

        document.getElementById('secretblock').innerHTML = `<div style="background:#080808; border-radius:4px; margin-top:5em; padding:1em">
        <strong>HTTP2</strong>: ${http2}<br>
        ${headers}</div>
        <p style="float:right"><small><em><a style="color:#fff" href="/contact?subject=Report%20URL&amp;message=URL%3A%20https://${cdn_domain}/${matches[1]}%0AMessage%3A%20">Report this URL</a></em></small></p>`;

        setValid();
      });
  }

  function getInstagramMediaUrl(url) {
    let matches = url.match(REGEX_INSTAGRAM_URL);

    let apiUrl = `${MARSBLE_API_URL}/3rdparty/instagram/v1/downloader?api_key=${MARSBLE_API_KEY}&url=https://www.instagram.com/${matches[1]}`;

    fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          console.error('Failed to fetch instagram media from Marsble API');
          return;
        }

        return res.json();
      })

      .then(data => {
        let type = data.type;
        let media = data.downloadUrl;

        inputProd.value = `${media}`;

        if (type == 'image') {
          var html = `<img style="margin-top:5em;max-width:300px" src="${media}" alt="Instagram ${type}">`;
        } else {
          var html = `<video controls style="margin-top:5em;max-width:300px">
          <source src="${media}" type="video/mp4"></video>`;
        }

        document.getElementById('secretblock').innerHTML = `${html}`;

        setValid();
      });
  }

  function formatUrl() {
    let url = inputUrl.value.trim();

    if (REGEX_RAW_REPO_URL.test(url)) {
      formatRawRepoUrl(url);
    } else if (REGEX_RAW_GIST_URL.test(url)) {
      formatRawGistUrl(url);
    } else if (REGEX_REPO_URL.test(url)) {
      formatRepoUrl(url);
    } else if (REGEX_GIST_URL.test(url)) {
      requestGistUrl(url);
    } else if (REGEX_GITLAB_REPO_URL.test(url)) {
      formatGitLabRepoUrl(url);
    } else if (REGEX_BITBUCKET_REPO_URL.test(url)) {
      formatBitbucketRepoUrl(url);
    } else if (REGEX_RAWGIT_URL.test(url)) {
      formatRawGitUrl(url);
    } else if (REGEX_INSTAGRAM_URL.test(url)) {
      getInstagramMediaUrl(url);
    } else if (REGEX_STATICALLY_URL.test(url)) {
      debugStaticallyCDNUrl(url);
    } else {
      setInvalid();
    }
  }

  function onInputFocus(e) {
    setTimeout(function () {
      e.target.select();
    }, 1);
  }

  function requestGistUrl(url) {
    let matches = url.match(REGEX_GIST_URL);

    let apiUrl = GITHUB_API_URL + '/gists/' + matches[1]
      + (matches[2] ? '/' + matches[2] : '');

    return fetch(apiUrl)
      .then(res => {
        if (!res.ok) {
          setInvalid();
          throw new Error('Failed to fetch gist URL from GitHub API');
        }

        return res.json();
      })

      .then(data => {
        let files     = data && data.files;
        let filenames = files && Object.keys(data.files);

        if (!filenames || !filenames.length) {
          return void setInvalid();
        }

        let rawUrl = files[filenames[0]] && files[filenames[0]].raw_url;

        if (rawUrl) {
          formatRawGistUrl(rawUrl);
        } else {
          setInvalid();
        }
      });
  }

  function setInvalid() {
    copyButtonProd.disabled = true;

    inputUrl.classList.remove('valid');

    if (inputUrl.value.trim().length) {
      inputUrl.classList.add('invalid');
    } else {
      inputUrl.classList.remove('invalid');
    }

    inputProd.value = '';

    inputProd.classList.remove('valid');
  }

  function setValid() {
    copyButtonProd.disabled = false;

    inputUrl.classList.remove('invalid');

    inputProd.classList.add('valid');
    inputUrl.classList.add('valid');
  }
}(document));
