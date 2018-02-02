export default function applyFn(origin, operation) {
  const lines = origin.split(/\r?\n/g);

  return lines
    .map((line, index) => {
      // same line change
      if (
        index === operation.from.row &&
        index === operation.to.row
      ) {
        return `${line.substr(0, operation.from.col)}${operation.text}${line.substr(operation.to.col, line.length)}`;
      }

      // replace string from "from"
      if (index === operation.from.row) {
        const endOfLine = lines[operation.to.row] || '';
        return `${line.substr(0, operation.from.col)}${operation.text}${endOfLine.substr(operation.to.col, endOfLine.length)}`;
      }

      // skip line if it is between the from and to range.
      if (
        index > operation.from.row &&
        index <= operation.to.row
      ) {
        return undefined;
      }
      return line;
    })
    .filter(line => line !== undefined)
    .join('\n');
}
