

export function fileToBase64(file: Blob): PromiseLike<String | null> {
  return new Promise<String>((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
    setTimeout(() => {
      reject(null);
    }, 10000);
  });
}

export function replaceTurkishCharacters(str: String) {
  const text = str.replace(/\s/g, "-").replace(/[^a-zA-Z0-9_-]/g, "");
  return text;
}

export function paginationCondition(index: number, current: number, total: number) {
  if (total < 7) {
    return true;
  }

  if (current == index || current == index + 1 || current == index + 2 || current == index - 1 || current == index - 2) {
    return true;
  }

  return;
}

export async function imageToObj(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve({ name: file.name, image: reader.result });
    reader.onerror = error => reject(error);
  })
}

