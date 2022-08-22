interface IcardProps {
    name: string
    weigth: number
    photo: string
    money : number
    isBuyed: boolean
    changePrice : (num: number)=> void
    handleClick : (event: React.MouseEvent<HTMLButtonElement>, id:number) => void

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

        {/* first solution to buy */}
        {/*         <div>
            {props.money > props.weigth *100 ?
                <button onClick={()=>buyFunction()}   >Buy Me</button>   :
                <div>Not Enough</div> 
            }
        </div> */}

        {/* second solution to buy */}
        <div>
            {props.money >=props.weigth*100 && !props.isBuyed ?
                <button onClick={(event) => props.handleClick(event, 1)}>Buy Me 2</button> :
             props.money < props.weigth*100 && !props.isBuyed ?
                 <div>Not Enough</div> :
                <div>Alredy Buyed</div>
            }
        </div>
        
    </div> )
}


 