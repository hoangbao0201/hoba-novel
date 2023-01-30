export const convertHtmlToText = (text : string) => {
    const divContainer= document.createElement("div");
    divContainer.innerHTML = text;
    return divContainer.textContent || divContainer.innerText || "";
}