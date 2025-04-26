
import { Header } from "../components/Header.ts";
import { Footer } from "../components/Footer.ts";

export const setupLayout = () => {
    document.querySelector<HTMLDivElement>('body')!.innerHTML = `
    <header></header>
    <main class="main"></main>
    <footer></footer>
    `;

    const headerElement = Header();
    document.querySelector('header')!.appendChild(headerElement);

    const footerElement = Footer();
    document.querySelector('footer')!.appendChild(footerElement);
};