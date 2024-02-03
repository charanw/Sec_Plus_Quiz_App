import logoImg from '../assets/quiz-logo.svg'

export default function Header() {
    return <header id="header">
      <img src={logoImg} alt='logo'/><h1>Sec+ Quiz</h1>
    </header>
}