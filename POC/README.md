*Please enter a one-line summary:*

# Chromium Zero Day Full CSP Bypass Cross Platforms

*Steps to reproduce the problem:*

1. Download attached Zip File
2. Extract Zip file into a folder that is served over http on `localhost`
3. Update the hosts file so `malicious.com` redirects to `localhost`
4. Go on `http://localhost/ALLOW_JAVASCRIPT_SCHEME.html` (not `https:`)
5. See how `DEMO_LEGIT_FAIL.js` tries and due to the configured CSP rules in the page fails to access:
  - `bypass-child-src.html`
  - `bypass-object-src.html`
  - `bypass-script-src.js`
6. Also see how `DEMO_MALICIOUS_SUCCESS.js` tries and succeeds to bypass the configured CSP rules in the page and access:
  - `bypass-child-src.html`
  - `bypass-object-src.html`
  - `bypass-script-src.js`
7. Repeat stages 4-6 for `http://localhost/BLOCK_JAVASCRIPT_SCHEME.html` (not `https:`) too

*What is the expected behavior?*

Accessing forbidden resources should be blocked by the browser based on the configured CSP rules of the page

*What went wrong?*

Accessing forbidden resources is allowed by the browser even though is not allowed based on the configured CSP rules of the page

*Did this work before?*

"Not applicable or don't know"

*Any other comments?*

I see the severity of this vulnerability as Medium based on the fact that it allows full CSP bypassing.
This vulnerability is platform agnostic and was proven to work on latest Chromium based browsers (Chrome/Opera/Edge) on Windows, Mac and Android as well.
