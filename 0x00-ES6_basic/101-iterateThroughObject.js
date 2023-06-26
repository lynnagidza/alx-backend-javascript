export default function iterateThroughObject(reportWithIterator) {
    let result = reportWithIterator.next();

    while (!result.done) {
        console.log(result.value);
        result = reportWithIterator.next();
    }

}