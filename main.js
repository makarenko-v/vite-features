const modules = import.meta.glob('./src/6/*.js');

Object.values(modules).forEach((module) => {
    module().then((data) => {
        console.log(data);
    })
})