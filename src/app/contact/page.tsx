export default function blogs() {
  return (
    <main>
        <h1 className="page-title">Contact</h1>
        <div className="contact">
            <form id="contact-form"></form>
            <input type="text" id="name"/>
            <input type="email" id="email"/>
            <textarea id="message"></textarea>
            <input type="submit"/>
        </div>
    </main>
  )
}