interface IcardProps {
    name: string
    weigth: number
    photo: string
    money : number
    changePrice : (num: number)=> void
}


export const  CardComponent = (props:IcardProps) => {

    const moneyMinus = () => {
        props.changePrice(props.money - (props.weigth*100))
    }


    const buyFunction = ()=> {
        moneyMinus()

    }

    return ( <div className="cardOuter">
        <h3>{props.name}</h3>
        <img src={props.photo} alt={props.name} />
        <div>
            price:
        </div>
        <div className="priceValue"> {props.weigth *100} $</div>

        <div>
            {props.money > props.weigth *100 ?
                <button onClick={()=>buyFunction()}   >Buy Me</button>   :
                <div>Not Enough</div> 
            }
        </div>
    </div> )
}


 