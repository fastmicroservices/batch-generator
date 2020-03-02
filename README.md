# batch-generator

Generates a batch of unique codes.

## Motivation

Many applications require some kind of unique code that is very difficult to guess.

## Components

Seed -> Hash -> Reencode -> Ensure Unique

### Seed

Produces a different string each time it gets called.

### Hash

Turns a seed into a code, in such a way that even very similar seeds generate abherrantly different hashes. Offers a 256-bit hex value.

### Reencode

Depending on the application needs, the code will have an alphabet and length.
Takes a hex value (arbitrarily long). Outputs a set length of symbols from the alphabet.

### Ensure Unique

The last step is making sure the code hasn't collided with an existing code.
