# Chromium-Zero-Day-Full-CSP-Bypass-Cross-Platforms

> transcript

### Today I will be demonstrating a Chromium v80 full CSP bypass zero-day (platform agnostic)

1. I will go on `localhost` which will set the following CSP rules:

```javascript
// localhost/ALLOW_JAVASCRIPT_SCHEME.html
object-src 'none'; child-src 'none'; script-src 'self' 'unsafe-inline'  // allowing "javascript:" scheme

// localhost/BLOCK_JAVASCRIPT_SCHEME.html
object-src 'none'; child-src 'none'; script-src 'self'			// blocking "javascript:" scheme
```

Thus not allowing loading `objects`/`iframes`/`scripts` from any origin other than `localhost`

2. The two html files above will load 2 different JS files:

* `DEMO_LEGIT_FAIL.js` - which will try to load an object, an iframe and a script from `malicious.com` legitimately and will
fail to do so due to the described CSP rules above
* `DEMO_MALICIOUS_SUCCESS` - which will try to load an object, an iframe and a script from `malicious.com` maliciously
(by exploiting the zero day vulnerability) and will succeed to do so although the described CSP rules above

3. Pay attention to how the object, iframe and script are being blocked by the browser successfully when loaded through `DEMO_LEGIT_FAIL.js`,
but later on being loaded successfully by the browser when loaded through `DEMO_MALICIOUS_SUCCESS.js`
