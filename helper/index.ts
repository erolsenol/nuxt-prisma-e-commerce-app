export function fileToBase64(file: Blob): PromiseLike<String | null> {
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

export function replaceTurkishCharacters(str: String) {
    const text = str.replace(/\s/g, '-').replace(/[^a-zA-Z0-9_-]/g, '');
    return text
}

export function get(name: String) {
    let data = localStorage.getItem(name);
    if (!data) return data;
    return JSON.parse(data);
}

export function set(name: String, val) {
    return localStorage.setItem(name, JSON.stringify(val));
}

export function addArray(name: String, val) {
    let oVal = localStorage.get(name);
    let nVal = oVal.concat(val);
    localStorage.set(name, nVal);
}

export function remove(name) {
    localStorage.removeItem(name);
}