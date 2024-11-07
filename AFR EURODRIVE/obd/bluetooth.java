import javax.bluetooth.*;
import java.io.*;
import java.util.*;

public class BluetoothConnection {
    private static final String ELM327_DEVICE_NAME = "OBDII";
    private StreamConnection connection;
    private InputStream inputStream;
    private OutputStream outputStream;

    public boolean connectToELM327() {
        try {
            LocalDevice localDevice = LocalDevice.getLocalDevice();
            DiscoveryAgent agent = localDevice.getDiscoveryAgent();

            // Search for devices (In reality, you'd implement device discovery logic)
            RemoteDevice obdDevice = agent.searchDevices(DiscoveryAgent.GIAC, new ELM327DiscoveryListener());
            
            if (obdDevice != null) {
                // Connect to the discovered ELM327 device
                connection = (StreamConnection) Connector.open(obdDevice.getBluetoothAddress());
                inputStream = connection.openInputStream();
                outputStream = connection.openOutputStream();

                System.out.println("Connected to ELM327");
                return true;
            } else {
                System.out.println("ELM327 not found");
                return false;
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    public void disconnect() {
        try {
            inputStream.close();
            outputStream.close();
            connection.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
