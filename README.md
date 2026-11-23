# One Emoji, One Smile 🫶

[![make.fun bounty](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/DarelHarteraVBY2C/u-0xkianno-one-emoji-one-smile-5470751f/rank.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)
[![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/DarelHarteraVBY2C/u-0xkianno-one-emoji-one-smile-5470751f/reward.svg)](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f)

Entry for the [One Emoji, One Smile](https://make.fun/bounty/u-0xkianno-one-emoji-one-smile-5470751f) bounty on [make.fun](https://make.fun).

## The entry

🫶 — heart hands (U+1FAF6), exactly one emoji, nothing else.

Two hands shaping a heart: warm and friendly at first glance, understood
across ages and cultures with no irony or in-joke, a deliberate pick rather
than the first smiley that comes to mind, and warm without intimacy — so it
works coming from a stranger.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the entry
against the gate — UTF-8 text of 1 to 8 characters, not only whitespace,
exactly one grapheme cluster — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the round trip byte for byte.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
