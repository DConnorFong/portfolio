const Date = (props) => {
    return `${props.dateObject.dateStart} ${props.dateObject.dateEnd === '' ? '' : '- '}${props.dateObject.dateEnd}`;   
}
 
export default Date;