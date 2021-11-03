const isIntersecting = (entry) => {
    return entry.isIntersecting; // devuel true (si esta dentro de la pantalla)
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    imagen.src = url;

    //debugger
    //console.log(container.nodeName);


    //des regidtra la imagen
    observer.unobserve(container)
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

//
export const registraImagen = (imagen) => {
    //intersectionObserver -> onserver(imagen)
    observer.observe(imagen);
}