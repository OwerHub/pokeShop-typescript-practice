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
            This is headerComponent
            <div>
                money is {props.money}
            </div>
            <button onClick={()=> moneyplus()}>Gimme Money</button>
        </div>
    )
}