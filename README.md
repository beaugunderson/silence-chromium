## silence-chromium

Filter out spurious log messages for chromium/electron stderr.

### examples

```bash
$ # just filter stderr, works in bash/zsh
$ electron index.js 2> >(silence-chromium)
$ # pipe stderr to stdout and filter both, works in sh/bash/zsh
$ electron index.js 2>&1 | silence-chromium
```
