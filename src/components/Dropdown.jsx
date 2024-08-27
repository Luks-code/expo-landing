const Dropdown = ({data}) => {
    return (
            <div className="dropdown place-content-center">
                <img className="" src={data.image} alt="empresaLogo" />
                <div className="dropdown-content w-[100%] h-[100%] rounded-lg">
                    {data.text}
                </div>
            </div>
    )
}

export default Dropdown