interface IheaderProps {
    money: number
    changePrice: (num: number)=> void
}

export const HeaderComponent = (props: IheaderProps) => {

    const moneyplus = () => {
        props.changePrice(props.money + 100000)
    }

    return (
        <div>
            <h1>Pokemon Shop</h1>
            <h2>typescript execise</h2>
            <div className="headermenu">
                <div>
                    money is {props.money}$
                </div>
                <button onClick={()=> moneyplus()}>Gimme Money</button>
            </div>
      
        </div>
    )
}