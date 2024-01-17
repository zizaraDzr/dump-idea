enum Methods {
    Get = 'get',
    Post = 'post'
}

function getData( url: string, methods: Methods ) {
    return `${methods} - ${url}`
}

console.log(getData('24', Methods.Get));


// npx tsc