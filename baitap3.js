const MyComponent = () => {
    const handleClick = () => {  
    console.log("Button clicked!");  
    };  
    return <button onClick={handleClick}>Click Me</button>; 
};