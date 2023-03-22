const Contact = () => {
    return (
        <div class="container">
        <header class="header">
            <h1 class="title">Contacto</h1>
        </header>
            <form>
                <div class="form-left">
                    <label for="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ingresa tu nombre"
                    />

                    <label for="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu email"
                    />
                </div>

                <div class="form-right">
                    <label for="username">Apellido</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Ingresa tu apellido"
                    />

                    <label for="phone">Número de Celular</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Ingresa tu número"
                    />
                </div>

                <div className="form-center">
                    <label for="msg">Mensaje</label>
                    <textarea name="msg" id="msg"></textarea>
                </div>

                <button class="button" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Contact;
