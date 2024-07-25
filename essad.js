// Assuming node is a reference to an HTML element, e.g., obtained from document.getElementById()
var node = document.getElementById('someElementId');

// Example value from param object
var param = {
    signal: 'username'
};

// Setting the 'name' attribute dynamically
node.setAttribute('name', param.signal);
