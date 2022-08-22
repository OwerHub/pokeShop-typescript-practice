interface IheaderProps {
    money: number
    changePrice: (num: number)=> void
}

export const HeaderComponent = (props: IheaderProps) => {

    const moneyplus = (apanage:number) => {
        props.changePrice(props.money + apanage)
    }

    return (
        <div>
            <h1>Pokemon Shop</h1>
            <h2>typescript execise</h2>
            <div className="headermenu">
                <div>
                    money is {props.money}$
                </div>
                <div className="buttonContainer">
                    <button onClick={()=> moneyplus(5000)}>Gimme Money</button>
                    <button onClick={()=> moneyplus(20000)}>Gimme more Money</button>
                    <button onClick={()=> moneyplus(50000)}>Gimme all f*** money</button>
                </div>
            </div>
      
        </div>
    )
}