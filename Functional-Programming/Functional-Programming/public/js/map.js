const text = content => document.createTextNode(content);

const clear = R.curry(element => {
    element.innerHTML = '';
    return element
});

const append = R.curry((node, element) => {
    element.appendChild(node);
    return element
})

function app(state, output) {
    R.compose(
        append(view(state)),
        clear()
    )(output);
}

function fullName({firstName, lastName}) {
    return `${firstName} ${lastName}`;
}

function view(state) {
    const el = elem('div');
    const add = R.flip(append)(el);

    state
        .map(buildPerson) // [] HTMLElements
        .forEach(add);

    return el;
}

function buildPerson(person, index) {
    return R.compose(
        append(text(fullName(person))),
        attr('data-index', index),
        addClass('text-white'),
        addClass('bg-secondary'),
        addClass('p-3')
    )(elem('div'));
}

app(
    Object.freeze([{
        firstName: 'Jane',
        lastName: 'Doe',
        age: 34
    }, {
        firstName: 'John',
        lastName: 'Doe',
        age: 25
    }, {
        firstName: 'Jim',
        lastName: 'Smith',
        age: 53
    }]),
    getElem('message-list')
);