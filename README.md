OBD_Gauge
A simple Arduino-powered automotive gauge to display readings from various car sensors. The readings that are currently implemented are:

Air/Fuel Ratio (AFR)
Air Intake Temperature (°F)
Oil Temperature (°F)
Battery Voltage (V)
Coolant Temperature (°F)
Fuel Pressure (kPa)
Engine RPM (rpm)
Vehicle Speed (mph)
Engine Load (%)
Throttle Position (%)
MPG and Average MPG (mpg)


DEPENDENCIES
ArduinoOBD
TaskScheduler
Adafruit SSD1306
Adafruit GFX
HARDWARE
This project uses an ESP8266 NodeMCU, a 2.42" 128*64 SPI OLED, and a Freematics OBD-II UART Adapter.

Pin RST -> Button 1 -> GND
Pin D1 (330Ohm pulldown resistor) -> Button 2 -> 3.3V
Pin D4 -> DC on OLED
Pin D5 -> SCL (SCK) on OLED
Pin D6 -> RES (MISO) on OLED
Pin D7 -> SDA (MOSI) on OLED
Pin D8 -> CS on OLED
3.3V & GND to VCC & GND on OLED
Pin TX -> RX on OBD-II UART Adapter
Pin RX -> TX on OBD-II UART Adapter
5V and GND is provided from OBD-II UART Adapter for Arduino and OLED

LIBRARY MODIFICATIONS
I found that the OBD2UART library with the ESP8266 board select Serial1 for UART communication - which, normally, would be fine BUT the SPI display uses the Serial1 pins and effectively makes the display go crazy. Therefore, Serial should be used for for UART communication - so I changed line 17 in OBD2UART.h to:

#define OBDUART Serial
I also didn't like the Adafruit splash screen on each reboot - so I removed it by deleting these lines (# 470 - 476) in Adafruit_SSD1306.cpp:

if (HEIGHT > 32) {
   drawBitmap((WIDTH - splash1_width) / 2, (HEIGHT - splash1_height) / 2,
            splash1_data, splash1_width, splash1_height, 1);
} else {
   drawBitmap((WIDTH - splash2_width) / 2, (HEIGHT - splash2_height) / 2,
            splash2_data, splash2_width, splash2_height, 1);
}