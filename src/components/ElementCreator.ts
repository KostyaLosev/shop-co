export const createElementWithDocumentCreateElement = (
    tag: string,
    content?: string,
    classes?: string,
    handler?: (this: GlobalEventHandlers, ev: MouseEvent) => any
) => {
    const elem = document.createElement(tag);

    if (content) {
        elem.textContent = content;
    }

    if (classes) {
        elem.className = classes;
    }

    if (handler) {
        elem.addEventListener('click', handler);
    }

    return elem;
};
