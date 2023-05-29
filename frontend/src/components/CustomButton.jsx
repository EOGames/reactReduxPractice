
const CustomButton = ({callingFunction, classes,button_value,loading})=>
{
    return (
        <>
            {
                loading? <button disabled type="button" className= {classes} >Loading...</button>
                :
                <button onClick={callingFunction} type="button" className= {classes} >{button_value}</button>
            }
            
        </>
    );
}
export default CustomButton;