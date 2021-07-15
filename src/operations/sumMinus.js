const sumMinus = (obj) => {
    const {response1, response2, operation} = obj;

    const ope = {
        "sum": (x, y) => x + y,
        "minus": (x, y) => x - y,
    }

    const result = []
    for(let index in response1.matrix){
        const response = ope[operation](response1.matrix[index], response2.matrix[index]);
        result.push(response);
    }

    return result;
}

export default sumMinus;