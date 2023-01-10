const colors = [
    {name: 'red', hex: '#E20017'},
    {name: 'white', hex: '#FFFFFF'},
    {name: 'black', hex: '#000000'},
    {name: 'grey', hex: '#808080'},
]

function clickColor(color,props) {
    props.changeColor(color);
}


const Configurator = (props) => {
    return (
        
    <div className="configurator">
        <div id="colorButtonContainer">
            {colors.map((color, index) => (
                <div className="colorButton" 
                style={{ 'backgroundColor': color.hex}} key={index} 
                onClick={() => clickColor(color,props)}>
                </div>
            ))}
        </div>
    </div>
    
    )
}

export default Configurator