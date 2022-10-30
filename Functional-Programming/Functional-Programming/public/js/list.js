const elem = tag => document.createElement(tag);
const text = content => document.createTextNode(content);
const getElem = id => document.getElementById(id);
const getText = () => getElem('message-text').value;
const setText = value => getElem('message-text').value = value;

const clear = R.curry(element => {
    element.innerHTML = '';
    return element
});

const on = R.curry((eventType, element, fn) => {
    element.addEventListener(eventType, fn);
    return function () {
        element.removeEventListener(eventType, fn)
    }
})

const addClass = R.curry((className, element) => {
    element.classList.add(className);
    return element
});

const append = R.curry((node, element) => {
    element.appendChild(node);
    return element
})

const attr = R.curry((attributeName, attributeValue, element) => {
    element.setAttribute(attributeName, attributeValue);
    return element
});


const message = (content) => {
    return R.compose(
        append(text(content)),
        attr('data-message', 'whatever'),
        addClass('bg-light'),
        addClass('p-2'),
    )(elem('div'));
};

const view = state => {
    const el = elem('div')
    return state.length > 0 ?R.pipe(
        ...state.map((content, idx) => append(message(content, idx)))
    )(elem('div')) : el;
};


const app = (state, output, dispatch) => {
    R.compose(
        append(view(state)),
        clear()
    )(output);
    const stop = dispatch(e => {
        stop()
        const newText = getText();
        const newState = [
            ...state,
            newText
        ];
        setText('');
        app(newState, output, dispatch)
    })
};

const buttonClick = on('click', getElem('message-button') )

app(
    Object.freeze([]),
    getElem('message-list'),
    buttonClick
);


// document.body.appendChild(message('this is some text')) // <div class="p-2 bg-light" data-message="whatever">this is some text</div>


