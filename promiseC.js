Promise.resolve("HI")
    .then(data => {
        console.log(data);
        return "Jack";
    })
    .then(data => {
        console.log(data);
    })
    .catch(data => {
        console.log(data);
    });
