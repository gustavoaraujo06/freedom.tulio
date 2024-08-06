import { Button, FloatingLabel, Form, FormControl, Image } from "react-bootstrap";

export default function Page() {
  return (
    <main className="auth">
      <div className="authContainer">
        <Form>
            <div className="authImage">
                <Image src="./tulio.jpg"></Image>
            </div>
            <FloatingLabel label="Usuario" className="authLabel" controlId="loginForm.user">
                <FormControl type="text" placeholder="Usuario" className="authInput"/>
            </FloatingLabel>
            
            <FloatingLabel label="Senha" className="authLabel" controlId="loginForm.password">
                <FormControl type="password" placeholder="Senha" className="authInput"/>
            </FloatingLabel>
            <Button type="submit" className="authButton">Entrar</Button>
        </Form>
      </div>
    </main>
  );
}