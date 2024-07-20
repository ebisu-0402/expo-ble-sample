import { useState, useEffect } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleManager, Device, BleError } from "react-native-ble-plx";

const bleManager = new BleManager();

interface BluetoothLowEnergyApi {
  requestPermissions(): Promise<boolean>;
  scanForPeripherals(callback: (device: Device | null, error?: BleError) => void): void;
  devices: Device[];
}

function useBEL(): BluetoothLowEnergyApi {
  const [bleManager, setBleManager] = useState<BleManager | null>(null);
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    const manager = new BleManager();
    setBleManager(manager);

    return () => {
      if (manager) {
        manager.destroy();
      }
    };
  }, []);

  const requestAndroid31Permissions = async () => {
    // ... (same as original code)
  };

  const requestPermissions = async (): Promise<any> => {
    // ... (same as original code)
  };

  const scanForPeripherals = (callback: (device: Device | null, error?: BleError) => void) => {
    if (!bleManager) {
      console.error("BleManager is not initialized.");
      return;
    }

    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        callback(null, error);
      } else {
        callback(device);
      }
    });
  };

  return {
    scanForPeripherals,
    requestPermissions,
    devices,
  };
}

export default useBEL;