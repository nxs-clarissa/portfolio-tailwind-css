type props = {
    navbar: string
    href: string
}
export default function List ({navbar, href}:props) {
    return (
      <li className="group">
        <a href ={href}
          className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
        >
          {navbar}
        </a>
      </li>
    );
}