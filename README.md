# The Funniest Toaster Error Message

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/dankurniaone/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/dankurniaone/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the [Funniest Toaster Error Message](https://make.fun/competitions/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) bounty on [make.fun](https://make.fun): one error message a kitchen toaster shows its owner, at most 120 characters.

## The line

> Error: the bread has been stuck since Tuesday. I have named it Gerald.

(70 characters.)

## Why this line

The obvious toaster jokes go for burnt bread, crumbs, and pop-up puns. This one goes somewhere else: a stuck slice the toaster has quietly bonded with. A real fault (bread stuck inside), reported in the flat voice of an appliance, with the surprise landing in the last four words. Deadpan, one voice, one read.

## How it works

`main.ts` (Node, standard library only) writes the line to `/output/entry.txt`, validating the gate first: 1–120 characters, not only white space, a single line — then reads the file back to verify the round trip.

```sh
node main.ts
```
