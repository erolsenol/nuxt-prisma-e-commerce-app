export function fileToBase64(file: Blob): PromiseLike<String|null> {

    return new Promise<String>((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };

        reader.readAsDataURL(file);
        setTimeout(() => {
            reject(null)
        }, 10000);
    })

}