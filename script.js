function convert() {
  const temp = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const result = document.getElementById("result");

  if (isNaN(temp)) {
    result.innerHTML = "❗ Please enter a valid number.";
    return;
  }

  let c, f, k;

  if (unit === "Celsius") {
    c = temp;
    f = (c * 9 / 5) + 32;
    k = c + 273.15;
    result.innerHTML = `Fahrenheit: ${f.toFixed(2)} °F<br>Kelvin: ${k.toFixed(2)} K`;
  } else if (unit === "Fahrenheit") {
    f = temp;
    c = (f - 32) * 5 / 9;
    k = c + 273.15;
    result.innerHTML = `Celsius: ${c.toFixed(2)} °C<br>Kelvin: ${k.toFixed(2)} K`;
  } else if (unit === "Kelvin") {
    k = temp;
    c = k - 273.15;
    f = (c * 9 / 5) + 32;
    result.innerHTML = `Celsius: ${c.toFixed(2)} °C<br>Fahrenheit: ${f.toFixed(2)} °F`;
  }
}
