export const generateBase64FromImage = imageFile => {
  const reader = new FileReader();
  const promise = new Promise((resolve, reject) => {
    reader.onload = e => resolve(e.target.result);
    reader.onerror = err => { console.log("Error converting image to base64: " + err); reject(err);};
  });

  reader.readAsDataURL(imageFile);
  return promise;
};
