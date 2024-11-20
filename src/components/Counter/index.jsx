import './styles.css'

let counterValue = 0

function increment() {
    counterValue += 1
    updateCounterDisplay()
}

function decrement() {
    if (counterValue > 0) {
        counterValue -= 1
    }
    updateCounterDisplay()
}

function reset() {
    counterValue = 0
    updateCounterDisplay()
}

function updateCounterDisplay() {
    const counterElement = document.querySelector('.counter-value')
    if (counterElement) {
        counterElement.textContent = `Valor: ${counterValue}`
    }
    document.title = `Contador: ${counterValue}`
}

export default function Counter() {
    return (
        <div className='counter-container'>
            <h1>Contador</h1>
            <p className='counter-value'>Valor: {counterValue}</p>

            <div className='buttons-container'>
                <button className='increment-button' onClick={increment}>Incrementar</button>
                <button className='decrement-button' onClick={decrement}>Decrementar</button>
                <button className='reset-button' onClick={reset}>Resetar</button>
            </div>
        </div>
    )
}
