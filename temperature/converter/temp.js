 function convertTemperature() {
            var temperature = parseFloat(document.getElementById("temperature").value);
            var unit = document.getElementById("unit").value;
            var resultElement = document.getElementById("result");

            if (!isNaN(temperature)) {
                if (unit === "celsius") {
                    var convertedTemperature = (temperature * 9/5) + 32;
                    resultElement.innerHTML = "Converted Temperature: " + convertedTemperature + "°F";
                } else if (unit === "fahrenheit") {
                    var convertedTemperature = (temperature - 32) * 5/9;
                    resultElement.innerHTML = "Converted Temperature: " + convertedTemperature + "°C";
                } else if (unit === "kelvin") {
                    var convertedTemperature = temperature + 273.15;
                    resultElement.innerHTML = "Converted Temperature: " + convertedTemperature + "K";
                }
            } else {
                resultElement.innerHTML = "Please enter a valid temperature.";
            }
        }