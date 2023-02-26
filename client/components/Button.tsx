const Button = ({text, link}) => {
    return(
        <a href={link} className="btn px-7 py-5">{text}</a>
    )
}

export default Button