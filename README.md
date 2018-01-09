## Installation

```
npm i -S waggle-dance
```

## Usage

```
import { apply } from 'waggle-dance';

apply('0123456789', {
  from: {
    row: 0,
    col: 1,
  },
  to: {
    row: 0,
    col: 9,
  },
  text: 'a'
});
// will be 0a9

```
