const isIntersecting = (entry) => {
    return entry.isIntersecting; // devuel true (si esta dentro de la pantalla)
}

const accion = (entry) => {
    const nodo = entry.target;
    console.log('Hola');

    
    //des regidtra la imagen
    observer.unobserve(nodo)
};

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(accion)
});

//
export const registraImagen = (imagen) => {
    //intersectionObserver -> onserver(imagen)
    observer.observe(imagen);
}