import "./Button.css"
export default function Button({label = "Click me!", whenClicked, color="crimson", txtColor="white"}) {
    return (
        <button className="Button" onClick={whenClicked} style={{backgroundColor: color, color: txtColor}}>
            {label}
        </button>
    )
}