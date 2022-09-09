function display(val)
{
    document.getElementById('result').value += val
    return val
}

function solve()
{
    const x  = document.getElementById('result').value
    const y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

function clearS()
{
    document.getElementById("result").value = "";
    
}