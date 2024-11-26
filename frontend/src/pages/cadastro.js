function Cadastro() {
    return (
        <div>
            <form class="login">
                <div class="bg"></div>
                <div class="from">
                    <div class="order-id">
                        <label class="email-address">Endereço de email</label>
                        <input class="input-field" type="email" required />
                    </div>
                    <div class="order-id">
                        <div class="box_olho">
                            <label class="password">Senha</label>
                            <a href="#">
                                <div class="forget-password">Esqueçeu sua senha</div>
                            </a>
                        </div>
                        <div class="input-field">
                            <input id="input_senha" type="password" required />
                                <span id="olho" class="olho_aberto" onclick="mudarIcone()"></span>
                        </div>
                    </div>
                </div>
                <div>
                    <button class="button2">Entrar</button>
                </div>
                <div class="or-login-with">
                    <div class="don-t-have-account">
                        <div class="line-20"></div>
                        <div class="label3">
                            <div class="or">ou</div>
                        </div>
                    </div>
                    <div class="login-register-with">
                        <a href="#" class="login-with-google">Faça login com o Google</a>
                        <img class="google" src="image/google.png" />
                    </div>
                    <div class="login-register-with">
                        <a href="#" class="login-with-apple">Faça login com a Apple</a>
                        <img class="apple" src="image/Apple_black.png" />
                    </div>
                </div>
                <div class="line-29"></div>
                <div class="tab">
                    <div id="div_entrar" class="tab2">
                        <button type="button" id="btn_entrar" class="sign-in" onclick="Entrar()">Entrar</button>
                    </div>
                    <div id="div_inscrever" class="tab3">
                        <button type="button" id="btn_inscrever" class="sign-in2" onclick="Inscrever()">Inscrever-se</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Cadastro